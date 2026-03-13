// Skills panel — opened by clicking the Posters
import { motion } from 'framer-motion'
import { PanelWrapper } from './PanelWrapper'
import { content } from '../../data/content'
import useStore from '../../store/useStore'

const categoryColors = {
    'Languages': '#f72585',
    'AI / ML': '#00fff5',
    'Web': '#9d4edd',
    'Data': '#06d6a0',
    'Tools': '#ffd166',
}

export default function SkillsPanel() {
    const activePanel = useStore((s) => s.activePanel)

    return (
        <PanelWrapper isOpen={activePanel === 'skills'} title="Skills" accentColor="#f72585">
            <div className="space-y-6">
                {Object.entries(content.skills).map(([category, skills], catIdx) => {
                    const color = categoryColors[category] || '#00fff5'
                    return (
                        <motion.div
                            key={category}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: catIdx * 0.1 + 0.2 }}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-2 mb-3">
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ background: color, boxShadow: `0 0 6px ${color}` }}
                                />
                                <span
                                    className="font-mono text-xs tracking-widest uppercase"
                                    style={{ color }}
                                >
                                    {category}
                                </span>
                                <div className="flex-1 h-[1px]" style={{ background: `${color}20` }} />
                            </div>

                            {/* Skill pills */}
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, skillIdx) => (
                                    <motion.span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-xl text-sm font-medium"
                                        style={{
                                            background: `${color}12`,
                                            color: '#e5e7eb',
                                            border: `1px solid ${color}25`,
                                        }}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 + 0.3 }}
                                        whileHover={{
                                            scale: 1.05,
                                            background: `${color}25`,
                                            color: '#fff',
                                            transition: { duration: 0.1 },
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

            {/* Footer */}
            <motion.div
                className="mt-8 p-4 rounded-2xl text-center"
                style={{ background: 'rgba(247, 37, 133, 0.06)', border: '1px solid rgba(247, 37, 133, 0.15)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <div className="font-mono text-xs text-gray-500">Always learning · Always building</div>
            </motion.div>
        </PanelWrapper>
    )
}
