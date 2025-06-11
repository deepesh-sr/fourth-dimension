import Cube from "./components/Cube"
import { Canvas } from "@react-three/fiber"
import Sun from "./components/Sun"
import { Ring, Stars, OrbitControls } from "@react-three/drei";
import Planet from "./components/Planet";
import { PLANET_DATA } from "./constants/Index";
import OrbitingPlanet from "./components/OrbitingPlanet";

function App() {


  return (
    <Canvas style={{
      width: '100vw', height: '100vh',
      background: 'black'
    }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.Pi} />
      <pointLight position={[-10, -10, 10]} decay={0} intensity={Math.PI} />
<ambientLight intensity={-Math.PI / 2} />
      <spotLight position={[-10, -10, -10]} angle={-0.15} penumbra={1} decay={0} intensity={Math.Pi} />
      <pointLight position={[10, 10, -10]} decay={0} intensity={Math.PI} />

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
        count={5000}        // Number of stars
        factor={4}          // Size factor
        saturation={0}      // Saturation (0 = white stars)
        fade={true}         // Fade stars based on distance
        speed={1}           // Animation speed
      />

      <group scale={1} position={[0, 0, 0]}>
        <Sun position={[0, 0, 0]} />
        <Ring position={[0, 0, 0]} args={[3, 3.01, 64]} />    {/* Mercury */}
        <Ring position={[0, 0, 0]} args={[4, 4.01, 64]} />    {/* Venus */}
        <Ring position={[0, 0, 0]} args={[5, 5.01, 64]} />    {/* Earth */}
        <Ring position={[0, 0, 0]} args={[6.5, 6.51, 64]} />  {/* Mars */}
        <Ring position={[0, 0, 0]} args={[9, 9.01, 64]} />    {/* Jupiter */}
        <Ring position={[0, 0, 0]} args={[12, 12.01, 64]} />  {/* Saturn */}
        <Ring position={[0, 0, 0]} args={[15, 15.01, 64]} />  {/* Uranus */}
        <Ring position={[0, 0, 0]} args={[18, 18.01, 64]} />  {/* Neptune */}
        <OrbitingPlanet orbitRadius={3} orbitSpeed={PLANET_DATA.MERCURY.orbitSpeed} PLANET_DATA={PLANET_DATA.MERCURY} /> {/*Mercury*/}
        <OrbitingPlanet orbitRadius={3} orbitSpeed={PLANET_DATA.MERCURY.orbitSpeed} PLANET_DATA={PLANET_DATA.MERCURY} />
        <OrbitingPlanet orbitRadius={4} orbitSpeed={PLANET_DATA.VENUS.orbitSpeed} PLANET_DATA={PLANET_DATA.VENUS} />
        <OrbitingPlanet orbitRadius={5} orbitSpeed={PLANET_DATA.EARTH.orbitSpeed} PLANET_DATA={PLANET_DATA.EARTH} />
        <OrbitingPlanet orbitRadius={6.5} orbitSpeed={PLANET_DATA.MARS.orbitSpeed} PLANET_DATA={PLANET_DATA.MARS} />
        <OrbitingPlanet orbitRadius={9} orbitSpeed={PLANET_DATA.JUPITER.orbitSpeed} PLANET_DATA={PLANET_DATA.JUPITER} />
        <OrbitingPlanet orbitRadius={12} orbitSpeed={PLANET_DATA.SATURN.orbitSpeed} PLANET_DATA={PLANET_DATA.SATURN} />
        <OrbitingPlanet orbitRadius={15} orbitSpeed={PLANET_DATA.URANUS.orbitSpeed} PLANET_DATA={PLANET_DATA.URANUS} />
        <OrbitingPlanet orbitRadius={18} orbitSpeed={PLANET_DATA.NEPTUNE.orbitSpeed} PLANET_DATA={PLANET_DATA.NEPTUNE} />
      </group>
    </Canvas>
  )
}

export default App;
