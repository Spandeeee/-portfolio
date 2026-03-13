// Laptop object → opens Projects panel
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { InteractiveObject } from './InteractiveObject'

function LaptopMesh({ hovered }) {
    const screenRef = useRef()

    useFrame((state) => {
        // Screen slight flicker effect
        if (screenRef.current) {
            screenRef.current.emissiveIntensity = 0.8 + Math.sin(state.clock.elapsedTime * 3) * 0.05
        }
    })

    return (
        <group>
            {/* Base / keyboard deck */}
            <mesh position={[0, 0, 0.1]} castShadow>
                <boxGeometry args={[1, 0.06, 0.7]} />
                <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Screen (hinged at back) */}
            <group position={[0, 0.03, -0.22]} rotation={[-0.35, 0, 0]}>
                {/* Screen housing */}
                <mesh position={[0, 0.31, 0]} castShadow>
                    <boxGeometry args={[1, 0.64, 0.05]} />
                    <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.8} />
                </mesh>
                {/* Screen display */}
                <mesh ref={screenRef} position={[0, 0.31, 0.028]}>
                    <boxGeometry args={[0.88, 0.54, 0.002]} />
                    <meshStandardMaterial
                        color="#001a33"
                        emissive="#00fff5"
                        emissiveIntensity={0.8}
                        roughness={0.1}
                    />
                </mesh>
                {/* Terminal text hint on screen */}
                <mesh position={[0, 0.31, 0.03]}>
                    <planeGeometry args={[0.7, 0.12]} />
                    <meshStandardMaterial
                        color="#00fff5"
                        emissive="#00fff5"
                        emissiveIntensity={1.5}
                        transparent
                        opacity={0.15}
                    />
                </mesh>
            </group>

            {/* Keyboard keys (decorative strips) */}
            {[-0.25, 0, 0.25].map((x, i) => (
                <mesh key={i} position={[x, 0.035, 0.08]} castShadow>
                    <boxGeometry args={[0.18, 0.008, 0.5]} />
                    <meshStandardMaterial color="#0d0d20" roughness={0.8} metalness={0.3} />
                </mesh>
            ))}

            {/* Neon keyboard backlight */}
            <mesh position={[0, 0.038, 0.08]}>
                <planeGeometry args={[0.85, 0.5]} />
                <meshStandardMaterial
                    color="#9d4edd"
                    emissive="#9d4edd"
                    emissiveIntensity={0.4}
                    transparent
                    opacity={0.12}
                />
            </mesh>
        </group>
    )
}

export default function Laptop() {
    return (
        <InteractiveObject
            position={[-1.8, 0.8, -0.3]}
            panel="projects"
            label="View Projects"
            accentColor="#00fff5"
        >
            <LaptopMesh />
        </InteractiveObject>
    )
}
