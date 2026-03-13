// Hero section — full-screen with 3D canvas background
import { motion } from 'framer-motion'
import HeroScene from '../scene/HeroScene'
import { content } from '../../data/content'

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
}
const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.07) 0%, transparent 70%)' }}
        >
            {/* 3D canvas background */}
            <div className="absolute inset-0 z-0">
                <HeroScene />
            </div>

            {/* Bottom gradient fade into next section */}
            <div
                className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, #020205)' }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-6 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="flex justify-center mb-6">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium"
                        style={{
                            background: 'rgba(0,212,255,0.08)',
                            border: '1px solid rgba(0,212,255,0.25)',
                            color: '#00d4ff',
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Looking for Internships ✌️ · 2026
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-white"
                    style={{ lineHeight: 1.1 }}
                >
                    Hi, I'm{' '}
                    <span className="gradient-text">{content.name.split(' ')[0]}</span>
                </motion.h1>

                {/* Title */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl md:text-2xl font-medium mb-4"
                    style={{ color: '#94a3b8' }}
                >
                    {content.title}
                </motion.p>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-sm sm:text-base max-w-xl mx-auto mb-10"
                    style={{ color: '#64748b' }}
                >
                    {content.tagline}
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
                    <motion.button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-3 rounded-xl text-sm font-semibold text-white"
                        style={{
                            background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(168,85,247,0.2))',
                            border: '1px solid rgba(0,212,255,0.35)',
                            boxShadow: '0 0 30px rgba(0,212,255,0.12)',
                        }}
                        whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(0,212,255,0.25)' }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Check out my work →
                    </motion.button>
                    <motion.a
                        href={`mailto:${content.contact.email}`}
                        className="px-6 py-3 rounded-xl text-sm font-semibold"
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#94a3b8',
                        }}
                        whileHover={{ scale: 1.04, color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Say hi
                    </motion.a>
                </motion.div>

                {/* Tech stack hint */}
                <motion.div
                    variants={itemVariants}
                    className="mt-14 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
                >
                    {['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'Streamlit'].map((tech) => (
                        <span key={tech} className="text-xs font-mono" style={{ color: '#334155' }}>
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#334155' }}>scroll down</span>
                <motion.div
                    className="w-[1px] h-8 rounded-full"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,212,255,0.5), transparent)' }}
                    animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </section>
    )
}
