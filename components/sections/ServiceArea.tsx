"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const areas = [
  {
    county: "Weber County",
    cities: ["Ogden", "North Ogden", "Roy", "South Ogden"],
  },
  {
    county: "Davis County",
    cities: ["Layton", "Bountiful", "Farmington", "Clearfield"],
  },
  {
    county: "Salt Lake County",
    cities: ["Salt Lake City", "Sandy", "West Jordan", "Murray"],
  },
  {
    county: "Cache County",
    cities: ["Logan", "North Logan", "Smithfield", "Hyde Park"],
  },
];

export function ServiceArea() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-yellow-500 font-medium mb-3">Service area</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Where we work
              </h2>
              <p className="text-white/70 mb-8">
                Based in Ogden, serving all of Northern Utah. We drive to you.
              </p>

              {/* Interactive Map */}
              <div className="aspect-[4/3] max-w-[320px] bg-navy-800 rounded-xl border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d387050.5624754793!2d-111.97383!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fresh Ducts service area map - Northern Utah"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-white/50 text-xs mt-3">
                Serving Weber, Davis, Salt Lake & Cache counties
              </p>
            </motion.div>
          </div>

          {/* Right column - area cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-6">
              {areas.map((area, index) => (
                <motion.div
                  key={area.county}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <h3 className="font-semibold text-white mb-4">{area.county}</h3>
                  <ul className="space-y-2 text-sm">
                    {area.cities.map((city) => (
                      <li key={city}>
                        <Link
                          href={`/services-areas/${city.toLowerCase().replace(/ /g, "-")}-duct-cleaning`}
                          className="text-white/70 hover:text-yellow-500 transition-colors"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-sm text-white/50"
            >
              Don&apos;t see your city?{" "}
              <Link
                href="/contact-us"
                className="text-yellow-500 hover:text-yellow-400"
              >
                Contact us
              </Link>{" "}
              — we likely serve your area.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
