import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Blog | Fresh Ducts",
  description: "Tips, guides, and insights about air duct cleaning, indoor air quality, and home maintenance from Fresh Ducts.",
};

const posts = [
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
              <article key={post.slug} className="bg-surface rounded-xl p-6">
                <time className="text-sm text-slate-500">{post.date}</time>
                <h2 className="font-display text-xl font-semibold text-ink mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <span className="text-navy-800 font-medium text-sm">
                  Coming soon →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
