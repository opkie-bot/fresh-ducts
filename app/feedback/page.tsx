import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback | Fresh Ducts",
  description: "Share your feedback about your Fresh Ducts experience. We value your input and use it to improve our services.",
};

export default function FeedbackPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-medium mb-3">Feedback</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              We Value Your Feedback
            </h1>
            <p className="text-white/70 text-lg">
              Your experience matters to us. Please share your thoughts so we can continue to improve our services.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  How was your experience?
                </label>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="cursor-pointer">
                      <input type="radio" name="rating" value={rating} className="sr-only peer" />
                      <span className="text-3xl peer-checked:text-yellow-500 text-slate-300 hover:text-yellow-400 transition-colors">
                        ★
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-ink mb-2">
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow resize-none"
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="canShare" className="mt-1" />
                  <span className="text-sm text-slate-600">
                    I give permission for Fresh Ducts to share my feedback on their website and marketing materials.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-500 text-navy-900 font-medium rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Had a great experience?</p>
            <a
              href="https://www.google.com/search?q=fresh+ducts+ogden+utah+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy-800 font-medium hover:text-navy-700"
            >
              Leave us a Google review →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
