import { Button } from "@/components/ui/Button";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

export function CTABand() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
          Ready to see what&apos;s in your ducts?
        </h2>
        <p className="text-white/60 mb-8">
          Schedule a free video inspection. We&apos;ll show you exactly what we
          find—no pressure, no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact-us">Schedule inspection</Button>
          <a
            href={PHONE_HREF}
            className="text-white/80 hover:text-white transition-colors"
          >
            Or call {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
}
