import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Why Is Your Home Cooling Unevenly? | Fresh Ducts",
  description: "Hot and cold spots making your home uncomfortable? Discover the common causes—from aging HVAC units to leaky ductwork—and how to fix them.",
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
            Why Is Your Home Cooling Unevenly?
          </h1>
          <time className="text-white/60">January 22, 2026</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            If your home is cooling unevenly, it is likely that it is a rather uncomfortable environment. There are many reasons that your home may be cooling unevenly. Understanding the various causes can help you to rectify the situation and ensure that you can maintain a comfortable environment inside of your home.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Aging HVAC Unit
          </h2>

          <p>
            When the HVAC unit ages, it will ultimately become less effective. This can impact how capable it is of efficiently cooling your home. It may eventually become necessary to replace your HVAC unit. This will provide many benefits to your property. Newer HVAC units tend to be far more energy efficient, which can save you a substantial amount of money over time. They also are much more capable of regulating the temperature within your building.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Windows and Doors Allowing Air to Escape
          </h2>

          <p>
            When the weather stripping or insulation surrounding your windows and doors breaks down, it is highly likely that air will escape through these crevices. This can cause an HVAC unit to have to work much harder to keep the temperature at a comfortable level.
          </p>

          <p>
            It is important to regularly check these spaces to ensure that they are capable of keeping air inside of the building, rather than allowing it to escape. Not only will this improve the level of comfort inside of your building, but it will also reduce your related energy expenses.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Blocked Vents
          </h2>

          <p>
            When a vent is blocked, it is unable to distribute the air evenly throughout the property. This can occur due to many things, such as placing furniture in front of the vents or allowing curtains to cover them. It is important to ensure that the space in front of your vents remains clear in order to allow air to be distributed evenly throughout your home.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Dirty or Clogged Air Filters
          </h2>

          <p>
            It is critical to replace your air filter on a regular basis. When the air filters of your home become dirty or clogged, it will be more difficult for air to penetrate through. It also makes the air filter less capable of filtering harmful particles out of the air in your home. This decreases the overall quality of the air inside of the building. It is possible that your air filter needs to be changed if your building is cooling unevenly.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            The Position of Thermostats
          </h2>

          <p>
            The location of your thermostats can impact how effectively your heating and cooling system regulates the temperature of your home. It is often important to have the thermostat in a centralized location in order to ensure that air can be distributed evenly throughout the building. If your home is consistently at uneven temperatures, you may want to consider the placement of the thermostat in your building.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Improperly Sized HVAC
          </h2>

          <p>
            It is incredibly important to ensure that your HVAC system is the appropriate size for your building. When your HVAC system is much too small, it will be unable to completely regulate the temperature of your home. This can lead to various areas of the room that are much warmer than other areas.
          </p>

          <p>
            It is also important to not have an HVAC system that is too large for your building. It will require more energy than is necessary and can actually make your building too cold in the summer. Consult with an expert in order to determine the best size of HVAC for your property's needs.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            HVAC Requires Repairs
          </h2>

          <p>
            Sometimes a building that is cooling unevenly has an issue with the HVAC system. It is important to ensure that the system obtains repairs when necessary in order to keep it functioning effectively. It is also important to ensure that you provide the appropriate maintenance for your HVAC system.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Poor Insulation
          </h2>

          <p>
            The insulation of the building serves to keep heat inside or outside of the building. When there are issues with the insulation, it will be unable to adequately accomplish this. Therefore, when a building is cooling unevenly, it is possible that the insulation has some issues. Regularly check the insulation inside of your building to ensure that it is still working effectively.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Leaky Ductwork
          </h2>

          <p>
            Ductwork may sustain leaks over time. It is important to identify these leaks early on to prevent them from causing a negative impact to your heating and cooling system. When there are leaks, air will leak out along the way, which will prevent it from effectively getting to its intended destination.
          </p>

          <p>
            It is important to have these leaks sealed in order to prevent the resulting issues from occurring. This will help to improve the efficiency of your system and prevent uneven cooling throughout the building. You should also ensure that you regularly check your duct system in order to identify leaks and have them sealed.
          </p>

          <p>
            Blockage and debris that build up in ducts can cause uneven cooling throughout your home. It is important to ensure that you have your air ducts cleaned regularly to prevent substantial issues from arising.
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Experiencing uneven cooling?</p>
            <p className="text-slate-600 mb-4">
              We offer duct cleaning and sealing services to ensure that debris and harmful particles are removed from your duct system, helping restore even temperatures throughout your home.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Free Inspection
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
