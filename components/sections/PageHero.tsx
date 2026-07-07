'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description: string
  ctaLabel?: string
  ctaTo?: string
  image: string
  align?: 'left' | 'center'
}

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaTo = '/contact',
  image,
  align = 'left',
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-28 md:pt-44">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill priority className="object-cover opacity-50" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
      </div>

      <div className="container-page">
        <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-4xl font-normal leading-[1.05] md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base leading-relaxed text-white/80 md:text-lg"
        >
          {description}
        </motion.p>
        {ctaLabel && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href={ctaTo}
              className="group inline-flex items-center gap-2 rounded-sm bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-red-hover"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
        </div>
      </div>
    </section>
  )
}
