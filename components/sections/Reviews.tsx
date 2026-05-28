const reviews = [
  {
    name: "Harriet N.",
    text: "They showed me exactly what was in my ducts before doing anything. No pressure, just honest information. The difference after cleaning was obvious.",
  },
  {
    name: "Mark A.",
    text: "Finally, a company that doesn't try to upsell you on everything. They told me my dryer vent needed cleaning but my ducts were fine. Appreciated the honesty.",
  },
  {
    name: "Jennifer L.",
    text: "Third time using Fresh Ducts over the years. Same great service every time. They show up when they say they will and do what they say they'll do.",
  },
];

export function Reviews() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">
            What customers say
          </h2>
          <p className="text-slate-600">
            4.9 stars from 309 reviews on Google.{" "}
            <a
              href="https://www.google.com/search?q=fresh+ducts+ogden+utah+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-800 underline underline-offset-2 hover:text-navy-700"
            >
              Read more reviews
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <blockquote key={index} className="border-t border-line pt-6">
              <p className="text-slate-600 mb-4">&ldquo;{review.text}&rdquo;</p>
              <cite className="not-italic text-sm font-medium text-ink">
                — {review.name}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
