import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  ctaLabel?: string;
  ctaTo?: string;
  image: string;
  align?: "left" | "center";
};

export function PageHero({ eyebrow, title, description, ctaLabel, ctaTo = "/contact", image, align = "left" }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
      </div>

      <div className={align === "center" ? "container-page text-center max-w-3xl mx-auto" : "container-hero max-w-3xl"}>
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-white/80 leading-relaxed"
        >
          {description}
        </motion.p>
        {ctaLabel && (
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to={ctaTo}
              className="group inline-flex items-center gap-2 bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-brand-red-hover rounded-sm transition-colors"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
