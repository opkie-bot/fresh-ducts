import { Metadata } from "next";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Contact Us | Fresh Ducts",
  description: "Contact Fresh Ducts for a free air duct inspection. Call (801) 395-2822 or fill out our contact form. Serving Northern Utah since 1993.",
};

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-medium mb-3">Contact Us</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get Your Free Inspection
            </h1>
            <p className="text-white/70 text-lg">
              Ready to see what&apos;s in your ducts? Contact us to schedule a free video inspection. No pressure, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-500">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-ink">Phone</p>
                    <a href={PHONE_HREF} className="text-slate-600 hover:text-navy-800">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-500">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-ink">Service Area</p>
                    <p className="text-slate-600">Northern Utah - Weber, Davis, Salt Lake & Cache Counties</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-500">🕐</span>
                  </div>
                  <div>
                    <p className="font-medium text-ink">Hours</p>
                    <p className="text-slate-600">Monday - Saturday: 8am - 6pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-xl p-6">
                <h3 className="font-semibold text-ink mb-3">What happens next?</h3>
                <ol className="space-y-3 text-slate-600 text-sm">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-navy-900 rounded-full flex items-center justify-center text-yellow-500 text-xs font-bold flex-shrink-0">1</span>
                    We&apos;ll call to schedule a time that works for you
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-navy-900 rounded-full flex items-center justify-center text-yellow-500 text-xs font-bold flex-shrink-0">2</span>
                    Our technician arrives and shows you inside your ducts
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-navy-900 rounded-full flex items-center justify-center text-yellow-500 text-xs font-bold flex-shrink-0">3</span>
                    You decide if cleaning makes sense for your home
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface rounded-xl p-8">
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">
                Request Free Inspection
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-ink mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-ink mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                      required
                    />
                  </div>
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
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow"
                  >
                    <option value="inspection">Free Video Inspection</option>
                    <option value="air-duct">Air Duct Cleaning</option>
                    <option value="dryer-vent">Dryer Vent Cleaning</option>
                    <option value="duct-sealing">Duct Sealing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-shadow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-500 text-navy-900 font-medium rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Request Free Inspection
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
