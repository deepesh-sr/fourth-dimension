const Planet = (props) => {
    return (
        <mesh
            {...props}
        >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color={props.color}
                // emissive={'#1C6FA0'}
                emissiveIntensity={0.5}
                roughness={1}
                metalness={0} />
        </mesh>
    )
}
export default Planet;