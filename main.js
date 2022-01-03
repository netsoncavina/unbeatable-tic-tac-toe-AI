let board = [
  ["X", "X", "O"],
  ["O", "O", "O"],
  ["X", "X", "X"],
];

let players = ["X", "O"];
var cnv;
function centerCanvas() {
  var centerX = (windowWidth - width) / 2;
  var centerY = (windowHeight - height) / 2;
  cnv.position(centerX, centerY);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  cnv = createCanvas(300, 300);
  centerCanvas();
  let currentPlayer = random(players);
}

function draw() {
  background(220);
  let w = width / 3;
  let h = height / 3;
  strokeWeight(1);
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[j][i];
      textSize(32);
      strokeWeight(6);
      if (spot == players[1]) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot == players[0]) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }
    }
  }
}
