import { Metadata } from "next";
import { Reviews } from "@/components/sections/Reviews";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Reviews | Fresh Ducts",
  description: "Read what our customers say about Fresh Ducts. 4.9 stars from 309 Google reviews.",
};

export default function ReviewsPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-medium mb-3">Reviews</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h1>
            <p className="text-white/70 text-lg">
              Don&apos;t just take our word for it. See what Northern Utah homeowners say about our service.
            </p>
          </div>
        </div>
      </section>

      <Reviews />
      <CTABand />
    </main>
  );
}
