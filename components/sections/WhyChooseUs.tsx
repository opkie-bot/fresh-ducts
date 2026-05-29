"use client";

import { motion } from "framer-motion";

const features = [
  {
    label: "Since 1993",
    title: "30+ years in Northern Utah",
    description:
      "We've been cleaning ducts in Utah homes longer than most companies have existed. That experience means we've seen every type of system and know how to handle it.",
    stat: "30+",
    statLabel: "Years",
  },
  {
    label: "Real equipment",
    title: "Truck-mounted power",
    description:
      "Our truck-mounted vacuum systems deliver 3-4x more suction than portable units. That means a deeper clean that actually makes a difference.",
    stat: "3-4x",
    statLabel: "More suction",
  },
  {
    label: "Homes & businesses",
    title: "Any size job",
    description:
      "From single-family homes to commercial buildings, we have the equipment and crew to handle it. Same quality service either way.",
    stat: "1000s",
    statLabel: "Jobs completed",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-yellow-600 font-medium mb-3">Why Fresh Ducts</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink">
            Built on trust, backed by experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              {/* Stat block */}
              <div className="inline-flex items-baseline gap-1 bg-navy-900 text-white px-4 py-2 rounded-lg mb-6">
                <span className="text-2xl font-bold">{feature.stat}</span>
                <span className="text-sm text-white/70">{feature.statLabel}</span>
              </div>

              <p className="text-yellow-600 font-medium text-sm mb-2">
                {feature.label}
              </p>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
