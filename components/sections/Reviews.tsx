"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

const reviews = [
  {
    name: "Harriet N.",
    location: "Ogden, UT",
    rating: 5,
    source: "Google",
    text: "Fresh Ducts did an amazing job cleaning our air ducts. The technician was professional, thorough, and explained everything. Our air quality has noticeably improved!",
  },
  {
    name: "Mark A.",
    location: "Salt Lake City, UT",
    rating: 5,
    source: "Google",
    text: "Very impressed with their service. They showed me video footage of my ducts before and after cleaning. Completely transparent and fair pricing. Highly recommend!",
  },
  {
    name: "Jennifer L.",
    location: "Layton, UT",
    rating: 5,
    source: "Angi",
    text: "We've used Fresh Ducts twice now. Always on time, professional, and thorough. The free inspection is a great way to see exactly what you're dealing with.",
  },
  {
    name: "Robert T.",
    location: "Bountiful, UT",
    rating: 5,
    source: "Google",
    text: "After seeing what was in our ducts on their video camera, I knew we made the right call. The difference in our home's air quality is remarkable.",
  },
  {
    name: "Susan M.",
    location: "Farmington, UT",
    rating: 5,
    source: "Houzz",
    text: "Professional service from start to finish. They were careful with our home and left everything spotless. Will definitely use them again.",
  },
  {
    name: "David K.",
    location: "Clearfield, UT",
    rating: 5,
    source: "Google",
    text: "Great experience! The team was knowledgeable and efficient. They answered all my questions and the pricing was exactly as quoted. No surprises.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Reviews() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Eyebrow color="slate" className="mb-4">
            Customer Reviews
          </Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-ink mb-4">
            Trusted by Utah homeowners
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
              ))}
            </div>
            <span className="font-semibold text-ink">4.9</span>
            <span>from 309 Google reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-6 rounded-xl border border-line"
            >
              {/* Rating & Source */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-500" />
                  ))}
                </div>
                <span className="text-sm text-slate-400">{review.source}</span>
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white font-semibold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">{review.name}</p>
                  <p className="text-slate-400 text-xs">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
