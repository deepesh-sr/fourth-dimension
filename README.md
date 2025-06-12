# 🌌 3D Solar System

An interactive 3D solar system built with React Three Fiber, featuring realistic planet orbits, textures, and real-time controls.

---

## ✨ Features

- **Interactive 3D Solar System** with all 8 planets  
- **Real-time orbit speed controls** using Leva UI  
- **Realistic planet textures** and lighting effects  
- **Bloom effects** for enhanced visual appeal  
- **Orbital rings** showing planet paths  
- **Mouse controls** for zoom, pan, and rotate  
- **Starfield background** with twinkling effects  

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine:

- Node.js (v16 or higher)  
- npm or yarn package manager  

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 3d-solarsystem
   ```

2. **Install Dependency**
   ```bash
    npm install
    ```

3. **Add Planet Textures** 
    Create texture directory and add planet images.
``` 
public/
└── textures/
    ├── mercurymap.jpg
    ├── venus_atmosphere.jpg
    ├── 8081_earthmap2k.jpg
    ├── mars_1k_color.jpg
    ├── jupitermap.jpg
    ├── saturnmap.jpg
    ├── uranusmap.jpg
    └── neptunemap.jpg
```

5. **Start Developement Server**
 ```bash
 npm run dev
 ```

## 🎮 How to Use
Camera Controls
Action	Control
Rotate View	Left Click + Drag
Pan Camera	Right Click + Drag
Zoom In/Out	Mouse Wheel
Planet Speed Controls
Control Panel: Located on the right side of the screen
Individual Sliders: Adjust each planet's orbital speed (0-5 range)
Real-time Updates: Changes apply instantly
Planet Labels: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune

## 🛠️ Technical Stack
> Core Technologies
> React 18 - Modern UI framework
> Three.js - 3D graphics engine
> React Three Fiber - React renderer for Three.js
> React Three Drei - Utility components and helpers
> Additional Libraries
> Leva - Real-time GUI controls
> Post-processing - Visual effects pipeline
> React Three PostProcessing - Bloom and lighting effects

## Project Structure
```
src/
├── components/
│   ├── Sun.jsx              # Central star component
│   ├── Planet.jsx           # Individual planet renderer
│   └── OrbitingPlanet.jsx   # Planet with orbital mechanics
├── constants/
│   └── Index.js             # Planet data (size, speed, colors)
├── App.jsx                  # Main application component
└── main.jsx                 # React entry point

public/
└── textures/                # Planet surface images
    ├── mercurymap.jpg
    ├── venus_atmosphere.jpg
    └── ... (other planet textures)
```

