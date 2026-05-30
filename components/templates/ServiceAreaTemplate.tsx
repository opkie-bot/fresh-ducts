"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";

interface ServiceAreaTemplateProps {
  city: string;
  county: string;
  mapQuery: string;
}

export function ServiceAreaTemplate({ city, county, mapQuery }: ServiceAreaTemplateProps) {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-yellow-500 font-medium mb-3">{county}</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Air Duct Cleaning in {city}
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Professional duct cleaning services for {city} homes and businesses. Free video inspections, truck-mounted equipment, and honest recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact-us">Get Free Inspection</Button>
                <a
                  href="tel:+18013952822"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded hover:bg-white/5 transition-colors"
                >
                  Call (801) 395-2822
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-video bg-navy-800 rounded-xl border border-white/10 overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(mapQuery)}&zoom=12`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${city}, Utah`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-yellow-600 font-medium mb-3">Our Services</p>
            <h2 className="font-display text-3xl font-semibold text-ink mb-4">
              What We Offer in {city}
            </h2>
            <p className="text-slate-600">
              Full-service duct cleaning and maintenance for residential and commercial properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-ink mb-2">Air Duct Cleaning</h3>
              <p className="text-slate-600 text-sm">Remove dust, allergens, and debris from your entire duct system.</p>
            </div>
            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-ink mb-2">Dryer Vent Cleaning</h3>
              <p className="text-slate-600 text-sm">Prevent fires and improve efficiency with professional dryer vent cleaning.</p>
            </div>
            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-ink mb-2">Free Inspections</h3>
              <p className="text-slate-600 text-sm">See inside your ducts with our free video inspection service.</p>
            </div>
            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-ink mb-2">Duct Sealing</h3>
              <p className="text-slate-600 text-sm">Stop energy loss with our Duct Armor sealing process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-yellow-600 font-medium mb-3">Why Fresh Ducts</p>
              <h2 className="font-display text-3xl font-semibold text-ink mb-6">
                Serving {city} Since 1993
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Fresh Ducts has been providing professional duct cleaning services to {city} and the surrounding {county} area for over 30 years.
                </p>
                <p>
                  We use truck-mounted equipment that delivers 3-4x more suction than portable units, ensuring a deeper, more thorough clean for your home or business.
                </p>
                <p>
                  Our free video inspection lets you see exactly what&apos;s inside your ducts before any work begins. No pressure, no obligation—just honest recommendations.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 flex gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-500 font-bold">30+</span>
                </div>
                <div>
                  <p className="font-semibold text-ink">Years of Experience</p>
                  <p className="text-slate-600 text-sm">Serving Northern Utah since 1993</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 flex gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-500 font-bold">4.9</span>
                </div>
                <div>
                  <p className="font-semibold text-ink">Google Rating</p>
                  <p className="text-slate-600 text-sm">From 309 verified reviews</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 flex gap-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-500 font-bold">A+</span>
                </div>
                <div>
                  <p className="font-semibold text-ink">BBB Accredited</p>
                  <p className="text-slate-600 text-sm">Better Business Bureau rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
