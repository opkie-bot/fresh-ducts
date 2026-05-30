"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Schedule your inspection",
    description:
      "Call us or book online. We'll find a time that works for your schedule.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "See what's inside",
    description:
      "Our technician shows you camera footage from inside your ducts. You see exactly what we see.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Get a straight answer",
    description:
      "We tell you what we found and give you a clear price. No upsells, no pressure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "We clean, you verify",
    description:
      "If you decide to proceed, we do the work. Then we show you the after footage so you can see the difference.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-yellow-600 font-medium mb-3">Our process</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4">
            How it works
          </h2>
          <p className="text-slate-600 text-lg">
            From first call to finished job, here&apos;s what to expect.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line (hidden on last item and on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-[2px] bg-line" />
              )}

              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative">
                {/* Step number badge */}
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-500 text-navy-900 text-sm font-bold rounded-full">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-5 mt-2 text-yellow-500">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
