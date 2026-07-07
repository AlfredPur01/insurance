'use client'

import { motion } from 'framer-motion'

const REGIONS: { label: string; top: string; left: string }[] = [
  { label: 'EUROPE', top: '20%', left: '48%' },
  { label: 'NORTH AMERICA', top: '30%', left: '18%' },
  { label: 'SOUTH AMERICA', top: '65%', left: '28%' },
  { label: 'AFRICA', top: '55%', left: '52%' },
  { label: 'ASIA', top: '30%', left: '75%' },
  { label: 'MIDDLE EAST', top: '40%', left: '60%' },
]

export function WorldMap() {
  return (
    <div className="relative aspect-[16/8] overflow-hidden rounded-sm border border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.27_0.05_254)_0%,transparent_70%)]" />
      {REGIONS.map((region, i) => (
        <motion.div
          key={region.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className="absolute text-xs font-semibold tracking-widest text-white/90"
          style={{ top: region.top, left: region.left }}
        >
          <div className="mb-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
          {region.label}
        </motion.div>
      ))}
    </div>
  )
}
