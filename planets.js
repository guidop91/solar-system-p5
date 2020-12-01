const PLANETS = [
  {
    name: 'Mercury',
    color: {
      red: 192,
      green: 192,
      blue: 192,
    },
    diameter: 8,
    orbitDist: 80,
  },
  {
    name: 'Venus',
    color: {
      red: 177,
      green: 86,
      blue: 15,
    },
    diameter: 13,
    orbitDist: 130,
  },
  {
    name: 'Earth',
    color: {
      red: 20,
      green: 50,
      blue: 200,
    },
    diameter: 15,
    orbitDist: 160,
    moons: [{
      name: 'Moon',
      color: {
        red: 192,
        green: 192,
        blue: 192
      },
      orbitDist: 25,
      diameter: 5
    }]
  },
  {
    name: 'Mars',
    color: {
      red: 200,
      green: 50,
      blue: 0,
    },
    diameter: 10,
    orbitDist: 200,
  },
  {
    name: 'Jupiter',
    color: {
      red: 194,
      green: 178,
      blue: 128,
    },
    diameter: 40,
    orbitDist: 260,
  },
  {
    name: 'Saturn',
    color: {
      red: 194,
      green: 178,
      blue: 128,
    },
    diameter: 23,
    orbitDist: 320,
    hasRing: true,
  },
  {
    name: 'Uranus',
    color: {
      red: 0,
      green: 255,
      blue: 255,
    },
    diameter: 18,
    orbitDist: 380,
  },
  {
    name: 'Neptune',
    color: {
      red: 0,
      green: 173,
      blue: 238,
    },
    diameter: 18,
    orbitDist: 415,
  },
];
