import { createFileRoute } from "@tanstack/react-router";
import { Shield, Briefcase, Users, Globe2, TrendingUp, FileText, Search, Target, Handshake, ClipboardCheck } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-oil-platform.jpg";
import boardroomImg from "@/assets/boardroom.jpg";
import engineersImg from "@/assets/engineers-site.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | AIB Strategic Risk Solutions" },
      { name: "description", content: "Strategic risk solutions for complex operating environments: advisory, market execution, claims advocacy, and global capacity." },
    ],
  }),
  component: ServicesPage,
});

const coreServices = [
  { icon: Shield, title: "Risk Advisory", desc: "Risk assessment, programme structuring, and strategic protection planning." },
  { icon: Briefcase, title: "Market Execution", desc: "Structured placement and underwriting engagement across local and international markets." },
  { icon: Users, title: "Claims Advocacy", desc: "Structured claims management and recovery support." },
  { icon: Globe2, title: "Global Capacity", desc: "Access to specialist insurers and broader underwriting capacity." },
];

const advisoryPoints = [
  { icon: Search, title: "Exposure Assessment", desc: "Identifying operational, financial, and commercial risks." },
  { icon: Target, title: "Programme Design", desc: "Structuring protection aligned with business objectives." },
  { icon: FileText, title: "Risk Analysis", desc: "Evaluation of frequency, severity, and protection priorities." },
  { icon: ClipboardCheck, title: "Strategic Guidance", desc: "Supporting informed risk management decisions." },
];

const marketSteps = [
  { num: "01", title: "Risk Assessment", desc: "Understanding exposure and programme requirements." },
  { num: "02", title: "Market Intelligence", desc: "Evaluating available market opportunities and capacity." },
  { num: "03", title: "Strategic Negotiation", desc: "Leveraging relationships and underwriting expertise." },
  { num: "04", title: "Placement Optimization", desc: "Structuring final programme solutions on optimal terms." },
];

const claimsSteps = [
  { num: "01", title: "Incident", desc: "Immediate engagement following loss to establish facts, assess impact and initiate response procedures." },
  { num: "02", title: "Assessment", desc: "Technical evaluation of commercial, financial and recovery exposures." },
  { num: "03", title: "Documentation", desc: "Structured documentation, evidence compilation, and claim preparation aligned to policy objectives." },
  { num: "04", title: "Negotiation", desc: "Active engagement with insurers and decision-makers to achieve equitable outcomes." },
  { num: "05", title: "Settlement", desc: "Resolution and recovery outcomes aligned with policy terms, business requirements, and stakeholder interests." },
];

const framework = [
  { title: "Understand Exposure", desc: "We listen to operational objectives, exposures, and risk priorities." },
  { title: "Assess Risk", desc: "We identify, analyse, and prioritize key risk exposures." },
  { title: "Structure Solutions", desc: "We design tailored insurance and risk management structures." },
  { title: "Engage Markets", desc: "We negotiate with insurers to secure optimal terms." },
  { title: "Support Recovery", desc: "We provide advocacy and support when losses occur." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Strategic Risk Solutions<br />For Complex Operating<br />Environments.</>}
        description="AIB provides structured risk advisory, insurance placement, claims advocacy, and market access solutions designed to help organizations protect assets, preserve continuity, and support long-term resilience."
        ctaLabel="Discuss Your Risk Exposure"
        image={heroImg}
      />

      {/* CORE CAPABILITIES */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Core Capabilities</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Comprehensive Risk Advisory<br />And Insurance Solutions.</h2>
            <p className="mt-5 text-muted-foreground">Our services are designed to support organizations throughout every stage of the risk lifecycle, from exposure assessment and programme design to claims recovery and market engagement.</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.07}>
                <div className="bg-white rounded-sm p-7 h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-navy/15 text-navy">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold tracking-widest uppercase text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* RISK ADVISORY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <p className="eyebrow">Risk Advisory</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Understanding Risk<br />Before It Becomes Exposure.</h2>
            <p className="mt-5 text-muted-foreground">Effective protection begins with a clear understanding of operational, financial, and strategic exposures. Our advisory approach helps organizations identify vulnerabilities and structure appropriate risk management strategies.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {advisoryPoints.map((p) => (
                <div key={p.title} className="flex gap-3">
                  <p.icon className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-navy">{p.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-sm shadow-xl">
              <img src={boardroomImg} alt="Risk advisory meeting" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MARKET EXECUTION */}
      <section className="bg-navy-deep text-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Market Execution & Placement</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Optimizing Insurance Spend<br />Without Compromising<br />Protection.</h2>
            <p className="mt-5 text-white/70">Strategic market engagement designed to optimize insurance spend without compromising protection integrity.</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketSteps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.07}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-6 h-full hover:bg-white/10 transition-colors">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-navy text-xs font-bold">{s.num}</div>
                  <h3 className="mt-5 text-sm font-bold tracking-widest uppercase">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CLAIMS ADVOCACY */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Claims Advocacy</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Protecting Recovery.<br />Preserving Continuity.</h2>
            <p className="mt-5 text-muted-foreground">When losses occur, structured claims advocacy helps protect cash flow, accelerate recovery, and minimize operational disruption.</p>
          </FadeIn>
          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="rounded-sm overflow-hidden shadow-xl">
                <img src={engineersImg} alt="Engineers reviewing plans" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="bg-white shadow-xl rounded-sm p-8">
              <p className="eyebrow">Our Claims Advocacy Process</p>
              <ol className="mt-6 space-y-5">
                {claimsSteps.map((s) => (
                  <li key={s.num} className="flex gap-4 border-b border-border/60 pb-4 last:border-0">
                    <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full bg-brand-red text-white text-xs font-bold">{s.num}</span>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-navy text-sm uppercase tracking-wider">{s.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROCESS FRAMEWORK */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-3 text-3xl md:text-5xl">A Disciplined Framework<br />For Risk Management.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {framework.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.07}>
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-navy/15 text-navy">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-navy">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
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
        ctaLabel="Request Consultation"
      />
    </>
  );
}
