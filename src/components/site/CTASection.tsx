import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import hero from "@/assets/hero-building.jpg";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

export function CTASection({
  eyebrow = "Let's Discuss Your Risk Strategy",
  title,
  description,
  ctaLabel = "Request Consultation",
  ctaTo = "/contact",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white py-20 md:py-28">
      <div className="absolute inset-0 -z-10 opacity-25">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/80 to-navy-deep" />
      </div>
      <FadeIn className="container-page text-center max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-3xl md:text-5xl leading-tight">{title}</h2>
        {description && <p className="mt-5 text-white/75 text-base md:text-lg">{description}</p>}
        <Link
          to={ctaTo}
          className="group mt-8 inline-flex items-center gap-2 bg-brand-red px-7 py-4 text-sm font-semibold text-white shadow-lg hover:bg-brand-red-hover rounded-sm transition-colors"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </FadeIn>
    </section>
  );
}
