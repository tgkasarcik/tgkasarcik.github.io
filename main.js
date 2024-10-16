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

//comment for testing

function draw() {
  background(270, 300, 100);
  
  for (i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].draw();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createShootingStars() {
  // All stars move upward for now
  let direction = createVector(0, -1);
  for (let i = 0; i < 100; i++) {
    let position = createVector(random(0, windowWidth), random(0, windowHeight));
    let diameter = random(32, 64);
    let velocity = 1 / diameter * 25;   // Inversely porportional to diamater - smaller move faster, bigger slower
    

    stars.push(new ShootingStar(position, direction, velocity, diameter));
  }
}
