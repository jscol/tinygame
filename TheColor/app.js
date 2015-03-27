var stage = new createjs.Stage("gameView");
var gameView = new createjs.Container();
stage.addChild(gameView);

var color_total = 256 * 256 * 256; // 总颜色数
function randomColor () {
  var color = Math.floor(Math.random() * color_total).toString(16).toUpperCase();
  return "#" + "000000".substring(0, 6 - color) + color;
}

var n = 2; // 每行个数
var rect_spe_alpha = 0.7; // 特殊矩形的alpha值
var rect_w = stage.canvas.width;
var rect_h = stage.canvas.height;
var rect_gap = 5;

function addRect () {
  var color = randomColor() // 随机选取一个颜色
  var rx = parseInt(Math.random() * n); // 随机的x方向 index
  var ry = parseInt(Math.random() * n); // 随机的y方向 index

  // 布局
  for (var indexX = 0; indexX < n; indexX++) {
    for (var indexY = 0; indexY < n; indexY++) {
      var r = new Rect((rect_w + rect_gap) / n - rect_gap, (rect_w + rect_gap) / n - rect_gap, color);
      r.x = indexX * ((rect_w + rect_gap) / n);
      r.y = indexY * ((rect_w + rect_gap) / n);
      gameView.addChild(r);

      if (indexX === rx && indexY === ry) {
        // 特殊矩形
        r.alpha = rect_spe_alpha;
        r.addEventListener("click", function () {
          if (n < 7) {
            n++;
          }
          gameView.removeAllChildren();
          addRect();
        });
      }
    }
  }
}

addRect();

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);