(function () {
  function CatSurround () {
    this.init = function () {
      var ss = new createjs.SpriteSheet({
        "images": ["images/weizhu.png"],
        "frames": {
          "width": 64,
          "height": 92,
          "count": 15,
          "regX": 32,
          "regY":92
        },
        "animations": {
          "start": [0, 14, "start", 3]
        }
      });

      createjs.Sprite.call(this, ss, "start");
    };
    
    this.init();
  }

  CatSurround.prototype = new createjs.Sprite();
  CatSurround.prototype.constructor = CatSurround;

  window.CatSurround = CatSurround;
})()