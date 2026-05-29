"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Schedule your inspection",
    description:
      "Call us or book online. We'll find a time that works for your schedule.",
  },
  {
    number: "02",
    title: "See what's inside",
    description:
      "Our technician shows you camera footage from inside your ducts. You see exactly what we see.",
  },
  {
    number: "03",
    title: "Get a straight answer",
    description:
      "We tell you what we found and give you a clear price. No upsells, no pressure.",
  },
  {
    number: "04",
    title: "We clean, you verify",
    description:
      "If you decide to proceed, we do the work. Then we show you the after footage so you can see the difference.",
  },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - header */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-yellow-600 font-medium mb-3">Our process</p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">
                How it works
              </h2>
              <p className="text-slate-600 mb-8">
                From first call to finished job, here&apos;s what to expect.
              </p>

              {/* Visual accent block */}
              <div className="hidden lg:block relative">
                <div className="aspect-square max-w-[280px] bg-navy-900 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-5xl font-bold text-yellow-500 mb-2">4</p>
                      <p className="text-white/70 text-sm">Simple steps</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500/20 rounded-xl -z-10" />
              </div>
            </motion.div>
          </div>

          {/* Right column - steps */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-surface rounded-xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-500 font-bold text-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
