"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

const faqs = [
  {
    question: "What is duct cleaning and why is it important?",
    answer:
      "Duct cleaning involves removing dust, debris, allergens, and contaminants from your HVAC system's air ducts. This improves indoor air quality, helps your system run more efficiently, and can reduce allergy symptoms and respiratory issues for your family.",
  },
  {
    question: "How often should I have my ducts cleaned?",
    answer:
      "We recommend duct cleaning every 3-5 years for most homes. However, you may need more frequent cleaning if you have pets, allergies, smokers in the home, recent renovations, or notice visible dust or musty odors coming from your vents.",
  },
  {
    question: "What are the signs that my ducts need cleaning?",
    answer:
      "Common signs include visible dust around vents, increased allergy symptoms, musty or stale odors when your HVAC runs, inconsistent airflow between rooms, and higher than normal energy bills. Our free video inspection can show you exactly what's in your ducts.",
  },
  {
    question: "Can dirty ducts affect my health?",
    answer:
      "Yes, dirty ducts can circulate dust, mold spores, pet dander, and other allergens throughout your home. This can trigger allergies, asthma, and other respiratory issues. People with compromised immune systems are especially vulnerable.",
  },
  {
    question: "How long does a duct cleaning take?",
    answer:
      "A typical residential duct cleaning takes 2-4 hours depending on the size of your home and the condition of your ducts. We work efficiently while being thorough to minimize disruption to your day.",
  },
  {
    question: "Can duct cleaning help with allergies?",
    answer:
      "Absolutely. By removing allergens like dust mites, pet dander, pollen, and mold spores from your duct system, many customers report significant improvement in their allergy symptoms after professional cleaning.",
  },
  {
    question: "How much does duct cleaning cost?",
    answer:
      "Cost varies based on the size of your home and the condition of your ducts. We provide free video inspections so you can see exactly what needs to be done, followed by a fair, no-pressure quote. No surprises.",
  },
  {
    question: "Do you use chemicals in the cleaning process?",
    answer:
      "We primarily use powerful vacuum suction and mechanical agitation to remove debris. We only use EPA-registered sanitizers when specifically requested and appropriate, and we always discuss options with you first.",
  },
  {
    question: "Can I clean my ducts myself?",
    answer:
      "While you can clean vent covers and visible areas, professional equipment is needed for thorough cleaning. Our truck-mounted systems provide 3-4x more suction than portable units and can reach the entire duct system, including areas you can't access.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Eyebrow color="slate" className="mb-4">
            FAQ
          </Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-ink">
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-line overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-ink pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-surface text-navy-800">
                  <ChevronIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
