import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export interface ConfirmationEmailProps {
  fullName: string
}

const NAVY = '#10182e'
const RED = '#c0392b'
const MUTED = '#64748b'

export function ConfirmationEmail({ fullName }: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Advocate Insurance Brokers</Preview>
      <Body style={{ backgroundColor: '#f8f9fc', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: '24px 0' }}>
        <Container style={{ backgroundColor: '#ffffff', maxWidth: '600px', margin: '0 auto', borderRadius: '4px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <Section style={{ backgroundColor: NAVY, padding: '32px', textAlign: 'center' as const }}>
            <Text style={{ color: RED, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', margin: 0, fontWeight: 700 }}>
              Advocate Insurance Brokers
            </Text>
            <Heading style={{ color: '#ffffff', fontSize: '24px', margin: '10px 0 0', fontWeight: 600 }}>
              Thank You for Reaching Out
            </Heading>
          </Section>

          <Section style={{ padding: '32px' }}>
            <Text style={{ color: NAVY, fontSize: '16px', margin: '0 0 16px' }}>Dear {fullName},</Text>
            <Text style={{ color: MUTED, fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' }}>
              Thank you for contacting Advocate Insurance Brokers Ltd. We have
              received your enquiry and a member of our team will be in touch shortly to discuss your
              requirements and next steps.
            </Text>
            <Text style={{ color: MUTED, fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' }}>
              As a specialist insurance broker, we provide structured risk advisory, insurance
              placement, and claims advocacy for organisations operating in energy, marine, aviation,
              and engineering infrastructure sectors.
            </Text>
            <Text style={{ color: MUTED, fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' }}>
              If your enquiry is time-sensitive, please contact us directly using the details below.
            </Text>

            <Hr style={{ borderColor: '#e2e8f0', margin: '24px 0' }} />

            <Text style={{ color: NAVY, fontSize: '13px', fontWeight: 700, margin: '0 0 6px' }}>
              Contact Details
            </Text>
            <Text style={{ color: MUTED, fontSize: '14px', margin: '0 0 4px' }}>
              Phone: +234 9131036089 / +234 8087281548
            </Text>
            <Text style={{ color: MUTED, fontSize: '14px', margin: '0 0 4px' }}>
              Email: info@aibltd.insure
            </Text>
            <Text style={{ color: MUTED, fontSize: '14px', margin: 0 }}>
              Business Hours: Monday &ndash; Friday, 8:00 AM &ndash; 5:00 PM
            </Text>
          </Section>

          <Section style={{ backgroundColor: NAVY, padding: '20px 32px', textAlign: 'center' as const }}>
            <Text style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, margin: '0 0 4px' }}>
              Advocate Insurance Brokers &mdash; Structured Risk Advisory for Complex Industries
            </Text>
            <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: 0 }}>
              Lagos (Head Office) &middot; Port Harcourt Branch &middot; Nigeria
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ConfirmationEmail
