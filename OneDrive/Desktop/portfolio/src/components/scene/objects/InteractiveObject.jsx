// Shared InteractiveObject component used by all 5 clickable objects
// Handles hover glow, scale animation, and click → openPanel
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import useStore from '../../../store/useStore'

export function InteractiveObject({
    position,
    panel,
    label,
    accentColor = '#00fff5',
    children,
}) {
    const groupRef = useRef()
    const [hovered, setHovered] = useState(false)
    const openPanel = useStore((s) => s.openPanel)
    const introComplete = useStore((s) => s.introComplete)

    useFrame((state) => {
        if (!groupRef.current) return
        // Gentle float animation
        groupRef.current.position.y =
            position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 0.025

        // Smooth scale on hover
        const targetScale = hovered ? 1.06 : 1
        groupRef.current.scale.lerp(
            { x: targetScale, y: targetScale, z: targetScale },
            0.12
        )
    })

    const handleClick = (e) => {
        if (!introComplete) return
        e.stopPropagation()
        openPanel(panel)
    }

    return (
        <group
            ref={groupRef}
            position={position}
            onClick={handleClick}
            onPointerEnter={(e) => {
                if (!introComplete) return
                e.stopPropagation()
                setHovered(true)
                document.body.style.cursor = 'pointer'
            }}
            onPointerLeave={() => {
                setHovered(false)
                document.body.style.cursor = 'crosshair'
            }}
        >
            {children}

            {/* Neon glow ring on hover */}
            {hovered && (
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
                    <ringGeometry args={[0.35, 0.42, 32]} />
                    <meshBasicMaterial color={accentColor} transparent opacity={0.6} />
                </mesh>
            )}

            {/* Label tooltip */}
            {hovered && introComplete && (
                <Html distanceFactor={4} position={[0, 0.8, 0]} center>
                    <div
                        style={{
                            background: 'rgba(5,5,8,0.9)',
                            border: `1px solid ${accentColor}55`,
                            borderRadius: '8px',
                            padding: '4px 10px',
                            color: accentColor,
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '11px',
                            whiteSpace: 'nowrap',
                            boxShadow: `0 0 12px ${accentColor}40`,
                            userSelect: 'none',
                        }}
                    >
                        → {label}
                    </div>
                </Html>
            )}
        </group>
    )
}
