// Loading screen shown during 3D scene initialization
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(interval)
                    setTimeout(() => setVisible(false), 500)
                    return 100
                }
                return p + Math.random() * 15
            })
        }, 150)
        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-900"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Animated grid background */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `
                linear-gradient(var(--neon-cyan) 1px, transparent 1px),
                linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)
              `,
                            backgroundSize: '60px 60px',
                        }}
                    />

                    {/* Logo / name */}
                    <motion.div
                        className="relative z-10 text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="font-mono text-xs tracking-[0.5em] text-neon-cyan mb-4 opacity-60 uppercase">
                            Initializing Environment
                        </div>
                        <h1 className="font-sans text-5xl font-bold text-white tracking-tight">
                            SPANDAN
                        </h1>
                        <div className="text-neon-cyan text-sm font-mono mt-2 text-glow">
                            &lt; Portfolio v2.0 /&gt;
                        </div>
                    </motion.div>

                    {/* Progress bar */}
                    <motion.div
                        className="relative z-10 w-64"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex justify-between font-mono text-xs text-gray-500 mb-2">
                            <span>Loading scene...</span>
                            <span className="text-neon-cyan">{Math.min(Math.round(progress), 100)}%</span>
                        </div>
                        <div className="w-full h-[2px] bg-dark-600 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-neon-cyan rounded-full"
                                style={{
                                    boxShadow: '0 0 8px var(--neon-cyan)',
                                    width: `${Math.min(progress, 100)}%`,
                                }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>
                        <div className="font-mono text-[10px] text-gray-600 mt-2">
                            THREE.js · React Three Fiber · WebGL
                        </div>
                    </motion.div>

                    {/* Corner decorations */}
                    <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-neon-cyan opacity-40" />
                    <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-neon-cyan opacity-40" />
                    <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-neon-cyan opacity-40" />
                    <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-neon-cyan opacity-40" />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
