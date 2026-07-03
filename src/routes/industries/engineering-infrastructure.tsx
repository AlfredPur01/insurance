import { createFileRoute } from "@tanstack/react-router";
import { Shield, AlertTriangle, Users, Award, Building2, Wrench, FileText, Globe2 } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHero } from "@/components/site/PageHero";
import { IndustryContactForm } from "@/components/site/IndustryContactForm";
import heroImg from "@/assets/industry-infrastructure.jpg";
import infraImg from "@/assets/industry-infrastructure.jpg";

export const Route = createFileRoute("/industries/engineering-infrastructure")({
  head: () => ({
    meta: [
      { title: "Engineering & Infrastructure Risk Advisory | AIB" },
      { name: "description", content: "Structured risk advisory, insurance placement, and claims advocacy for construction, engineering, and long-term infrastructure projects." },
    ],
  }),
  component: EngineeringPage,
});

const cards = [
  {
    icon: Shield,
    title: "Sector Challenges",
    desc: "Complex multi-stakeholder project structures, long construction and commissioning timelines, demanding contractual liability obligations, natural peril exposure, and significant third-party property and bodily injury risk.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Environment",
    desc: "Construction all risks (CAR), erection all risks (EAR), delay in start-up, contractors' plant and equipment, professional indemnity, public liability, and environmental impairment liability.",
  },
  {
    icon: Users,
    title: "AIB Approach",
    desc: "Bespoke programme structuring for project-specific risk profiles, including delay in start-up and post-completion operational coverage, with active claims support throughout the full project and operational lifecycle.",
  },
  {
    icon: Award,
    title: "Market Capability",
    desc: "Access to specialist construction and engineering underwriters, project finance-compliant programme design, and transition support to long-term operational asset coverage as projects move into service.",
  },
];

const capabilities = [
  { icon: Building2, title: "Construction All Risks", desc: "Comprehensive CAR coverage for civil engineering and building construction projects, including third-party liability and existing structure protection." },
  { icon: Wrench, title: "Erection All Risks", desc: "EAR programmes for mechanical, electrical, and plant erection projects, covering the full period from commencement through testing and commissioning." },
  { icon: FileText, title: "Delay in Start-Up", desc: "Business interruption and advance loss of profits coverage protecting project sponsors from revenue loss when commissioning is delayed by an insured event." },
  { icon: Globe2, title: "Wrap-Up & Liability", desc: "Owner-controlled and contractor-controlled wrap-up liability programmes providing unified third-party coverage across complex multi-contractor project structures." },
];

function EngineeringPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering & Infrastructure"
        title={<>Protecting Capital Projects and<br />Long-Term Infrastructure Assets.</>}
        description="AIB provides risk advisory, insurance placement, and claims advocacy for construction contractors, project owners, developers, and operators of major engineering and infrastructure assets."
        image={heroImg}
      />

      {/* OVERVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <p className="eyebrow">Sector Overview</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Bespoke Coverage for Capital-Intensive Projects.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Large-scale construction and infrastructure projects carry a risk profile that evolves continuously — from design and procurement through construction, commissioning, and long-term operation. Each phase introduces distinct exposures, and insurance programmes that don't account for that lifecycle leave gaps that can prove costly when losses arise.
              </p>
              <p>
                AIB's engineering and infrastructure practice works with project owners, developers, EPC contractors, and financiers to structure insurance programmes aligned with the risk profile of each specific project. We bring technical understanding of construction and engineering risk to the market placement process — engaging underwriters who have genuine appetite for complex project risks and who can offer terms that hold up under scrutiny at claims time.
              </p>
              <p>
                Our involvement includes advising on contractual insurance requirements, structuring programmes that satisfy lender requirements, managing the transition from construction to operational coverage, and providing active claims support when incidents occur — at any stage of the project lifecycle.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img src={infraImg} alt="Infrastructure projects" className="rounded-sm object-cover w-full h-80 lg:h-96 shadow-md" loading="lazy" />
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
            <h2 className="mt-3 text-3xl md:text-5xl">Understanding the Engineering Risk Landscape.</h2>
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
            <h2 className="mt-3 text-3xl md:text-4xl">Structured Solutions Across the Project Lifecycle.</h2>
            <p className="mt-4 text-muted-foreground text-sm">From construction commencement through commissioning to long-term operational insurance, we structure programmes that evolve with your project and remain fit for purpose at every stage.</p>
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

      <IndustryContactForm industry="Engineering & Infrastructure" />
    </>
  );
}
