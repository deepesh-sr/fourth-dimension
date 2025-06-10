import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Cube = (props)=>{
    const ref = useRef();
    
    const [hovered , setHovered] = useState(false);
    const [isClicked,setIsClicked] = useState(false);

    useFrame((state,delta)=>(ref.current.rotation.x += delta))

    return (
        <mesh
            {...props}
            ref={ref}
            scale={isClicked? 1.5 : 1}
            onClick={()=> setIsClicked(!isClicked)}
            onPointerMove={()=>setHovered(true)}
            onPointerOut={()=>setHovered(false)}
            >
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
        </mesh>

    )
}

export default Cube;