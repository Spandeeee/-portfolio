// Phone → opens Contact panel
import { InteractiveObject } from './InteractiveObject'

function PhoneMesh() {
    return (
        <group rotation={[0, 0, 0]}>
            {/* Phone body */}
            <mesh castShadow>
                <boxGeometry args={[0.22, 0.44, 0.04]} />
                <meshStandardMaterial color="#0d0d1a" roughness={0.2} metalness={0.9} />
            </mesh>
            {/* Screen */}
            <mesh position={[0, 0.01, 0.021]}>
                <boxGeometry args={[0.18, 0.36, 0.002]} />
                <meshStandardMaterial
                    color="#001530"
                    emissive="#06d6a0"
                    emissiveIntensity={0.7}
                    roughness={0.05}
                />
            </mesh>
            {/* Camera bump */}
            <mesh position={[0.05, 0.16, -0.022]}>
                <cylinderGeometry args={[0.025, 0.025, 0.01, 16]} />
                <meshStandardMaterial color="#1a1a2e" roughness={0.5} metalness={0.8} />
            </mesh>
            {/* Home indicator bar */}
            <mesh position={[0, -0.17, 0.022]}>
                <boxGeometry args={[0.09, 0.006, 0.002]} />
                <meshStandardMaterial color="#06d6a0" emissive="#06d6a0" emissiveIntensity={1} />
            </mesh>
        </group>
    )
}

export default function Phone() {
    return (
        <InteractiveObject
            position={[2.2, 0.87, 0.3]}
            panel="contact"
            label="Contact Me"
            accentColor="#06d6a0"
        >
            <PhoneMesh />
        </InteractiveObject>
    )
}
