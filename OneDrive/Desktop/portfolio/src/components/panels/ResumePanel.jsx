// Resume panel — opened by clicking the Monitor
import { motion } from 'framer-motion'
import { PanelWrapper } from './PanelWrapper'
import { content } from '../../data/content'
import useStore from '../../store/useStore'

const timeline = [
    {
        type: 'Education',
        icon: '🎓',
        title: 'B.Tech Computer Science & Engineering',
        org: 'ITER, Siksha \'O\' Anusandhan University',
        period: '2022 – Present',
        detail: 'CGPA: 6.92 (Till 7th Semester)',
    },
    {
        type: 'Achievement',
        icon: '🥇',
        title: '1st Place - Generative AI Hackathon',
        org: 'KIIT University × IIT Bhubaneswar',
        period: 'Jul 2025',
        detail: 'Won 1st place at the Three-Day Generative AI Workshop hackathon.',
    },
    {
        type: 'Project',
        icon: '🤖',
        title: 'Fraud Detection Using Neural Networks',
        org: 'Personal Project',
        period: 'Jul 2025',
        detail: 'Deep learning model (Keras/TensorFlow) comparing SGD, Adam, RMSProp optimizers on imbalanced datasets.',
    },
    {
        type: 'Project',
        icon: '🧭',
        title: 'AI Career Path Recommender',
        org: 'Personal Project',
        period: 'Jul 2025',
        detail: 'Streamlit app with Random Forest classifier for personalized career recommendations with study roadmaps.',
    },
    {
        type: 'Project',
        icon: '🌿',
        title: 'Air Quality Index Prediction',
        org: 'Personal Project',
        period: 'May 2025',
        detail: 'ML model predicting AQI from PM2.5, PM10, NO₂ pollutant data using Linear Regression & Random Forest.',
    },
    {
        type: 'Education',
        icon: '📚',
        title: 'Class XII - CBSE',
        org: 'Vikash the Concept School, Sason, Sambalpur',
        period: '2019 – 2021',
        detail: '71.6%',
    },
]

const typeColors = {
    Education: '#9d4edd',
    Project: '#00fff5',
    Achievement: '#ffd166',
}

export default function ResumePanel() {
    const activePanel = useStore((s) => s.activePanel)

    return (
        <PanelWrapper isOpen={activePanel === 'resume'} title="Resume" accentColor="#00fff5">
            {/* Download CTA */}
            <motion.a
                href={content.resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 rounded-2xl mb-8 group"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,255,245,0.12), rgba(0,255,245,0.04))',
                    border: '1px solid rgba(0,255,245,0.25)',
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div>
                    <div className="text-white font-semibold text-sm">Download Resume</div>
                    <div className="text-gray-400 text-xs mt-0.5">
                        Spandan Behera · Updated {content.resume.lastUpdated} · PDF
                    </div>
                </div>
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: 'rgba(0,255,245,0.15)', border: '1px solid rgba(0,255,245,0.3)' }}
                >
                    ⬇️
                </div>
            </motion.a>

            {/* Legend */}
            <div className="flex items-center gap-4 mb-5">
                {Object.entries(typeColors).map(([type, color]) => (
                    <div key={type} className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                        <span className="text-xs text-gray-500 font-mono">{type}</span>
                    </div>
                ))}
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div
                    className="absolute left-3 top-2 bottom-0 w-[1px]"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,255,245,0.3), transparent)' }}
                />

                <div className="space-y-6">
                    {timeline.map((item, i) => {
                        const color = typeColors[item.type] || '#00fff5'
                        return (
                            <motion.div
                                key={i}
                                className="pl-10 relative"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.12 + 0.3 }}
                            >
                                {/* Dot */}
                                <div
                                    className="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                                    style={{
                                        background: `${color}15`,
                                        border: `1px solid ${color}40`,
                                        boxShadow: `0 0 8px ${color}30`,
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <h3 className="text-white font-semibold text-sm leading-snug">{item.title}</h3>
                                    <span
                                        className="flex-shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full"
                                        style={{ background: `${color}15`, color }}
                                    >
                                        {item.period}
                                    </span>
                                </div>
                                <div className="text-gray-500 text-xs mb-1.5">{item.org}</div>
                                <div className="text-gray-400 text-xs leading-relaxed">{item.detail}</div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </PanelWrapper>
    )
}
