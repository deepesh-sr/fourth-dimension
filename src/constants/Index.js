import { texture } from "three/tsl";

// All sizes are relative to Sun radius = 1
export const PLANET_DATA = {
  MERCURY: {
    radius: 0.035,  // Mercury is ~3.5% of Sun's radius
    color: '#8C7853',
    orbitRadius: 3,
    orbitSpeed: 4.15,
    textureUrl : 'public/textures/mercurymap.jpg'
    
  },
  VENUS: {
    radius: 0.087,  // Venus is ~8.7% of Sun's radius
    color: '#FFC649',
    orbitRadius: 4,
    orbitSpeed: 1.62,
    textureUrl : '/textures/venusmap.jpg'
  },
  EARTH: {
    radius: 0.092,  // Earth is ~9.2% of Sun's radius
    color: '#6B93D6',
    orbitRadius: 5,
    orbitSpeed: 1.0,
    textureUrl:'/textures/8081_earthmap2k.jpg'
  },
  MARS: {
    radius: 0.049,  // Mars is ~4.9% of Sun's radius
    color: '#C1440E',
    orbitRadius: 6.5,
    orbitSpeed: 0.53,
    textureUrl:'public/textures/mars_1k_color.jpg'
  },
  JUPITER: {
    radius: 0.10,   // Jupiter is ~10% of Sun's radius
    color: '#D8CA9D',
    orbitRadius: 9,
    orbitSpeed: 0.084,
    textureUrl:'public/textures/jupitermap.jpg'
  },
  SATURN: {
    radius: 0.083,  // Saturn is ~8.3% of Sun's radius
    color: '#FAD5A5',
    orbitRadius: 12,
    orbitSpeed: 0.034,
    textureUrl:'public/textures/saturnmap.jpg'
  },
  URANUS: {
    radius: 0.037,  // Uranus is ~3.7% of Sun's radius
    color: '#4FD0E3',
    orbitRadius: 15,
    orbitSpeed: 0.012,
    textureUrl:'public/textures/uranusmap.jpg'
  },
  NEPTUNE: {
    radius: 0.036,  // Neptune is ~3.6% of Sun's radius
    color: '#4B70DD',
    orbitRadius: 18,
    orbitSpeed: 0.006,
    textureUrl:'public/textures/neptunemap.jpg'
  }
};

// Scale factor for the entire solar system
export const SYSTEM_SCALE = 0.5;

// Ring properties
export const RING_THICKNESS = 0.02;
export const RING_SEGMENTS = 64;

// Animation speeds
export const ROTATION_SPEED = {
  SUN: 0.1,
  PLANET: 1.0
};