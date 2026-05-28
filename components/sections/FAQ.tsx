"use client";

import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-10">
          Questions people ask
        </h2>

        <div className="divide-y divide-line">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-ink pr-8">{faq.question}</span>
                <span className="text-slate-400 text-xl leading-none flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-slate-600 pr-8">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
