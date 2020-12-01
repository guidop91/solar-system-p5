class Spacemass {
  constructor(diameter, orbitDist = 0, color = null, hasRing = false, orbitSpeed) {
    this.diameter = diameter;
    this.orbitDist = orbitDist;
    this.color = color;
    this.hasRing = hasRing;
    this.orbitSpeed = orbitSpeed || 0.000005 * orbitDist;
    this.angle = random(TWO_PI);
    this.satellites = [];
  }

  show() {
    const xDist = this.orbitDist * cos(this.angle);
    const yDist = this.orbitDist * sin(this.angle);
    if (!this.color) {
      fill(255);
    } else {
      fill(this.color.red, this.color.green, this.color.blue);
    }
    push();
    strokeWeight(1);
    translate(xDist, yDist);
    ellipse(0, 0, this.diameter);
    if (this.hasRing) {
      noFill();
      ellipse(0, 0, this.diameter * 2);
    }
    this.satellites.forEach((satellite) => {
      satellite.show();
    });
    this.angle += this.orbitSpeed;
    pop();
  }

  spawnSatellites(planetArray) {
    if (!planetArray) return;
    planetArray.forEach((planet, i) => {
      this.satellites[i] = new Spacemass(planet.diameter, planet.orbitDist, planet.color, planet.hasRing, this.orbitSpeed * 20);
      this.satellites[i].spawnSatellites(planet.moons);
    })
  }
}
