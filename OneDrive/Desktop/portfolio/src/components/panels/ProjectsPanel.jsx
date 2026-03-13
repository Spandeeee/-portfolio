// Projects panel — opened by clicking the Laptop
import { motion } from 'framer-motion'
import { PanelWrapper } from './PanelWrapper'
import { content } from '../../data/content'
import useStore from '../../store/useStore'

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 0.2, duration: 0.4 },
    }),
}

export default function ProjectsPanel() {
    const activePanel = useStore((s) => s.activePanel)

    return (
        <PanelWrapper isOpen={activePanel === 'projects'} title="Projects" accentColor="#00fff5">
            <div className="space-y-4">
                {content.projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="group relative rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden cursor-pointer"
                        style={{ background: 'rgba(255,255,255,0.02)' }}
                        whileHover={{ scale: 1.01 }}
                    >
                        {/* Accent glow on hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                            style={{
                                background: `radial-gradient(600px circle at top left, ${project.color}08, transparent)`,
                            }}
                        />

                        {/* Color indicator */}
                        <div
                            className="w-8 h-1 rounded-full mb-3"
                            style={{ background: project.color, boxShadow: `0 0 10px ${project.color}` }}
                        />

                        <h3 className="text-white font-semibold text-base mb-2 group-hover:text-white transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium"
                                    style={{
                                        background: `${project.color}15`,
                                        color: project.color,
                                        border: `1px solid ${project.color}30`,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Hover arrow */}
                        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 text-gray-400 text-sm">
                            →
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-gray-600 text-center">
                ↑ click any project to open →
            </div>
        </PanelWrapper>
    )
}
