"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Harriet N.",
    text: "They showed me exactly what was in my ducts before doing anything. No pressure, just honest information. The difference after cleaning was obvious.",
  },
  {
    name: "Mark A.",
    text: "Finally, a company that doesn't try to upsell you on everything. They told me my dryer vent needed cleaning but my ducts were fine. Appreciated the honesty.",
  },
  {
    name: "Jennifer L.",
    text: "Third time using Fresh Ducts over the years. Same great service every time. They show up when they say they will and do what they say they'll do.",
  },
];

export function Reviews() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - header and stats */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-yellow-600 font-medium mb-3">Reviews</p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-6">
                What customers say
              </h2>

              {/* Stats card */}
              <div className="bg-navy-900 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-500 text-xl">★★★★★</span>
                </div>
                <p className="text-3xl font-bold text-white mb-1">4.9</p>
                <p className="text-white/60 text-sm">From 309 Google reviews</p>
              </div>

              <a
                href="https://www.google.com/search?q=fresh+ducts+ogden+utah+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy-800 font-medium hover:text-navy-700"
              >
                Read all reviews
                <span>→</span>
              </a>
            </motion.div>
          </div>

          {/* Right column - review cards */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface rounded-xl p-6"
                >
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    <span>★★★★★</span>
                  </div>
                  <p className="text-ink text-lg mb-4">&ldquo;{review.text}&rdquo;</p>
                  <cite className="not-italic text-sm font-medium text-slate-600">
                    — {review.name}
                  </cite>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
