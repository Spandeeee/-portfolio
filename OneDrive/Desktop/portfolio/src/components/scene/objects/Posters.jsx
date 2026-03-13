// Posters (on wall) → opens Skills panel
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { InteractiveObject } from './InteractiveObject'

function PostersMesh() {
    const poster1Ref = useRef()
    const poster2Ref = useRef()

    useFrame((state) => {
        // Subtle glow pulse
        if (poster1Ref.current) {
            poster1Ref.current.emissiveIntensity = 0.4 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1
        }
        if (poster2Ref.current) {
            poster2Ref.current.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 1.8 + 1) * 0.1
        }
    })

    return (
        <group>
            {/* Poster 1 — Python/AI */}
            <group position={[-0.7, 0, 0]}>
                <mesh castShadow>
                    <boxGeometry args={[0.65, 0.85, 0.02]} />
                    <meshStandardMaterial color="#0d0320" roughness={0.8} />
                </mesh>
                {/* Background gradient plane */}
                <mesh ref={poster1Ref} position={[0, 0, 0.011]}>
                    <planeGeometry args={[0.6, 0.8]} />
                    <meshStandardMaterial
                        color="#9d4edd"
                        emissive="#9d4edd"
                        emissiveIntensity={0.4}
                        transparent
                        opacity={0.5}
                    />
                </mesh>
                {/* AI symbol strip */}
                <mesh position={[0, 0.2, 0.012]}>
                    <boxGeometry args={[0.35, 0.04, 0.001]} />
                    <meshStandardMaterial color="#f72585" emissive="#f72585" emissiveIntensity={1.5} />
                </mesh>
                <mesh position={[0, 0, 0.012]}>
                    <boxGeometry args={[0.25, 0.04, 0.001]} />
                    <meshStandardMaterial color="#00fff5" emissive="#00fff5" emissiveIntensity={1.5} />
                </mesh>
                <mesh position={[0, -0.2, 0.012]}>
                    <boxGeometry args={[0.3, 0.04, 0.001]} />
                    <meshStandardMaterial color="#9d4edd" emissive="#9d4edd" emissiveIntensity={1.5} />
                </mesh>
            </group>

            {/* Poster 2 — Web/Dev */}
            <group position={[0.7, 0, 0]}>
                <mesh castShadow>
                    <boxGeometry args={[0.65, 0.85, 0.02]} />
                    <meshStandardMaterial color="#001a10" roughness={0.8} />
                </mesh>
                <mesh ref={poster2Ref} position={[0, 0, 0.011]}>
                    <planeGeometry args={[0.6, 0.8]} />
                    <meshStandardMaterial
                        color="#06d6a0"
                        emissive="#06d6a0"
                        emissiveIntensity={0.3}
                        transparent
                        opacity={0.4}
                    />
                </mesh>
                {/* Circuit pattern strips */}
                {[-0.25, -0.08, 0.08, 0.25].map((y, i) => (
                    <mesh key={i} position={[0, y, 0.012]}>
                        <boxGeometry args={[0.4 - i * 0.04, 0.025, 0.001]} />
                        <meshStandardMaterial color="#06d6a0" emissive="#06d6a0" emissiveIntensity={1.2} />
                    </mesh>
                ))}
            </group>

            {/* Poster frames (neon border) */}
            {[-0.7, 0.7].map((x, i) => (
                <mesh key={i} position={[x, 0, 0.012]}>
                    <boxGeometry args={[0.67, 0.87, 0.004]} />
                    <meshStandardMaterial
                        color={i === 0 ? '#9d4edd' : '#06d6a0'}
                        emissive={i === 0 ? '#9d4edd' : '#06d6a0'}
                        emissiveIntensity={0.8}
                        transparent
                        opacity={0.3}
                        wireframe
                    />
                </mesh>
            ))}
        </group>
    )
}

export default function Posters() {
    return (
        <InteractiveObject
            position={[0, 2.4, -4.9]}
            panel="skills"
            label="View Skills"
            accentColor="#f72585"
        >
            <PostersMesh />
        </InteractiveObject>
    )
}
