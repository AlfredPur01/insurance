import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-aib.svg";

type NavItem = { to: string; label: string; hasDropdown?: boolean };
const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Our Services" },
  { to: "/industries", label: "Industries", hasDropdown: true },
  { to: "/claims-advocacy", label: "Claims Advocacy" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

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

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group relative inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                  scrolled ? "text-navy" : "text-white"
                } hover:text-brand-red`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
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
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 ${
            scrolled ? "text-navy" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white shadow-lg border-t border-border"
          >
            <div className="container-page py-5 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-3 text-base font-medium text-navy border-b border-border/60 hover:text-brand-red"
                >
                  {item.label}
                </Link>
              ))}
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
