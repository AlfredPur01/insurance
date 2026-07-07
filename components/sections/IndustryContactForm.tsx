'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { submitEnquiryForm } from '@/app/actions/enquiry'

interface IndustryContactFormProps {
  industry: string
}

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

const EMPTY: FormState = { name: '', email: '', phone: '', message: '' }

export function IndustryContactForm({ industry }: IndustryContactFormProps) {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const result = await submitEnquiryForm({ ...form, industry })
      if ('success' in result) {
        setStatus({ type: 'success', text: 'Enquiry submitted — our team will be in touch shortly.' })
        setForm(EMPTY)
      } else {
        setStatus({ type: 'error', text: result.error })
      }
    } catch {
      setStatus({ type: 'error', text: 'Something went wrong. Please try again or email us directly.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="container-page mx-auto max-w-2xl">
        <FadeIn>
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Discuss Your {industry} Risk Exposure.</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Complete the form below and a member of our team will contact you to discuss your
            requirements and next steps.
          </p>

          {status && (
            <div
              role="status"
              className={`mt-6 flex items-center gap-2 rounded-sm px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-brand-red'
              }`}
            >
              {status.type === 'success' && <CheckCircle2 className="h-4 w-4 shrink-0" />}
              {status.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="ind-name" className="mb-2 block text-sm font-medium text-navy">
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="ind-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              />
            </div>
            <div>
              <label htmlFor="ind-email" className="mb-2 block text-sm font-medium text-navy">
                Email Address <span className="text-brand-red">*</span>
              </label>
              <input
                id="ind-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="ind-phone" className="mb-2 block text-sm font-medium text-navy">
                Phone Number <span className="text-xs text-muted-foreground">(Optional)</span>
              </label>
              <input
                id="ind-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="ind-message" className="mb-2 block text-sm font-medium text-navy">
                Message <span className="text-brand-red">*</span>
              </label>
              <textarea
                id="ind-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your risk advisory requirements"
                className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-brand-red py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red-hover disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Submit Enquiry'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
