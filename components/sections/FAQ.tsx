"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How often should I have my ducts cleaned?",
    answer:
      "Every 3-5 years for most homes. If you have pets, allergies, or recently did renovations, you may want to do it more often. We can tell you what we'd recommend after looking at your system.",
  },
  {
    question: "How long does it take?",
    answer:
      "Usually 2-4 hours for a typical home. We'll give you a better estimate once we see your system during the free inspection.",
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on the size of your home and what we find. We don't quote over the phone—we show you your ducts first, then give you a price based on what actually needs to be done.",
  },
  {
    question: "Do you use chemicals?",
    answer:
      "We mainly use suction and mechanical cleaning. We have sanitizers available if you want them, but we'll discuss that with you—we don't just spray things without asking.",
  },
  {
    question: "Will it help with my allergies?",
    answer:
      "Many customers say yes. Removing dust, pet dander, and other allergens from your ducts means they're not circulating through your home. But we'll be honest with you about what to expect during your inspection.",
  },
  {
    question: "What if my ducts don't need cleaning?",
    answer:
      "We'll tell you. The inspection is free, and if your ducts look fine, we'd rather say so than sell you something you don't need. That's how we've stayed in business for 30+ years.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-yellow-600 font-medium mb-3">FAQ</p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">
                Questions people ask
              </h2>
              <p className="text-slate-600">
                Can&apos;t find what you&apos;re looking for? Give us a call and we&apos;ll answer any questions you have.
              </p>
            </motion.div>
          </div>

          {/* Right column - accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between text-left p-6"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-ink pr-8">{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === index ? 'bg-navy-900 text-white' : 'bg-surface text-slate-400'}`}>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
