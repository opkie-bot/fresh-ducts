import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Air Duct Cleaning Near Me That Makes A Difference | Fresh Ducts",
  description: "Finding quality air duct cleaning matters. Learn how professional services improve indoor air quality, HVAC efficiency, and your family's health.",
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
            Air Duct Cleaning Near Me That Makes A Difference
          </h1>
          <time className="text-white/60">April 8, 2024</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            Searching for "air duct cleaning near me" can lead to many options, but finding a service that truly makes a difference is what matters. Air duct cleaning is a home maintenance task that often goes unnoticed, yet it plays a crucial role in indoor air quality, HVAC efficiency, and overall health.
          </p>

          <p>
            If you've ever wondered, "Is air duct cleaning really necessary?" you're not alone. At Fresh Ducts, we want to make sure you are taken care of. In this post, we'll answer common questions about air duct cleaning and explain how professional services can make the difference.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Does Cleaning Air Ducts Really Make a Difference?
          </h2>

          <p>
            Yes, cleaning air ducts can make a significant difference in your home. Over time, dust, pet dander, mold spores, and other allergens collect inside ductwork. When your HVAC system circulates air, it can push these contaminants into your living space, causing allergy symptoms, respiratory issues, and unpleasant odors.
          </p>

          <p>
            A professional air duct cleaning service removes these contaminants, improving indoor air quality and enhancing HVAC system efficiency. Clean ducts allow air to flow freely, reducing strain on your heating and cooling systems, which can lower energy costs and extend the lifespan of your HVAC equipment.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Benefits of Professional Air Duct Cleaning
          </h2>

          <div className="grid gap-6 my-8">
            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-ink mb-2">Improved Indoor Air Quality</h3>
              <p className="text-slate-600 text-sm mb-0">
                Remove dust, allergens, mold spores, and other pollutants that circulate through your home every time your HVAC runs.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-ink mb-2">Enhanced HVAC Efficiency</h3>
              <p className="text-slate-600 text-sm mb-0">
                Clean ducts allow air to flow freely, reducing the workload on your heating and cooling systems and potentially lowering energy bills.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-ink mb-2">Extended Equipment Lifespan</h3>
              <p className="text-slate-600 text-sm mb-0">
                When your HVAC doesn't have to work as hard, it experiences less wear and tear, helping it last longer.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-ink mb-2">Reduced Allergens and Odors</h3>
              <p className="text-slate-600 text-sm mb-0">
                Professional cleaning eliminates the buildup that causes musty odors and triggers allergy symptoms.
              </p>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            What Makes Fresh Ducts Different?
          </h2>

          <p>
            When you search for "air duct cleaning near me," you want a provider that truly delivers results. At Fresh Ducts, we stand out from the competition:
          </p>

          <ul className="space-y-3">
            <li><strong>30+ years of experience:</strong> We've been serving Northern Utah since 1993</li>
            <li><strong>Truck-mounted equipment:</strong> Our powerful vacuum systems deliver 3-4x more suction than portable units</li>
            <li><strong>Free video inspection:</strong> We show you what's inside your ducts before and after cleaning</li>
            <li><strong>No pressure, no upsells:</strong> Just honest assessments and transparent pricing</li>
            <li><strong>Family owned and operated:</strong> We treat every home like it's our own</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Serving Northern Utah
          </h2>

          <p>
            Fresh Ducts proudly serves the Wasatch Front, including:
          </p>

          <ul className="space-y-2">
            <li>Weber County: Ogden, North Ogden, Roy, Riverdale</li>
            <li>Davis County: Layton, Clearfield, Farmington, Bountiful</li>
            <li>Salt Lake County: Salt Lake City, Sandy, Murray, West Valley</li>
            <li>Cache County: Logan, North Logan, Smithfield</li>
          </ul>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Ready to breathe cleaner air?</p>
            <p className="text-slate-600 mb-4">
              Stop searching for "air duct cleaning near me" and call the trusted professionals at Fresh Ducts. Our free video inspection will show you exactly what's in your ducts—no pressure, no obligation.
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
