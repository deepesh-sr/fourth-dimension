import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Planet from "./Planet.jsx";
import { PLANET_DATA } from "../constants/Index";

const OrbitingPlanet = ({orbitRadius,orbitSpeed,PLANET_DATA,...props}) => {
    const obritRef = useRef();

    useFrame((state, delta) => {
        if (obritRef.current) {
            obritRef.current.rotation.z += delta * orbitSpeed
            
        }
    })

    return(
        <group ref={obritRef} {...props}>
            <Planet 
            position={[orbitRadius,0,0]}
            scale = {PLANET_DATA.radius}
            color = {PLANET_DATA.color}
            />
        </group>
    )
}

export default OrbitingPlanet;
