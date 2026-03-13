// Contact panel — opened by clicking the Phone
import { motion } from 'framer-motion'
import { PanelWrapper } from './PanelWrapper'
import { content } from '../../data/content'
import useStore from '../../store/useStore'

const links = [
    {
        label: 'Email',
        value: content.contact.email,
        href: `mailto:${content.contact.email}`,
        icon: '✉️',
        color: '#06d6a0',
    },
    {
        label: 'GitHub',
        value: 'github.com/SpandanBehera',
        href: content.contact.github,
        icon: '🐙',
        color: '#e5e7eb',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/spandan-behera',
        href: content.contact.linkedin,
        icon: '💼',
        color: '#00fff5',
    },
    {
        label: 'Phone',
        value: content.contact.phone,
        href: `tel:${content.contact.phone}`,
        icon: '📞',
        color: '#9d4edd',
    },
]

export default function ContactPanel() {
    const activePanel = useStore((s) => s.activePanel)

    return (
        <PanelWrapper isOpen={activePanel === 'contact'} title="Contact" accentColor="#06d6a0">
            {/* Intro */}
            <motion.p
                className="text-gray-400 text-sm leading-relaxed mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Open to internships, research collaborations, and interesting project discussions.
                Feel free to reach out, I'm always happy to connect!
            </motion.p>

            {/* Links */}
            <div className="space-y-3">
                {links.map((link, i) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200"
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        whileHover={{
                            scale: 1.02,
                            background: `${link.color}08`,
                            borderColor: `${link.color}30`,
                        }}
                    >
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                            style={{ background: `${link.color}12`, border: `1px solid ${link.color}20` }}
                        >
                            {link.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-0.5">
                                {link.label}
                            </div>
                            <div
                                className="text-sm font-medium truncate group-hover:text-white transition-colors"
                                style={{ color: link.color }}
                            >
                                {link.value}
                            </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 text-gray-400 text-sm ml-2">
                            ↗
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Availability badge */}
            <motion.div
                className="mt-8 flex items-center gap-3 p-4 rounded-2xl"
                style={{ background: 'rgba(6, 214, 160, 0.08)', border: '1px solid rgba(6, 214, 160, 0.2)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ boxShadow: '0 0 6px #06d6a0' }} />
                <span className="text-neon-green text-sm font-medium">Available for Internships - 2026</span>
            </motion.div>
        </PanelWrapper>
    )
}
