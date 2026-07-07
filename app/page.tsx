import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Shield,
  Briefcase,
  Users,
  Globe2,
  Handshake,
  ClipboardCheck,
  Scale,
  TrendingUp,
  Award,
} from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { CountUp } from '@/components/animations/CountUp'
import { CTASection } from '@/components/sections/CTASection'
import { HomeHero } from '@/components/sections/HomeHero'
import { WorldMap } from '@/components/sections/WorldMap'
import type { Credential, IconCard, NumberedStep, SectorCard } from '@/types'

const credentials: Credential[] = [
  { type: 'numeric', value: 15, suffix: '+', sub: 'Years Experience' },
  { type: 'numeric', value: 2, prefix: '₦', suffix: 'B', sub: 'Premium Capacity' },
  { type: 'text', label: 'NAICOM', sub: 'Licensed Broker' },
  { type: 'text', label: 'NCRIB', sub: 'Council Member' },
  { type: 'text', label: 'Global', sub: 'Reach' },
]

const sectors: SectorCard[] = [
  {
    title: 'Energy',
    desc: 'Upstream, midstream and downstream coverage with sector-specific underwriting expertise.',
    img: '/images/industry-energy.jpg',
  },
  {
    title: 'Marine',
    desc: 'Hull, cargo, ports and offshore liability programmes structured for global trade.',
    img: '/images/industry-marine.jpg',
  },
  {
    title: 'Aviation',
    desc: 'Airline, aerospace, operator and liability programmes for fleet-driven exposures.',
    img: '/images/industry-aviation.jpg',
  },
  {
    title: 'Engineering & Infrastructure',
    desc: 'Project, construction and operational programmes for capital-intensive builds.',
    img: '/images/industry-infrastructure.jpg',
  },
]

const services: IconCard[] = [
  { icon: Shield, title: 'Risk Assessment', desc: 'Understanding exposures and programme requirements.' },
  { icon: TrendingUp, title: 'Market Intelligence', desc: 'Evaluating available market opportunities and capacity.' },
  { icon: Handshake, title: 'Strategic Negotiation', desc: 'Leveraging relationships and underwriting expertise.' },
  { icon: ClipboardCheck, title: 'Placement Optimization', desc: 'Structuring final programme solutions on optimal terms.' },
]

const claimsSteps: NumberedStep[] = [
  { num: '01', title: 'Incident', desc: 'Immediate engagement following loss to establish facts and impact.' },
  { num: '02', title: 'Assessment', desc: 'Technical evaluation of exposures, records, and value of the claim.' },
  { num: '03', title: 'Documentation', desc: 'Structured evidence supporting claim preparation aligned to policy.' },
  { num: '04', title: 'Negotiation', desc: 'Active engagement with insurers to achieve equitable outcomes.' },
  { num: '05', title: 'Settlement', desc: 'Resolution and recovery aligned with policy terms and business needs.' },
]

const advisors: IconCard[] = [
  { icon: Scale, title: 'Regulatory Compliance', desc: 'Operating with technical and ethical standards.' },
  { icon: Award, title: 'Industry Expertise', desc: 'Sector knowledge across complex and regulated markets.' },
  { icon: Users, title: 'Independent Advice', desc: 'Without product or carrier bias.' },
  { icon: Globe2, title: 'Market Relationships', desc: 'Access to local and international capacity.' },
]

const globalCaps: IconCard[] = [
  { icon: Globe2, title: 'Global Reach', desc: 'Access to international and local capacity markets.' },
  { icon: Award, title: 'Underwriting Strength', desc: 'Relationships with rated specialist providers.' },
  { icon: TrendingUp, title: 'Market Intelligence', desc: 'Insights that support informed risk decisions.' },
  { icon: Briefcase, title: 'Complex Risk Expertise', desc: 'For large or specialist programme structuring.' },
  { icon: Handshake, title: 'Long-term Partnership', desc: 'Built on continuity and delivering value.' },
]

