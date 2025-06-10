const Planet = (props)=>{
    return(
        <mesh
            {...props}
        >
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial
                color={'#4A90E2'}
                emissive={'#1C6FA0'}
                emissiveIntensity={0.5}
                roughness={1}
                metalness={0} />
        </mesh>
    )
}
export default Planet;