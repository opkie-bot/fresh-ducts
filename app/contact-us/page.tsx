import { Metadata } from "next";
import Script from "next/script";

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
            <div className="bg-surface rounded-xl p-4 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">
                Request Free Inspection
              </h2>

              <div className="min-h-[735px]">
                <iframe
                  src="https://link.opkie.com/widget/form/CTcEXXHIhHlS0lpGQyCu"
                  style={{ width: "100%", height: "735px", border: "none", borderRadius: "3px" }}
                  id="inline-CTcEXXHIhHlS0lpGQyCu"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="A 02 - Website Form"
                  data-height="735"
                  data-layout-iframe-id="inline-CTcEXXHIhHlS0lpGQyCu"
                  data-form-id="CTcEXXHIhHlS0lpGQyCu"
                  title="Fresh Ducts Contact Form"
                />
              </div>
              <Script src="https://link.opkie.com/js/form_embed.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
