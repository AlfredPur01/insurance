import type { Metadata } from 'next'
import Image from 'next/image'
import { Shield, TrendingUp, Briefcase, Users, Globe2, Award, Scale, Handshake } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { WorldMap } from '@/components/sections/WorldMap'
import type { IconCard, NamedSector, NumberedStep } from '@/types'

export const metadata: Metadata = {
  title: 'About AIB',
  description:
    'Anchorage Insurance Brokers is an independent insurance brokerage and risk advisory firm helping organizations identify, manage, and transfer risk.',
}

const approach: IconCard[] = [
  { icon: Shield, title: 'Risk Assessment', desc: 'Identifying exposures, operational drivers, and protection priorities.' },
  { icon: TrendingUp, title: 'Market Intelligence', desc: 'Leveraging insights to support response to market dynamics.' },
  { icon: Briefcase, title: 'Strategic Placement', desc: 'Crafting structured solutions aligned with operational requirements.' },
  { icon: Users, title: 'Claims Advocacy', desc: 'Supporting recovery and outcomes that ensure cash flow and recovery objectives.' },
]

const leadership: NumberedStep[] = [
  { num: '01', title: 'Regulatory Compliance', desc: 'Operating with technical and ethical standards.' },
  { num: '02', title: 'Industry Expertise', desc: 'Sector knowledge across complex and regulated markets.' },
  { num: '03', title: 'Independent Advice', desc: 'Without product or carrier bias.' },
  { num: '04', title: 'Market Relationships', desc: 'Access to local and international capacity.' },
]

const sectors: NamedSector[] = [
  { name: 'Energy', img: '/images/industry-energy.jpg', desc: 'Upstream, midstream and downstream sector exposures.' },
  { name: 'Marine', img: '/images/industry-marine.jpg', desc: 'Marine, ports, and offshore liability programmes for trade-led economies.' },
  { name: 'Aviation', img: '/images/industry-aviation.jpg', desc: 'Commercial aviation, aerospace, and liability programmes.' },
  { name: 'Engineering & Infrastructure', img: '/images/industry-infrastructure.jpg', desc: 'Construction and operational programmes for major projects.' },
]

const confidence: IconCard[] = [
  { icon: Scale, title: 'Technical Knowledge', desc: 'Deep industry insight and structured risk methods.' },
  { icon: Award, title: 'Market Access', desc: 'Connections with leading local and international insurers.' },
  { icon: Users, title: 'Client Advocacy', desc: 'Working throughout the claims and recovery process.' },
  { icon: Handshake, title: 'Strategic Partnership', desc: 'Working alongside clients to deliver risk objectives.' },
]

const globalCaps: IconCard[] = [
  { icon: Globe2, title: 'Global Reach', desc: 'Access to international and local capacity markets.' },
  { icon: Award, title: 'Underwriting Strength', desc: 'Relationships with rated specialist providers.' },
  { icon: TrendingUp, title: 'Market Intelligence', desc: 'Insights that support informed risk decisions.' },
  { icon: Briefcase, title: 'Complex Risk Expertise', desc: 'For specialist programme structuring.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Trusted Advisors.
            <br />
            Proven Industry Expertise.
          </>
        }
        description="Anchorage Insurance Brokers provides strategic risk advisory, insurance placement, and claims advocacy services designed to help organizations navigate complex operational and commercial environments with confidence."
        ctaLabel="Explore Our Approach"
        image="/images/hero-boardroom.jpg"
      />

      {/* WHO WE ARE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Built on Trust.
              <br />
              Focused on Protection.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Anchorage Insurance Brokers is an independent insurance brokerage and risk advisory
                firm committed to helping organizations identify, manage, and transfer risk
                effectively.
              </p>
              <p>
                Through industry-led market engagement, technical expertise, and a client-focused
                advocacy, we deliver structured advice aligned with operational realities and
                long-term business objectives.
              </p>
              <p>
                Our approach combines industry insight, market intelligence, and structured risk
                management to support clients across complex operating environments.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/images/boardroom.jpg"
                alt="Boardroom"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-3 text-3xl md:text-5xl">A Structured Approach to Risk.</h2>
            <p className="mt-5 text-muted-foreground">
              Every programme is guided by a disciplined framework designed to identify exposures,
              optimize protection strategies, and support long-term business continuity.
            </p>
          </FadeIn>
          <div className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.07}>
                <div className="h-full rounded-sm bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 text-navy">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-navy">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-navy-deep py-20 text-white md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Leadership &amp; Experience</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Experienced Advisors.
              <br />
              Trusted Representation.
            </h2>
            <p className="mt-5 text-white/70">
              Governance, professional accountability, and stakeholder context drive how we represent
              clients and engage with insurance markets locally and internationally.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l, i) => (
              <FadeIn key={l.num} delay={i * 0.07}>
                <div className="h-full rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-bold text-navy">
                    {l.num}
                  </div>
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-wider">{l.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{l.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY FOOTPRINT */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Industry Footprint</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Supporting Complex
              <br />
              Operating Environments.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Our experience spans sectors where operational complexity, asset concentration, and
              risk exposure require structured advisory support and disciplined market engagement.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.07}>
                <div className="group overflow-hidden rounded-sm shadow-sm transition-shadow hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.name}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="font-semibold text-navy">{s.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Why Us</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Confidence Through
              <br />
              Expertise.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Organizations choose AIB because effective risk management requires more than insurance
              placement. It requires strategic thinking, market insight, and long-term partnership.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {confidence.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.07}>
                <div>
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 text-navy">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-navy">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL CAPACITY */}
      <section className="bg-navy-deep py-20 text-white md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Global Capacity &amp; Market Access</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Accessing Local Expertise
              <br />
              and International Capacity
            </h2>
            <p className="mt-5 text-white/70">
              Combining local market expertise with international capacity, our specialist placement
              teams support complex industrial programmes.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-12">
            <WorldMap />
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {globalCaps.map((g, i) => (
              <FadeIn key={g.title} delay={i * 0.06}>
                <div className="border-t border-white/15 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{g.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{g.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Consultation & Engagement"
        title="Let's Discuss Your Risk Strategy."
        description="Engage with our team to explore risk advisory, insurance placement, and claims advocacy solutions tailored to your organization."
      />
    </>
  )
}
