import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, AlertTriangle, Users, Briefcase, Globe2, Award, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-oil-platform.jpg";
import energyImg from "@/assets/industry-energy.jpg";
import marineImg from "@/assets/industry-marine.jpg";
import aviationImg from "@/assets/industry-aviation.jpg";
import infraImg from "@/assets/industry-infrastructure.jpg";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries | AIB Sector Expertise" },
      { name: "description", content: "Risk advisory, insurance placement, and claims advocacy for energy, marine, aviation, and engineering infrastructure clients." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    eyebrow: "Energy",
    title: "Managing Risk Across\nComplex Energy Operations.",
    image: energyImg,
    buttonLabel: "Explore Energy Risk Solutions",
    buttonTo: "/industries/energy",
    blocks: [
      { icon: Shield, title: "Sector Challenges", desc: "Concentration of high-value assets in remote and offshore locations, volatile commodity markets, complex regulatory requirements, and significant environmental liability." },
      { icon: AlertTriangle, title: "Risk Environment", desc: "Blowout and well control, fire and explosion, business interruption from equipment failure, pipeline and transportation liability, and political risk in operating jurisdictions." },
      { icon: Users, title: "AIB Approach", desc: "Technical underwriting submissions, structured programme design across property damage, business interruption, and liability, supported by specialist claims advocacy when losses occur." },
      { icon: Award, title: "Market Capability", desc: "Access to Lloyd's of London, international energy markets, and local Nigerian capacity for combined local and international programme placements." },
    ],
  },
  {
    eyebrow: "Marine",
    title: "Supporting Critical Maritime\nOperations.",
    image: marineImg,
    buttonLabel: "Explore Marine Risk Solutions",
    buttonTo: "/industries/marine",
    blocks: [
      { icon: Shield, title: "Sector Challenges", desc: "Global trade volatility, port congestion risks, complex liability under international maritime law, crew welfare obligations, and evolving IMO environmental regulations." },
      { icon: AlertTriangle, title: "Risk Environment", desc: "Hull and machinery damage, cargo loss and contamination, P&I liability, charterers' liability, offshore construction and installation risk, and port operational exposures." },
      { icon: Users, title: "AIB Approach", desc: "Programme design aligned with international marine markets and IMO standards, structured across hull, cargo, and liability lines, with active claims management when incidents occur." },
      { icon: Award, title: "Market Capability", desc: "Access to Lloyd's marine markets, IG P&I Clubs, and international underwriters with strong Nigerian coastal and regional capacity for combined placements." },
    ],
  },
  {
    eyebrow: "Aviation",
    title: "Supporting Safety-Critical\nAviation Programmes.",
    image: aviationImg,
    buttonLabel: "Discuss Aviation Risk Exposure",
    buttonTo: "/industries/aviation",
    blocks: [
      { icon: Shield, title: "Sector Challenges", desc: "Strict ICAO regulatory compliance, high-value fleet assets, third-party liability across multiple jurisdictions, and demanding maintenance and operational safety obligations." },
      { icon: AlertTriangle, title: "Risk Environment", desc: "Hull and total loss, passenger and third-party liability, product liability, airport operational exposure, MRO and ground handling risk, and crew-related claims." },
      { icon: Users, title: "AIB Approach", desc: "Structured aviation programme design covering hull, liability, and ancillary coverages, with specialist market access and proactive claims advocacy support throughout the policy period." },
      { icon: Award, title: "Market Capability", desc: "Access to leading aviation insurance markets including Lloyd's and dedicated international underwriting capacity for commercial, charter, and general aviation operations." },
    ],
  },
  {
    eyebrow: "Engineering & Infrastructure",
    title: "Supporting Major Projects\nAnd Long-Term Development.",
    image: infraImg,
    buttonLabel: "Explore Infrastructure Risk Solutions",
    buttonTo: "/industries/engineering-infrastructure",
    blocks: [
      { icon: Shield, title: "Sector Challenges", desc: "Complex multi-stakeholder project structures, long construction timelines, demanding contractual obligations, natural peril exposure, and significant third-party liability." },
      { icon: AlertTriangle, title: "Risk Environment", desc: "Construction all risks (CAR), erection all risks (EAR), delay in start-up, contractors' plant and equipment, professional indemnity, and wrap-up liability." },
      { icon: Users, title: "AIB Approach", desc: "Bespoke programme structuring for project-specific risk profiles, including delay in start-up and post-completion operational coverage, with active claims support throughout." },
      { icon: Award, title: "Market Capability", desc: "Access to specialist construction and engineering markets, project finance-compliant programme design, and transition support to long-term operational asset coverage." },
    ],
  },
];

