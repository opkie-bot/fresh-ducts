"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const proofBadges = [
  { name: "Google", rating: "4.9", reviews: "309 reviews" },
  { name: "Angi", rating: "4.8", reviews: null },
  { name: "Houzz", rating: "5.0", reviews: null },
  { name: "BBB", rating: null, reviews: "Accredited" },
  { name: "KSL", rating: null, reviews: "Studio 5" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        {/* Placeholder for real photography - gradient for now */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-navy-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <Eyebrow className="mb-6">Serving Northern Utah since 1993</Eyebrow>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold text-white leading-[1.1] mb-6"
          >
            Utah&apos;s preferred duct cleaning.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-white/80 mb-8 max-w-xl leading-relaxed"
          >
            See exactly what&apos;s inside your ducts. Free video inspection, no
            obligation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
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
          </motion.div>

          {/* Proof Strip */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              {proofBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-1">
                    {badge.rating && (
                      <>
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold text-white">
                          {badge.rating}
                        </span>
                      </>
                    )}
                    <span className="text-sm">
                      {badge.name}
                      {badge.reviews && (
                        <span className="text-white/50 ml-1">
                          ({badge.reviews})
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-paper to-transparent" />
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

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
