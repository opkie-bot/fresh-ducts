import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Blog | Fresh Ducts",
  description: "Tips, guides, and insights about air duct cleaning, indoor air quality, and home maintenance from Fresh Ducts.",
};

const posts = [
  {
    title: "Air Duct Cleaning Near Me That Makes A Difference",
    excerpt: "Finding quality air duct cleaning matters. Learn how professional services improve indoor air quality, HVAC efficiency, and your family's health.",
    date: "2024-04-08",
    slug: "air-duct-cleaning-near-me",
  },
  {
    title: "5 Essential Tips for Choosing the Right Air Duct Cleaner",
    excerpt: "Avoid scams and subpar service with these 5 tips for choosing a reputable air duct cleaner: accreditation, insurance, process, pricing, and reviews.",
    date: "2024-04-04",
    slug: "tips-choosing-air-duct-cleaner",
  },
  {
    title: "Exposing Common Air Duct Cleaning Scams",
    excerpt: "Don't fall victim to unscrupulous air duct cleaners. Learn the telltale signs of scams and how to find a trustworthy provider.",
    date: "2024-04-01",
    slug: "air-duct-cleaning-scams-exposed",
  },
  {
    title: "Understanding the Risks of Indoor Space Heaters",
    excerpt: "Space heaters can be convenient but come with serious risks. Learn about fire hazards, carbon monoxide, and safer alternatives for winter comfort.",
    date: "2024-03-28",
    slug: "space-heater-risks",
  },
  {
    title: "Strategies for Choosing an HVAC Company",
    excerpt: "Choosing the right HVAC company is crucial. Learn what to look for: insurance, licensing, experience, reviews, and customer service focus.",
    date: "2024-03-21",
    slug: "choosing-hvac-company",
  },
  {
    title: "Myths About Heating and Cooling",
    excerpt: "Don't fall for these common HVAC myths! From closing vents to filter replacement frequency, learn the truth about heating and cooling your home.",
    date: "2024-03-14",
    slug: "heating-cooling-myths",
  },
  {
    title: "Why Isn't Your HVAC Effectively Cooling Your Home?",
    excerpt: "Home not cooling properly? From open windows to refrigerant issues, discover the common causes and solutions to get your AC working again.",
    date: "2024-03-10",
    slug: "hvac-not-cooling",
  },
  {
    title: "How Often You Should Clean Your Air Ducts",
    excerpt: "Most experts recommend cleaning every 3 years, but factors like pets, allergies, and home age may change that. Learn when it's time to clean.",
    date: "2024-03-07",
    slug: "how-often-clean-air-ducts",
  },
  {
    title: "Why Is Your Home Cooling Unevenly?",
    excerpt: "Hot and cold spots making your home uncomfortable? Discover the common causes—from aging HVAC units to leaky ductwork—and how to fix them.",
    date: "2024-03-03",
    slug: "home-cooling-unevenly",
  },
  {
    title: "Tips for Preparing Your HVAC for Summer",
    excerpt: "Get your HVAC system ready for summer with these essential preparation tips, from duct sealing to filter replacement.",
    date: "2024-02-28",
    slug: "prepare-hvac-summer",
  },
  {
    title: "Differences Between Spring and Fall Allergies",
    excerpt: "Spring and fall allergies have different triggers. Learn what causes each and how to combat allergens in your home year-round.",
    date: "2024-02-21",
    slug: "spring-fall-allergies",
  },
  {
    title: "Steps to Improve Air Flow Through Your Vents",
    excerpt: "Experiencing poor airflow? Learn the common causes—from blocked ducts to clogged filters—and how to restore proper air circulation in your home.",
    date: "2024-02-17",
    slug: "improve-air-flow-vents",
  },
  {
    title: "How to Reduce Allergens in Your Home",
    excerpt: "Suffering from allergies at home? Discover effective methods to reduce allergens, from air duct cleaning to proper filter maintenance.",
    date: "2024-02-14",
    slug: "reduce-allergens-home",
  },
  {
    title: "How to Maintain Your Air Ducts Effectively",
    excerpt: "Complete guide to air duct maintenance: signs your ducts need attention, benefits of proper care, and DIY tips to keep your system running efficiently.",
    date: "2024-02-10",
    slug: "air-duct-maintenance",
  },
  {
    title: "Silicone vs. Acrylic Duct Sealant: What's the Difference?",
    excerpt: "Comparing silicone and acrylic duct sealants—learn the pros and cons of each to choose the right solution for your ductwork.",
    date: "2024-02-07",
    slug: "silicone-vs-acrylic-duct-sealant",
  },
  {
    title: "How Long Does Duct Seal Last and Signs It's Time to Reseal",
    excerpt: "Learn how long duct sealant lasts (10-40 years) and the telltale signs you need to reseal—from rising energy bills to uneven temperatures.",
    date: "2024-02-03",
    slug: "how-long-duct-seal-lasts",
  },
  {
    title: "The Benefits of Duct Sealing",
    excerpt: "Discover how duct sealing improves air quality, reduces odors, optimizes comfort, and saves money. Plus, signs that your ducts need sealing.",
    date: "2024-01-31",
    slug: "benefits-of-duct-sealing",
  },
  {
    title: "FAQs About Duct Sealing in Weber County, UT",
    excerpt: "Everything you need to know about duct sealing, from costs to materials. Learn how sealing your ducts can save you up to 30% on energy bills.",
    date: "2024-01-27",
    slug: "duct-sealing-faqs",
  },
  {
    title: "Do You Have Dust in Your AC Ducts? Here's How You Can Clean Them",
    excerpt: "Step-by-step guide to cleaning dust from your air ducts. Learn DIY tips and when to call a professional for air duct cleaning.",
    date: "2024-01-24",
    slug: "cleaning-dust-ac-ducts",
  },
  {
    title: "Tips for Preventing Leaks in Your AC Ducts",
    excerpt: "Learn how to inspect your ductwork for leaks and prevent energy waste. Small cracks can lead to big problems—here's what to look for.",
    date: "2024-01-20",
    slug: "preventing-ac-duct-leaks",
  },
  {
    title: "5 Signs Your Air Ducts Need Cleaning",
    excerpt: "Not sure if your ducts need attention? Here are the telltale signs that it's time for a professional cleaning.",
    date: "2024-01-15",
    slug: "signs-air-ducts-need-cleaning",
  },
  {
    title: "How Often Should You Clean Your Dryer Vent?",
    excerpt: "Clogged dryer vents are a leading cause of house fires. Learn how often you should have yours cleaned.",
    date: "2024-01-08",
    slug: "how-often-clean-dryer-vent",
  },
  {
    title: "The Truth About Air Duct Cleaning Scams",
    excerpt: "Learn how to spot duct cleaning scams and what to look for in a reputable company.",
    date: "2024-01-02",
    slug: "air-duct-cleaning-scams",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-medium mb-3">Blog</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Tips & Insights
            </h1>
            <p className="text-white/70 text-lg">
              Helpful information about air quality, duct cleaning, and keeping your home healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-surface rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <time className="text-sm text-slate-500">{post.date}</time>
                  <h2 className="font-display text-xl font-semibold text-ink mt-2 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <span className="text-navy-800 font-medium text-sm">
                    Read more →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
