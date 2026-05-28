"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

export function Hero() {
  return (
    <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-yellow-500 font-medium mb-4"
          >
            Serving Northern Utah since 1993
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6"
          >
            Utah&apos;s preferred duct cleaning.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 mb-8 max-w-lg"
          >
            We show you exactly what&apos;s inside your ducts with a free video
            inspection. No obligation, no pressure—just honest answers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Button href="/contact-us">Schedule free inspection</Button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-white/90 hover:text-white transition-colors font-medium"
            >
              Or call {PHONE_NUMBER}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 text-sm text-white/60"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-500">★</span>
              <span>
                <span className="text-white font-medium">4.9</span> on Google
                <span className="text-white/40"> · 309 reviews</span>
              </span>
            </div>
            <span className="text-white/30">|</span>
            <span>BBB Accredited</span>
            <span className="text-white/30">|</span>
            <span>As seen on KSL</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
