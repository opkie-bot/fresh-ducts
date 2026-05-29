import { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "FAQs | Fresh Ducts",
  description: "Frequently asked questions about air duct cleaning, dryer vent cleaning, and our services in Northern Utah.",
};

export default function FAQsPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-medium mb-3">FAQs</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-lg">
              Get answers to common questions about air duct cleaning, our process, and what to expect.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <CTABand />
    </main>
  );
}
