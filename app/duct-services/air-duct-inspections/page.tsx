import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Air Duct Inspections | Fresh Ducts",
  description: "Free video inspections of your air ducts. See exactly what's inside before you decide on cleaning. Serving Northern Utah since 1993.",
};

export default function AirDuctInspectionsPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-500 font-medium mb-3">Free Service</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Air Duct Inspections
              </h1>
              <p className="text-white/70 text-lg mb-8">
                See exactly what&apos;s inside your ducts before you make any decisions. Our free video inspection shows you the real condition of your system—no pressure, no obligation.
              </p>
              <Button href="/contact-us">Schedule Free Inspection</Button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/before-duct.webp"
                alt="Inside view of dirty air duct during inspection"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-navy-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  Actual inspection footage
                </span>
              </div>
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
                Why Get an Inspection?
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Most duct cleaning companies give you a quote over the phone without ever looking at your system. That&apos;s not how we operate.
                </p>
                <p>
                  Our technicians use professional-grade camera equipment to show you real footage from inside your ducts. You&apos;ll see exactly what we see—dust buildup, debris, mold, or maybe nothing at all.
                </p>
                <p>
                  If your ducts look fine, we&apos;ll tell you. There&apos;s no pressure to proceed with cleaning if it&apos;s not needed. That&apos;s how we&apos;ve built trust with Northern Utah families for over 30 years.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-medium text-ink">Video Camera Inspection</p>
                    <p className="text-slate-600 text-sm">We use professional cameras to see inside your ductwork</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-medium text-ink">System Assessment</p>
                    <p className="text-slate-600 text-sm">We evaluate your HVAC system&apos;s overall condition</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-medium text-ink">Honest Recommendation</p>
                    <p className="text-slate-600 text-sm">We tell you what we found and whether cleaning makes sense</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-medium text-ink">No Obligation Quote</p>
                    <p className="text-slate-600 text-sm">If cleaning is needed, we provide a clear, upfront price</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Find Section */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-yellow-500 font-medium mb-3">What we find</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              This is what&apos;s hiding in your ducts
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our camera inspections reveal what you can&apos;t see—years of dust, debris, and buildup that affects your air quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/before-duct.webp"
                alt="Dirty air duct with debris buildup"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">Before cleaning</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/after-duct.webp"
                alt="Clean air duct after professional cleaning"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">After cleaning</span>
              </div>
            </div>
          </div>
          <p className="text-center text-white/50 text-sm mt-6">
            These are actual before and after photos from our inspections
          </p>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
