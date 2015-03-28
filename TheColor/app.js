(function () {
  var stage = new createjs.Stage("gameView");
  createjs.Ticker.setFPS(5);
  createjs.Ticker.addEventListener("tick", stage);

  var gameView = new createjs.Container();
  stage.addChild(gameView);

  var color_total = 256 * 256 * 256; // 总颜色数
  function randomColor () {
    var color = Math.floor(Math.random() * color_total).toString(16).toUpperCase();
    return "#" + "000000".substring(0, 6 - color) + color;
  }

  var row_n = 2; // 每行矩形个数
  var row_max = 7; // 每行矩形最大数
  var rect_spe_alpha = 0.7; // 特殊矩形的alpha值
  var rect_w = stage.canvas.width;
  var rect_h = stage.canvas.height;
  var rect_gap = 5;

  function layout () {
    var color = randomColor() // 随机选取一个颜色
    var rx = parseInt(Math.random() * row_n); // 随机的x方向 index
    var ry = parseInt(Math.random() * row_n); // 随机的y方向 index

    // 布局
    for (var indexX = 0; indexX < row_n; indexX++) {
      for (var indexY = 0; indexY < row_n; indexY++) {
        var r = new Rect((rect_w + rect_gap) / row_n - rect_gap, (rect_w + rect_gap) / row_n - rect_gap, color);
        r.x = indexX * ((rect_w + rect_gap) / row_n);
        r.y = indexY * ((rect_w + rect_gap) / row_n);
        gameView.addChild(r);

        if (indexX === rx && indexY === ry) {
          // 特殊矩形
          r.alpha = rect_spe_alpha;
          r.addEventListener("click", function () {
            if (row_n < row_max) {
              row_n++;
            }
            lvcount++;
            lvDiv.innerHTML = "lv: " + lvcount;
            gameView.removeAllChildren();
            layout();
          });
        }
      }
    }
  }

  var resetBtn, timeDiv, lvDiv, timeout, timecount, timecount_max, lvcount;
  resetBtn = document.getElementById("reset");
  timeDiv = document.getElementById("time");
  lvDiv = document.getElementById("lv");

  resetBtn.addEventListener("click", boot);

  function boot () {
    timecount = 0;
    timecount_max = 60;
    lvcount = 0;
    row_n = 2;
    resetBtn.style.visibility = "hidden";

    layout();
    timeout = setInterval(function () {
      timecount++;
      timeDiv.innerHTML = "TIMER: " + (timecount_max - timecount) + "s";
      if (timecount === timecount_max) {
        clearInterval(timeout);
        gameView.removeAllChildren();
        resetBtn.style.visibility = "visible";
      }
    }, 1000);
  }

  boot();
})()