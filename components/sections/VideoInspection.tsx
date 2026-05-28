"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const features = [
  {
    title: "See it yourself",
    description: "Watch real footage from inside your ducts on our video screen.",
  },
  {
    title: "Honest assessment",
    description: "We show you what we find. You decide if cleaning is needed.",
  },
  {
    title: "Fair estimate",
    description: "No surprises. Know exactly what the work involves upfront.",
  },
  {
    title: "No pressure",
    description: "The inspection is always free. No obligation to proceed.",
  },
];

export function VideoInspection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video/Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative"
          >
            {/* Placeholder for before/after or video */}
            <div className="aspect-video bg-navy-800 rounded-xl overflow-hidden relative">
              {/* Gradient placeholder - replace with actual duct footage */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-yellow-500/90 flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-colors group">
                  <PlayIcon className="w-8 h-8 text-navy-900 ml-1 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-navy-900/80 rounded-full text-sm text-white">
                Before & after footage
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-500/10 rounded-xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
          >
            <Eyebrow color="slate" className="mb-4">
              Our Difference
            </Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-ink mb-6">
              The free video inspection
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Most companies just quote you a price. We show you exactly what&apos;s
              inside your ducts with real-time video footage, so you can make an
              informed decision.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <CheckIcon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/contact-us">Schedule your free inspection</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
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
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
