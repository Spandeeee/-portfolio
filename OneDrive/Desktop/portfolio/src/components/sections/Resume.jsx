// Resume section — vertical timeline
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'

const timeline = [
    {
        type: 'Education',
        icon: '🎓',
        title: 'B.Tech Computer Science & Engineering',
        org: "ITER, Siksha 'O' Anusandhan University",
        period: '2022 – Present',
        detail: 'CGPA: 6.92 (Till 7th Semester) · Specialization: AI & ML',
        color: 'var(--accent-secondary)',
    },
    {
        type: 'Achievement',
        icon: '🥇',
        title: '1st Place - Generative AI Hackathon',
        org: 'KIIT University × IIT Bhubaneswar',
        period: 'Jul 2025',
        detail: 'Competed in a three-day AI workshop hackathon resulting in winning first place against university teams.',
        color: 'var(--accent-primary)',
    },
    {
        type: 'Project',
        icon: '🔐',
        title: 'Fraud Detection Using Neural Networks',
        org: 'Personal Project',
        period: 'Jul 2025',
        detail: 'Deep learning model (Keras/TensorFlow) comparing SGD, Adam, RMSProp on imbalanced datasets.',
        color: 'var(--accent-tertiary)',
    },
    {
        type: 'Project',
        icon: '🧭',
        title: 'AI Career Path Recommender',
        org: 'Personal Project',
        period: 'Jul 2025',
        detail: 'Streamlit app + Random Forest classifier for personalized career roadmap generation.',
        color: 'var(--accent-tertiary)',
    },
    {
        type: 'Project',
        icon: '🌿',
        title: 'Air Quality Index Prediction',
        org: 'Personal Project',
        period: 'May 2025',
        detail: 'ML model to predict AQI from PM2.5, PM10, NO₂ using Linear Regression and Random Forest.',
        color: 'var(--accent-tertiary)',
    },
    {
        type: 'Education',
        icon: '📚',
        title: 'Class XII - CBSE',
        org: 'Vikash the Concept School, Sambalpur',
        period: '2019 – 2021',
        detail: '71.6%',
        color: 'var(--accent-secondary)',
    },
]

export default function Resume() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="resume"
            className="section"
            ref={ref}
            style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(14, 165, 233, 0.03) 0%, transparent 80%)' }}
        >
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                {/* Label */}
                <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ y: 30, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                >
                    <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent-secondary)' }}>03 · Resume</span>
                    <div className="flex-1 h-[1px] max-w-[60px]" style={{ background: 'var(--border-subtle)' }} />
                </motion.div>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-extrabold"
                        style={{ color: 'var(--text-primary)' }}
                        initial={{ y: 30, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        My Journey So Far
                    </motion.h2>
                    <motion.a
                        href={content.resume.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-secondary)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                        }}
                        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.03, color: 'var(--text-primary)', borderColor: '#d6d3d1' }}
                    >
                        ⬇︎ Grab my Resume
                    </motion.a>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        className="absolute left-5 top-0 bottom-0 w-[2px]"
                        style={{ background: 'linear-gradient(to bottom, var(--accent-secondary), var(--accent-tertiary), transparent)' }}
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    />

                    <div className="space-y-8 pl-14">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                className="relative"
                                initial={{ x: -20, opacity: 0 }}
                                animate={inView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                            >
                                {/* Dot */}
                                <div
                                    className="absolute -left-9 top-1 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm"
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '2px solid',
                                        borderColor: item.color,
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <div
                                    className="p-5 rounded-2xl group transition-shadow duration-300"
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-subtle)',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                    }}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                        <h3 className="font-semibold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                                        <span
                                            className="text-[10px] font-mono px-2 py-0.5 rounded-full flex-shrink-0"
                                            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                                        >
                                            {item.period}
                                        </span>
                                    </div>
                                    <div className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>{item.org}</div>
                                    <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.detail}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
