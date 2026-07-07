import type { Metadata } from 'next'
import Image from 'next/image'
import { Shield, AlertTriangle, Users, Award, Flame, Globe2, TrendingUp, ClipboardCheck } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { PageHero } from '@/components/sections/PageHero'
import { IndustryContactForm } from '@/components/sections/IndustryContactForm'
import type { IconCard } from '@/types'

export const metadata: Metadata = {
  title: 'Energy Risk Advisory',
  description:
    'Structured risk advisory, insurance placement, and claims advocacy for upstream, midstream, and downstream energy operations.',
}

const cards: IconCard[] = [
  { icon: Shield, title: 'Sector Challenges', desc: 'Concentration of high-value assets in remote and offshore locations, volatile commodity markets, complex cross-border regulatory requirements, and significant environmental and third-party liability exposure.' },
  { icon: AlertTriangle, title: 'Risk Environment', desc: 'Blowout and well control incidents, fire and explosion, property damage and business interruption, pipeline and transportation liability, equipment failure, and political risk in operating jurisdictions.' },
  { icon: Users, title: 'Advocate Approach', desc: 'Detailed technical underwriting submissions, structured programme design across property damage, business interruption, and liability lines, underpinned by specialist claims advocacy when losses arise.' },
  { icon: Award, title: 'Market Capability', desc: "Access to Lloyd's of London, international energy markets, and local Nigerian capacity — enabling combined local and international programme placements aligned with regulatory requirements." },
]

const capabilities: IconCard[] = [
  { icon: Flame, title: 'Well Control & Blowout', desc: 'Well control, blowout, operator’s extra expense, and comprehensive property damage coverage for exploration and production operations onshore and offshore.' },
  { icon: Globe2, title: 'Property & Business Interruption', desc: 'Refinery and facility property damage, machinery breakdown, and business interruption protection across midstream and downstream infrastructure.' },
  { icon: TrendingUp, title: 'Environmental Liability', desc: 'Environmental impairment, pollution, and third-party liability programmes for energy operations exposed to complex regulatory obligations.' },
  { icon: ClipboardCheck, title: 'Pipeline & Transportation', desc: 'Pipeline liability, product contamination, and transit coverage across midstream transportation and storage infrastructure.' },
]

export default function EnergyPage() {
  return (
    <>
      <PageHero
        eyebrow="Energy"
        title={
          <>
            Protecting Capital Projects and
            <br />
            Long-Term Infrastructure Assets.
          </>
        }
        description="Advocate provides technically structured risk advisory, insurance placement, and claims advocacy services for upstream, midstream, downstream, and power generation operations across the energy sector."
        image="/images/industry-energy.jpg"
      />

      {/* OVERVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="eyebrow">Sector Overview</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Deep Expertise Across the Energy Value Chain.</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Energy operations involve some of the most technically complex and high-severity risk
                exposures of any industry. From exploration and production in remote offshore
                environments to midstream transportation infrastructure and large-scale downstream
                refining facilities, the sector demands insurance programmes that are not only
                comprehensive but technically precise.
              </p>
              <p>
                Advocate&apos;s energy practice brings deep sector understanding to every client engagement.
                We work with operators, contractors, and asset owners across upstream, midstream,
                downstream, and power generation segments to structure programmes that accurately
                reflect exposure, satisfy regulatory requirements, and provide meaningful financial
                protection when losses occur.
              </p>
              <p>
                Our approach begins with a thorough technical assessment of your operations, assets,
                and risk profile. We engage specialist underwriters with genuine sector knowledge —
                not generalist markets — to structure coverages that hold up at claims time and
                deliver value throughout the policy lifecycle.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Image
              src="/images/industry-energy.jpg"
              alt="Energy operations"
              width={800}
              height={600}
              className="h-80 w-full rounded-sm object-cover shadow-md lg:h-96"
            />
          </FadeIn>
        </div>
      </section>

      {/* RISK PROFILE CARDS */}
      <section className="relative isolate overflow-hidden py-20 text-white md:py-28">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero-oil-platform.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Risk Profile</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Understanding the Energy Risk Landscape.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.07}>
                <div className="h-full rounded-sm border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-brand-red/50 hover:bg-white/10">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-wider">{c.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Coverage Capabilities</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Structured Solutions Across the Energy Sector.</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              We design programmes that reflect the specific risk profile of your segment — not
              generic energy solutions applied uniformly across dissimilar operations.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.07}>
                <div className="h-full rounded-sm border border-border p-6 transition-all hover:border-brand-red/40 hover:shadow-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-cream text-navy">
                    <cap.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold text-navy">{cap.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{cap.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <IndustryContactForm industry="Energy" />
    </>
  )
}
