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

      {/* Location Selection */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Select Your Location
            </h2>
            <p className="text-slate-600">
              Choose the location where you received service to leave your feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://reviews.opkie.com/fresh-ducts-slc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-transparent hover:border-yellow-500"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">Salt Lake City</h3>
              <p className="text-slate-600 mb-4">Salt Lake County area</p>
              <span className="inline-flex items-center gap-2 text-navy-800 font-medium group-hover:text-yellow-600 transition-colors">
                Leave Feedback
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            <a
              href="https://reviews.opkie.com/fresh-ducts-ogden/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-transparent hover:border-yellow-500"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">Ogden</h3>
              <p className="text-slate-600 mb-4">Weber & Davis County area</p>
              <span className="inline-flex items-center gap-2 text-navy-800 font-medium group-hover:text-yellow-600 transition-colors">
                Leave Feedback
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
