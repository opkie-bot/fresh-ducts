import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Referral Program | Fresh Ducts",
  description: "Earn rewards by referring friends and family to Fresh Ducts. Get $25 for each successful referral.",
};

export default function ReferralProgramPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-medium mb-3">Referral Program</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Earn $25 for Every Referral
            </h1>
            <p className="text-white/70 text-lg">
              Know someone who needs their ducts cleaned? Refer them to Fresh Ducts and earn $25 when they complete a service.
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
              Three Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-yellow-500 text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-ink text-lg mb-2">Refer a Friend</h3>
              <p className="text-slate-600">
                Tell your friends, family, or neighbors about Fresh Ducts. Give them your name so they can mention you when they call.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-yellow-500 text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold text-ink text-lg mb-2">They Get Service</h3>
              <p className="text-slate-600">
                When your referral schedules and completes a duct cleaning service, they mention your name.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-yellow-500 text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold text-ink text-lg mb-2">You Get Paid</h3>
              <p className="text-slate-600">
                We&apos;ll send you a $25 gift card as a thank you for spreading the word about Fresh Ducts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-ink mb-4">
              Submit a Referral
            </h2>
            <p className="text-slate-600">
              Fill out this form and we&apos;ll reach out to your referral directly.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8">
            <form className="space-y-6">
              <div className="border-b border-slate-200 pb-6 mb-6">
                <h3 className="font-semibold text-ink mb-4">Your Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="yourName" className="block text-sm font-medium text-ink mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="yourName"
                      name="yourName"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="yourEmail" className="block text-sm font-medium text-ink mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="yourEmail"
                      name="yourEmail"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-4">Referral Information</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="referralName" className="block text-sm font-medium text-ink mb-2">
                        Referral&apos;s Name
                      </label>
                      <input
                        type="text"
                        id="referralName"
                        name="referralName"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="referralPhone" className="block text-sm font-medium text-ink mb-2">
                        Referral&apos;s Phone
                      </label>
                      <input
                        type="tel"
                        id="referralPhone"
                        name="referralPhone"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="referralEmail" className="block text-sm font-medium text-ink mb-2">
                      Referral&apos;s Email (optional)
                    </label>
                    <input
                      type="email"
                      id="referralEmail"
                      name="referralEmail"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-500 text-navy-900 font-medium rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Submit Referral
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Terms: Referral reward is paid after the referred customer completes a paid service of $200 or more. Limit of 10 referral rewards per person per year.
          </p>
        </div>
      </section>
    </main>
  );
}
