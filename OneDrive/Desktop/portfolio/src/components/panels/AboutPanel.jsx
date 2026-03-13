// About panel — opened by clicking the Notebook
import { motion } from 'framer-motion'
import { PanelWrapper } from './PanelWrapper'
import { content } from '../../data/content'
import useStore from '../../store/useStore'

export default function AboutPanel() {
    const activePanel = useStore((s) => s.activePanel)

    return (
        <PanelWrapper isOpen={activePanel === 'about'} title="About Me" accentColor="#9d4edd">
            {/* Avatar + name */}
            <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(157,78,221,0.2), rgba(157,78,221,0.07))',
                        border: '1px solid rgba(157,78,221,0.27)',
                    }}
                >
                    🧠
                </div>
                <div>
                    <h3 className="text-white text-xl font-bold">{content.name}</h3>
                    <p className="text-neon-purple text-sm font-mono">{content.title}</p>
                </div>
            </motion.div>

            {/* Intro */}
            <motion.div
                className="mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="font-mono text-xs text-neon-purple tracking-widest uppercase mb-3 opacity-60">
          // who am I
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{content.about.intro}</p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
                className="mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <div className="font-mono text-xs text-neon-purple tracking-widest uppercase mb-4 opacity-60">
          // quick facts
                </div>
                <div className="space-y-3">
                    {content.about.details.map((detail, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-xl hover:bg-white/3 transition-colors"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                        >
                            <div
                                className="w-1 h-4 rounded-full flex-shrink-0"
                                style={{ background: '#9d4edd', boxShadow: '0 0 6px #9d4edd' }}
                            />
                            {detail}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Hackathons section */}
            <motion.div
                className="mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <div className="font-mono text-xs text-neon-purple tracking-widest uppercase mb-4 opacity-60">
          // hackathons
                </div>
                <div className="space-y-3">
                    {content.hackathons.map((h, i) => (
                        <div
                            key={i}
                            className="p-3 rounded-xl"
                            style={{ background: 'rgba(157,78,221,0.07)', border: '1px solid rgba(157,78,221,0.15)' }}
                        >
                            <div className="flex justify-between items-start gap-2 mb-1">
                                <span className="text-white text-sm font-semibold">{h.title}</span>
                                <span className="text-[10px] font-mono text-neon-purple flex-shrink-0">{h.date}</span>
                            </div>
                            <div className="text-gray-500 text-xs mb-1">{h.org}</div>
                            <div className="text-gray-400 text-xs leading-relaxed">{h.description}</div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Fun fact */}
            <motion.div
                className="p-4 rounded-2xl"
                style={{
                    background: 'rgba(157, 78, 221, 0.08)',
                    border: '1px solid rgba(157, 78, 221, 0.2)',
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
            >
                <div className="font-mono text-xs text-neon-purple mb-1 opacity-60">// fun fact</div>
                <p className="text-gray-300 text-sm">{content.about.funFact}</p>
            </motion.div>
        </PanelWrapper>
    )
}
