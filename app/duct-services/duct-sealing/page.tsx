import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Duct Sealing with Duct Armor | Fresh Ducts",
  description: "Stop energy loss with professional duct sealing. Our Duct Armor process seals leaks from the inside. Serving Northern Utah since 1993.",
};

export default function DuctSealingPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-500 font-medium mb-3">Energy Savings</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Duct Sealing with Duct Armor
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Leaky ducts waste energy and reduce air quality. Our Duct Armor sealing process stops leaks at the source, improving comfort and lowering your energy bills.
              </p>
              <Button href="/contact-us">Get Free Assessment</Button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/before-after.jpg"
                alt="Before and after duct sealing comparison"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex">
                <div className="w-1/2 flex items-end p-4">
                  <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">Before</span>
                </div>
                <div className="w-1/2 flex items-end justify-end p-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">After</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6">
              <p className="text-4xl font-bold text-navy-900 mb-2">20-30%</p>
              <p className="text-slate-600">Of conditioned air lost to leaks</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <p className="text-4xl font-bold text-navy-900 mb-2">$200+</p>
              <p className="text-slate-600">Average annual energy savings</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <p className="text-4xl font-bold text-navy-900 mb-2">10+ yrs</p>
              <p className="text-slate-600">Duct Armor seal longevity</p>
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
                The Problem with Leaky Ducts
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Most homes lose 20-30% of their conditioned air through leaks and gaps in the ductwork. This means your HVAC system works harder to maintain temperature, driving up energy costs.
                </p>
                <p>
                  Leaky ducts can also pull in unconditioned air from attics, crawl spaces, and wall cavities—bringing dust, allergens, and even pests into your living space.
                </p>
                <p>
                  Traditional duct sealing requires access to every joint and connection, which is often impossible without major renovation. That&apos;s where Duct Armor comes in.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink mb-6">
                How Duct Armor Works
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-yellow-500 font-bold text-sm flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium text-ink">Pressurize the System</p>
                    <p className="text-slate-600 text-sm">We seal vents and pressurize your ductwork to identify leaks</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-yellow-500 font-bold text-sm flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium text-ink">Inject Sealant</p>
                    <p className="text-slate-600 text-sm">Duct Armor sealant is atomized and injected into the system</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-yellow-500 font-bold text-sm flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium text-ink">Seal from Inside</p>
                    <p className="text-slate-600 text-sm">The sealant adheres to leak points and forms a lasting seal</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-yellow-500 font-bold text-sm flex-shrink-0">4</span>
                  <div>
                    <p className="font-medium text-ink">Verify Results</p>
                    <p className="text-slate-600 text-sm">We measure before and after to show you the improvement</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/before-after-4.jpg"
                alt="Duct condition before and after sealing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-yellow-500 font-medium mb-3">Proven results</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Clean ducts, sealed tight
              </h2>
              <p className="text-white/70 mb-6">
                We combine thorough duct cleaning with our Duct Armor sealing process for maximum efficiency. Your ducts will be cleaner and more airtight than ever before.
              </p>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/80">
                    <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xs">✓</span>
                    Improved HVAC efficiency
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xs">✓</span>
                    Better temperature control
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xs">✓</span>
                    Lower energy bills
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xs">✓</span>
                    Cleaner indoor air
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
