/** Easing / Springs — konsistent, „snappy“ ohne Spielzeug-Look. */
export const EASE = [0.16, 1, 0.3, 1] as const

export const springReveal = { type: 'spring' as const, stiffness: 85, damping: 22, mass: 0.85 }

export const springSoft = { type: 'spring' as const, stiffness: 60, damping: 18, mass: 0.9 }

export const springTap = { type: 'spring' as const, stiffness: 400, damping: 28 }
