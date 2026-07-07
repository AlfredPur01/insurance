import type { Metadata } from 'next'
import Image from 'next/image'
import { Shield, AlertTriangle, Users, Award, Plane, Globe2, ClipboardCheck, Briefcase } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { PageHero } from '@/components/sections/PageHero'
import { IndustryContactForm } from '@/components/sections/IndustryContactForm'
import type { IconCard } from '@/types'

export const metadata: Metadata = {
  title: 'Aviation Risk Advisory',
  description:
    'Structured risk advisory, insurance placement, and claims advocacy for airlines, operators, airports, and aerospace organisations.',
}

const cards: IconCard[] = [
  { icon: Shield, title: 'Sector Challenges', desc: 'Strict ICAO regulatory compliance, high-value fleet assets, multi-jurisdictional third-party liability exposure, demanding maintenance obligations, and significant reputational risk following any incident.' },
  { icon: AlertTriangle, title: 'Risk Environment', desc: 'Hull damage and total loss, passenger liability, third-party bodily injury and property damage, product liability, airport operational exposure, and MRO and ground handling risk.' },
  { icon: Users, title: 'AIB Approach', desc: 'Structured aviation programme design covering hull, liability, and ancillary coverages, with specialist market access and proactive claims advocacy support from notification through to settlement.' },
  { icon: Award, title: 'Market Capability', desc: "Access to leading aviation insurance markets including Lloyd's dedicated aviation syndicates and international underwriters with capacity for commercial, charter, and general aviation operations." },
]

const capabilities: IconCard[] = [
  { icon: Plane, title: 'Commercial Airline', desc: 'Hull and spares, passenger liability, third-party property damage, and crew coverage for commercial airline operators and wet lease arrangements.' },
  { icon: Globe2, title: 'Charter & Private Operations', desc: 'Tailored hull and liability programmes for charter operators, business aviation users, and private aircraft owners operating locally and internationally.' },
  { icon: ClipboardCheck, title: 'MRO & Ground Handling', desc: "Hangarkeepers' legal liability, products liability, and completed operations coverage for maintenance, repair, and ground service providers." },
  { icon: Briefcase, title: 'Airport Liability', desc: "Airport operators' liability, war and allied perils, and premises liability for airport authorities and fixed-base operators across Nigerian and regional airports." },
]

export default function AviationPage() {
  return (
    <>
      <PageHero
        eyebrow="Aviation"
        title={
          <>
            Managing Technical and Liability
            <br />
            Risk in Aerospace Operations.
          </>
        }
        description="AIB provides risk advisory, insurance placement, and claims advocacy for airlines, charter operators, airports, MRO providers, and aerospace organisations operating in regulated aviation environments."
        image="/images/industry-aviation.jpg"
      />

      {/* OVERVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="eyebrow">Sector Overview</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Precision Risk Management for Aviation Operations.</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Aviation is one of the most technically regulated and liability-sensitive industries
                in the world. The combination of high-value assets, complex multi-jurisdictional
                legal frameworks, and public-facing operations means that gaps in insurance coverage
                — or coverage that isn&apos;t properly structured — can have catastrophic financial
                consequences.
              </p>
              <p>
                AIB&apos;s aviation practice works with commercial airlines, charter and business
                aviation operators, airports, MRO providers, and aerospace organisations to design
                and place insurance programmes that genuinely reflect the risk profile of their
                operations. We engage dedicated aviation underwriters — not generalist markets — with
                the technical knowledge to assess your exposure accurately and provide capacity on
                appropriate terms.
              </p>
              <p>
                Our involvement extends beyond placement. When losses occur in aviation, claims can be
                complex, contested, and prolonged. We provide active claims advocacy — managing the
                process, engaging loss adjusters, and pressing for equitable outcomes aligned with the
                policy terms we helped negotiate.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Image
              src="/images/industry-aviation.jpg"
              alt="Aviation operations"
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
          <Image src="/images/industry-aviation.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Risk Profile</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Understanding the Aviation Risk Landscape.</h2>
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
            <h2 className="mt-3 text-3xl md:text-4xl">Aviation Programmes Across All Operator Types.</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              From commercial fleet operations to airports and MRO facilities, we structure coverage
              designed specifically for the regulatory and operational realities of your aviation
              activities.
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

      <IndustryContactForm industry="Aviation" />
    </>
  )
}
