import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "5 Essential Tips for Choosing the Right Air Duct Cleaner | Fresh Ducts",
  description: "Avoid scams and subpar service with these 5 tips for choosing a reputable air duct cleaner: accreditation, insurance, process, pricing, and reviews.",
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
            5 Essential Tips for Choosing the Right Air Duct Cleaner
          </h1>
          <time className="text-white/60">May 1, 2026</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            Are you tired of breathing in dusty, polluted air in your own home? It's time to take control of your indoor air quality by choosing the right air duct cleaner. But with so many options out there, how do you know which one is the best fit for your needs?
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            1. Accredited and Reputable
          </h2>

          <p>
            First and foremost, you want to look for a company that is experienced and reputable. An established track record is a good indication of the quality of service you can expect. Check with the Better Business Bureau (BBB) as they do background checks and screenings to help ensure you are working with a certified company.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            2. Certified and Insured
          </h2>

          <p>
            Check if the air duct cleaner is certified and insured to ensure that you are protected in case of any accidents or damages. Again, the BBB is the best source to check on all this information. If they are not registered with the BBB, that is a red flag to consider.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            3. Understanding the Cleaning Process
          </h2>

          <p>
            It is vital to understand the vent cleaning process used by the company. The best air duct cleaners use advanced techniques and equipment to thoroughly clean your ducts and eliminate all contaminants. Make sure they follow industry standards and guidelines.
          </p>

          <p>
            At Fresh Ducts, we take pride in our work and go above and beyond to ensure the air vents are completely cleaned. Our truck-mounted vacuum systems deliver 3-4x more suction than portable units.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            4. Ask for a Breakdown of Costs
          </h2>

          <p>
            Avoid surprises by asking for a comprehensive breakdown of the costs involved. Far too often companies in this industry will use $99 specials to hook customers into sub-par work. Many of them do not follow the right processes required to effectively clean your air ducts and dryer vents.
          </p>

          <p>
            When choosing the right air duct cleaner, you will know that you're likely choosing the right one when they can give you transparent pricing.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            5. Check Their Reputation
          </h2>

          <p>
            When it comes to choosing the right air duct cleaner, look at their reputation. Nothing gives you insight into how the business is run the way their reputation does. While Google does normally provide the best reviews, there are a handful of other places to check like the BBB, Facebook, Bing, Yelp, and more.
          </p>

          <p>
            Get a well-rounded amount of reviews ranging from the best to the worst customer experiences to know who you are working with.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            The Importance of Clean Air Ducts
          </h2>

          <p>
            Clean air ducts are essential for maintaining a healthy and comfortable living environment. Over time, dust, allergens, and other contaminants can accumulate in your air ducts, reducing the quality of the air you breathe. This can lead to respiratory issues, allergies, and other health problems. Regular air duct cleaning can help remove these pollutants and improve the indoor air quality in your home.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Signs Your Air Ducts Need Cleaning
          </h2>

          <ul className="space-y-3">
            <li>A musty or stale odor coming from your vents (indicates mold or mildew)</li>
            <li>Unexplained allergies or respiratory issues in your household</li>
            <li>Visible dust or debris coming out of your vents when the system is running</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Questions to Ask During Consultation
          </h2>

          <ul className="space-y-3">
            <li>What is your cleaning process?</li>
            <li>What equipment do you use?</li>
            <li>How long will the cleaning process take?</li>
            <li>Are there any restrictions or precautions I need to be aware of?</li>
            <li>Do you offer any antimicrobial treatments or sealants?</li>
          </ul>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Ready to breathe easier?</p>
            <p className="text-slate-600 mb-4">
              At Fresh Ducts, we meet all these criteria and more. With over 30 years of experience, full insurance, transparent pricing, and a stellar reputation, we're the right choice for your air duct cleaning needs.
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
