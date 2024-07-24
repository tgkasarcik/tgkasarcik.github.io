var rad = 0;
var canvas;
let stars = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  colorMode(HSB, 360);
  randomSeed(69);
  
  createShootingStars();
}

function draw() {
  background(270, 300, 100);
  
  for (i = 0; i < stars.length; i++) {
    stars[i].draw();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createShootingStars() {
  for (let i = 0; i < 100; i++) {
    stars.push(new ShootingStar(createVector(random(0, windowWidth), random(0, windowHeight)), createVector(0, 0)));
  }
}
