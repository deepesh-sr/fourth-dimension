import { useTexture } from "@react-three/drei";
import { PLANET_DATA } from "../constants/Index";
const Planet = ({planetData ,props}) => {

    const texture = useTexture(planetData)
    return (
        <mesh
            {...props}
        >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                map={texture}
                // color={props.color}
                // emissive={'#1C6FA0'}
                emissiveIntensity={0.5}
                roughness={1}
                metalness={0} />
        </mesh>
    )
}
export default Planet;