import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, Users, ClipboardCheck, Shield, Globe2, Handshake } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { PageHero } from '@/components/sections/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'
import type { IconCard } from '@/types'

export const metadata: Metadata = {
  title: 'Contact Advocate',
  description:
    'Reach Advocate Insurance Brokers to discuss risk advisory, insurance placement, claims advocacy, or specialist market access.',
}

const benefits: IconCard[] = [
  { icon: Users, title: 'Expert Guidance', desc: 'Experienced professionals providing clarity on your risk landscape.' },
  { icon: ClipboardCheck, title: 'Tailored Solutions', desc: 'Solutions designed around your operational goals and risk appetite.' },
  { icon: Shield, title: 'Stronger Protection', desc: 'Comprehensive strategies that protect assets, people, and performance.' },
  { icon: Globe2, title: 'Local & Global Reach', desc: 'Access to leading insurers and capacity across local and international markets.' },
  { icon: Handshake, title: 'Long-term Partnership', desc: 'A partner invested in your success and committed to delivering value.' },
]

interface OfficeInfo {
  img: string
  title: string
  address: string
  phone: string
  email: string
}

const offices: OfficeInfo[] = [
  {
    img: '/images/office-lagos.jpg',
    title: 'Lagos (Head Office)',
    address: 'No 27a Babatunde Jose, Off Adetokunbo Ademola, Victoria Island, Lagos, Nigeria.',
    phone: '+234 9131036089, +234 8087281548',
    email: 'info@aibltd.insure',
  },
  {
    img: '/images/office-branch.jpg',
    title: 'Port Harcourt Branch',
    address: '55/57 Apara Road, GRA Phase II, Port Harcourt, Rivers State, Nigeria.',
    phone: '+234 9131036089, +234 8087281548',
    email: 'info@aibltd.insure',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Consultation"
        title={
          <>
            Let&apos;s Start A Strategic
            <br />
            Conversation.
          </>
        }
        description="Whether you're reviewing your insurance programme, evaluating risk exposures, seeking claims advocacy support, or exploring specialist market access, our team is available to discuss your requirements."
        ctaLabel="Request Consultation"
        image="/images/hero-building.jpg"
      />

      {/* FORM + SIDEBAR */}
      <section className="-mt-1 bg-cream py-20 md:py-24">
        <div className="container-page grid items-start gap-6 lg:grid-cols-3 lg:gap-8">
          <FadeIn className="lg:col-span-2">
            <ContactForm />
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="rounded-sm bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-navy">
                  Business Enquiries
                </p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="font-semibold text-navy">Monday &ndash; Friday</span>
                  <span className="text-muted-foreground">8:00 AM &ndash; 5:00 PM</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-deep text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-navy">Phone</p>
                      <p className="text-sm text-muted-foreground">+234 9131036089</p>
                      <p className="text-sm text-muted-foreground">+234 8087281548</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-deep text-white">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-navy">Email</p>
                      <p className="text-sm text-muted-foreground">info@aibltd.insure</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-sm bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-navy">Our Offices</p>
                {offices.map((o, i) => (
                  <div key={o.title}>
                    {i > 0 && <div className="my-6 border-t border-border" />}
                    <div className="mt-5 flex gap-4">
                      <Image
                        src={o.img}
                        alt={o.title}
                        width={112}
                        height={112}
                        className="h-28 w-28 shrink-0 rounded-sm object-cover"
                      />
                      <div className="min-w-0 text-sm">
                        <p className="font-bold text-brand-red">{o.title}</p>
                        <p className="mt-2 text-muted-foreground">{o.address}</p>
                        <p className="mt-2 text-muted-foreground">{o.phone}</p>
                        <p className="text-muted-foreground">{o.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CONTACT Advocate */}
      <section className="bg-navy-deep py-20 text-white md:py-28">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">Why Contact Advocate</p>
            <h2 className="mt-3 text-3xl md:text-5xl">We Deliver More Than Insurance.</h2>
          </FadeIn>
          <div className="mt-14 grid gap-x-6 gap-y-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
  )
}