const whyAib = [
  { icon: Shield, title: "Risk Advisory", desc: "Helping clients build effective risk management strategy." },
  { icon: Briefcase, title: "Market Execution", desc: "Engaging insurers to secure terms and capacity." },
  { icon: Users, title: "Claims Advocacy", desc: "Supporting clients in protecting business continuity." },
  { icon: Globe2, title: "Global Capacity", desc: "Access to specialist insurers in local and international markets." },
  { icon: Award, title: "Industry Expertise", desc: "Knowledge that drives better risk outcomes." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Supporting Complex<br />Industries Across<br />Critical Sectors.</>}
        description="AIB provides risk advisory, insurance placement, and claims advocacy services tailored to industries operating in complex, capital-intensive, and highly regulated environments."
        ctaLabel="Discuss Your Industry Risk"
        image={heroImg}
      />

      {/* INTRO */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page text-center max-w-3xl mx-auto">
          <FadeIn>
            <p className="eyebrow">Sector Expertise</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Industry Knowledge Matters.</h2>
            <p className="mt-5 text-muted-foreground">Every industry faces distinct operational challenges, regulatory obligations, and risk exposures. Our sector-focused approach helps structure protection strategies aligned with the realities of their operating environment.</p>
          </FadeIn>
        </div>
      </section>

      {/* INDUSTRY SECTIONS */}
      {industries.map((ind) => (
        <section key={ind.eyebrow} className="relative isolate overflow-hidden text-white py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img src={ind.image} alt="" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-navy-deep/80" />
          </div>
          <div className="container-page">
            <FadeIn className="max-w-2xl">
              <p className="eyebrow">{ind.eyebrow}</p>
              <h2 className="mt-3 text-3xl md:text-5xl whitespace-pre-line">{ind.title}</h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ind.blocks.map((b, i) => (
                <FadeIn key={b.title} delay={i * 0.07}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/15 p-6 rounded-sm h-full hover:bg-white/10 hover:border-brand-red/50 transition-all">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-sm font-bold uppercase tracking-wider">{b.title}</h3>
                    <p className="mt-3 text-sm text-white/70">{b.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <Link
                to={ind.buttonTo}
                className="group mt-8 inline-flex items-center gap-2 border border-brand-red bg-transparent px-6 py-3.5 text-sm font-semibold text-brand-red rounded-sm hover:bg-brand-red hover:text-white transition-colors"
              >
                {ind.buttonLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* WHY AIB */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page text-center max-w-3xl mx-auto">
          <FadeIn>
            <p className="eyebrow">Why AIB</p>
            <h2 className="mt-3 text-3xl md:text-5xl">A Consistent Approach Across Complex Industries.</h2>
            <p className="mt-5 text-muted-foreground">Within each industry sector, a unique challenge, our disciplined approach remains consistent: understand exposure, structure protection, engage markets effectively, and support recovery when it matters most.</p>
          </FadeIn>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 text-left">
            {whyAib.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.06}>
                <div>
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-navy/20 text-navy">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Industry Engagement"
        title="Let's Discuss Your Risk Strategy."
        description="Engage with our team to explore risk advisory, insurance placement, and claims advocacy solutions tailored to your organization."
        ctaLabel="Request Consultation"
      />
    </>
  );
}
