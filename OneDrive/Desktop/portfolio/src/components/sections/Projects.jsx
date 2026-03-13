// Projects section — card grid with accent colors
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="projects" className="section" ref={ref}
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)' }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* Label */}
                <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ y: 30, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#a855f7' }}>02 · Projects</span>
                    <div className="flex-1 h-[1px] max-w-[60px]" style={{ background: 'rgba(168,85,247,0.3)' }} />
                </motion.div>

                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-white mb-3"
                    initial={{ y: 30, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Stuff I've Built
                </motion.h2>
                <motion.p
                    className="text-sm mb-12 max-w-md"
                    style={{ color: '#475569' }}
                    initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    Some of the AI and ML projects I’ve been hacking on lately. I try to build things that actually solve real problems.
                </motion.p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {content.projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="group relative rounded-2xl p-6 flex flex-col h-full overflow-hidden cursor-default"
                            style={{
                                background: 'rgba(14,14,26,0.7)',
                                border: '1px solid rgba(255,255,255,0.06)',
                            }}
                            initial={{ y: 40, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.55, delay: i * 0.1 + 0.2 }}
                            whileHover={{ y: -4, borderColor: `${project.color}30` }}
                        >
                            {/* Hover glow splotch */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(400px circle at top left, ${project.color}08, transparent)`,
                                }}
                            />

                            {/* Top row */}
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                                    style={{ background: `${project.color}12`, border: `1px solid ${project.color}20` }}
                                >
                                    {['🛰️', '🌿', '🧭', '🔐', '🎓'][i] || '🤖'}
                                </div>
                                <span className="text-[10px] font-mono" style={{ color: '#334155' }}>{project.date}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-white transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#64748b' }}>
                                {project.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="tag"
                                            style={{
                                                background: `${project.color}10`,
                                                color: project.color,
                                                border: `1px solid ${project.color}25`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="tag" style={{ color: '#475569', border: '1px solid rgba(255,255,255,0.06)' }}>
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                    style={{ color: project.color }}
                                >
                                    GitHub ↗
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
