import { RingGeometry } from "three"

const Ring = ()=>{
    return(
        <mesh>
            <RingGeometry args={[0.9, 1, 32]} />
            <meshStandardMaterial
                color={'#FDB813'}
                emissive={'#FFA500'}
                emissiveIntensity={0.5}
                roughness={1}
                metalness={0} />
        </mesh>
    )
}

export default Ring;