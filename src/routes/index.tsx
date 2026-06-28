import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Briefcase, Users, Globe2, Anchor, Plane, Factory, Flame,
  Building2, FileText, Scale, ClipboardCheck, Handshake, TrendingUp, Award, CheckCircle2,
} from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { CountUp } from "@/components/site/CountUp";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-oil-platform.jpg";
import energyImg from "@/assets/industry-energy.jpg";
import marineImg from "@/assets/industry-marine.jpg";
import aviationImg from "@/assets/industry-aviation.jpg";
import infraImg from "@/assets/industry-infrastructure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AIB | Structured Risk Advisory for Complex Industries" },
      { name: "description", content: "Anchorage Insurance Brokers — risk advisory, insurance placement, and claims advocacy for energy, marine, aviation, and infrastructure." },
      { property: "og:title", content: "AIB | Structured Risk Advisory for Complex Industries" },
      { property: "og:description", content: "Structuring technically sound and commercially effective insurance programmes that protect operations and recovery." },
    ],
  }),
  component: HomePage,
});

type Credential =
  | { type: "numeric"; value: number; prefix?: string; suffix?: string; sub: string }
  | { type: "text"; label: string; sub: string };

const credentials: Credential[] = [
  { type: "numeric", value: 15, suffix: "+", sub: "Years Experience" },
  { type: "numeric", value: 2, prefix: "N", suffix: "B", sub: "Premium Capacity" },
  { type: "text", label: "NAICOM", sub: "Licensed Broker" },
  { type: "text", label: "NCRIB", sub: "Council Member" },
  { type: "text", label: "Global", sub: "Reach" },
];

const sectors = [
  { title: "Energy", desc: "Upstream, midstream and downstream coverage with sector-specific underwriting expertise.", img: energyImg },
  { title: "Marine", desc: "Hull, cargo, ports and offshore liability programmes structured for global trade.", img: marineImg },
  { title: "Aviation", desc: "Airline, aerospace, operator and liability programmes for fleet-driven exposures.", img: aviationImg },
  { title: "Engineering & Infrastructure", desc: "Project, construction and operational programmes for capital-intensive builds.", img: infraImg },
];

const services = [
  { icon: Shield, title: "Risk Assessment", desc: "Understanding exposures and programme requirements." },
  { icon: TrendingUp, title: "Market Intelligence", desc: "Evaluating available market opportunities and capacity." },
  { icon: Handshake, title: "Strategic Negotiation", desc: "Leveraging relationships and underwriting expertise." },
  { icon: ClipboardCheck, title: "Placement Optimization", desc: "Structuring final programme solutions on optimal terms." },
];

const claimsSteps = [
  { num: "01", title: "Incident", desc: "Immediate engagement following loss to establish facts and impact." },
  { num: "02", title: "Assessment", desc: "Technical evaluation of exposures, records, and value of the claim." },
  { num: "03", title: "Documentation", desc: "Structured evidence supporting claim preparation aligned to policy." },
  { num: "04", title: "Negotiation", desc: "Active engagement with insurers to achieve equitable outcomes." },
  { num: "05", title: "Settlement", desc: "Resolution and recovery aligned with policy terms and business needs." },
];

const advisors = [
  { icon: Scale, title: "Regulatory Compliance", desc: "Operating with technical and ethical standards." },
  { icon: Award, title: "Industry Expertise", desc: "Sector knowledge across complex and regulated markets." },
  { icon: Users, title: "Independent Advice", desc: "Without product or carrier bias." },
  { icon: Globe2, title: "Market Relationships", desc: "Access to local and international capacity." },
];

