// Base panel wrapper with glass morphism and close button
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '../../store/useStore'

const panelVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', damping: 28, stiffness: 200 },
    },
    exit: {
        x: '100%',
        opacity: 0,
        transition: { duration: 0.3, ease: 'easeIn' },
    },
}

export function PanelWrapper({ isOpen, title, accentColor = '#00fff5', children }) {
    const closePanel = useStore((s) => s.closePanel)

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePanel}
                    />

                    {/* Panel */}
                    <motion.div
                        className="fixed right-0 top-0 h-full z-40 w-full max-w-xl panel-scroll overflow-y-auto scanlines"
                        style={{
                            background: 'rgba(5, 5, 8, 0.9)',
                            borderLeft: `1px solid ${accentColor}33`,
                            boxShadow: `-20px 0 60px ${accentColor}15`,
                        }}
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header */}
                        <div
                            className="sticky top-0 z-10 flex items-center justify-between px-8 py-6"
                            style={{
                                background: 'rgba(5, 5, 8, 0.95)',
                                borderBottom: `1px solid ${accentColor}22`,
                            }}
                        >
                            <div>
                                <div
                                    className="font-mono text-xs tracking-[0.3em] uppercase mb-1 opacity-60"
                                    style={{ color: accentColor }}
                                >
                  // {title.toLowerCase()}
                                </div>
                                <h2
                                    className="text-2xl font-bold text-white"
                                    style={{ textShadow: `0 0 20px ${accentColor}60` }}
                                >
                                    {title}
                                </h2>
                            </div>
                            <motion.button
                                onClick={closePanel}
                                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ✕
                            </motion.button>
                        </div>

                        {/* Content */}
                        <div className="px-8 py-6">{children}</div>

                        {/* Bottom accent */}
                        <div
                            className="fixed bottom-0 right-0 w-full max-w-xl h-[2px]"
                            style={{ background: `linear-gradient(90deg, transparent, ${accentColor})` }}
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
