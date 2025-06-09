import Cube from "./Cube"
import { Canvas } from "@react-three/fiber"

function App() {


  return (
    <Canvas style={{
      width : '100vw',height:'100vh'
    }}>
      <ambientLight intensity={Math.PI/2}/>
      <spotLight position={[10,10,10]} angle={0.15} penumbra={1} decay={0} intensity={Math.Pi}/>
      <pointLight position={[-10,-10,10]} decay={0} intensity={Math.PI}/>
      <Cube position={[-1,0,0]}/>
      <Cube position={[1,0,0]}/>
    </Canvas>
  )
}

export default App
