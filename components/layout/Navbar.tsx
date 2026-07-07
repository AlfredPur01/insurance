'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { NavItem, DropdownLink } from '@/types'

const NAV: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our Services' },
  { to: '/industries', label: 'Industries', dropdown: true },
  { to: '/claims-advocacy', label: 'Claims Advocacy' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

const INDUSTRY_LINKS: DropdownLink[] = [
  { to: '/industries/energy', label: 'Energy' },
  { to: '/industries/marine', label: 'Marine' },
  { to: '/industries/aviation', label: 'Aviation' },
  { to: '/industries/engineering-infrastructure', label: 'Engineering & Infrastructure' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileIndustriesOpen(false)
    setDesktopDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkClass = `group relative inline-flex items-center gap-1 text-sm font-medium transition-colors ${
    scrolled ? 'text-navy' : 'text-white'
  } hover:text-brand-red`

  const activeUnderline = (active: boolean) =>
    `absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100 ${
      active ? 'scale-x-100' : ''
    }`

  const isIndustriesActive =
    pathname === '/industries' || pathname.startsWith('/industries/')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="AIB home">
          <div className="rounded-md bg-white p-1 shadow-sm ring-1 ring-black/5">
            <Image
              src="/images/logo-aib.svg"
              alt="AIB"
              width={44}
              height={44}
              className="h-9 w-9 md:h-11 md:w-11"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            if (item.dropdown) {
              return (
                <div
                  key={item.to}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <button
                    onClick={() => setDesktopDropdownOpen((v) => !v)}
                    className={linkClass}
                    aria-expanded={desktopDropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        desktopDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                    <span className={activeUnderline(isIndustriesActive)} />
                  </button>

                  <AnimatePresence>
                    {desktopDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute left-0 top-full mt-3 w-60 overflow-hidden rounded-sm bg-white shadow-lg ring-1 ring-black/10"
                      >
                        <Link
                          href="/industries"
                          className="block border-b border-border/50 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-cream/60 hover:text-brand-red"
                        >
                          All Industries
                        </Link>
                        {INDUSTRY_LINKS.map((link) => (
                          <Link
                            key={link.to}
                            href={link.to}
                            className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-brand-red hover:text-white ${
                              pathname === link.to
                                ? 'bg-brand-red/10 text-brand-red'
                                : 'text-navy'
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            const active = pathname === item.to
            return (
              <Link key={item.to} href={item.to} className={linkClass}>
                {item.label}
                <span className={activeUnderline(active)} />
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-red-hover"
          >
            Request Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-md p-2 lg:hidden ${
            scrolled ? 'text-navy' : 'text-white'
          }`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-white shadow-lg lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-5">
              {NAV.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.to}>
                      <button
                        onClick={() => setMobileIndustriesOpen((v) => !v)}
                        className="flex w-full items-center justify-between border-b border-border/60 py-3 text-base font-medium text-navy transition-colors hover:text-brand-red"
                        aria-expanded={mobileIndustriesOpen}
                      >
                        Industries
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileIndustriesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileIndustriesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <Link
                              href="/industries"
                              className="block border-b border-border/40 py-2.5 pl-4 pr-2 text-sm text-muted-foreground transition-colors hover:text-brand-red"
                            >
                              All Industries
                            </Link>
                            {INDUSTRY_LINKS.map((link) => (
                              <Link
                                key={link.to}
                                href={link.to}
                                className="block border-b border-border/40 py-2.5 pl-4 pr-2 text-sm font-medium text-navy transition-colors hover:text-brand-red"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    className="border-b border-border/60 py-3 text-base font-medium text-navy transition-colors hover:text-brand-red"
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-5 py-3 text-sm font-semibold text-white"
              >
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
