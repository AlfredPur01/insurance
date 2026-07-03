import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Phone, Mail, Users, ClipboardCheck, Shield, Globe2, Handshake } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHero } from "@/components/site/PageHero";
import { toast } from "sonner";
import { submitContactForm } from "@/server/contact";
import heroImg from "@/assets/hero-building.jpg";
import lagosImg from "@/assets/office-lagos.jpg";
import branchImg from "@/assets/office-branch.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AIB | Let's Start a Strategic Conversation" },
      { name: "description", content: "Reach AIB to discuss risk advisory, insurance placement, claims advocacy, or specialist market access." },
    ],
  }),
  component: ContactPage,
});

const benefits = [
  { icon: Users, title: "Expert Guidance", desc: "Experienced professionals providing clarity on your risk landscape." },
  { icon: ClipboardCheck, title: "Tailored Solutions", desc: "Solutions designed around your operational goals and risk appetite." },
  { icon: Shield, title: "Stronger Protection", desc: "Comprehensive strategies that protect assets, people, and performance." },
  { icon: Globe2, title: "Local & Global Reach", desc: "Access to leading insurers and capacity across local and international markets." },
  { icon: Handshake, title: "Long-term Partnership", desc: "A partner invested in your success and committed to delivering value." },
];

function ContactPage() {
  const [form, setForm] = useState({
    fullName: "", company: "", email: "", phone: "", industry: "", service: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitContactForm({ data: form });
      toast.success("Enquiry submitted — our team will be in touch shortly.");
      setForm({ fullName: "", company: "", email: "", phone: "", industry: "", service: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact & Consultation"
        title={<>Let's Start A Strategic<br />Conversation.</>}
        description="Whether you're reviewing your insurance programme, evaluating risk exposures, seeking claims advocacy support, or exploring specialist market access, our team is available to discuss your requirements."
        ctaLabel="Request Consultation"
        image={heroImg}
      />

      {/* FORM + CONTACT INFO */}
      <section className="bg-cream py-20 md:py-24 -mt-1">
        <div className="container-page grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* FORM */}
          <FadeIn className="lg:col-span-2">
            <div className="bg-white rounded-sm shadow-sm p-7 md:p-10">
              <p className="eyebrow">Request a Consultation</p>
              <h2 className="mt-3 text-3xl md:text-4xl">Tell Us About Your Requirements.</h2>
              <p className="mt-4 text-sm text-muted-foreground">Complete the enquiry form and a member of our team will contact you to discuss your objectives and next steps.</p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                <Field label="Company Name" name="company" value={form.company} onChange={handleChange} placeholder="Enter your company name" />
                <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
                <Field label="Phone Number" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" />
                <SelectField label="Industry / Sector" name="industry" value={form.industry} onChange={handleChange}
                  options={["Energy", "Marine", "Aviation", "Engineering & Infrastructure", "Other"]} placeholder="Select your industry" />
                <SelectField label="Service of Interest" name="service" value={form.service} onChange={handleChange}
                  options={["Risk Advisory", "Market Execution", "Claims Advocacy", "Global Capacity"]} placeholder="Select your service" />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-navy mb-2">How can we help</label>
                  <textarea name="message" rows={5} value={form.message} onChange={handleChange}
                    placeholder="Please provide details about your enquiry"
                    className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={submitting}
                    className="group w-full inline-flex items-center justify-center gap-3 bg-navy-deep text-white py-4 text-sm font-semibold rounded-sm hover:bg-navy transition-colors disabled:opacity-60">
                    {submitting ? "Submitting..." : "Submit Enquiry"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-sm shadow-sm p-7">
                <p className="text-xs font-bold tracking-widest uppercase text-navy">Business Enquires</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="font-semibold text-navy">Monday – Friday</span>
                  <span className="text-muted-foreground">8:00 AM – 5:00 PM</span>
                </div>
                <div className="mt-6 space-y-4">
                  <ContactItem icon={Phone} title="Phone" lines={["+234 9131036089", "+234 8087281548"]} />
                  <ContactItem icon={Mail} title="Email" lines={["info@aibltd.insure"]} />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-sm shadow-sm p-7">
                <p className="text-xs font-bold tracking-widest uppercase text-navy">Our Offices</p>
                <Office img={lagosImg} title="Lagos (Head Office)"
                  address="No 27a Babatunde Jose, Off Adetokunbo Ademola, Victoria Island, Lagos, Nigeria."
                  phone="+234 9131036089, +234 8087281548" email="info@aibltd.insure" />
                <div className="my-6 border-t border-border" />
                <Office img={branchImg} title="Branch Office"
                  address="55/57 Apara Road, GRA Phase II, Port Harcourt, Rivers State, Nigeria."
                  phone="+234 9131036089, +234 8087281548" email="info@aibltd.insure" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CONTACT AIB */}
      <section className="bg-navy-deep text-white py-20 md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Why Contact AIB</p>
            <h2 className="mt-3 text-3xl md:text-5xl">We Deliver More Than Insurance.</h2>
          </FadeIn>
          <div className="mt-14 grid gap-y-12 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.07}>
                <div className="flex flex-col items-center">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-white/25">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, value, onChange, placeholder, required, type = "text" }: {
  label: string; name: string; value: string; placeholder?: string; required?: boolean; type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-2">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required}
        className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red" />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, placeholder }: {
  label: string; name: string; value: string; placeholder: string; options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-2">{label}</label>
      <select name={name} value={value} onChange={onChange}
        className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red text-muted-foreground">
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function ContactItem({ icon: Icon, title, lines }: { icon: typeof Phone; title: string; lines: string[] }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full bg-navy-deep text-white">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="font-semibold text-navy text-sm">{title}</p>
        {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
      </div>
    </div>
  );
}

function Office({ img, title, address, phone, email }: { img: string; title: string; address: string; phone: string; email: string }) {
  return (
    <div className="mt-5 flex gap-4">
      <img src={img} alt={title} className="h-28 w-28 shrink-0 rounded-sm object-cover" loading="lazy" />
      <div className="min-w-0 text-sm">
        <p className="font-bold text-brand-red">{title}</p>
        <p className="mt-2 text-muted-foreground">{address}</p>
        <p className="mt-2 text-muted-foreground">{phone}</p>
        <p className="text-muted-foreground">{email}</p>
      </div>
    </div>
  );
}
