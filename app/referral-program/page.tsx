import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Affiliate Program | Fresh Ducts",
  description: "Become an affiliate partner with Fresh Ducts and earn cash for every referral. Join our affiliate program today.",
};

export default function ReferralProgramPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-medium mb-3">Affiliate Program</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Earning Cash for Referrals
            </h1>
            <p className="text-white/70 text-lg">
              Partner with Fresh Ducts and earn money for every successful referral. It&apos;s easy to get started.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-yellow-600 font-medium mb-3">How It Works</p>
            <h2 className="font-display text-3xl font-semibold text-ink">
              It&apos;s as Easy as 1, 2, 3...
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-yellow-500 text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-ink text-lg mb-2">Sign Up</h3>
              <p className="text-slate-600">
                Fill out the affiliate sign-up form below to join our partner program.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-yellow-500 text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold text-ink text-lg mb-2">Send Referrals</h3>
              <p className="text-slate-600">
                Share Fresh Ducts with your network. When they book a service, you earn cash.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-yellow-500 text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold text-ink text-lg mb-2">Get Paid</h3>
              <p className="text-slate-600">
                Receive your referral payment after the service is completed. It&apos;s that simple!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Fresh Duct Difference */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-500 font-medium mb-3">Why Partner With Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                The Fresh Duct Difference
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-white/80">Trusted by Northern Utah families since 1993</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-white/80">4.9 star rating with over 300 Google reviews</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-white/80">BBB Accredited with A+ Rating</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-white/80">Free video inspections - we show before we clean</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-white/80">Professional, uniformed technicians</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-white/80">High conversion rates for your referrals</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/logo.svg"
                  alt="Fresh Ducts Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Sign-Up Form */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-ink mb-4">
              Become An Affiliate Partner!
            </h2>
            <p className="text-slate-600">
              Fill out the form below to join our affiliate program and start earning.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8">
            <iframe
              src="https://link.opkie.com/widget/form/jQQsyM6vZDdZ5FhQh8mo"
              style={{ width: "100%", height: "569px", border: "none", borderRadius: "3px" }}
              id="inline-jQQsyM6vZDdZ5FhQh8mo"
              data-layout="{'id':'INLINE'}"
              data-form-name="Affiliate Sign-Up Form"
              data-height="569"
              title="Affiliate Sign-Up Form"
            />
          </div>
        </div>
      </section>

      <Script src="https://link.opkie.com/js/form_embed.js" strategy="lazyOnload" />
    </main>
  );
}
