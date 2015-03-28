(function() {
  var stage = new createjs.Stage("gameView");
  createjs.Ticker.setFPS(5);
  createjs.Ticker.addEventListener("tick", stage);

  var gameView = new createjs.Container();
  gameView.x = 30;
  gameView.y = 90;
  stage.addChild(gameView);

  var catView = new createjs.Container();
  catView.x = 30;
  catView.y = 90;
  stage.addChild(catView);

  var catStay, catSurround, infoDiv, stepDiv, stepCount = 0;
  infoDiv = document.getElementById("info");
  stepDiv = document.getElementById("step");

  var circleArr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  var currentCat;
  var MOVE_NONE = -1, MOVE_LEFT = 0, MOVE_UP_LEFT = 1, MOVE_UP_RIGHT = 2, MOVE_RIGHT = 3, MOVE_DOWN_RIGHT = 4, MOVE_DOWN_LEFT = 5;

  function getMoveDir (cat) {

    var distanceMap = [];

    //left
    var can = true
    for (var x = cat.indexX; x >= 0; x--) {
      if (circleArr[x][cat.indexY].getCircleType() == Circle.TYPE_SELECTED) {
        can = false;
        distanceMap[MOVE_LEFT] = cat.indexX - x;
        break;
      }
    }
    if (can) {
      return MOVE_LEFT;
    }

    //left up
    can = true;
    var x = cat.indexX, y = cat.indexY;
    while (true) {
      if (circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED) {
        can = false;
        distanceMap[MOVE_UP_LEFT] = cat.indexY - y;
        break;
      }

      if (y % 2 == 0) {
        x--;
      }
      y--;
      if (y < 0 || x < 0) {
        break;
      }
    }
    if (can) {
      return MOVE_UP_LEFT;
    }

    //left down
    can = true;
    x = cat.indexX, y = cat.indexY;
    while (true) {
      if (circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED) {
        can = false;
        distanceMap[MOVE_DOWN_LEFT] = y - cat.indexY;
        break;
      }

      if (y % 2 == 0) {
        x--;
      }
      y++;
      if (y > 8 || x < 0) {
        break;
      }
    }
    if (can) {
      return MOVE_DOWN_LEFT;
    }

    //right up
    can = true;
    x = cat.indexX, y = cat.indexY;
    while (true) {
      if (circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED) {
        can = false;
        distanceMap[MOVE_UP_RIGHT] = cat.indexY - y;
        break;
      }

      if (y % 2 == 1) {
        x++;
      }
      y--;

      if (y < 0 || x > 8) {
        break;
      }
    }
    if (can) {
      return MOVE_UP_RIGHT;
    }

    //right
    can = true;
    for (var x = cat.indexX; x < 9; x++) {
      if (circleArr[x][cat.indexY].getCircleType() == Circle.TYPE_SELECTED) {
        can = false;
        distanceMap[MOVE_RIGHT] = x - cat.indexX;
        break;
      }
    }
    if (can) {
      return MOVE_RIGHT;
    }

    //right down
    can = true;
    x = cat.indexX, y = cat.indexY;
    while (true) {
      if (circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED) {
        can = false;
        distanceMap[MOVE_DOWN_RIGHT] = y - cat.indexY;
        break;
      }

      if (y % 2 == 1) {
        x++;
      }
      y++;

      if (y > 8 || x > 8) {
        break;
      }
    }
    if (can) {
      return MOVE_DOWN_RIGHT;
    }

    //find a way that has selected circles fay away
    var maxDir = -1, maxValue = -1;
    for (var dir = 0; dir < distanceMap.length; dir++) {
      if (distanceMap[dir] > maxValue) {
        maxValue = distanceMap[dir];
        maxDir = dir;
      }
    }
    if (maxValue > 1) {
      return maxDir;
    } else {
      return MOVE_NONE;
    }
  }

  var is_win;
  function circleClickHlr (e) {
    //check if fail
    if (currentCat.indexX == 0 || currentCat.indexY == 0 || currentCat.indexX == 8 || currentCat.indexY == 8) {
      alert("Game Over");
      return;
    }

    if (e.target.getCircleType() == Circle.TYPE_UNSELECTED) {
      e.target.setCircleType(Circle.TYPE_SELECTED);
    } else {
      return;
    }

    if (is_win) return;

    var dir = getMoveDir(currentCat);
    is_win = false;
    switch (dir) {
      case MOVE_LEFT:
        currentCat.setCircleType(Circle.TYPE_UNSELECTED);
        currentCat = circleArr[currentCat.indexX - 1][currentCat.indexY];
        currentCat.setCircleType(Circle.TYPE_WHERE_CAT_IS);
        break;
      case MOVE_UP_LEFT:
        currentCat.setCircleType(Circle.TYPE_UNSELECTED);
        currentCat = circleArr[currentCat.indexY % 2 ? currentCat.indexX : currentCat.indexX - 1][currentCat.indexY - 1];
        currentCat.setCircleType(Circle.TYPE_WHERE_CAT_IS);
        break;
      case MOVE_UP_RIGHT:
        currentCat.setCircleType(Circle.TYPE_UNSELECTED);
        currentCat = circleArr[currentCat.indexY % 2 ? currentCat.indexX + 1 : currentCat.indexX][currentCat.indexY - 1];
        currentCat.setCircleType(Circle.TYPE_WHERE_CAT_IS);
        break;
      case MOVE_RIGHT:
        currentCat.setCircleType(Circle.TYPE_UNSELECTED);
        currentCat = circleArr[currentCat.indexX + 1][currentCat.indexY];
        currentCat.setCircleType(Circle.TYPE_WHERE_CAT_IS);
        break;
      case MOVE_DOWN_LEFT:
        currentCat.setCircleType(Circle.TYPE_UNSELECTED);
        currentCat = circleArr[currentCat.indexY % 2 ? currentCat.indexX : currentCat.indexX - 1][currentCat.indexY + 1];
        currentCat.setCircleType(Circle.TYPE_WHERE_CAT_IS);
        break;
      case MOVE_DOWN_RIGHT:
        currentCat.setCircleType(Circle.TYPE_UNSELECTED);
        currentCat = circleArr[currentCat.indexY % 2 ? currentCat.indexX + 1 : currentCat.indexX][currentCat.indexY + 1];
        currentCat.setCircleType(Circle.TYPE_WHERE_CAT_IS);
        break;
      default:
        is_win = true;
        break;
    }
    
    if (is_win) {
      catView.removeAllChildren();

      catSurround = new CatSurround();
      catSurround.x = currentCat.x;
      catSurround.y = currentCat.y;
      catView.addChild(catSurround);

      infoDiv.innerHTML = "YOU WIN!";
    } else {
      catStay.x = currentCat.x;
      catStay.y = currentCat.y;
    }

    stepCount++;
    stepDiv.innerHTML = "Step: " + stepCount;
  }

  function layout () {
    for (var indexY = 0; indexY < 9; indexY++) {
      for (var indexX = 0; indexX < 9; indexX++) {
        var c = new Circle();
        c.indexX = indexX;
        c.indexY = indexY;
        c.x = indexY % 2 ? indexX * 55 + 25 : indexX * 55;
        c.y = indexY * 55;
        gameView.addChild(c);
        circleArr[indexX][indexY] = c;

        if (indexX == 4 && indexY == 4) {
          c.setCircleType(Circle.TYPE_WHERE_CAT_IS)
          currentCat = c;

          catView.removeAllChildren();

          catStay = new CatStay();
          catStay.x = currentCat.x;
          catStay.y = currentCat.y;
          catView.addChild(catStay);
        } else if (Math.random() < 0.1) {
          c.setCircleType(Circle.TYPE_SELECTED);
        }

        c.addEventListener("click", circleClickHlr)
      }
    }
  }

  layout();
})()