import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Air Duct Cleaning | Fresh Ducts",
  description: "Professional air duct cleaning for Utah homes and businesses. Truck-mounted equipment for a deeper clean. Serving Northern Utah since 1993.",
};

export default function AirDuctCleaningPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-500 font-medium mb-3">Our Most Popular Service</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Air Duct Cleaning
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Remove years of dust, allergens, and debris from your entire duct system. Our truck-mounted equipment delivers 3-4x more suction than portable units for a deeper, more thorough clean.
              </p>
              <Button href="/contact-us">Get Free Inspection</Button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/company-trucks.jpg"
                alt="Fresh Ducts professional truck-mounted cleaning equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink mb-6">
                Why Clean Your Air Ducts?
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Over time, your air ducts collect dust, pet dander, pollen, and other debris. Every time your HVAC system runs, these particles circulate through your home.
                </p>
                <p>
                  Professional duct cleaning removes this buildup, improving your indoor air quality and helping your HVAC system run more efficiently.
                </p>
                <p>
                  We recommend duct cleaning every 3-5 years for most homes, or more frequently if you have pets, allergies, or have recently completed renovations.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink mb-6">
                Our Process
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-yellow-500 font-bold text-sm flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium text-ink">Free Video Inspection</p>
                    <p className="text-slate-600 text-sm">We show you what&apos;s inside your ducts before any work begins</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-yellow-500 font-bold text-sm flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium text-ink">Truck-Mounted Cleaning</p>
                    <p className="text-slate-600 text-sm">Powerful suction removes dust and debris from your entire system</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-yellow-500 font-bold text-sm flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium text-ink">Mechanical Agitation</p>
                    <p className="text-slate-600 text-sm">We use specialized tools to dislodge stubborn buildup</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-yellow-500 font-bold text-sm flex-shrink-0">4</span>
                  <div>
                    <p className="font-medium text-ink">After Footage</p>
                    <p className="text-slate-600 text-sm">We show you the clean ducts so you can see the difference</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-yellow-500 font-medium mb-3">Real results</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              See the difference
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              These are actual results from our duct cleaning jobs in Northern Utah homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/before-after-3.jpg"
                alt="Duct cleaning before and after"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/before-after-4.jpg"
                alt="Air duct cleaning results"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
