import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Globe, Shield, Users, ClipboardCheck, Building2, TrendingUp, Briefcase,
  FileText, Handshake, BarChart3, ChevronDown,
} from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-oil-platform.jpg";

export const Route = createFileRoute("/claims-advocacy")({
  head: () => ({
    meta: [
      { title: "Claims Advocacy | AIB Recovery & Continuity" },
      { name: "description", content: "Structured claims advocacy protecting cash flow, operational continuity, and recovery outcomes following loss events." },
    ],
  }),
  component: ClaimsPage,
});

const process = [
  { icon: Globe, title: "Incident Reported", desc: "Immediate engagement following a loss event to establish facts, assess operational impact, and initiate response procedures." },
  { icon: Shield, title: "Loss Assessment", desc: "Technical evaluation of financial, operational and asset-related exposures to determine scope and value of the claim." },
  { icon: Users, title: "Claims Preparation", desc: "Compilation of documentation, supporting evidence, financial records, and claim submissions aligned with policy requirements." },
  { icon: ClipboardCheck, title: "Insurer Engagement", desc: "Settlement outcomes aligned with policy intent, business continuity priorities, and recovery objectives." },
  { icon: Building2, title: "Recovery Resolution", desc: "Settlement outcomes aligned with policy intent, business continuity priorities, and recovery objectives." },
];

const framework = [
  { icon: TrendingUp, title: "Financial Recovery", desc: "Protecting cash flow and supporting organizational stability following a loss." },
  { icon: ClipboardCheck, title: "Operational Continuity", desc: "Reducing disruption and supporting recovery planning." },
  { icon: Users, title: "Stakeholder Coordination", desc: "Managing engagement across insurers, adjusters, and internal stakeholders." },
  { icon: FileText, title: "Documentation Management", desc: "Structuring evidence and supporting claim preparation." },
  { icon: Handshake, title: "Negotiation Support", desc: "Advocating for equitable and timely outcomes." },
  { icon: Building2, title: "Recovery Oversight", desc: "Supporting the claims process through resolution." },
];

const metrics = [
  { icon: Globe, title: "Claims Advocated", desc: "Complex claims supported across multiple sectors." },
  { icon: Shield, title: "Recoveries Supported", desc: "Total value of recoveries advocated for clients." },
  { icon: Users, title: "Resolution Time", desc: "Average reduction in claims resolution timelines." },
  { icon: ClipboardCheck, title: "Client Retention", desc: "Clients who continue to trust us with their risk needs." },
  { icon: Building2, title: "Local & International", desc: "Access to specialist insurers and global markets." },
];

const faqs = [
  { q: "When should claims advocacy begin?", a: "Claims advocacy should begin immediately following a loss event to ensure documentation, stakeholder engagement, and recovery planning commence without delay." },
  { q: "Why is documentation important?", a: "Structured documentation supports recovery and ensures policy intent is preserved through every stage of the claim." },
  { q: "Does AIB negotiate directly with insurers?", a: "Yes — we engage directly with insurers and decision-makers on behalf of clients." },
  { q: "Can claims advocacy support operational continuity?", a: "Absolutely. Recovery extends beyond settlement to protecting cash flow and continuity." },
  { q: "What types of claims do you handle?", a: "Property, business interruption, marine, aviation, energy, and complex liability claims." },
  { q: "How does AIB ensure better recovery outcomes?", a: "Through structured documentation, technical evaluation, and active negotiation aligned to policy objectives." },
];

function ClaimsPage() {
  return (
    <>
      <PageHero
        eyebrow="Claims Advocacy"
        title={<>Protecting Recovery.<br />Preserving Continuity.</>}
        description="When losses occur, effective claims advocacy becomes critical to protecting cash flow, preserving operational continuity, and accelerating financial recovery. Our team works alongside clients throughout the claims process."
        ctaLabel="Request Claims Advisory Support"
        image={heroImg}
      />

      {/* PROCESS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Claims Process</p>
            <h2 className="mt-3 text-3xl md:text-5xl">A Structured Framework<br />For Recovery.</h2>
            <p className="mt-5 text-muted-foreground">Every claim requires technical understanding, disciplined documentation, stakeholder coordination, and active engagement. Our process is designed to support clients from incident notification through final settlement.</p>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {process.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <div className="bg-cream rounded-sm p-6 h-full hover:shadow-md transition-shadow">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 text-navy">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* RECOVERY FRAMEWORK */}
      <section className="bg-navy-deep text-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Recovery Framework</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Recovery Extends Beyond<br />Settlement.</h2>
            <p className="mt-5 text-white/70">Effective claims advocacy is not simply about claim submission. It involves protecting business continuity, supporting stakeholder confidence, managing financial impact, and accelerating operational recovery.</p>
          </FadeIn>
          <div className="mt-14 grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {framework.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.06}>
                <div className="border-t border-white/15 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Recovery Metrics</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Protecting Client Interests<br />Throughout The Claims Lifecycle.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {metrics.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.06}>
                <div className="bg-white rounded-sm p-6 h-full">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 text-navy">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-navy">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page max-w-3xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="eyebrow">Frequently Asked Questions</p>
          </FadeIn>
          <div className="bg-cream rounded-sm divide-y divide-border/60">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />)}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Let's Discuss Your Claims Strategy."
        description="Whether responding to a loss event or strengthening recovery preparedness, our team provides structured claims advocacy support designed to protect recovery outcomes."
        ctaLabel="Request Claims Advisory Support"
      />
    </>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-semibold text-navy text-sm md:text-base">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""} text-brand-red`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }} className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
