import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Silicone vs. Acrylic Duct Sealant: What's the Difference? | Fresh Ducts",
  description: "Comparing silicone and acrylic duct sealants—learn the pros and cons of each to choose the right solution for your ductwork in Weber County, UT.",
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
            Silicone vs. Acrylic Duct Sealant: What's the Difference?
          </h1>
          <time className="text-white/60">October 23, 2025</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            If you have owned your central HVAC system for any length of time, then you can probably pick out when changes in airflow or the sounds of your system occur. It could be uneven temperatures in areas throughout the house, or a general lack of consistent airflow, but the big sign most homeowners pay attention to is a higher monthly energy bill.
          </p>

          <p>
            One reason for airflow issues is leaky ducts—cracks, gaps, tears and wear are not unusual in older ductwork. Sealing your ducts can prevent air leaks, therefore saving you money on energy bills and preventing your HVAC system from working harder than it should to cool or heat your house.
          </p>

          <p>
            There are a few ways to seal ductwork, including using a silicone or acrylic duct sealant in Weber County, UT. Before diving into the silicone vs. acrylic sealant debate, let's first review what they are.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Silicone sealant
          </h2>

          <p>
            Based on silicone polymers, silicone sealants cure and become a tough, flexible rubber that's great for a variety of household and industrial applications. There are three main types of silicone sealant: acetoxy cure, alkoxy cure and oxide cure.
          </p>

          <p>
            A majority of interior applications take acetoxy cure, while the latter, neutral curing silicones are used for exterior applications because of their highly rated adhesion and weatherproofing properties. If you're working with a surface that's sensitive to acetic acid, choose a neutral curing silicone.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Acrylic sealant
          </h2>

          <p>
            Acrylic sealants are based on acrylic polymers. These sealants go by several other names, including decorator's caulk, decorator's acrylic and painter's caulk. Even though acrylic sealants are traditionally used in interiors as an economical filler and sealant, some can be used in exteriors.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Difference between acrylic and silicone sealant
          </h2>

          <p>
            It's important to know the differences between silicone and acrylic sealants, as well as the advantages each bring to the table. With all the information in front of you, you'll be able to compare these two sealant types to one another before deciding on the one to use for your project.
          </p>

          <h3 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
            Advantages of Acrylic
          </h3>

          <p>
            One advantage acrylic sealant has over silicone sealant is paintability. Most paints can be used on acrylic sealants, which is not the case with silicone sealants. However, if the sealant is for your ductwork, there's no real need for paint.
          </p>

          <h3 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
            Advantages of Silicone
          </h3>

          <p>
            A downside to silicone is that it produces an unpleasant vinegar odor during curing, but there are also some odorless silicone options.
          </p>

          <p>
            On the positive side, silicone sealants are more flexible and longer lasting than acrylic, and they do not have a volume shrinkage. Acrylic sealants have a major disadvantage in that they are water permeable. It's advised that you not use acrylic in damp or humid places due to the risk of mold growth.
          </p>

          <div className="my-8 p-6 bg-navy-900 rounded-xl">
            <h3 className="text-white font-semibold mb-4">Quick Comparison</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-yellow-500 font-medium mb-2">Silicone</p>
                <ul className="text-white/70 space-y-1">
                  <li>+ More flexible</li>
                  <li>+ Longer lasting</li>
                  <li>+ No shrinkage</li>
                  <li>- Can't be painted</li>
                  <li>- Vinegar odor during curing</li>
                </ul>
              </div>
              <div>
                <p className="text-yellow-500 font-medium mb-2">Acrylic</p>
                <ul className="text-white/70 space-y-1">
                  <li>+ Paintable</li>
                  <li>+ More economical</li>
                  <li>- Water permeable</li>
                  <li>- Risk of mold in humid areas</li>
                  <li>- Volume shrinkage</li>
                </ul>
              </div>
            </div>
          </div>

          <p>
            Feel free to contact the team at Fresh Ducts to learn more about acrylic and silicone duct sealant in Weber County, UT. With a proper duct sealant in place, you and your family will benefit from cool air in the summer and warm air in the winter. Call us today to get started!
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Not sure which sealant is right for you?</p>
            <p className="text-slate-600 mb-4">
              Our experts can assess your ductwork and recommend the best solution for your home.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
