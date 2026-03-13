// Global state management for the 3D portfolio
// Tracks which panel is open and camera behavior
import { create } from 'zustand'

const useStore = create((set) => ({
    // Which panel is currently open: null | 'projects' | 'about' | 'contact' | 'resume' | 'skills'
    activePanel: null,

    // Is the intro camera animation complete?
    introComplete: false,

    // Is the camera currently zoomed in on an object?
    isFocused: false,

    // Which object is hovered (for glow effect on 3D side)
    hoveredObject: null,

    // Actions
    openPanel: (panel) => set({ activePanel: panel, isFocused: true }),
    closePanel: () => set({ activePanel: null, isFocused: false }),
    setIntroComplete: () => set({ introComplete: true }),
    setHovered: (name) => set({ hoveredObject: name }),
}))

export default useStore
