// Monitor → opens Resume panel
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { InteractiveObject } from './InteractiveObject'

function MonitorMesh() {
    const screenRef = useRef()

    useFrame((state) => {
        if (screenRef.current) {
            screenRef.current.emissiveIntensity = 0.7 + Math.sin(state.clock.elapsedTime * 2) * 0.05
        }
    })

    return (
        <group>
            {/* Screen frame */}
            <mesh position={[0, 0.7, 0]} castShadow>
                <boxGeometry args={[1.4, 0.85, 0.06]} />
                <meshStandardMaterial color="#0d0d1a" roughness={0.3} metalness={0.9} />
            </mesh>
            {/* Bezel inner */}
            <mesh position={[0, 0.7, 0.032]}>
                <boxGeometry args={[1.3, 0.75, 0.002]} />
                <meshStandardMaterial color="#050508" roughness={0.8} />
            </mesh>
            {/* Emissive screen */}
            <mesh ref={screenRef} position={[0, 0.7, 0.033]}>
                <boxGeometry args={[1.24, 0.7, 0.001]} />
                <meshStandardMaterial
                    color="#001a33"
                    emissive="#00fff5"
                    emissiveIntensity={0.7}
                    roughness={0.1}
                />
            </mesh>
            {/* Logo on back */}
            <mesh position={[0, 0.7, -0.034]}>
                <circleGeometry args={[0.06, 16]} />
                <meshStandardMaterial color="#00fff5" emissive="#00fff5" emissiveIntensity={2} />
            </mesh>
            {/* Power LED */}
            <mesh position={[0.6, 0.23, 0.032]}>
                <sphereGeometry args={[0.012, 8, 8]} />
                <meshStandardMaterial color="#06d6a0" emissive="#06d6a0" emissiveIntensity={3} />
            </mesh>
            {/* Neck */}
            <mesh position={[0, 0.22, 0]} castShadow>
                <cylinderGeometry args={[0.04, 0.06, 0.45, 12]} />
                <meshStandardMaterial color="#0d0d1a" roughness={0.3} metalness={0.9} />
            </mesh>
            {/* Base */}
            <mesh position={[0, 0, 0]} castShadow>
                <cylinderGeometry args={[0.35, 0.4, 0.04, 32]} />
                <meshStandardMaterial color="#0d0d1a" roughness={0.3} metalness={0.9} />
            </mesh>
        </group>
    )
}

export default function Monitor() {
    return (
        <InteractiveObject
            position={[0, 0.79, -1.2]}
            panel="resume"
            label="View Resume"
            accentColor="#00fff5"
        >
            <MonitorMesh />
        </InteractiveObject>
    )
}
