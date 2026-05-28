"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    number: "01",
    title: "Schedule inspection",
    description: "Book your free video inspection online or by phone.",
  },
  {
    number: "02",
    title: "See your ducts",
    description: "We show you real-time footage of what's inside your system.",
  },
  {
    number: "03",
    title: "Get your estimate",
    description: "Receive a fair, no-pressure quote based on what we find.",
  },
  {
    number: "04",
    title: "Professional cleaning",
    description: "Our truck-mounted equipment removes dust and debris.",
  },
  {
    number: "05",
    title: "Final walkthrough",
    description: "See the results with after-service photos and footage.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Eyebrow className="mb-4">How It Works</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold">
            Simple, transparent process
          </h2>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-navy-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center lg:text-center"
              >
                {/* Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-500 text-navy-900 font-display font-bold text-lg relative z-10">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Note about equipment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 p-6 rounded-xl bg-navy-700/50 border border-navy-600"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <TruckIcon className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">
                Truck-mounted equipment
              </h4>
              <p className="text-white/70 text-sm">
                Our powerful truck-mounted vacuum systems provide 3-4x more
                suction than portable units, ensuring a deeper, more thorough
                clean for your entire duct system.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    </svg>
  );
}
