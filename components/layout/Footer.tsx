import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, Globe } from 'lucide-react'

const SERVICES = ['Risk Advisory', 'Market Execution', 'Claims Advocacy', 'Global Capacity']

const INDUSTRIES: { label: string; href: string }[] = [
  { label: 'Energy', href: '/industries/energy' },
  { label: 'Marine', href: '/industries/marine' },
  { label: 'Aviation', href: '/industries/aviation' },
  { label: 'Engineering & Infrastructure', href: '/industries/engineering-infrastructure' },
]

const SOCIALS = [
  { Icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:info@aibltd.insure', label: 'Email' },
  { Icon: Globe, href: 'https://aibltd.insure', label: 'Website' },
]

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-md bg-white p-1 ring-1 ring-white/10">
            <Image src="/images/logo-aib.png" alt="Advocate Insurance Brokers" width={48} height={48} className="h-12 w-12" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Providing structured risk advisory, market execution, and claims advocacy for complex
            operating environments.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition-all hover:border-brand-red hover:bg-brand-red hover:text-white"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold tracking-[0.18em] text-white">SERVICES</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-white">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold tracking-[0.18em] text-white">INDUSTRIES</h4>
          <ul className="space-y-3 text-sm">
            {INDUSTRIES.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold tracking-[0.18em] text-white">CONTACT</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-red" />
              <a href="mailto:info@aibltd.insure" className="hover:text-white">
                info@aibltd.insure
              </a>
            </li>
            <li>
              <a href="tel:+2349131036089" className="hover:text-white">
                +234 9131036089
              </a>
            </li>
            <li>
              <a href="tel:+2348087281548" className="hover:text-white">
                +234 8087281548
              </a>
            </li>
            <li>Lagos &amp; Port Harcourt, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Advocate Insurance Brokers Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
