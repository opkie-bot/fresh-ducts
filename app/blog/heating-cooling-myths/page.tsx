import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Myths About Heating and Cooling | Fresh Ducts",
  description: "Don't fall for these common HVAC myths! From closing vents to filter replacement frequency, learn the truth about heating and cooling your home.",
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
            Myths About Heating and Cooling
          </h1>
          <time className="text-white/60">March 14, 2024</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            It is important to understand the various myths about heating and cooling. This is because some of these myths can actually be damaging to your system. Understanding these myths will protect your system and improve the temperature regulation inside of your building.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Myth: Closing Vents in Unused Rooms Will Save Energy
          </h2>

          <p>
            When you don't use a room inside of your building, you likely think that regulating the temperature within it will be a waste. However, you can't simply reduce your energy expenses by closing the vents or keeping the door shut. This is essentially just putting an obstacle in the way of your system's air flow.
          </p>

          <p>
            This just puts additional pressure on your system, which often causes leaks. When the system overcompensates for closed vents, it is far more likely to become damaged or wear down more quickly.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Myth: Space Heaters Can Resolve Cold Spots
          </h2>

          <p>
            Cold or hot spots throughout your home mean that your HVAC system isn't cooling or heating the building as it is intended to. Using space heaters when there is a cold spot in the building is essentially putting a band-aid over the problem, rather than doing anything to fix it.
          </p>

          <p>
            There are many issues that can result in uneven cooling throughout your home. It may indicate that your insulation needs assistance or that there is a leak in your system. It is a better option to ensure that the issue with your HVAC system is resolved, rather than using a space heater to temporarily resolve the problem. It is also important to note that the longer a problem goes without being repaired, the more likely it is that the initial issue will escalate.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Myth: Maintenance Isn't Important
          </h2>

          <p>
            Maintenance is a service that is often overlooked until there is an actual issue with the system. It is crucial to ensure that you regularly provide maintenance to your HVAC system. This will help to extend the lifetime of your HVAC system, which helps to reduce regular repair and replacement expenses.
          </p>

          <p>
            This helps to prevent issues with your system that can cause an incredibly uncomfortable environment. With regular maintenance, you help to ensure that your system continues to work as efficiently as possible, which can reduce your energy expenses.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Myth: Bigger is Better
          </h2>

          <p>
            When you choose a furnace or air conditioner for your home, it will be extremely important to ensure that you choose a unit that is the appropriate size for your property. Bigger furnaces or cooling units won't necessarily be more effective.
          </p>

          <p>
            There are many issues that can occur when you install a cooling unit or furnace that is too large. This is because a unit that is too powerful will turn on and off in short bursts. This causes the system to undertake much more wear, which leads to issues cropping up more quickly. When you have a system that is too small, it won't be capable of regulating the temperature within the property.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Myth: Filters Only Need to be Changed Yearly
          </h2>

          <p>
            It is important to change your air filters far more frequently than once each year. You need to change your air filter every 90 days in order to keep your system in good condition. However, it is also important to keep in mind that there are some aspects that may require you to change your air filter more frequently.
          </p>

          <p>
            For example, if there are individuals with respiratory issues that live within the home or pets that shed, the air filter may need to be changed more frequently than 90 days. You also need to regularly have air ducts cleaned by a professional.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Myth: Oversetting the Temperature Leads to Faster Regulation
          </h2>

          <p>
            Many people are under the misconception that setting the temperature too high or too low will ensure that the system will heat or cool the room more quickly. However, this isn't the case. The system generally only functions at one speed.
          </p>

          <p>
            When it is trying to cool or heat the property, it will turn on, but it won't do more than that. When you overshoot the temperature in an attempt to get it to regulate more quickly, the machine will have to work longer. This increases your energy expenses and places more wear on the system.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Myth: The Location of the Thermostat is Unimportant
          </h2>

          <p>
            It is a common idea that the thermostat needs to only be located in a convenient area. However, the thermostat has a huge impact on the regulation of your HVAC system. It reads the temperature inside of the building, which is why it needs to be in a place that will provide accurate readings.
          </p>

          <p>
            Due to this, the thermostat should not be in a location that will impact the temperature in that specific spot. This includes places like near vents, in direct sunlight, or by ovens and stoves. Hallways also often have a different air flow than other rooms inside of the building.
          </p>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Keep your system in top shape</p>
            <p className="text-slate-600 mb-4">
              Regular air duct cleaning can improve the efficiency of your system and the air quality within your home. Our experienced team at Fresh Ducts can help provide this service.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Schedule Your Cleaning
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
