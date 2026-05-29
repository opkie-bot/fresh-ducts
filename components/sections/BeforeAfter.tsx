"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const comparisons = [
  {
    id: 1,
    before: "/before-after.jpg",
    after: "/before-after.jpg",
    label: "Side-by-side comparison",
    isSideBySide: true,
  },
  {
    id: 2,
    before: "/before-duct.webp",
    after: "/after-duct.webp",
    label: "Debris removal",
    isSideBySide: false,
  },
  {
    id: 3,
    before: "/before-after-2.jpg",
    after: "/before-after-2.jpg",
    label: "Heavy buildup removal",
    isSideBySide: true,
  },
  {
    id: 4,
    before: "/before-after-3.jpg",
    after: "/before-after-3.jpg",
    label: "Duct restoration",
    isSideBySide: true,
  },
  {
    id: 5,
    before: "/before-after-4.jpg",
    after: "/before-after-4.jpg",
    label: "Deep cleaning results",
    isSideBySide: true,
  },
];

export function BeforeAfter() {
  const [activeComparison, setActiveComparison] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-yellow-500 font-medium mb-3">Real results</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            See the difference for yourself
          </h2>
          <p className="text-white/70 text-lg">
            Years of dust, debris, and buildup removed. This is what the inside of your ducts could look like after a professional cleaning.
          </p>
        </motion.div>

        {/* Comparison selector */}
        <div className="flex justify-center gap-4 mb-8">
          {comparisons.map((comp, index) => (
            <button
              key={comp.id}
              onClick={() => setActiveComparison(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeComparison === index
                  ? "bg-yellow-500 text-navy-900"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              Example {index + 1}
            </button>
          ))}
        </div>

        {/* Main comparison area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {comparisons[activeComparison].isSideBySide ? (
            /* Side by side image (the combined before/after) */
            <div className="relative">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={comparisons[activeComparison].before}
                  alt="Before and after duct cleaning comparison"
                  fill
                  className="object-cover"
                />
                {/* Labels overlay */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 flex items-end p-6">
                    <span className="bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      Before
                    </span>
                  </div>
                  <div className="w-1/2 flex items-end justify-end p-6">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      After
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Interactive slider comparison */
            <div className="relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                {/* After image (background) */}
                <Image
                  src={comparisons[activeComparison].after}
                  alt="After duct cleaning"
                  fill
                  className="object-cover"
                />

                {/* Before image (clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <Image
                    src={comparisons[activeComparison].before}
                    alt="Before duct cleaning"
                    fill
                    className="object-cover"
                    style={{ maxWidth: "none", width: `${100 / (sliderPosition / 100)}%` }}
                  />
                </div>

                {/* Slider line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                >
                  {/* Slider handle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-navy-900 text-sm">↔</span>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </span>
                </div>

                {/* Invisible range input for interaction */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>
              <p className="text-center text-white/50 text-sm mt-4">
                Drag the slider to compare before and after
              </p>
            </div>
          )}
        </motion.div>

        {/* Bottom content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <p className="text-yellow-500 font-bold text-xl">Dust & Debris</p>
              <p className="text-white/60 text-sm">Completely removed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <p className="text-yellow-500 font-bold text-xl">Air Quality</p>
              <p className="text-white/60 text-sm">Significantly improved</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <p className="text-yellow-500 font-bold text-xl">HVAC Efficiency</p>
              <p className="text-white/60 text-sm">Better airflow</p>
            </div>
          </div>

          <Button href="/contact-us">Get your free inspection</Button>
        </motion.div>
      </div>
    </section>
  );
}
