import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "How Long Does Duct Seal Last and Signs It's Time to Reseal | Fresh Ducts",
  description: "Learn how long duct sealant lasts (10-40 years) and the telltale signs you need to reseal your ductwork in Weber County, UT.",
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
            How Long Does Duct Seal Last and Signs It's Time to Reseal
          </h1>
          <time className="text-white/60">February 3, 2024</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            One of the first questions most homeowners have about duct sealant is how long the application lasts before it needs to be replaced. The answer depends on the sealing material you choose, the quality of the installation and who you ask.
          </p>

          <p>
            Many duct sealant installers and manufacturers guarantee their products up to 10 years, but tests performed on various sealants conclude that a good seal can potentially last the lifetime of the ductwork. That means your seal may stay in good condition anywhere from 10 to 30 years, perhaps even 40 years in some cases. Other contributing factors include your use habits and maintenance of your HVAC system.
          </p>

          <p>
            Are you experiencing the effects of a lack of ductwork sealant? Let us help you! Here are the telltale signs you need to invest in new duct seal in Weber County, UT.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Increased cooling and heating costs
          </h2>

          <p>
            If you've been living with your current HVAC system for at least a few seasons, then you probably have a pretty good idea how much your heating and cooling bills will be. Ideally, your energy bills should remain within a certain range each month (weather permitting), which is why you're likely to notice a significant increase in cost.
          </p>

          <p>
            If your bills are rising but you are not using your heater or air conditioner more than you normally do, it could be due to air leaks in your ductwork.
          </p>

          <p>
            Air leaks are not good. This could mean there are cracks, tears or weak seals in the ducts. The HVAC system will have to work extra hard to heat or cool your house effectively. If this is the case for you, sealing your ductwork may be the best course of action to restore system efficiency.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Poor indoor air quality
          </h2>

          <p>
            A decline in indoor air quality may go unnoticed for a time. This typically occurs due to damaged seals, leaks or cracks in your home's ductwork allowing air pollutants to get inside your HVAC system. Once pollutants are in the air ducts, they easily mix with the air coming into your living space.
          </p>

          <p>
            The air distributes those pollutants to every room in the house, instantly lowering your indoor air quality a considerable amount. Sealed ducts will have you breathing better in no time!
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Uneven temperatures throughout the house
          </h2>

          <p>
            A central HVAC system should keep temperatures consistent throughout the house. Unfortunately, time does take a toll on the condition and effectiveness of HVAC components.
          </p>

          <p>
            With this in mind, be aware that noticing hot or cold spots in different areas of your home may indicate problems with the ductwork. Having your air ducts professionally sealed can help the system evenly distribute air to all areas of your home.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Is sealing ducts necessary?
          </h2>

          <p>
            While you don't have to seal your ducts, it can help maintain system efficiency, protect your indoor living areas from moisture and prevent the spread of mold, mildew, bacteria and other unhealthy airborne matter. Call Fresh Ducts today to learn more. We look forward to assisting you soon!
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Noticing these signs?</p>
            <p className="text-slate-600 mb-4">
              If your energy bills are rising or you're experiencing uneven temperatures, it may be time to reseal your ducts.
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
