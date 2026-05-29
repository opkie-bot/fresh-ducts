import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Exposing Common Air Duct Cleaning Scams | Fresh Ducts",
  description: "Don't fall victim to unscrupulous air duct cleaners. Learn the telltale signs of scams and how to find a trustworthy provider.",
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
            Exposing Common Air Duct Cleaning Scams
          </h1>
          <time className="text-white/60">April 1, 2024</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            Are you considering getting your air ducts professionally cleaned? It's a wise decision but beware - not all air duct cleaning companies have your best interests at heart. Unfortunately, there are unscrupulous companies out there that prey on unsuspecting homeowners.
          </p>

          <p>
            They use misleading tactics, such as offering unbelievably low prices or making false promises about the benefits of their services. These scams can leave you with a lighter wallet and no improvement in your indoor air quality.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Signs of a Potential Air Duct Cleaning Scam
          </h2>

          <p>
            Recognizing the warning signs of a potential air duct cleaning scam is crucial for homeowners looking to maintain their indoor air quality:
          </p>

          <h3 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
            Unusually Low Prices
          </h3>

          <p>
            If a company advertises air duct cleaning services at a fraction of the cost compared to competitors, it's time to raise an eyebrow. While everyone loves a good deal, prices that seem too good to be true often are. These companies may lure in customers with enticing offers, only to upsell unnecessary services once they arrive at your home.
          </p>

          <h3 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
            High-Pressure Sales Tactics
          </h3>

          <p>
            If a technician arrives at your house and insists on performing additional services that weren't outlined in the initial quote, it's wise to be skeptical. Legitimate companies typically provide a clear scope of work and do not resort to aggressive selling techniques.
          </p>

          <h3 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
            Lack of Transparency
          </h3>

          <p>
            A lack of transparency regarding the cleaning process can indicate a scam. Trustworthy companies will be open about their methods and the equipment they use. If a service provider is vague about their cleaning techniques or refuses to provide information, it should raise alarms.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Common Air Duct Cleaning Scams
          </h2>

          <h3 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
            Bait-and-Switch
          </h3>

          <p>
            A company advertises an incredibly low price for air duct cleaning but later claims that additional services are required for an extra charge. Customers often find themselves paying much more than they originally anticipated.
          </p>

          <h3 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
            Miraculous Promises
          </h3>

          <p>
            Some companies may claim that their services will eliminate all allergens and pollutants from your home, leading to drastically improved air quality. While cleaning air ducts can certainly help reduce dust and debris, no service can guarantee complete elimination of allergens.
          </p>

          <h3 className="font-display text-xl font-semibold text-ink mt-8 mb-3">
            Subpar Equipment
          </h3>

          <p>
            Some dishonest providers may use subpar equipment or inadequate cleaning methods, leaving your ducts only marginally cleaner – if at all. They might offer a service that sounds comprehensive but use ineffective techniques.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            The Risks of Falling for a Scam
          </h2>

          <ul className="space-y-3">
            <li><strong>Financial loss:</strong> Paying for subpar services that don't deliver results</li>
            <li><strong>Health risks:</strong> Ineffective cleaning methods leave contaminants in your ductwork</li>
            <li><strong>HVAC damage:</strong> Unscrupulous companies may even cause damage to your system</li>
            <li><strong>Eroded trust:</strong> Negative experiences can make you wary of all providers</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            How to Protect Yourself
          </h2>

          <ul className="space-y-3">
            <li>Do thorough background checks on any company you're considering</li>
            <li>Check online reviews, testimonials, and Better Business Bureau ratings</li>
            <li>Seek recommendations from friends, family, or neighbors</li>
            <li>Look for companies that are members of professional organizations like NADCA</li>
            <li>Always ask for a detailed written estimate before agreeing to services</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            What to Look for in a Reputable Company
          </h2>

          <ul className="space-y-3">
            <li>Verified license, insurance, and certifications</li>
            <li>Willingness to explain their cleaning process and equipment</li>
            <li>References from past customers</li>
            <li>Advanced techniques and equipment</li>
            <li>Transparent pricing with no surprise fees</li>
          </ul>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Choose a trustworthy provider</p>
            <p className="text-slate-600 mb-4">
              At Fresh Ducts, we provide quality, trustworthy, and scam-free air duct cleaning services. We serve the Wasatch Front from Salt Lake City to Brigham City with over 30 years of experience.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Honest Quote
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
