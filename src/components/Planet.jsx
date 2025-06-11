import { useTexture } from "@react-three/drei";
const Planet = ({texturePath,...props}) => {

    const texture = useTexture(texturePath)
    return (
        <mesh
            {...props}
        >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                // emissive={'#1C6FA0'}
                emissiveIntensity={0.5}
                roughness={1}
                metalness={0}
                map={texture} />
        </mesh>
    )
}
export default Planet;