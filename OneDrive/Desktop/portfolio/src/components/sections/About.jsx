// About section
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="section" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* Section label */}
                <motion.div
                    variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    className="flex items-center gap-3 mb-12"
                >
                    <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#00d4ff' }}>01 · About</span>
                    <div className="flex-1 h-[1px] max-w-[60px]" style={{ background: 'rgba(0,212,255,0.3)' }} />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left — bio */}
                    <div>
                        <motion.h2
                            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
                        >
                            Building AI that<br />
                            <span className="gradient-text-cyan">actually makes sense.</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            transition={{ delay: 0.2 }}
                            className="text-base leading-relaxed mb-6"
                            style={{ color: '#94a3b8' }}
                        >
                            {content.about.intro}
                        </motion.p>

                        <motion.p
                            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            transition={{ delay: 0.3 }}
                            className="text-sm leading-relaxed mb-8 p-4 rounded-xl"
                            style={{
                                color: '#64748b',
                                background: 'rgba(0,212,255,0.03)',
                                border: '1px solid rgba(0,212,255,0.08)',
                                fontStyle: 'italic',
                            }}
                        >
                            "{content.about.funFact}"
                        </motion.p>

                        {/* Hackathons */}
                        <motion.div
                            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: '#475569' }}>
                                Weekend Hacks
                            </div>
                            <div className="space-y-3">
                                {content.hackathons.map((h, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-xl"
                                        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                                    >
                                        <div className="flex justify-between items-start gap-2 mb-1">
                                            <span className="text-white text-sm font-semibold">{h.title}</span>
                                            <span className="text-[10px] font-mono flex-shrink-0" style={{ color: '#00d4ff' }}>{h.date}</span>
                                        </div>
                                        <div className="text-xs" style={{ color: '#475569' }}>{h.org}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — quick facts */}
                    <motion.div
                        variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                        transition={{ delay: 0.3 }}
                    >
                        <div
                            className="rounded-2xl p-8"
                            style={{
                                background: 'rgba(14,14,26,0.6)',
                                border: '1px solid rgba(255,255,255,0.07)',
                            }}
                        >
                            <div className="text-xs font-mono tracking-widest uppercase mb-6" style={{ color: '#475569' }}>
                                TL;DR
                            </div>

                            <div className="space-y-4">
                                {content.about.details.map((detail, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-3"
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={inView ? { x: 0, opacity: 1 } : {}}
                                        transition={{ delay: 0.4 + i * 0.07 }}
                                    >
                                        <div
                                            className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                                            style={{ background: '#00d4ff', boxShadow: '0 0 6px #00d4ff' }}
                                        />
                                        <span className="text-sm" style={{ color: '#94a3b8' }}>{detail}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Education block */}
                            <div
                                className="mt-8 pt-6"
                                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                <div className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: '#475569' }}>
                                    Where I Study
                                </div>
                                <div className="text-white font-semibold text-sm">B.Tech Computer Science & Engineering</div>
                                <div className="text-xs mt-1" style={{ color: '#475569' }}>ITER, Siksha 'O' Anusandhan University · 2022–Present</div>
                                <div
                                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono"
                                    style={{ background: 'rgba(168,85,247,0.1)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.2)' }}
                                >
                                    CGPA: 6.92 / 10
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
