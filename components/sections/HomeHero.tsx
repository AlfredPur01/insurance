'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy-deep pb-20 pt-32 text-white md:pb-32 md:pt-44">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-oil-platform.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />
      </div>
      <div className="container-page">
        <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Risk Advisory &middot; Placement &middot; Claims
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 text-4xl font-normal leading-[1.02] md:text-6xl lg:text-7xl"
        >
          Structured Risk
          <br />
          Advisory for
          <br />
          <span className="text-brand-red">Complex Industries.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-white/85 md:text-lg"
        >
          Structuring technically sound and commercially effective insurance programmes that protect
          operations and accelerate recovery.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-hover"
          >
            Request Consultation{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore Our Services
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
