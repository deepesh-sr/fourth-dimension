const Sun = () => {
    return (
        <mesh>
            <sphereGeometry args={[1]} />
            <meshStandardMaterial
                color={'#FDB813'}
                emissive={'#FFA500'}
                emissiveIntensity={0.5}
                roughness={1}
                metalness={0} />

        </mesh>
    )
}

export default Sun;