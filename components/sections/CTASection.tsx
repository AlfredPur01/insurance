import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'

interface CTASectionProps {
  eyebrow?: string
  title: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
}

export function CTASection({
  eyebrow = "Let's Discuss Your Risk Strategy",
  title,
  description,
  ctaLabel = 'Request Consultation',
  ctaTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-red py-20 text-white md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-red to-brand-red-hover" />
      <FadeIn className="container-page mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/80">{eyebrow}</p>
        <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{title}</h2>
        {description && <p className="mt-5 text-base text-white/85 md:text-lg">{description}</p>}
        <Link
          href={ctaTo}
          className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-7 py-4 text-sm font-semibold text-brand-red shadow-lg transition-colors hover:bg-white/90"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </FadeIn>
    </section>
  )
}
