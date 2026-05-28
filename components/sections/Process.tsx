export function Process() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
            How it works
          </h2>
          <p className="text-white/60">
            From first call to finished job, here&apos;s what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-t border-white/20 pt-6">
            <p className="text-yellow-500 font-medium mb-2">1</p>
            <h3 className="font-display text-lg font-semibold mb-2">
              Schedule your inspection
            </h3>
            <p className="text-white/60 text-sm">
              Call us or book online. We&apos;ll find a time that works for your
              schedule.
            </p>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-yellow-500 font-medium mb-2">2</p>
            <h3 className="font-display text-lg font-semibold mb-2">
              See what&apos;s inside
            </h3>
            <p className="text-white/60 text-sm">
              Our technician shows you camera footage from inside your ducts.
              You see exactly what we see.
            </p>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-yellow-500 font-medium mb-2">3</p>
            <h3 className="font-display text-lg font-semibold mb-2">
              Get a straight answer
            </h3>
            <p className="text-white/60 text-sm">
              We tell you what we found and give you a clear price. No upsells,
              no pressure.
            </p>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-yellow-500 font-medium mb-2">4</p>
            <h3 className="font-display text-lg font-semibold mb-2">
              We clean, you verify
            </h3>
            <p className="text-white/60 text-sm">
              If you decide to proceed, we do the work. Then we show you the
              after footage so you can see the difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
