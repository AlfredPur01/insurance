'use server'

import { z } from 'zod'
import { resend } from '@/lib/resend'
import { NotificationEmail } from '@/emails/notification'
import { ConfirmationEmail } from '@/emails/confirmation'
import type { ActionResult } from '@/types'

const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  company: z.string().optional(),
  email: z.string().email('A valid email address is required'),
  phone: z.string().optional(),
  industry: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
})

const FROM = 'Advocate Insurance Brokers <onboarding@resend.dev>'
const TEAM_EMAIL = 'info@aibltd.insure'

export async function submitContactForm(formData: unknown): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(formData)

  if (!parsed.success) {
    const first = parsed.error.issues[0]
    return { error: first?.message ?? 'Please check the form and try again.' }
  }

  const data = parsed.data

  if (!process.env.RESEND_API_KEY) {
    return { error: 'Email service is not configured. Please email info@aibltd.insure directly.' }
  }

  try {
    const notification = await resend.emails.send({
      from: FROM,
      to: TEAM_EMAIL,
      replyTo: data.email,
      subject: `New Enquiry from ${data.fullName}${data.company ? ` - ${data.company}` : ''}`,
      react: NotificationEmail({
        fullName: data.fullName,
        company: data.company,
        email: data.email,
        phone: data.phone,
        industry: data.industry,
        service: data.service,
        message: data.message,
      }),
    })

    if (notification.error) {
      return { error: 'Something went wrong sending your enquiry. Please try again.' }
    }

    await resend.emails.send({
      from: FROM,
      to: data.email,
      subject: 'Thank you for contacting Advocate Insurance Brokers',
      react: ConfirmationEmail({ fullName: data.fullName }),
    })

    return { success: true }
  } catch {
    return { error: 'Something went wrong. Please try again or email us directly.' }
  }
}
