import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Tips for Preventing Leaks in Your AC Ducts | Fresh Ducts",
  description: "Learn how to inspect your ductwork for leaks and prevent energy waste. Tips for air duct inspection in Weber County, UT.",
};

export default function BlogPost() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-yellow-500 hover:text-yellow-400 font-medium mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Tips for Preventing Leaks in Your AC Ducts
          </h1>
          <time className="text-white/60">August 14, 2025</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            What do you think of when you read "HVAC energy efficiency"? Many people consider the major changes they can make to increase the efficiencies of the heating and cooling systems in their homes, such as installing an energy-efficient HVAC unit. You may be surprised to learn that saving on energy costs and helping your home run more efficiently doesn't always require you to drop big bucks.
          </p>

          <p>
            A common way homes waste energy is through leaks or cracks in the heating and cooling system ductwork. You can help prevent a decline in the efficiency of your AC by inspecting your ducts for leaks. An air duct inspection in Weber County, UT can be performed as a do-it-yourself project, but you'd likely be better off hiring a professional technician to ensure your inspection is complete.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Regularly Inspect for Leaks
          </h2>

          <p>
            Regularly inspecting your ducts for leaks or problem areas is the best way to prevent leaks from becoming major issues. Small cracks and leaks are likely to form over time as your home gets older and its systems begin to age. However, you can help reduce your risk of duct leaks with regular air duct inspections in Weber County, UT.
          </p>

          <p>
            To check your air conditioning ducts for leaks, you'll first need to seal off the air registers and returns. This pressurizes your air duct system, which makes finding leaks much easier. Use plastic wrap taped down over the registers and returns of your ducts. Try to make your seals as airtight as possible.
          </p>

          <p>
            You can use a smoke pencil designed for detecting airflow to help you find any leaks in your AC ducts. Smoke pencils are handheld devices that emit a small trail of smoke, often from a small cylinder shaped like a pencil. Follow the ductwork using the smoke pencil. If you find a spot where the smoke from the pencil blows sideways or moves in a cyclone, you have found a leak.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Replace Temporary Fixes
          </h2>

          <p>
            While inspecting for leaks in your air ducts, you may notice duct tape or other materials used in spots on your ductwork. This may be a sign that a leak has been found in the past. Many people use duct tape as a quick fix for small leaks in ductwork. Despite its name, duct tape is not a good solution for fixing leaks, as it is porous, allowing air to travel through. Make a note of the leak and remove any temporary fixes so they can be replaced with more permanent solutions.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Prevent Unnecessary Pressure
          </h2>

          <p>
            Backpressure in your ducts is the air pressure that arises when air cannot find a way to move through the ductwork. Closing or covering vents in your home can cause air to seek a different exit from your ductwork. The pressurized air can cause small leaks, which can grow by continued blockage of the ductwork. Avoid closing vents or blocking air ducts if possible.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Professional Air Duct Inspections in Weber County, UT
          </h2>

          <p>
            Get the professional duct inspection service you need to find and repair any leaks in your air ducts by calling Fresh Ducts today.
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Ready to get your ducts inspected?</p>
            <p className="text-slate-600 mb-4">
              Our free video inspection will show you exactly what's inside your ductwork.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
