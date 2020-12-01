let stars = [];
let sun;

function setup() {
  createCanvas(1200, 900);
  populateStars();
  sun = new Spacemass(90);
  sun.spawnSatellites(PLANETS);
}

function draw() {
  background(10);
  drawStars();
  translate(width/2, height/2);
  sun.show();
}

function populateStars() {
  for (let i = 0; i < 500; i++) {
    stars.push(createVector(random(width), random(height)));
  }
}

function drawStars() {
  stars.forEach(star => {
    // Make them twinkle
    if (random(1) > 0.999) {
      stroke(255, 0, 0);
    } else {
      stroke(255);
    }
    strokeWeight(2);
    point(star.x, star.y);
  });
}