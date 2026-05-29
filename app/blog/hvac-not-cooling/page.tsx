import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Why Isn't Your HVAC Effectively Cooling Your Home? | Fresh Ducts",
  description: "Home not cooling properly? From open windows to refrigerant issues, discover the common causes and solutions to get your AC working again.",
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
            Why Isn't Your HVAC Effectively Cooling Your Home?
          </h1>
          <time className="text-white/60">March 10, 2024</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            As the temperatures remain more consistently in the triple digits, it is possible that your home isn't staying at a comfortable level. When your HVAC isn't effectively cooling your home, there are many issues that could be the cause behind your insufficient cooling. In many situations, minor fixes are all that is necessary in restoring your home to a comfortable temperature.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Windows and Doors are Open
          </h2>

          <p>
            Though this may seem like a very obvious solution, many people don't think of this when their home is uncomfortably warm. When you have a window or door open in your home, it will be unable to efficiently keep the cool air inside of the home and the hot air outside of it. An HVAC system will have a very difficult time keeping a building cool when the windows or doors are open.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Supply and Return Vents Closed or Blocked
          </h2>

          <p>
            When the supply and return vents are blocked, whether by furniture or simply because they are closed, they will be unable to move air throughout the property. This makes it extremely difficult for an HVAC system to keep your home at a comfortable temperature. It is important to ensure that these vents are open and clear to allow the air to distribute through your home efficiently.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Thermostat Set Incorrectly
          </h2>

          <p>
            Though this may seem like another obvious solution, it is important to check your thermostat when your HVAC system isn't effectively cooling your home. Ensure that the thermostat is set to cool and that the temperature is set below room temperature. If it is set correctly, it is also possible that your thermostat is malfunctioning.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Try a System Reset
          </h2>

          <p>
            Sometimes all that an HVAC system needs to function effectively is a basic system reset. Some HVAC systems are equipped with a red reset button that will simply reset the system. This can help to fix simple issues before you have to engage in more intense troubleshooting.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Refrigerant Issues
          </h2>

          <p>
            Any HVAC system requires refrigerant in order to efficiently cool a home. When the HVAC system has insufficient levels of refrigerant, it will cease to cool the home effectively. It is also important to ensure that any component of the HVAC system that deals with the refrigerant is intact and functioning.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Basic Maintenance
          </h2>

          <p>
            Every HVAC system needs basic maintenance to remain in good condition. Providing the appropriate maintenance can go a long way through extending its lifetime and ensuring that it continues to operate as intended. If the HVAC system isn't effectively cooling the home, it is highly likely that it hasn't obtained the appropriate maintenance necessary to keep it in good condition.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Inadequate Insulation
          </h2>

          <p>
            A property that doesn't have sufficient insulation will be unable to keep the cool air inside of your home. No matter how good your HVAC system is, it is unable to cool the outdoors during the summer! It is crucial to ensure that your home maintains sufficient insulation and is able to keep the cool air inside of the building.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Wrong Size of HVAC Unit
          </h2>

          <p>
            It is important to ensure that your HVAC unit is the appropriate size for your building. An HVAC system that is too large will be unable to efficiently remove humidity from the building, which can cause heat to remain in the building. An HVAC system that is too small will be unable to meet the demands of cooling your property.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Clean the Air Filter
          </h2>

          <p>
            A clean air filter is an important part of keeping your HVAC system in good condition. When an air filter becomes clogged, air will have a difficult time penetrating through the surface. Air filters should be cleaned regularly and also need to be replaced on a regular basis.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Check on Ductwork
          </h2>

          <p>
            The ductwork system of your property is critical in efficiently moving cool air throughout your home. If your air duct system is leaky or is laden with dust, it will likely cause the HVAC system to be inefficient. Having your HVAC system and air ducts thoroughly cleaned can go a long way toward finding issues, as well as extending the longevity of your system.
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Still having cooling issues?</p>
            <p className="text-slate-600 mb-4">
              Regular duct cleaning can help prevent issues and keep your HVAC system functioning effectively. If your HVAC system isn't effectively cooling your home, it's possible you need to have the system cleaned.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Schedule a Cleaning
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
