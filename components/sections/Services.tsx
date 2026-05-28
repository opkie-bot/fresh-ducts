"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

const services = [
  {
    title: "Air Duct Inspections",
    description:
      "Free video inspection shows you exactly what's in your ducts before any work begins.",
    href: "/duct-services/air-duct-inspections",
    icon: InspectionIcon,
  },
  {
    title: "Air Duct Cleaning",
    description:
      "Professional cleaning removes dust, allergens, and debris for cleaner indoor air.",
    href: "/duct-services/air-duct-cleaning",
    icon: DuctIcon,
  },
  {
    title: "Dryer Vent Cleaning",
    description:
      "Prevent fire hazards and improve dryer efficiency with thorough vent cleaning.",
    href: "/duct-services/dryer-vent-cleaning",
    icon: VentIcon,
  },
  {
    title: "Duct Sealing",
    description:
      "Duct Armor sealing eliminates leaks, improving efficiency and reducing energy costs.",
    href: "/duct-services/duct-sealing",
    icon: SealIcon,
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

const cardVariants = {
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

export function Services() {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Eyebrow color="slate" className="mb-4">
            Our Services
          </Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-ink">
            Complete duct care for your home
          </h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Link
                href={service.href}
                className="group block h-full p-6 bg-white rounded-xl border border-line hover:border-navy-800/20 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-lg bg-surface text-navy-800 group-hover:bg-navy-800 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-800 group-hover:text-yellow-600 transition-colors">
                  Learn more
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function InspectionIcon({ className }: { className?: string }) {
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
        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
}

function DuctIcon({ className }: { className?: string }) {
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
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
}

function VentIcon({ className }: { className?: string }) {
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
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}

function SealIcon({ className }: { className?: string }) {
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
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
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
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}
