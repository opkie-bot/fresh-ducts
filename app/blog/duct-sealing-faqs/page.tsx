import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "FAQs About Duct Sealing in Weber County, UT | Fresh Ducts",
  description: "Everything you need to know about duct sealing. Learn about costs, materials, and how sealing your ducts can save you up to 30% on energy bills.",
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
            FAQs About Duct Sealing in Weber County, UT
          </h1>
          <time className="text-white/60">September 11, 2025</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            Since they're typically hidden above the ceiling, below the floor and behind the walls, many homeowners tend to forget about their air ducts. That's not good—air ducts are vital aspects of your central heating and cooling system, which is why they should be maintained just as well as your heating and cooling units themselves.
          </p>

          <p>
            Apart from cleaning, the most basic form of maintenance is duct sealing in Weber County, UT. Continue reading to learn everything there is to know about having your ducts sealed, including who to call to perform the service!
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            What is duct sealing?
          </h2>

          <p>
            As the name suggests, duct sealing is the process of sealing up the ductwork in your home to ensure that no air is lost while it flows through the system. Additionally, the product we use to coat your ducts, Duct Armor, reduces the amount of organic growth in the ducts, so you're making your home more efficient while keeping the air as clean as can be.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            How much will duct sealing cost?
          </h2>

          <p>
            The total cost for duct sealing depends on the size of your home. Larger homes have a more extensive duct system, which will require more Duct Armor to coat the ducts and more man hours to complete the project, thus resulting in a higher quote. Give us a call today to get a quote and find out how much our service will cost you!
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Will duct sealing save money?
          </h2>

          <p>
            Simply put, yes, duct sealing will save you tons of money on your heating and cooling bill each month. It's estimated that as much as 30 percent of air and heat can be lost due to holes in ductwork. That means you're basically just tossing money out the window. Duct Armor will keep all of that air in your ducts, meaning your AC and furnace will deliver air to each room in your home without losing any strength in the process.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            What is the coating made of?
          </h2>

          <p>
            Duct Armor is a water-based latex material that's carcinogen-free and has proven to be safe for adults, kids and pets. As mentioned above, the material inhibits organic matter growth like mold and mildew that are so common in air ducts. Additionally, Duct Armor is so safe that it's classified as a non-hazmat material for shipping purposes.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Who should I hire to perform a duct sealing?
          </h2>

          <p>
            Duct sealing is one of those household projects that has to be handled by a professional. Even if you're an avid DIY-er, you still need to hire a pro to take care of it. If you want the best in the business, be sure to hire our team at Fresh Ducts! We're the only licensed dealer of Duct Armor in the state, so you can rest easy knowing that our team can tackle the job.
          </p>

          <p>
            If you've never had your ducts sealed, what are you waiting for? Give us a call today to schedule duct sealing in Weber County, UT or to learn more about all of our incredible duct services.
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Ready to seal your ducts?</p>
            <p className="text-slate-600 mb-4">
              As the only licensed Duct Armor dealer in Utah, we can help you save up to 30% on your energy bills.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
