(function () {
  var canvas, stage, exportRoot, BgRoot, IceRoot;
  var ElmentArrX=[65, 230, 396];
  var ElmentArrY=[75, 220, 360];
  var Ex, Ey, x, y, i = 0;
  var timeDiv, countDiv, time, duration, interval;

  window.onload= function () {
    canvas = document.getElementById("canvas");
    timeDiv = document.getElementById("time");
    countDiv = document.getElementById("count");
    time = 0;
    duration = 60;
    images = images || {};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
  };

  function handleFileLoad (evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
  }

  function handleComplete () {
    exportRoot = new lib.flishlib();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    BgRoot = new lib.Bg();
    exportRoot.addChild(BgRoot);
    
    interval = setInterval(intervalHlr, 1000);

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }

  function intervalHlr () {
    if (time >= duration) {
      // game over
      clearInterval(interval);
      return;
    }

    time++;
    timeDiv.innerHTML = "TIMER: " + (duration - time) + "s";

    addElment();
  }

  function addElment () {
    Ex = parseInt(Math.random()*3);
    Ey = parseInt(Math.random()*3);
    if (x != Ex && y != Ey) {
      IceRoot = new lib.up();
      IceRoot.addEventListener("click",IceClickHandler);
      IceRoot.x = ElmentArrX[Ex];
      IceRoot.y = ElmentArrY[Ey];
      exportRoot.addChild(IceRoot);
      x = Ex;
      y = Ey;
    } else {
      addElment();
    }
  }

  function IceClickHandler (e) {
    e.currentTarget.gotoAndPlay("godown");
    i++;
    countDiv.innerHTML = "Count: " + i;
  }
})()