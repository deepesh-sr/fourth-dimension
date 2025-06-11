import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'
import { time } from "three/src/nodes/TSL.js";

const Sun = (props) => {
    const texture = useTexture('/textures/sun-texture-seamless-thumb20.jpg')
    return (
        <group {...props}>
            <mesh  >
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    // color={'#FDB813'}
                    map={texture}
                    emissive={'#FFA500'}
                    emissiveIntensity={1.2}
                    roughness={0.8}
                    metalness={0}
                    transparent={true}
                    opacity={0.95} />

            </mesh>

            {/* Corona Atmosphere */}
            <mesh
                
                scale={0.4}
            >
                <sphereGeometry args={[2, 32, 32]} />
                <meshBasicMaterial
                    color={'#FF8C00'}
                    transparent={true}
                    opacity={0.2}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />

                 {/* Outer Glow */}
            <mesh scale={1}>
                <sphereGeometry args={[2, 16, 16]} />
                <meshBasicMaterial
                    color={'#FFD700'}
                    transparent={true}
                    opacity={0.1}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            </mesh>
        </group>
    )
}

export default Sun;