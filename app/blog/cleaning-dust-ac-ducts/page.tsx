import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Do You Have Dust in Your AC Ducts? Here's How You Can Clean Them | Fresh Ducts",
  description: "Step-by-step guide to cleaning dust from your air ducts. Learn DIY tips for air duct cleaning in Weber County, UT.",
};

export default function BlogPost() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-yellow-500 hover:text-yellow-400 font-medium mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Do You Have Dust in Your AC Ducts? Here's How You Can Clean Them
          </h1>
          <time className="text-white/60">August 28, 2025</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            Over time, air ducts accumulate dust from your home. This dust can build up into large accumulations that are then recirculated into your home via your air vents. Regularly cleaning your air ducts removes this dust. Dust-free air ducts produce better indoor air quality and can help your AC system run more efficiently.
          </p>

          <p>
            Follow these easy steps for air duct cleaning in Weber County, UT.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Cover Air Supply Registers
          </h2>

          <p>
            All of those vents on the floor around your home that allow air to heat or cool your house are called air supply registers. Before you begin cleaning dust from your air ducts, you'll want to cover these with washable cloths or disposable paper towels. This prevents the dust from inside your ductwork from flying out into your rooms while you work to clean it, and instead catches dust for easier cleaning.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Start the Fan
          </h2>

          <p>
            Running your heating and cooling fan helps bring the dust that you loosen during cleaning to the air supply registers. This makes it easy to get most of the dust out of your ducts. Turn the fan on with the heat/cool mode turned off so just the fan is running. During this process, check that your existing air filter is in place and doesn't have any holes that might let dust into the unit's fan.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Loosen Dust Inside Ducts
          </h2>

          <p>
            Gently tap along your ductwork with the handle of a clean toilet brush or similar cleaning brush to help knock dirt loose in the centers of your ductwork. Try to tap along any ductwork you have access to in order to get the most dirt out of your duct system.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Clean Registers
          </h2>

          <p>
            Have a vacuum running and ready to scoop up dust that has piled up underneath your air supply registers. With a vacuum in place, remove the towels and registers and vacuum up the dust as it is blown by the fan out of the duct. Push the vacuum hose as far into the duct as you can and move around to vacuum up as much dust as possible. Use your brush to remove any damp dust that has stuck to the inside of the duct and wipe down the air supply registers.
          </p>

          <p>
            Using a screwdriver or other tool, remove the air return registers so you can vacuum and sweep them off. Air return registers are usually mounted to the wall and are likely to have more dust than the supply registers.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Clean Internal Compartments
          </h2>

          <p>
            Shut off the unit fan and turn off the power to your HVAC unit. Now you can take the front panels off of the unit to access the blower compartment and return air boot. These places are likely to have the most dust buildup. Use your vacuum to completely remove built-up dust and dirt. When you've cleaned all the dust from your ducts, replace your existing air filter with a brand new one to make your unit more efficient.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Professional Air Duct Cleaning in Weber County, UT
          </h2>

          <p>
            Cleaning your air ducts helps keep the dust down, but a professional air duct cleaning service can help remove dust and debris much better than any DIY method. Contact the duct cleaning specialists at Fresh Ducts today to learn more about what we can do for you!
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Want a deeper clean?</p>
            <p className="text-slate-600 mb-4">
              Our truck-mounted vacuum systems deliver 3-4x more suction than portable units. See the difference professional cleaning makes.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
