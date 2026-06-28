import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Globe } from "lucide-react";
import logo from "@/assets/logo-aib.svg";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white rounded-md inline-block p-1 ring-1 ring-white/10">
            <img src={logo} alt="AIB" className="h-12 w-12" />
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-xs">
            Providing structured risk advisory, market execution, and claims advocacy for complex operating environments.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Mail, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center h-9 w-9 rounded-full border border-white/20 hover:border-brand-red hover:text-white hover:bg-brand-red transition-all"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] text-white mb-5">SERVICES</h4>
          <ul className="space-y-3 text-sm">
            {["Risk Advisory", "Market Execution", "Claims Advocacy", "Global Capacity"].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-white">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] text-white mb-5">INDUSTRIES</h4>
          <ul className="space-y-3 text-sm">
            {["Energy", "Marine", "Aviation", "Engineering & Infrastructure"].map((s) => (
              <li key={s}><Link to="/industries" className="hover:text-white">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] text-white mb-5">CONTACT</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-red" /> enquiries@aib.com</li>
            <li>+234 XXX XXX XXXX</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} AIB Enterprise Risk Advisory. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
