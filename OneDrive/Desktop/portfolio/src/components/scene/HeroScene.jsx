// HeroScene.jsx — 3D particle field + floating geometric shapes
// This is the full-screen hero canvas background
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Particle star field
function StarField({ count = 2500 }) {
    const ref = useRef()

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 30
            pos[i * 3 + 1] = (Math.random() - 0.5) * 30
            pos[i * 3 + 2] = (Math.random() - 0.5) * 30
        }
        return pos
    }, [count])

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * 0.02
            ref.current.rotation.y = state.clock.elapsedTime * 0.01
        }
    })

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00d4ff"
                size={0.04}
                sizeAttenuation
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    )
}

// Floating geometric ring
function FloatingRing({ position, color, speed = 1, radius = 1.2 }) {
    const ref = useRef()
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * speed * 0.4
            ref.current.rotation.y = state.clock.elapsedTime * speed * 0.25
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3
        }
    })
    return (
        <mesh ref={ref} position={position}>
            <torusGeometry args={[radius, 0.018, 16, 80]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={1.5}
                transparent
                opacity={0.7}
            />
        </mesh>
    )
}

// Floating icosahedron
function FloatingGem({ position, color, speed = 1 }) {
    const ref = useRef()
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5
            ref.current.rotation.z = state.clock.elapsedTime * speed * 0.3
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.6) * 0.4
        }
    })
    return (
        <mesh ref={ref} position={position}>
            <icosahedronGeometry args={[0.35, 0]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.6}
                wireframe
            />
        </mesh>
    )
}

// Grid plane at the bottom
function GroundGrid() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
            <planeGeometry args={[40, 40, 30, 30]} />
            <meshStandardMaterial
                color="#00d4ff"
                emissive="#00d4ff"
                emissiveIntensity={0.15}
                wireframe
                transparent
                opacity={0.12}
            />
        </mesh>
    )
}

export default function HeroScene() {
    return (
        <Canvas
            id="hero-canvas"
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 8], fov: 60 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            style={{ background: 'transparent' }}
        >
            <ambientLight intensity={0.3} color="#1e1e32" />
            <pointLight position={[-4, 3, 4]} intensity={3} color="#00d4ff" />
            <pointLight position={[4, -2, 3]} intensity={2} color="#a855f7" />

            <StarField count={2000} />
            <GroundGrid />

            {/* Left cluster */}
            <FloatingRing position={[-4.5, 1, -2]} color="#00d4ff" speed={0.7} radius={1.4} />
            <FloatingGem position={[-3.2, -1, -1]} color="#a855f7" speed={0.9} />

            {/* Right cluster */}
            <FloatingRing position={[4.2, 0.5, -2]} color="#a855f7" speed={0.6} radius={1.1} />
            <FloatingGem position={[3.5, 1.8, -1.5]} color="#00d4ff" speed={1.1} />

            {/* Center distant */}
            <FloatingRing position={[0, -2.5, -5]} color="#ec4899" speed={0.5} radius={2.2} />
            <FloatingGem position={[1.5, 2.5, -3]} color="#10b981" speed={0.8} />
            <FloatingGem position={[-1.8, 2, -2.5]} color="#ec4899" speed={1.0} />
        </Canvas>
    )
}