const claimsFacts: [string, string][] = [
  ['Sectors', 'Energy, Marine, Aviation'],
  ['Markets', 'Local & International'],
  ['Recovery Time', 'Reduced Avg. Cycle'],
  ['Engagement', 'Multi-stakeholder'],
]

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* CREDENTIALS */}
      <section className="border-t border-white/10 bg-navy-deep text-white">
        <div className="container-page py-14 md:py-16">
          <FadeIn className="mb-10 text-center">
            <p className="eyebrow">Trusted Credentials</p>
            <h2 className="mt-3 text-2xl md:text-4xl">
              Credentials That Support
              <br />
              Confident Decision-Making
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 text-center md:grid-cols-5">
            {credentials.map((c, i) => (
              <FadeIn key={c.type === 'text' ? c.label : `${c.value}-${c.sub}`} delay={i * 0.06}>
                <div className="font-serif text-3xl md:text-4xl">
                  {c.type === 'numeric' ? (
                    <CountUp value={c.value} prefix={c.prefix} suffix={c.suffix} />
                  ) : (
                    c.label
                  )}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/60">{c.sub}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTOR EXPERTISE */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Sector Expertise</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Deep Sector Expertise
              <br />
              Across Complex Industries
            </h2>
            <p className="mt-5 text-muted-foreground">
              For clients in sectors where operational and regulatory exposures demand experience and
              discipline, our sector-led approach delivers programme structuring aligned with the
              realities of operations.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sectors.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <Link
                  href="/industries"
                  className="group block overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET EXECUTION */}
      <section className="bg-navy-deep py-20 text-white md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Market Execution</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Optimizing Insurance Spend
              <br />
              Without Compromising Protection
            </h2>
            <p className="mt-5 text-white/70">
              Strategic market engagement designed to optimize insurance spend without compromising
              protection integrity.
            </p>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="relative h-full rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <div className="mb-5 grid h-10 w-10 place-items-center rounded-full border border-white/20">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <p className="mb-1 text-xs font-bold tracking-widest text-white/50">0{i + 1}</p>
                  <h3 className="text-base font-semibold uppercase tracking-wider">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4} className="mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-sm bg-brand-red px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-brand-red-hover"
            >
              Explore Our Services{' '}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CLAIMS ADVOCACY */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Claims Advocacy</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Protecting Recovery.
              <br />
              Preserving Continuity.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Our team works alongside clients throughout the claims process, ensuring documentation
              is structured and recovery objectives remain a priority.
            </p>
          </FadeIn>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
            <FadeIn>
              <ol className="space-y-5">
                {claimsSteps.map((step) => (
                  <li key={step.num} className="flex gap-4 border-b border-border/60 pb-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-red text-xs font-bold text-white">
                      {step.num}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-navy">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn delay={0.15} className="rounded-sm bg-white p-8 shadow-xl">
              <p className="eyebrow">Claims Recovery Performance</p>
              <p className="mt-3 font-serif text-5xl text-navy md:text-6xl">₦5.2B</p>
              <p className="mt-2 text-sm font-medium text-navy">
                Industrial Exposure Successfully Managed
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Representing structured recovery across complex operational environments and managed
                claims processes.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-y-5 text-sm">
                {claimsFacts.map(([k, v]) => (
                  <div key={k}>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{k}</p>
                    <p className="mt-1 font-medium text-navy">{v}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
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
              Combining local market expertise with international capacity for specialist placement
              that responds to complex industrial programmes.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-12">
            <WorldMap />
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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

          <FadeIn delay={0.3} className="mt-10">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-sm bg-brand-red px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-brand-red-hover"
            >
              Discuss Your Strategy{' '}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* LEADERSHIP & EXPERIENCE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Leadership &amp; Experience</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Experienced Advisors.
              <br />
              Trusted Representation.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Governance, professional accountability, and stakeholder context drive how we represent
              clients and engage with insurance markets locally and internationally.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisors.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.06}>
                <div className="h-full rounded-sm bg-cream p-6 transition-shadow hover:shadow-md">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-navy/20 text-navy">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-navy">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Structure Your Risk Properly"
        title="Let's Structure Your Risk Exposure Properly."
        description="Whether reviewing an insurance programme or evaluating exposures, our team is available to discuss your requirements."
      />
    </>
  )
}
