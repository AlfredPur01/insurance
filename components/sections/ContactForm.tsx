'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'

interface FormState {
  fullName: string
  company: string
  email: string
  phone: string
  industry: string
  service: string
  message: string
}

const EMPTY: FormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  service: '',
  message: '',
}

const INDUSTRIES = ['Energy', 'Marine', 'Aviation', 'Engineering & Infrastructure', 'Other']
const SERVICES = ['Risk Advisory', 'Market Execution', 'Claims Advocacy', 'Global Capacity']

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const result = await submitContactForm(form)
      if ('success' in result) {
        setStatus({
          type: 'success',
          text: 'Enquiry submitted — our team will be in touch shortly.',
        })
        setForm(EMPTY)
      } else {
        setStatus({ type: 'error', text: result.error })
      }
    } catch {
      setStatus({
        type: 'error',
        text: 'Something went wrong. Please try again or email us directly.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass =
    'w-full rounded-sm border border-border bg-white px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/40'

  return (
    <div className="rounded-sm bg-white p-7 shadow-sm md:p-10">
      <p className="eyebrow">Request a Consultation</p>
      <h2 className="mt-3 text-3xl md:text-4xl">Tell Us About Your Requirements.</h2>
      <p className="mt-4 text-sm text-muted-foreground">
        Complete the enquiry form and a member of our team will contact you to discuss your
        objectives and next steps.
      </p>

      {status && (
        <div
          role="status"
          className={`mt-6 flex items-center gap-2 rounded-sm px-4 py-3 text-sm ${
            status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-brand-red'
          }`}
        >
          {status.type === 'success' && <CheckCircle2 className="h-4 w-4 shrink-0" />}
          {status.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-navy">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-navy">
            Company Name
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Enter your company name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
            Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="industry" className="mb-2 block text-sm font-medium text-navy">
            Industry / Sector
          </label>
          <select
            id="industry"
            name="industry"
            value={form.industry}
            onChange={handleChange}
            className={`${fieldClass} ${form.industry ? 'text-navy' : 'text-muted-foreground'}`}
          >
            <option value="">Select your industry</option>
            {INDUSTRIES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-navy">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${fieldClass} ${form.service ? 'text-navy' : 'text-muted-foreground'}`}
          >
            <option value="">Select your service</option>
            {SERVICES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
            How can we help
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Please provide details about your enquiry"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-navy-deep py-4 text-sm font-semibold text-white transition-colors hover:bg-navy disabled:opacity-60"
          >
            {submitting ? 'Submitting...' : 'Submit Enquiry'}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </div>
  )
}
