"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

const expectations = [
  {
    step: "1",
    title: "Free video inspection",
    description:
      "We show you real footage of your ducts so you can see exactly what's inside. No sales pressure, just transparency.",
  },
  {
    step: "2",
    title: "Honest assessment",
    description:
      "Based on what we find, we'll give you our professional recommendation. If your ducts don't need cleaning, we'll tell you.",
  },
  {
    step: "3",
    title: "Fair estimate",
    description:
      "You'll receive a clear, itemized quote based on your specific situation. The price we quote is the price you pay.",
  },
];

export function WhatToExpect() {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Eyebrow color="slate" className="mb-4">
              What to Expect
            </Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-ink mb-6">
              No pressure. No surprises.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We believe in earning your trust through transparency. Every
              service starts with showing you exactly what we see, so you can
              make an informed decision.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {expectations.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-800 text-yellow-500 flex items-center justify-center font-display font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-surface rounded-xl p-8 lg:p-12 border border-line">
              <div className="space-y-6">
                {/* Quote visual */}
                <div className="flex items-center gap-3 pb-6 border-b border-line">
                  <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center">
                    <CheckmarkIcon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Your inspection is</p>
                    <p className="font-display text-2xl font-semibold text-ink">
                      Always free
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>See your ducts on video before any work</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>Clear pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>No obligation to proceed</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>After-service photos included</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-500/10 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckmarkIcon({ className }: { className?: string }) {
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
