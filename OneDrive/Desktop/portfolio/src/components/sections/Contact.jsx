// Contact section — links + message
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'

const links = [
    { label: 'Email', value: content.contact.email, href: `mailto:${content.contact.email}`, icon: '✉️', color: '#10b981' },
    { label: 'GitHub', value: 'github.com/SpandanBehera', href: content.contact.github, icon: '🐙', color: '#e2e8f0' },
    { label: 'LinkedIn', value: 'linkedin.com/in/spandan-behera', href: content.contact.linkedin, icon: '💼', color: '#00d4ff' },
    { label: 'Phone', value: content.contact.phone, href: `tel:${content.contact.phone}`, icon: '📞', color: '#a855f7' },
]

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="contact"
            className="section"
            ref={ref}
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
        >
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

                {/* Label */}
                <motion.div
                    className="flex items-center justify-center gap-3 mb-4"
                    initial={{ y: 30, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                >
                    <div className="flex-1 h-[1px] max-w-[60px] ml-auto" style={{ background: 'rgba(0,212,255,0.3)' }} />
                    <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#00d4ff' }}>05 · Contact</span>
                    <div className="flex-1 h-[1px] max-w-[60px] mr-auto" style={{ background: 'rgba(0,212,255,0.3)' }} />
                </motion.div>

                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ y: 30, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 }}
                >
                    Let's Chat!
                </motion.h2>
                <motion.p
                    className="text-base max-w-md mx-auto mb-12"
                    style={{ color: '#64748b' }}
                    initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    I'm always down to chat about internships, cool research projects, or hacking on something together. My inbox is always open!
                </motion.p>

                {/* Big email CTA */}
                <motion.a
                    href={`mailto:${content.contact.email}`}
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-base font-semibold text-white mb-12"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))',
                        border: '1px solid rgba(0,212,255,0.25)',
                        boxShadow: '0 0 40px rgba(0,212,255,0.1)',
                    }}
                    initial={{ opacity: 0, scale: 0.96 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(0,212,255,0.2)' }}
                    whileTap={{ scale: 0.97 }}
                >
                    <span>✉️</span>
                    {content.contact.email}
                </motion.a>

                {/* Other links grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
                    {links.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200"
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.06)',
                            }}
                            initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ delay: i * 0.08 + 0.4 }}
                            whileHover={{ y: -3, borderColor: `${link.color}30`, background: `${link.color}05` }}
                        >
                            <span className="text-2xl">{link.icon}</span>
                            <div className="text-xs font-mono" style={{ color: '#475569' }}>{link.label}</div>
                            <div className="text-xs font-medium truncate w-full text-center" style={{ color: link.color }}>
                                ↗
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    className="pt-8 text-xs font-mono"
                    style={{ color: '#1e293b', borderTop: '1px solid rgba(255,255,255,0.04)' }}
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    Made with React Three Fiber · Framer Motion · Vite · Tailwind
                    <br />
                    <span style={{ color: '#0f172a' }}>© 2026 Spandan Behera</span>
                </motion.div>
            </div>
        </section>
    )
}
