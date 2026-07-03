import { createFileRoute } from "@tanstack/react-router";
import { Shield, AlertTriangle, Users, Award, Flame, Globe2, TrendingUp, ClipboardCheck } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHero } from "@/components/site/PageHero";
import { IndustryContactForm } from "@/components/site/IndustryContactForm";
import heroImg from "@/assets/hero-oil-platform.jpg";
import energyImg from "@/assets/industry-energy.jpg";

export const Route = createFileRoute("/industries/energy")({
  head: () => ({
    meta: [
      { title: "Energy Risk Advisory | AIB" },
      { name: "description", content: "Structured risk advisory, insurance placement, and claims advocacy for upstream, midstream, and downstream energy operations." },
    ],
  }),
  component: EnergyPage,
});

const cards = [
  {
    icon: Shield,
    title: "Sector Challenges",
    desc: "Concentration of high-value assets in remote and offshore locations, volatile commodity markets, complex cross-border regulatory requirements, and significant environmental and third-party liability exposure.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Environment",
    desc: "Blowout and well control incidents, fire and explosion, property damage and business interruption, pipeline and transportation liability, equipment failure, and political risk in operating jurisdictions.",
  },
  {
    icon: Users,
    title: "AIB Approach",
    desc: "Detailed technical underwriting submissions, structured programme design across property damage, business interruption, and liability lines, underpinned by specialist claims advocacy when losses arise.",
  },
  {
    icon: Award,
    title: "Market Capability",
    desc: "Access to Lloyd's of London, international energy markets, and local Nigerian capacity — enabling combined local and international programme placements aligned with regulatory requirements.",
  },
];

const capabilities = [
  { icon: Flame, title: "Upstream Exploration & Production", desc: "Well control, blowout, operator's extra expense, and comprehensive property damage coverage for E&P operations onshore and offshore." },
  { icon: Globe2, title: "Midstream & Transportation", desc: "Pipeline liability, product contamination, and business interruption protection across midstream infrastructure and storage facilities." },
  { icon: TrendingUp, title: "Downstream & Refining", desc: "Refinery property damage, business interruption, and environmental liability programmes for downstream processing and petrochemical operations." },
  { icon: ClipboardCheck, title: "Power Generation", desc: "Machinery breakdown, operational all risks, and business interruption coverage for power generation and utilities infrastructure." },
];

function EnergyPage() {
  return (
    <>
      <PageHero
        eyebrow="Energy"
        title={<>Navigating Risk Across<br />Complex Energy Operations.</>}
        description="AIB provides technically structured risk advisory, insurance placement, and claims advocacy services for upstream, midstream, downstream, and power generation operations across the energy sector."
        image={heroImg}
      />

      {/* OVERVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <p className="eyebrow">Sector Overview</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Deep Expertise Across the Energy Value Chain.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Energy operations involve some of the most technically complex and high-severity risk exposures of any industry. From exploration and production in remote offshore environments to midstream transportation infrastructure and large-scale downstream refining facilities, the sector demands insurance programmes that are not only comprehensive but technically precise.
              </p>
              <p>
                AIB's energy practice brings deep sector understanding to every client engagement. We work with operators, contractors, and asset owners across upstream, midstream, downstream, and power generation segments to structure programmes that accurately reflect exposure, satisfy regulatory requirements, and provide meaningful financial protection when losses occur.
              </p>
              <p>
                Our approach begins with a thorough technical assessment of your operations, assets, and risk profile. We engage specialist underwriters with genuine sector knowledge — not generalist markets — to structure coverages that hold up at claims time and deliver value throughout the policy lifecycle.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img src={energyImg} alt="Energy operations" className="rounded-sm object-cover w-full h-80 lg:h-96 shadow-md" loading="lazy" />
          </FadeIn>
        </div>
      </section>

      {/* RISK PROFILE CARDS */}
      <section className="relative isolate overflow-hidden text-white py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
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
                <div className="bg-white/5 backdrop-blur-sm border border-white/15 p-6 rounded-sm h-full hover:bg-white/10 hover:border-brand-red/50 transition-all">
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
            <p className="mt-4 text-muted-foreground text-sm">We design programmes that reflect the specific risk profile of your segment — not generic energy solutions applied uniformly across dissimilar operations.</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.07}>
                <div className="border border-border rounded-sm p-6 h-full hover:border-brand-red/40 hover:shadow-sm transition-all">
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
  );
}
