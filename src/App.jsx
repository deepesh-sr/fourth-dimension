import Cube from "./components/Cube"
import { Canvas } from "@react-three/fiber"
import Sun from "./components/Sun"
import { Ring } from "@react-three/drei";
import Planet from "./components/Planet";

function App() {


  return (
    <Canvas style={{
      width : '100vw',height:'100vh'
    }}>
      <ambientLight intensity={Math.PI/2}/>
      <spotLight position={[10,10,10]} angle={0.15} penumbra={1} decay={0} intensity={Math.Pi}/>
      <pointLight position={[-10,-10,10]} decay={0} intensity={Math.PI}/>
      {/* <Cube position={[-1,0,0]}/> */}
      {/* <Cube position={[1,0,0]}/> */}
      <group scale={1} position={[0,0,0]}>      <Sun position={[0,0,0]} />
      <Ring position={[0,0,0]} args={[3, 3.1, 64]}/>    {/* Mercury */}
      <Ring position={[0,0,0]} args={[4, 4.1, 64]}/>    {/* Venus */}
      <Ring position={[0,0,0]} args={[5, 5.1, 64]}/>    {/* Earth */}
      <Ring position={[0,0,0]} args={[6.5, 6.6, 64]}/>  {/* Mars */}
      <Ring position={[0,0,0]} args={[9, 9.1, 64]}/>    {/* Jupiter */}
      <Ring position={[0,0,0]} args={[12, 12.1, 64]}/>  {/* Saturn */}
      <Ring position={[0,0,0]} args={[15, 15.1, 64]}/>  {/* Uranus */}
      <Ring position={[0,0,0]} args={[18, 18.1, 64]}/>  {/* Neptune */}
      </group>
      <Planet position={[3,0,0]} scale={0.1} />
    </Canvas>
  )
}

export default App;
