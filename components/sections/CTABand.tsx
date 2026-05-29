"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

export function CTABand() {
  return (
    <section className="py-24 lg:py-32 bg-yellow-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Ready to see what&apos;s in your ducts?
            </h2>
            <p className="text-navy-900/70 text-lg mb-8 max-w-lg">
              Schedule a free video inspection. We&apos;ll show you exactly what we
              find—no pressure, no obligation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-navy-900 text-white font-medium rounded hover:bg-navy-800 transition-colors"
              >
                Schedule inspection
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy-900 text-navy-900 font-medium rounded hover:bg-navy-900/5 transition-colors"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              <div className="bg-navy-900 rounded-2xl p-8 text-center">
                <p className="text-5xl font-bold text-yellow-500 mb-2">Free</p>
                <p className="text-white/80">Video inspection</p>
                <p className="text-white/60 text-sm mt-4">
                  No obligation • See your ducts first
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/30 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
