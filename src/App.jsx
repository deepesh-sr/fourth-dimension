// import Cube from "./components/Cube"
import { Canvas } from "@react-three/fiber"
import Sun from "./components/Sun"
import { Ring, Stars, OrbitControls } from "@react-three/drei";
// import Planet from "./components/Planet";
import { PLANET_DATA } from "./constants/Index";
import OrbitingPlanet from "./components/OrbitingPlanet";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useControls } from "leva";
function App() {


  //create interactive sliders
  const { earthSpeed, mercurySpeed, venusSpeed, MarsSpeed, JupiterSpeed, SaturnSpeed, Uranusspeed, NeptuneSpeed } = useControls({
    // Mercury speed slider and similar for all the object
    mercurySpeed:
    {
      value: PLANET_DATA.MERCURY.orbitSpeed,
      min: 0,
      max: 5
    },

    venusSpeed:
    {
      label: "Venus",
      value: PLANET_DATA.VENUS.orbitSpeed,
      min: 0,
      max: 5
    },

    earthSpeed:
    {
      value: PLANET_DATA.EARTH.orbitSpeed,
      min: 0,
      max: 5
    },
    MarsSpeed:
    {
      value: PLANET_DATA.MARS.orbitSpeed,
      min: 0,
      max: 5
    },
    JupiterSpeed:
    {
      value: PLANET_DATA.JUPITER.orbitSpeed,
      min: 0.0001,
      max: 5
    },
    SaturnSpeed:
    {
      value: PLANET_DATA.SATURN.orbitSpeed,
      min: 0.0001,
      max: 5
    },
    Uranusspeed:
    {
      value: PLANET_DATA.URANUS.orbitSpeed,
      min: 0.0001,
      max: 5
    },
    NeptuneSpeed:
    {
      value: PLANET_DATA.NEPTUNE.orbitSpeed,
      min: 0.0001,
      max: 5
    },
  })

  return (
    <Canvas style={{
      width: '100vw', height: '100vh',
      background: 'black',

    }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.Pi} />
      <pointLight position={[-10, -10, 10]} decay={0} intensity={Math.PI} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.8}
        rotateSpeed={0.4}
      />

      <Stars
        radius={100}        // Radius of the star sphere
        depth={50}          // Depth of field
        count={700}        // Number of stars
        factor={4}          // Size factor
        saturation={0}      // Saturation (0 = white stars)
        fade={true}         // Fade stars based on distance
        speed={1}           // Animation speed
      />

      <group scale={0.5} position={[0, 0, 0]}>
    
   {/* The sun element   */}
        <Sun position={[0, 0, 0]} />
   
   {/* blooming light to the environment */}
        <EffectComposer>
          <Bloom intensity={1} luminanceThreshold={0.2} />
        </EffectComposer>

 {/* orbit of all the planets from mercury to neptune  */}
        <Ring position={[0, 0, 0]} args={[3, 3.001, 128]} />
        <Ring position={[0, 0, 0]} args={[4, 4.001, 128]} />
        <Ring position={[0, 0, 0]} args={[5, 5.001, 128]} />
        <Ring position={[0, 0, 0]} args={[6.5, 6.501, 128]} />
        <Ring position={[0, 0, 0]} args={[9, 9.001, 128]} />
        <Ring position={[0, 0, 0]} args={[12, 12.001, 128]} />
        <Ring position={[0, 0, 0]} args={[15, 15.001, 128]} />
        <Ring position={[0, 0, 0]} args={[18, 18.001, 128]} />

{/* All planets  */}

        {/* Mercury */}
        <OrbitingPlanet
          orbitRadius={3}
          radius={PLANET_DATA.MERCURY.radius}
          orbitSpeed={mercurySpeed}
          texture={'/textures/mercurymap.jpg'}
        />

        {/* Venus */}
        <OrbitingPlanet
          orbitRadius={4}
          radius={PLANET_DATA.VENUS.radius}
          orbitSpeed={venusSpeed}
          texture={'/textures/Solarsystemscope_texture_4k_venus_atmosphere.jpg'}
        />

        {/* Earth */}
        <OrbitingPlanet
          orbitRadius={5}
          radius={PLANET_DATA.EARTH.radius}
          orbitSpeed={earthSpeed}
          texture={'/textures/8081_earthmap2k.jpg'}
        />

        {/* Mars */}
        <OrbitingPlanet
          orbitRadius={6.5}
          radius={PLANET_DATA.MARS.radius}
          orbitSpeed={MarsSpeed}
          texture={'/textures/mars_1k_color.jpg'}
        />

        {/* JUPITER */}
        <OrbitingPlanet
          orbitRadius={9}
          radius={PLANET_DATA.JUPITER.radius}
          orbitSpeed={JupiterSpeed}
          texture={'/textures/jupitermap.jpg'}
        />
        {/* Saturn */}
        <OrbitingPlanet
          orbitRadius={12}
          radius={PLANET_DATA.SATURN.radius}
          orbitSpeed={SaturnSpeed}
          texture={'/textures/saturnmap.jpg'}
        />
        {/* Uranus*/}
        <OrbitingPlanet
          orbitRadius={15}
          radius={PLANET_DATA.URANUS.radius}
          orbitSpeed={Uranusspeed}
          texture={'/textures/uranusmap.jpg'}
        />


        {/* NEPTUNE*/}
        <OrbitingPlanet
          orbitRadius={18}
          radius={PLANET_DATA.NEPTUNE.radius}
          orbitSpeed={NeptuneSpeed}
          texture={'/textures/neptunemap.jpg'}
        />
      </group>
    </Canvas>
  )
}

export default App;
