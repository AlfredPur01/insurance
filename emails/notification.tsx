import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

export interface NotificationEmailProps {
  fullName: string
  company?: string
  email: string
  phone?: string
  industry?: string
  service?: string
  message?: string
}

const NAVY = '#10182e'
const RED = '#c0392b'
const MUTED = '#64748b'

export function NotificationEmail({
  fullName,
  company,
  email,
  phone,
  industry,
  service,
  message,
}: NotificationEmailProps) {
  const rows: { label: string; value?: string }[] = [
    { label: 'Full Name', value: fullName },
    { label: 'Company', value: company },
    { label: 'Email', value: email },
    { label: 'Phone', value: phone },
    { label: 'Industry / Sector', value: industry },
    { label: 'Service of Interest', value: service },
  ]

  return (
    <Html>
      <Head />
      <Preview>New enquiry from {fullName}</Preview>
      <Body style={{ backgroundColor: '#f8f9fc', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: '24px 0' }}>
        <Container style={{ backgroundColor: '#ffffff', maxWidth: '600px', margin: '0 auto', borderRadius: '4px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <Section style={{ backgroundColor: NAVY, padding: '28px 32px' }}>
            <Text style={{ color: RED, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', margin: 0, fontWeight: 700 }}>
              New Website Enquiry
            </Text>
            <Heading style={{ color: '#ffffff', fontSize: '22px', margin: '8px 0 0', fontWeight: 600 }}>
              AIB &mdash; Contact Form Submission
            </Heading>
          </Section>

          <Section style={{ padding: '28px 32px' }}>
            <Text style={{ color: MUTED, fontSize: '14px', margin: '0 0 20px' }}>
              A new enquiry has been submitted through the AIB website. Details are below.
            </Text>

            {rows.map((r) => (
              <Row key={r.label} style={{ marginBottom: '14px' }}>
                <Text style={{ color: MUTED, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 2px' }}>
                  {r.label}
                </Text>
                <Text style={{ color: NAVY, fontSize: '15px', fontWeight: 600, margin: 0 }}>
                  {r.value && r.value.length > 0 ? r.value : '—'}
                </Text>
              </Row>
            ))}

            <Hr style={{ borderColor: '#e2e8f0', margin: '20px 0' }} />

            <Text style={{ color: MUTED, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>
              Message
            </Text>
            <Text style={{ color: NAVY, fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
              {message && message.length > 0 ? message : 'No message provided.'}
            </Text>
          </Section>

          <Section style={{ backgroundColor: '#f8f9fc', padding: '16px 32px', borderTop: '1px solid #e2e8f0' }}>
            <Text style={{ color: MUTED, fontSize: '12px', margin: 0 }}>
              AIB &mdash; African Insurance Brokers Limited. This message was generated automatically.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default NotificationEmail
