// CameraRig — handles cinematic intro and focus-on-click camera animations
// Uses useFrame for smooth lerp-based movement; no spring libraries needed
import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import useStore from '../../store/useStore'

// Default orbital position — looking at the desk from slightly above/in front
const DEFAULT_POSITION = new Vector3(0, 3.5, 7)
const DEFAULT_TARGET = new Vector3(0, 0, 0)

// Starting position for the cinematic intro (far away)
const INTRO_START = new Vector3(0, 12, 22)

// Per-object focus positions (camera moves here on click)
export const FOCUS_POSITIONS = {
    laptop: { pos: new Vector3(-1.5, 2.5, 4.5), target: new Vector3(-1.5, 1, 0) },
    notebook: { pos: new Vector3(1.5, 2.5, 4.5), target: new Vector3(1.5, 1, 0) },
    phone: { pos: new Vector3(2.5, 2.5, 4), target: new Vector3(2.5, 0.8, 0) },
    monitor: { pos: new Vector3(0, 3, 4.5), target: new Vector3(0, 1.5, 0) },
    posters: { pos: new Vector3(0, 2.5, 5), target: new Vector3(0, 2, -3) },
}

export default function CameraRig() {
    const { camera } = useThree()
    const { introComplete, isFocused, activePanel, setIntroComplete } = useStore()

    // Target positions that we lerp toward
    const targetPos = useRef(INTRO_START.clone())
    const targetLook = useRef(DEFAULT_TARGET.clone())
    const currentLook = useRef(DEFAULT_TARGET.clone())
    const introTimer = useRef(0)

    useEffect(() => {
        // Start camera at intro position
        camera.position.copy(INTRO_START)
    }, [camera])

    useEffect(() => {
        if (!introComplete) {
            // Start flying in to default position
            targetPos.current.copy(DEFAULT_POSITION)
        }
    }, [introComplete])

    useEffect(() => {
        if (isFocused && activePanel && FOCUS_POSITIONS[activePanel]) {
            const focus = FOCUS_POSITIONS[activePanel]
            targetPos.current.copy(focus.pos)
            targetLook.current.copy(focus.target)
        } else {
            targetPos.current.copy(DEFAULT_POSITION)
            targetLook.current.copy(DEFAULT_TARGET)
        }
    }, [isFocused, activePanel])

    useFrame((state, delta) => {
        // Drive the intro — lerp from start position toward default
        if (!introComplete) {
            introTimer.current += delta
            // Trigger intro complete after 2.8s of animation
            if (introTimer.current > 2.8) {
                useStore.getState().setIntroComplete()
            }
        }

        // Smooth lerp factor — lower = smoother/slower
        const lerpFactor = isFocused ? 0.04 : 0.025

        camera.position.lerp(targetPos.current, lerpFactor + delta * 0.5)

        // Lerp the lookAt target
        currentLook.current.lerp(targetLook.current, lerpFactor + delta * 0.3)
        camera.lookAt(currentLook.current)
    })

    return null
}
