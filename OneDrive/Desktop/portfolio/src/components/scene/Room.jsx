// Room — the sci-fi lab environment
// Floor, back wall, side walls, ambient desk, neon accent lighting
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshReflectorMaterial, Grid } from '@react-three/drei'

export default function Room() {
    const floorLightRef = useRef()

    // Subtle animated neon floor light pulse
    useFrame((state) => {
        if (floorLightRef.current) {
            floorLightRef.current.intensity = 0.4 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1
        }
    })

    return (
        <group>
            {/* ── Lighting ── */}
            {/* Ambient — keep dim so neon pops */}
            <ambientLight intensity={0.15} color="#1a1a2e" />

            {/* Key light — cool blue from top */}
            <directionalLight
                position={[3, 8, 4]}
                intensity={0.6}
                color="#a0c4ff"
                castShadow
                shadow-mapSize={[512, 512]}
                shadow-camera-near={0.1}
                shadow-camera-far={30}
                shadow-camera-left={-8}
                shadow-camera-right={8}
                shadow-camera-top={8}
                shadow-camera-bottom={-8}
            />

            {/* Neon cyan point — desk area */}
            <pointLight position={[-2, 2, 2]} intensity={1.2} color="#00fff5" distance={6} />

            {/* Neon purple fill — right side */}
            <pointLight position={[3, 1.5, 1]} intensity={0.8} color="#9d4edd" distance={5} />

            {/* Neon pink accent — back wall */}
            <pointLight position={[0, 3, -4]} intensity={0.5} color="#f72585" distance={6} />

            {/* Animated floor bounce light */}
            <pointLight ref={floorLightRef} position={[0, 0.1, 1]} intensity={0.4} color="#00fff5" distance={4} />

            {/* ── Floor ── */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={512}
                    mixBlur={0.9}
                    mixStrength={20}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#050508"
                    metalness={0.8}
                />
            </mesh>

            {/* Grid overlay on floor */}
            <Grid
                position={[0, 0.002, 0]}
                args={[20, 20]}
                cellSize={0.8}
                cellThickness={0.3}
                cellColor="#00fff5"
                sectionSize={3}
                sectionThickness={0.5}
                sectionColor="#9d4edd"
                fadeDistance={12}
                fadeStrength={1}
            />

            {/* ── Back wall ── */}
            <mesh position={[0, 4, -5]} receiveShadow>
                <planeGeometry args={[20, 10]} />
                <meshStandardMaterial color="#06060f" roughness={0.9} metalness={0.1} />
            </mesh>

            {/* Back wall neon strip (horizontal LED) */}
            <mesh position={[0, 1.1, -4.95]}>
                <boxGeometry args={[12, 0.04, 0.04]} />
                <meshStandardMaterial color="#9d4edd" emissive="#9d4edd" emissiveIntensity={3} />
            </mesh>
            <mesh position={[0, 1.05, -4.95]}>
                <boxGeometry args={[12, 0.004, 0.1]} />
                <meshStandardMaterial color="#f72585" emissive="#f72585" emissiveIntensity={2} transparent opacity={0.4} />
            </mesh>

            {/* ── Left wall ── */}
            <mesh position={[-7, 4, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
                <planeGeometry args={[14, 10]} />
                <meshStandardMaterial color="#070710" roughness={0.9} />
            </mesh>

            {/* ── Right wall ── */}
            <mesh position={[7, 4, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
                <planeGeometry args={[14, 10]} />
                <meshStandardMaterial color="#070710" roughness={0.9} />
            </mesh>

            {/* ── Desk ── */}
            {/* Desk surface */}
            <mesh position={[0, 0.75, -0.5]} castShadow receiveShadow>
                <boxGeometry args={[5, 0.08, 2]} />
                <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.6} />
            </mesh>
            {/* Desk legs */}
            {[[-2.2, -0.2], [-2.2, -1.1], [2.2, -0.2], [2.2, -1.1]].map(([x, z], i) => (
                <mesh key={i} position={[x, 0.35, z]} castShadow>
                    <boxGeometry args={[0.06, 0.75, 0.06]} />
                    <meshStandardMaterial color="#0f0f1a" roughness={0.8} metalness={0.5} />
                </mesh>
            ))}

            {/* Desk cable management strip (neon accent) */}
            <mesh position={[0, 0.79, -1.3]}>
                <boxGeometry args={[4.8, 0.04, 0.04]} />
                <meshStandardMaterial color="#00fff5" emissive="#00fff5" emissiveIntensity={1.5} />
            </mesh>

            {/* ── Keyboard ── */}
            <mesh position={[0, 0.8, 0.2]} castShadow>
                <boxGeometry args={[1.6, 0.04, 0.55]} />
                <meshStandardMaterial color="#0d0d1a" roughness={0.4} metalness={0.8} />
            </mesh>

            {/* ── Mouse ── */}
            <mesh position={[1.2, 0.8, 0.1]} castShadow>
                <boxGeometry args={[0.25, 0.06, 0.4]} />
                <meshStandardMaterial color="#0d0d1a" roughness={0.5} metalness={0.7} />
            </mesh>
        </group>
    )
}
