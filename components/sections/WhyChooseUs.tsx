"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/owner-cleaning.jpg"
                alt="Fresh Ducts owner cleaning a dryer vent"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-500/20 rounded-xl -z-10" />
            {/* Caption card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl max-w-[200px]">
              <p className="font-semibold text-ink text-sm">Real results</p>
              <p className="text-slate-600 text-xs">See the lint and debris we remove from every job</p>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-yellow-600 font-medium mb-3">Why Fresh Ducts</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-6">
              Built on trust, backed by experience
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Family-owned and operated since 1993. We treat every home like it&apos;s our own, with honest assessments and quality work you can see.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-2xl font-bold text-navy-900">30+</p>
                <p className="text-sm text-slate-600">Years</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-2xl font-bold text-navy-900">4.9</p>
                <p className="text-sm text-slate-600">Rating</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-2xl font-bold text-navy-900">A+</p>
                <p className="text-sm text-slate-600">BBB</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company trucks showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src="/company-trucks.jpg"
              alt="Fresh Ducts service truck - professional duct cleaning equipment"
              fill
              className="object-cover"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-white font-semibold text-lg md:text-xl mb-1">
                Professional equipment, professional results
              </p>
              <p className="text-white/70 text-sm md:text-base">
                Our truck-mounted systems deliver powerful cleaning you can trust
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
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
