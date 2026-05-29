"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function VideoInspection() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video side with visual containers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background accent */}
            <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl" />

            {/* YouTube embed */}
            <div className="relative aspect-video bg-navy-800 rounded-xl overflow-hidden border border-white/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9yryHPFVz-c?si=Osz5mQFsjmufJC9f"
                title="Fresh Ducts video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Stats floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-xl">
              <p className="text-3xl font-bold text-ink mb-1">100%</p>
              <p className="text-sm text-slate-600">Transparency</p>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-yellow-500 font-medium mb-3">Free inspection</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              See what&apos;s in your ducts before you decide
            </h2>

            <div className="space-y-4 text-white/70 mb-8">
              <p>
                Most duct cleaning companies give you a quote over the phone
                without ever looking at your system. We do it differently.
              </p>
              <p>
                Our technicians use a camera to show you real footage from
                inside your ducts. You&apos;ll see exactly what we see—dust buildup,
                debris, or maybe nothing at all.
              </p>
            </div>

            {/* Benefits list in a container */}
            <div className="bg-white/5 rounded-lg p-5 mb-8 border border-white/10">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xs">✓</span>
                  No obligation to proceed
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xs">✓</span>
                  See the footage yourself
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xs">✓</span>
                  Honest recommendations
                </li>
              </ul>
            </div>

            <Button href="/contact-us">Book your free inspection</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
