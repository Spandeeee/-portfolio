// Scene.jsx — Root React Three Fiber Canvas
// Assembles all 3D objects, room, lighting, and camera rig
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { PerformanceMonitor, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import CameraRig from './CameraRig'
import Room from './Room'
import Laptop from './objects/Laptop'
import Notebook from './objects/Notebook'
import Phone from './objects/Phone'
import Monitor from './objects/Monitor'
import Posters from './objects/Posters'

// Fallback while 3D scene loads
function SceneFallback() {
    return null
}

export default function Scene() {
    return (
        <Canvas
            className="canvas-cursor"
            shadows
            dpr={[1, 1.5]}        // limit pixel ratio for performance
            camera={{
                fov: 55,
                near: 0.1,
                far: 100,
                position: [0, 12, 22],  // same as CameraRig INTRO_START
            }}
            gl={{
                antialias: true,
                alpha: false,
                powerPreference: 'high-performance',
            }}
            style={{ background: '#050508' }}
        >
            {/* Performance: auto-downscale DPR on slow GPUs */}
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <PerformanceMonitor
                onDecline={() => console.log('[perf] degrading quality for performance')}
            />

            <Suspense fallback={<SceneFallback />}>
                {/* Camera animation rig */}
                <CameraRig />

                {/* Environment */}
                <Room />

                {/* Interactive Objects — placed on & around the desk */}
                <Laptop />
                <Notebook />
                <Phone />
                <Monitor />
                <Posters />
            </Suspense>
        </Canvas>
    )
}
