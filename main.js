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
  let b = map(window.scrollY, 0, 2000, 100, 150);   //TODO figure out actual document height and replace 2000 with it
  background(270, 300, b);
  
  for (i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].draw();
  }

  // Debug
  // fill(0, 360, 360, 100);
  // circle(mouseX, mouseY, 200);

  // print(window.scrollY);
  // print(document.body.scrollHeight);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createShootingStars() {
  // All stars move upward for now
  let direction = createVector(0, -1);
  for (let i = 0; i < 100; i++) {
    let position = createVector(random(0, windowWidth), random(0, windowHeight));
    let diameter = random(8, 32);
    let velocity = 1 / diameter * 25;   // Inversely porportional to diamater - smaller move faster, bigger slower
    

    stars.push(new ShootingStar(position, direction, velocity, diameter));
  }
}
