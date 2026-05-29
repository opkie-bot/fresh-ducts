import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Strategies for Choosing an HVAC Company | Fresh Ducts",
  description: "Choosing the right HVAC company is crucial. Learn what to look for: insurance, licensing, experience, reviews, and customer service focus.",
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
            Strategies for Choosing an HVAC Company
          </h1>
          <time className="text-white/60">March 20, 2026</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            It is crucial to ensure that you do your research when you are choosing an HVAC company. There are many different aspects that can impact the company that you should choose to work with. Understanding these various factors will often help you to make the best possible decision for the HVAC system of your building.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Insured
          </h2>

          <p>
            Ensuring that the company has insurance is an important component when you are choosing an HVAC company. When the HVAC company does not have the necessary insurance, you might be putting yourself at risk with their services. If they don't have insurance and something goes wrong with the project, you might not be covered for it. You may even be held liable for injuries on your property.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Request Bids
          </h2>

          <p>
            Money is often a huge concern when it comes to choosing an HVAC company to meet all of your needs. In order to identify the expenses associated with your services, you should ensure that you request bids from multiple companies. Not only will this provide you with more specific information regarding the costs of the specific company, but it can also help you to determine the general amount that you should expect to pay for the specific services.
          </p>

          <p>
            Be particularly cautious if you receive a bid that is substantially lower than your other bids. This may impact the quality of the services that you receive.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            A Focus on Customer Service
          </h2>

          <p>
            It is extremely important to ensure that you work with a company that focuses on their customer service. When the company provides good customer service, it will often be easier to communicate clearly with the team. This can help to ensure that everyone stays on the same page and prevents issues with the specific service. By providing excellent customer service, you will obtain a much better experience with the specific company.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Referrals
          </h2>

          <p>
            It can be helpful to ask for recommendations from your friends and family members to help you choose an HVAC company. These referrals can help to narrow down the options that will help you to make the best decision for your HVAC company. This can help you to get a better sense of the experience that you can obtain with the company that you choose.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Licensed
          </h2>

          <p>
            A licensed company is an important part of choosing the best company to meet all of your specific needs. This license is an indication of the qualifications that the company has, as well as an assurance that the company will be able to meet all of your specific needs. When you take care to ensure that the company is licensed, you can be much more confident with the services that they are able to provide.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Check Experience
          </h2>

          <p>
            A license will provide a sense of the qualifications of the company, but it won't necessarily tell you about their level of experience. It can be useful to consider the experience that the team has in order to help you make the best decision. If the company has previously worked on projects that are similar to your own, you are more likely to be confident that they can complete your specific services.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Reviews
          </h2>

          <p>
            It can be especially beneficial to consider the reviews of the company that you are considering. These reviews may be available online or specifically on their website. You should ensure that you read as many reviews as possible to help you to make the best decision for your property. When you only read a couple reviews, you may not necessarily get the best idea of the services that they offer.
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Looking for quality duct cleaning?</p>
            <p className="text-slate-600 mb-4">
              At Fresh Ducts, we provide superior air duct cleaning services with over 30 years of experience, full insurance, and a commitment to customer satisfaction. Check out our reviews!
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
