import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning | Fresh Ducts",
  description: "Professional dryer vent cleaning to prevent fires and improve efficiency. We clean the full run from dryer to exterior. Serving Northern Utah.",
};

export default function DryerVentCleaningPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-500 font-medium mb-3">Safety First</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Dryer Vent Cleaning
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Clogged dryer vents are a leading cause of house fires. We clean the full run from your dryer to the exterior vent, removing lint buildup and restoring proper airflow.
              </p>
              <Button href="/contact-us">Schedule Service</Button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/owner-cleaning.jpg"
                alt="Fresh Ducts technician cleaning a dryer vent"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warning Stats */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6">
              <p className="text-4xl font-bold text-navy-900 mb-2">2,900</p>
              <p className="text-slate-600">Home dryer fires each year</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <p className="text-4xl font-bold text-navy-900 mb-2">34%</p>
              <p className="text-slate-600">Caused by failure to clean</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <p className="text-4xl font-bold text-navy-900 mb-2">$35M</p>
              <p className="text-slate-600">In property damage annually</p>
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
                Signs Your Dryer Vent Needs Cleaning
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 flex-shrink-0">!</span>
                  <div>
                    <p className="font-medium text-ink">Clothes take longer to dry</p>
                    <p className="text-slate-600 text-sm">Multiple cycles needed for a single load</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 flex-shrink-0">!</span>
                  <div>
                    <p className="font-medium text-ink">Dryer is hot to the touch</p>
                    <p className="text-slate-600 text-sm">The outside of the dryer feels unusually hot</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 flex-shrink-0">!</span>
                  <div>
                    <p className="font-medium text-ink">Burning smell</p>
                    <p className="text-slate-600 text-sm">You notice a burning odor when the dryer runs</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 flex-shrink-0">!</span>
                  <div>
                    <p className="font-medium text-ink">Lint around the dryer</p>
                    <p className="text-slate-600 text-sm">Excessive lint buildup behind or around the dryer</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink mb-6">
                What We Do
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  We clean the entire dryer vent run, from the back of your dryer all the way to the exterior vent cap. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Disconnecting and inspecting the dryer connection</li>
                  <li>Cleaning the full length of the vent duct</li>
                  <li>Removing lint from the exterior vent cap</li>
                  <li>Checking for proper airflow</li>
                  <li>Reconnecting and testing the system</li>
                </ul>
                <p>
                  We recommend dryer vent cleaning annually, or more frequently if you do a lot of laundry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-500 font-medium mb-3">Real results</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                See what we remove
              </h2>
              <p className="text-white/70 mb-6">
                Years of lint buildup can accumulate in your dryer vent, creating a serious fire hazard. Our thorough cleaning removes all debris, restoring safe and efficient operation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Faster drying times
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Reduced fire risk
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Lower energy bills
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/before-after-2.jpg"
                alt="Dryer vent before and after cleaning"
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
