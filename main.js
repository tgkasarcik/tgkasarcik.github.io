var rad = 0;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  colorMode(HSB, 360);
}

function draw() {
  background(270, 300, 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
