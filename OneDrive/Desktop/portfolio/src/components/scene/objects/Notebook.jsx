// Notebook → opens About Me panel
import { InteractiveObject } from './InteractiveObject'

function NotebookMesh() {
    return (
        <group>
            {/* Book body */}
            <mesh castShadow>
                <boxGeometry args={[0.65, 0.06, 0.85]} />
                <meshStandardMaterial color="#1c0535" roughness={0.6} metalness={0.1} />
            </mesh>
            {/* Cover accent line */}
            <mesh position={[0, 0.032, 0]}>
                <boxGeometry args={[0.62, 0.004, 0.82]} />
                <meshStandardMaterial color="#9d4edd" emissive="#9d4edd" emissiveIntensity={0.6} />
            </mesh>
            {/* Spiral spine */}
            {[-0.28, -0.14, 0, 0.14, 0.28].map((z, i) => (
                <mesh key={i} position={[-0.33, 0.04, z]} castShadow>
                    <torusGeometry args={[0.04, 0.01, 6, 8, Math.PI]} />
                    <meshStandardMaterial color="#2a0a50" roughness={0.4} metalness={0.9} />
                </mesh>
            ))}
            {/* Page edges (white block peeking on right) */}
            <mesh position={[0.31, 0, 0]} castShadow>
                <boxGeometry args={[0.02, 0.055, 0.8]} />
                <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
            </mesh>
        </group>
    )
}

export default function Notebook() {
    return (
        <InteractiveObject
            position={[1.5, 0.815, 0]}
            panel="about"
            label="About Me"
            accentColor="#9d4edd"
        >
            <NotebookMesh />
        </InteractiveObject>
    )
}
