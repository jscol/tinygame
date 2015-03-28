(function () {
  function Rect (w, h, color) {
    createjs.Shape.call(this);
    
    this.setColor = function (colorstr) {
      this.graphics.beginFill(colorstr);
      this.graphics.drawRoundRect(0, 0, w, h, 3);
      this.graphics.endFill();
    };

    this.setColor(color);
  }

  Rect.prototype = new createjs.Shape();
  Rect.prototype.constructor = Rect;

  window.Rect = Rect;
})()