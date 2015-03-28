(function () {
  function Circle () {
    createjs.Shape.call(this);

    this.setCircleType = function (type) {
      this._circleType = type;
      switch (type) {
        case Circle.TYPE_UNSELECTED:
          this.setColor("#cccccc");
          break;
        case Circle.TYPE_SELECTED:
          this.setColor("#ff6600");
          break;
        case Circle.TYPE_WHERE_CAT_IS: // type where the cat is
          this.setColor("#0000ff");
          break;
      }
    };

    this.getCircleType = function () {
      return this._circleType;
    };

    this.setColor = function (colorString) {
      this.graphics.beginFill(colorString);
      this.graphics.drawCircle(0, 0, 25);
      this.graphics.endFill();
    };

    this.setCircleType(Circle.TYPE_UNSELECTED);
  }

  Circle.prototype = new createjs.Shape();
  Circle.prototype.constructor = Circle;
  Circle.TYPE_UNSELECTED = 1;
  Circle.TYPE_SELECTED = 2;
  Circle.TYPE_WHERE_CAT_IS = 3;

  window.Circle = Circle;
})()