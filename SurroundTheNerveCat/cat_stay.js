(function () {
  function CatStay () {
    this.init = function () {
      var ss = new createjs.SpriteSheet({
        "images": ["images/stay.png"],
        "frames": {
          "width": 61,
          "height": 93,
          "count": 16,
          "regX": 30.5,
          "regY":93
        },
        "animations": {
          "start": [0, 15, "start", 4]
        }
      });

      createjs.Sprite.call(this, ss, "start");
    };
    
    this.init();
  }

  CatStay.prototype = new createjs.Sprite();
  CatStay.prototype.constructor = CatStay;

  window.CatStay = CatStay;
})()