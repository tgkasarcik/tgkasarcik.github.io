var rad = 0;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() {
  background("aqua");
  rectMode(CENTER);

  push();
  rad += 0.05;
  translate(windowWidth/2, windowHeight/2);
  rotate(rad);
  square(0, 0, 100);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
