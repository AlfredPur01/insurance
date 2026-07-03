import { createFileRoute } from "@tanstack/react-router";
import { Shield, AlertTriangle, Users, Award, Anchor, Globe2, Package, FileText } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHero } from "@/components/site/PageHero";
import { IndustryContactForm } from "@/components/site/IndustryContactForm";
import heroImg from "@/assets/industry-marine.jpg";
import marineImg from "@/assets/industry-marine.jpg";

export const Route = createFileRoute("/industries/marine")({
  head: () => ({
    meta: [
      { title: "Marine Risk Advisory | AIB" },
      { name: "description", content: "Structured risk advisory, insurance placement, and claims advocacy for maritime operations, cargo, hull, and offshore facilities." },
    ],
  }),
  component: MarinePage,
});

const cards = [
  {
    icon: Shield,
    title: "Sector Challenges",
    desc: "Global trade volatility, port congestion and infrastructure risk, complex liability frameworks under international maritime law, crew welfare obligations, piracy exposure, and evolving IMO environmental regulations.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Environment",
    desc: "Hull and machinery damage, cargo loss and contamination, P&I liability, charterers' liability, offshore construction and installation risk, and port and terminal operational exposures.",
  },
  {
    icon: Users,
    title: "AIB Approach",
    desc: "Programme design aligned with international marine markets and IMO standards, structured coverage across hull, cargo, and liability lines, with active claims management when incidents occur at sea or port.",
  },
  {
    icon: Award,
    title: "Market Capability",
    desc: "Access to leading marine underwriters including Lloyd's of London, IG P&I Clubs, and international markets with strong Nigerian coastal and regional capacity for local and combined placements.",
  },
];

const capabilities = [
  { icon: Anchor, title: "Hull & Machinery", desc: "Comprehensive physical loss and damage coverage for vessels operating in coastal, offshore, and international waters." },
  { icon: Package, title: "Cargo & Trade", desc: "Marine cargo insurance for import, export, and transit operations, including open covers and project cargo for bulk and containerised shipments." },
  { icon: Globe2, title: "P&I & Liability", desc: "Protection and indemnity, charterers' liability, and third-party liability coverage aligned with international trading club requirements." },
  { icon: FileText, title: "Offshore & Construction", desc: "Offshore construction all risks, installation floater, and marine warranty for capital-intensive offshore exploration and energy projects." },
];

function MarinePage() {
  return (
    <>
      <PageHero
        eyebrow="Marine"
        title={<>Structuring Protection Across<br />Maritime Operations and Trade.</>}
        description="AIB provides risk advisory, insurance placement, and claims advocacy for shipowners, operators, charterers, cargo interests, and offshore contractors across the maritime sector."
        image={heroImg}
      />

      {/* OVERVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <p className="eyebrow">Sector Overview</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Technical Expertise Across the Maritime Sector.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Maritime operations span a uniquely broad risk spectrum — from the physical exposure of vessels navigating international waters to the complex liability frameworks governing cargo, crew, and third-party interests under conventions such as the Hague-Visby Rules, CLC, and MARPOL. Effective marine insurance demands both technical precision and market access that goes beyond standard policy wordings.
              </p>
              <p>
                AIB's marine practice supports shipowners, operators, cargo interests, terminal operators, and offshore contractors with structured insurance programmes tailored to the commercial realities of the maritime industry. We work with specialist underwriters who understand how marine losses unfold and who have the appetite and capacity to respond appropriately when they do.
              </p>
              <p>
                Whether your exposure is a single voyage, a managed fleet, a bulk cargo programme, or an offshore installation project, we structure coverage that reflects the actual risk profile of your operations — and advocate robustly on your behalf when claims arise.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img src={marineImg} alt="Marine operations" className="rounded-sm object-cover w-full h-80 lg:h-96 shadow-md" loading="lazy" />
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
            <h2 className="mt-3 text-3xl md:text-5xl">Understanding the Marine Risk Landscape.</h2>
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
            <h2 className="mt-3 text-3xl md:text-4xl">Marine Solutions Across Vessels, Cargo, and Liability.</h2>
            <p className="mt-4 text-muted-foreground text-sm">We engage specialist marine markets to structure programmes that address the real exposure profile of your operations — not off-the-shelf wordings applied without context.</p>
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

      <IndustryContactForm industry="Marine" />
    </>
  );
}
