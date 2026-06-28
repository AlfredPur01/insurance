import { createFileRoute } from "@tanstack/react-router";
import { Shield, AlertTriangle, Users, Briefcase, Globe2, Award } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-oil-platform.jpg";
import energyImg from "@/assets/industry-energy.jpg";
import marineImg from "@/assets/industry-marine.jpg";
import aviationImg from "@/assets/industry-aviation.jpg";
import infraImg from "@/assets/industry-infrastructure.jpg";

export const Route = createFileRoute("/industries")({
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
  },
  {
    eyebrow: "Marine",
    title: "Supporting Critical Maritime\nOperations.",
    image: marineImg,
  },
  {
    eyebrow: "Aviation",
    title: "Supporting Safety-Critical\nAviation Programmes.",
    image: aviationImg,
  },
  {
    eyebrow: "Engineering & Infrastructure",
    title: "Supporting Major Projects\nAnd Long-Term Development.",
    image: infraImg,
  },
];

const blocks = [
  { icon: Shield, title: "Sector Challenges", desc: "The risks are uniquely exposed to severe concentration conditions, facilities, supply chain dependence, and underlying capability requirements." },
  { icon: AlertTriangle, title: "Risk Environment", desc: "Global supply chain volatility, equipment-related and material/infrastructure exposures, alongside operational drivers." },
  { icon: Users, title: "AIB Approach", desc: "Our market access provides specific exposure analysis, programme alignment, and support recovery through claims advocacy when disruption occurs." },
  { icon: Award, title: "Market Capability", desc: "Access to broad capacity and underwriting strength, including local, regional, and offshore expertise." },
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
      {industries.map((ind, idx) => (
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
              {blocks.map((b, i) => (
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
