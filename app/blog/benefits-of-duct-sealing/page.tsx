import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "The Benefits of Duct Sealing | Fresh Ducts",
  description: "Discover how duct sealing improves air quality, reduces odors, optimizes comfort, and saves money. Learn the signs that your ducts need sealing.",
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
            The Benefits of Duct Sealing
          </h1>
          <time className="text-white/60">January 31, 2024</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            Good homeowners know that maintaining their air ducts is the key to a happy, healthy and energy-efficient house. One of the best maintenance techniques we provide is duct sealing. This post will cover all of the benefits of hiring our duct sealers in Weber County, UT to work on your air ducts.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Ensure clean air
          </h2>

          <p>
            Mold, mildew and fungus are common contaminants in ducts around the world. These scary organisms thrive in damp, dark areas, and can pose a serious health risk for anyone with allergies. Thankfully, our Duct Armor product contains zinc, which inhibits organic matter growth. Nothing will be able to grow in your ducts after we seal them.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Reduce odors
          </h2>

          <p>
            As you can imagine, those contaminants growing up in your ducts tend to produce a musty and unpleasant smell. This odor wafts throughout your home, creating a rather unappealing environment for everyone in your household. The best way to ensure your home is clean and odor free is to have your ducts sealed with Duct Armor today!
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Optimize comfort
          </h2>

          <p>
            Did you know that as much as 30 percent of the heat and AC produced by your HVAC system can be lost due to holes and gaps in your ductwork? That means rooms in your home will receive little to no airflow, creating a space that's either too hot or too cold. Sealing your ducts keeps 100 percent of the air flowing through your home, so your comfort level should improve dramatically.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Save money
          </h2>

          <p>
            Going along with the point above, air flowing out through holes or gaps in your ductwork basically means you're throwing money down the drain. Though sealing your ducts isn't always cheap, you'll save each month on your heating and cooling bills.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Signs your ducts should be sealed
          </h2>

          <p>
            The good news is that knowing when to hire duct sealers in Weber County, UT isn't a guessing game. If any of the points below apply to you, it's likely time to have your ducts sealed:
          </p>

          <ul className="space-y-4">
            <li>
              <strong>It's never been done:</strong> The first sign that you need to call us is if your ducts have never been sealed. We believe duct sealing should be one of the first things homeowners do once they buy a new house.
            </li>
            <li>
              <strong>You have poor air quality:</strong> Do members of your family have problems breathing, or have a constant cough? They might not be sick, but instead have allergy issues due to mold growth up in your air ducts. Sealing them will eliminate all of those contaminants, leaving you with crisp and clean air.
            </li>
            <li>
              <strong>You're losing money:</strong> As mentioned above, 20 to 30 percent of your air can slip through gaps in your ductwork, meaning it never flows through the vents in your home. This is a huge waste of money each month. You might save yourself hundreds of dollars throughout the year by having your ducts sealed today.
            </li>
          </ul>

          <p className="mt-8">
            Summer is the perfect time of year to have your ducts sealed, so give us a call today to get a free estimate! At Fresh Ducts, our low prices and excellent customer service make us the number one duct sealers in Weber County, UT.
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Ready to seal your ducts?</p>
            <p className="text-slate-600 mb-4">
              As the only licensed Duct Armor dealer in Utah, we can help you save up to 30% on your energy bills while improving your air quality.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
