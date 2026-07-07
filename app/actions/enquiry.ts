'use server'

import { z } from 'zod'
import { resend } from '@/lib/resend'
import { NotificationEmail } from '@/emails/notification'
import { ConfirmationEmail } from '@/emails/confirmation'
import type { ActionResult } from '@/types'

const enquirySchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('A valid email address is required'),
  phone: z.string().optional(),
  industry: z.string().min(1, 'Industry is required'),
  message: z.string().min(1, 'A message is required'),
})

const FROM = 'Advocate Insurance Brokers <info@aibltd.insure>'
const TEAM_EMAIL = 'info@aibltd.insure'

export async function submitEnquiryForm(formData: unknown): Promise<ActionResult> {
  const parsed = enquirySchema.safeParse(formData)

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
      subject: `New ${data.industry} Enquiry from ${data.name}`,
      react: NotificationEmail({
        fullName: data.name,
        email: data.email,
        phone: data.phone,
        industry: data.industry,
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
      react: ConfirmationEmail({ fullName: data.name }),
    })

    return { success: true }
  } catch {
    return { error: 'Something went wrong. Please try again or email us directly.' }
  }
}
