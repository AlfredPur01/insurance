import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-aib.svg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Our Services" },
  { to: "/industries", label: "Industries", dropdown: true },
  { to: "/claims-advocacy", label: "Claims Advocacy" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

const INDUSTRY_LINKS = [
  { to: "/industries/energy", label: "Energy" },
  { to: "/industries/marine", label: "Marine" },
  { to: "/industries/aviation", label: "Aviation" },
  { to: "/industries/engineering-infrastructure", label: "Engineering & Infrastructure" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileIndustriesOpen(false);
    setDesktopDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = `group relative inline-flex items-center gap-1 text-sm font-medium transition-colors ${
    scrolled ? "text-navy" : "text-white"
  } hover:text-brand-red`;

  const activeUnderline = (active: boolean) =>
    `absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100 ${
      active ? "scale-x-100" : ""
    }`;

  const isIndustriesActive =
    location.pathname === "/industries" || location.pathname.startsWith("/industries/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="AIB home">
          <div className="bg-white rounded-md p-1 ring-1 ring-black/5 shadow-sm">
            <img src={logo} alt="AIB" className="h-9 w-9 md:h-11 md:w-11" />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => {
            if ("dropdown" in item && item.dropdown) {
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
                        desktopDropdownOpen ? "rotate-180" : ""
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
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 top-full mt-3 w-60 rounded-sm bg-white shadow-lg ring-1 ring-black/8 overflow-hidden"
                      >
                        <Link
                          to="/industries"
                          className="block px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-brand-red hover:bg-cream/60 transition-colors border-b border-border/50"
                        >
                          All Industries
                        </Link>
                        {INDUSTRY_LINKS.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-brand-red hover:text-white ${
                              location.pathname === link.to
                                ? "bg-brand-red/10 text-brand-red"
                                : "text-navy"
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const active = location.pathname === item.to;
            return (
              <Link key={item.to} to={item.to} className={linkClass}>
                {item.label}
                <span className={activeUnderline(active)} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-red-hover transition-colors rounded-sm"
          >
            Request Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 ${
            scrolled ? "text-navy" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white shadow-lg border-t border-border"
          >
            <div className="container-page py-5 flex flex-col gap-1">
              {NAV.map((item) => {
                if ("dropdown" in item && item.dropdown) {
                  return (
                    <div key={item.to}>
                      <button
                        onClick={() => setMobileIndustriesOpen((v) => !v)}
                        className="w-full flex items-center justify-between py-3 text-base font-medium text-navy border-b border-border/60 hover:text-brand-red transition-colors"
                      >
                        Industries
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileIndustriesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileIndustriesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <Link
                              to="/industries"
                              className="block py-2.5 pl-4 pr-2 text-sm text-muted-foreground hover:text-brand-red transition-colors border-b border-border/40"
                            >
                              All Industries
                            </Link>
                            {INDUSTRY_LINKS.map((link) => (
                              // @ts-expect-error – routes typed after routeTree.gen.ts regenerates on dev server start
                              <Link
                                key={link.to}
                                to={link.to}
                                className="block py-2.5 pl-4 pr-2 text-sm font-medium text-navy hover:text-brand-red transition-colors border-b border-border/40"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="py-3 text-base font-medium text-navy border-b border-border/60 hover:text-brand-red transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-red px-5 py-3 text-sm font-semibold text-white rounded-sm"
              >
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
