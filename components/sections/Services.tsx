"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Air Duct Cleaning",
    description:
      "Remove years of dust, allergens, and debris from your entire duct system using our truck-mounted equipment.",
    href: "/duct-services/air-duct-cleaning",
  },
  {
    title: "Dryer Vent Cleaning",
    description:
      "Clogged dryer vents are a leading cause of house fires. We clean the full run from your dryer to the exterior.",
    href: "/duct-services/dryer-vent-cleaning",
  },
  {
    title: "Free Video Inspection",
    description:
      "See exactly what's inside your ducts before any work begins. We show you the footage and give you an honest assessment.",
    href: "/contact-us",
  },
  {
    title: "Duct Sealing",
    description:
      "Leaky ducts waste energy and reduce air quality. Our Duct Armor sealing process stops leaks at the source.",
    href: "/duct-services/duct-sealing",
  },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - sticky header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-yellow-600 font-medium mb-3"
              >
                Our services
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4"
              >
                What we do
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-600"
              >
                Professional duct services for homes and businesses across
                Northern Utah.
              </motion.p>
            </div>
          </div>

          {/* Right column - service cards */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="group block h-full bg-surface rounded-xl p-6 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-display text-lg font-semibold text-ink group-hover:text-navy-700 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-slate-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
