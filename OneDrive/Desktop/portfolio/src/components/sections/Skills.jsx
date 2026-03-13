// Skills section — category badges with animated reveal
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'

const categoryMeta = {
    'Languages': { color: '#f97316', icon: '⌨️' },
    'AI / ML': { color: '#00d4ff', icon: '🤖' },
    'Visualization': { color: '#a855f7', icon: '📊' },
    'Web & Tools': { color: '#10b981', icon: '🌐' },
    'Dev Tools': { color: '#ec4899', icon: '🛠️' },
}

export default function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" className="section" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* Label */}
                <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ y: 30, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                >
                    <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#10b981' }}>03 · Skills</span>
                    <div className="flex-1 h-[1px] max-w-[60px]" style={{ background: 'rgba(16,185,129,0.3)' }} />
                </motion.div>

                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-white mb-12"
                    initial={{ y: 30, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 }}
                >
                    What I Work With
                </motion.h2>

                {/* Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Object.entries(content.skills).map(([category, skills], catIdx) => {
                        const meta = categoryMeta[category] || { color: '#94a3b8', icon: '📦' }
                        return (
                            <motion.div
                                key={category}
                                className="rounded-2xl p-6"
                                style={{
                                    background: 'rgba(14,14,26,0.6)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                }}
                                initial={{ y: 30, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: catIdx * 0.1 + 0.1 }}
                                whileHover={{ borderColor: `${meta.color}25`, y: -2 }}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-2.5 mb-5">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                                        style={{ background: `${meta.color}12`, border: `1px solid ${meta.color}20` }}
                                    >
                                        {meta.icon}
                                    </div>
                                    <span
                                        className="text-xs font-mono font-medium tracking-widest uppercase"
                                        style={{ color: meta.color }}
                                    >
                                        {category}
                                    </span>
                                </div>

                                {/* Skill pills */}
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, skillIdx) => (
                                        <motion.span
                                            key={skill}
                                            className="px-2.5 py-1 rounded-lg text-xs font-medium"
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                color: '#94a3b8',
                                                border: '1px solid rgba(255,255,255,0.07)',
                                            }}
                                            initial={{ scale: 0.85, opacity: 0 }}
                                            animate={inView ? { scale: 1, opacity: 1 } : {}}
                                            transition={{ delay: catIdx * 0.1 + skillIdx * 0.04 + 0.3 }}
                                            whileHover={{
                                                background: `${meta.color}15`,
                                                color: '#fff',
                                                borderColor: `${meta.color}30`,
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom note */}
                <motion.p
                    className="text-center text-xs mt-10 font-mono"
                    style={{ color: '#334155' }}
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    Always learning · Currently exploring Generative AI & LLMs
                </motion.p>
            </div>
        </section>
    )
}
