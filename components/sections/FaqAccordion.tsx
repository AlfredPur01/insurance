'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/types'

function FAQEntry({ q, a, defaultOpen }: FaqItem & { defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-navy md:text-base">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-brand-red transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="divide-y divide-border/60 rounded-sm bg-cream">
      {faqs.map((f, i) => (
        <FAQEntry key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
      ))}
    </div>
  )
}