const globalCaps = [
  { icon: Globe2, title: "Global Reach", desc: "Access to international and local capacity markets." },
  { icon: Award, title: "Underwriting Strength", desc: "Relationships with rated specialist providers." },
  { icon: TrendingUp, title: "Market Intelligence", desc: "Insights that support informed risk decisions." },
  { icon: Briefcase, title: "Complex Risk Expertise", desc: "For large or specialist programme structuring." },
  { icon: Handshake, title: "Long-term Partnership", desc: "Built on continuity and delivering value." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white pt-32 pb-20 md:pt-44 md:pb-32 min-h-[100vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />
        </div>
        <div className="container-hero max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">
            Risk Advisory · Placement · Claims
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.02]"
          >
            Structured Risk<br />Advisory for<br /><span className="text-brand-red">Complex Industries.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-white/85 max-w-xl"
          >
            Structuring technically sound and commercially effective insurance programmes that protect operations and accelerate recovery.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link to="/contact" className="group inline-flex items-center gap-2 bg-brand-red px-6 py-3.5 text-sm font-semibold text-white rounded-sm hover:bg-brand-red-hover transition-colors">
              Request Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white rounded-sm hover:bg-white/10 transition-colors">
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-navy-deep text-white border-t border-white/10">
        <div className="container-page py-14 md:py-16">
          <FadeIn className="text-center mb-10">
            <p className="eyebrow">Trusted Credentials</p>
            <h2 className="mt-3 text-2xl md:text-4xl">Credentials That Support<br />Confident Decision-Making</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 text-center">
            {credentials.map((c, i) => (
              <FadeIn key={c.type === "text" ? c.label : `${c.value}-${c.sub}`} delay={i * 0.06}>
                <div className="text-3xl md:text-4xl font-serif">
                  {c.type === "numeric" ? (
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

      {/* DEEP SECTOR EXPERTISE */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Sector Expertise</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Deep Sector Expertise<br />Across Complex Industries</h2>
            <p className="mt-5 text-muted-foreground">
              For clients in sectors where operational and regulatory exposures demand experience and discipline, our sector-led approach delivers programme structuring aligned with the realities of operations.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sectors.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <Link to="/industries" className="group block bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-navy uppercase tracking-wider text-sm">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET EXECUTION */}
      <section className="bg-navy-deep text-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Market Execution</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Optimizing Insurance Spend<br />Without Compromising Protection</h2>
            <p className="mt-5 text-white/70">Strategic market engagement designed to optimize insurance spend without compromising protection integrity.</p>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="relative border border-white/10 bg-white/5 backdrop-blur-sm p-6 rounded-sm hover:bg-white/10 transition-colors h-full">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20 mb-5">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-bold tracking-widest text-white/50 mb-1">0{i + 1}</p>
                  <h3 className="text-base font-semibold uppercase tracking-wider">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4} className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-brand-red px-6 py-3.5 text-sm font-semibold rounded-sm hover:bg-brand-red-hover transition-colors group">
              Explore Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CLAIMS ADVOCACY */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Claims Advocacy</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Protecting Recovery.<br />Preserving Continuity.</h2>
            <p className="mt-5 text-muted-foreground">Our team works alongside clients throughout the claims process, ensuring documentation is structured and recovery objectives remain a priority.</p>
          </FadeIn>

          <div className="mt-14 grid lg:grid-cols-2 gap-10 items-start">
            <FadeIn>
              <ol className="space-y-5">
                {claimsSteps.map((step) => (
                  <li key={step.num} className="flex gap-4 border-b border-border/60 pb-5">
                    <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full bg-brand-red text-white text-xs font-bold">{step.num}</span>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-navy">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn delay={0.15} className="bg-white shadow-xl rounded-sm p-8">
              <p className="eyebrow">Claims Recovery Performance</p>
              <p className="mt-3 text-5xl md:text-6xl font-serif text-navy">₦5.2B</p>
              <p className="mt-2 text-sm font-medium text-navy">Industrial Exposure Successfully Managed</p>
              <p className="mt-4 text-sm text-muted-foreground">Representing structured recovery across complex operational environments and managed claims processes.</p>

              <div className="mt-8 grid grid-cols-2 gap-y-5 text-sm">
                {[
                  ["Sectors", "Energy, Marine, Aviation"],
                  ["Markets", "Local & International"],
                  ["Recovery Time", "Reduced Avg. Cycle"],
                  ["Engagement", "Multi-stakeholder"],
                ].map(([k, v]) => (
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
      <section className="bg-navy-deep text-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Global Capacity & Market Access</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Accessing Local Expertise<br />and International Capacity</h2>
            <p className="mt-5 text-white/70">Combining local market expertise with international capacity for specialist placement that responds to complex industrial programmes.</p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-12 relative">
            <div className="aspect-[16/8] rounded-sm overflow-hidden border border-white/10 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.27_0.05_254)_0%,transparent_70%)]" />
              <svg viewBox="0 0 800 400" className="absolute inset-0 h-full w-full opacity-40">
                <g fill="oklch(0.7 0.05 254 / 0.4)">
                  {Array.from({ length: 200 }).map((_, i) => (
                    <circle key={i} cx={Math.random() * 800} cy={Math.random() * 400} r={Math.random() * 1.5 + 0.3} />
                  ))}
                </g>
              </svg>
              {["EUROPE", "NORTH AMERICA", "SOUTH AMERICA", "AFRICA", "ASIA", "MIDDLE EAST"].map((region, i) => {
                const pos = [
                  { top: "20%", left: "48%" },
                  { top: "30%", left: "18%" },
                  { top: "65%", left: "28%" },
                  { top: "55%", left: "52%" },
                  { top: "30%", left: "75%" },
                  { top: "40%", left: "60%" },
                ][i];
                return (
                  <motion.div
                    key={region}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="absolute text-xs font-semibold tracking-widest text-white/90"
                    style={pos}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-red mb-1.5 animate-pulse" />
                    {region}
                  </motion.div>
                );
              })}
            </div>
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
            <Link to="/about" className="inline-flex items-center gap-2 bg-brand-red px-6 py-3.5 text-sm font-semibold rounded-sm hover:bg-brand-red-hover transition-colors group">
              Discuss Your Strategy <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* EXPERIENCED ADVISORS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Leadership & Experience</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Experienced Advisors.<br />Trusted Representation.</h2>
            <p className="mt-5 text-muted-foreground">Governance, professional accountability, and stakeholder context drive how we represent clients and engage with insurance markets locally and internationally.</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisors.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.06}>
                <div className="bg-cream rounded-sm p-6 h-full hover:shadow-md transition-shadow">
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
  );
}
