// New Navbar — fixed, scroll-aware, smooth anchor links
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40)
            // Determine active section
            const sections = navItems.map(n => n.href.slice(1))
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id)
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id)
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (href) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-300"
            style={{
                background: scrolled ? 'rgba(8,8,16,0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
            }}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {/* Logo */}
            <motion.a
                href="#"
                className="flex items-center gap-2 text-white font-bold text-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.03 }}
            >
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono font-bold"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(168,85,247,0.2))',
                        border: '1px solid rgba(0,212,255,0.4)',
                        color: '#00d4ff',
                    }}
                >
                    SB
                </div>
                <span className="hidden sm:block" style={{ color: '#f1f5f9' }}>Spandan</span>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                    const id = item.href.slice(1)
                    const isActive = active === id
                    return (
                        <button
                            key={item.label}
                            onClick={() => handleNav(item.href)}
                            className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                            style={{ color: isActive ? '#00d4ff' : '#94a3b8' }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute inset-0 rounded-lg"
                                    style={{ background: 'rgba(0,212,255,0.08)' }}
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    )
                })}
                <motion.button
                    onClick={() => handleNav('#contact')}
                    className="ml-2 px-4 py-1.5 rounded-lg text-sm font-semibold"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))',
                        border: '1px solid rgba(0,212,255,0.3)',
                        color: '#00d4ff',
                    }}
                    whileHover={{ scale: 1.04, borderColor: 'rgba(0,212,255,0.6)' }}
                    whileTap={{ scale: 0.97 }}
                >
                    Hire me
                </motion.button>
            </nav>

            {/* Mobile hamburger */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="block h-[2px] rounded-full"
                        style={{ background: '#94a3b8', width: i === 1 ? 20 : 24 }}
                        animate={menuOpen ? { opacity: i === 1 ? 0 : 1, rotate: i === 0 ? 45 : i === 2 ? -45 : 0, y: i === 0 ? 5.5 : i === 2 ? -5.5 : 0 } : {}}
                    />
                ))}
            </button>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="absolute top-full left-0 right-0 md:hidden"
                        style={{
                            background: 'rgba(8,8,16,0.97)',
                            backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => handleNav(item.href)}
                                className="block w-full text-left px-6 py-4 text-sm font-medium border-b"
                                style={{ color: '#94a3b8', borderColor: 'rgba(255,255,255,0.04)' }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
