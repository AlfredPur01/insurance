import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { submitEnquiryForm } from "@/server/enquiry";
import { FadeIn } from "./FadeIn";

interface Props {
  industry: string;
}

export function IndustryContactForm({ industry }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitEnquiryForm({ data: { ...form, industry } });
      toast.success("Enquiry submitted — our team will be in touch shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="container-page max-w-2xl mx-auto">
        <FadeIn>
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Discuss Your {industry} Risk Exposure.</h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Complete the form below and a member of our team will contact you to discuss your requirements and next steps.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                required placeholder="Enter your full name"
                className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Email Address <span className="text-brand-red">*</span>
              </label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                required placeholder="Enter your email"
                className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-navy mb-2">
                Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
              </label>
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-navy mb-2">
                Message <span className="text-brand-red">*</span>
              </label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                required rows={5} placeholder="Describe your risk advisory requirements"
                className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit" disabled={submitting}
                className="group w-full inline-flex items-center justify-center gap-3 bg-brand-red text-white py-4 text-sm font-semibold rounded-sm hover:bg-brand-red-hover transition-colors disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Enquiry"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
