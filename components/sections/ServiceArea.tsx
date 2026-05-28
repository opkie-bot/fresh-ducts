"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

const counties = [
  {
    name: "Salt Lake County",
    cities: [
      { name: "Salt Lake City", slug: "salt-lake-city-duct-cleaning" },
      { name: "Sandy", slug: "sandy-duct-cleaning" },
      { name: "West Jordan", slug: "west-jordan-duct-cleaning" },
      { name: "Murray", slug: "murray-duct-cleaning" },
    ],
  },
  {
    name: "Davis County",
    cities: [
      { name: "Layton", slug: "layton-duct-cleaning" },
      { name: "Bountiful", slug: "bountiful-duct-cleaning" },
      { name: "Farmington", slug: "farmington-duct-cleaning" },
      { name: "Clearfield", slug: "clearfield-duct-cleaning" },
    ],
  },
  {
    name: "Weber County",
    cities: [
      { name: "Ogden", slug: "ogden-duct-cleaning" },
      { name: "North Ogden", slug: "north-ogden-duct-cleaning" },
      { name: "Roy", slug: "roy-duct-cleaning" },
      { name: "South Ogden", slug: "south-ogden-duct-cleaning" },
    ],
  },
  {
    name: "Cache County",
    cities: [
      { name: "Logan", slug: "logan-duct-cleaning" },
      { name: "North Logan", slug: "north-logan-duct-cleaning" },
      { name: "Smithfield", slug: "smithfield-duct-cleaning" },
      { name: "Hyde Park", slug: "hyde-park-duct-cleaning" },
    ],
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

const itemVariants = {
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

export function ServiceArea() {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Eyebrow color="slate" className="mb-4">
            Service Areas
          </Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-ink mb-4">
            Serving Northern Utah
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide professional duct cleaning services across Davis, Weber,
            Salt Lake, and Cache counties. Find your city below.
          </p>
        </div>

        {/* Counties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {counties.map((county, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="mb-4">
                <h3 className="font-display text-lg font-semibold text-ink flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-yellow-500" />
                  {county.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {county.cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/services-areas/${city.slug}`}
                      className="text-slate-600 hover:text-navy-800 hover:underline underline-offset-2 transition-colors text-sm"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16"
        >
          <div className="aspect-[21/9] bg-surface rounded-xl border border-line overflow-hidden relative">
            {/* Placeholder for actual map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-400 text-sm">
                  Service area map coming soon
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
      />
    </svg>
  );
}
