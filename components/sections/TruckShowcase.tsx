"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TruckShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              <p className="text-white font-semibold text-lg md:text-2xl mb-1">
                Professional equipment, professional results
              </p>
              <p className="text-white/70 text-sm md:text-base">
                Our truck-mounted systems deliver powerful cleaning you can trust
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
