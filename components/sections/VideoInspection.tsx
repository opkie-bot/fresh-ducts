import { Button } from "@/components/ui/Button";

export function VideoInspection() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder - will be replaced with real photo */}
          <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
              [Photo: Technician showing customer duct footage on tablet]
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-6">
              See what&apos;s in your ducts before you decide
            </h2>
            <div className="space-y-4 text-slate-600 mb-8">
              <p>
                Most duct cleaning companies give you a quote over the phone
                without ever looking at your system. We do it differently.
              </p>
              <p>
                Our technicians use a camera to show you real footage from
                inside your ducts. You&apos;ll see exactly what we see—dust buildup,
                debris, or maybe nothing at all. Then you decide if cleaning
                makes sense for your home.
              </p>
              <p>
                The inspection is always free, and there&apos;s never any pressure to
                proceed. If your ducts look fine, we&apos;ll tell you.
              </p>
            </div>
            <Button href="/contact-us">Book your free inspection</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
