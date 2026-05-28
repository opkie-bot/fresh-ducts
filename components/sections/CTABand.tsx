"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

export function CTABand() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-6">
            Ready to breathe cleaner air?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Schedule your free video inspection today. See what&apos;s in your ducts,
            get a fair estimate, and make an informed decision.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button href="/contact-us" size="lg">
              Schedule a free inspection
            </Button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors font-medium"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Reassurance */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-yellow-500" />
              Free inspection
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-yellow-500" />
              Fair estimate
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-yellow-500" />
              No pressure
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
