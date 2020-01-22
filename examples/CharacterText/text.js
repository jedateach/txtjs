var canvas;
var stage;

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);

  var text = new txt.CharacterText({
    text: "The fox jumped over the log.",
    font: "raleway",
    //align:txt.Align.TOP_RIGHT,
    tracking: -4,
    lineHeight: 120,
    width: 600,
    height: 360,
    size: 120,
    x: 10,
    y: 10,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "The fox jumped over the log.",
    font: "raleway",
    singleLine: true,
    tracking: -4,
    lineHeight: 120,
    width: 1600,
    height: 360,
    size: 120,
    x: 10,
    y: 500,
    debug: true
  });

  stage.addChild(text);

  stage.update();
}
