import { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Understanding the Risks of Indoor Space Heaters | Fresh Ducts",
  description: "Space heaters can be convenient but come with serious risks. Learn about fire hazards, carbon monoxide, and safer alternatives for winter comfort.",
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
            Understanding the Risks of Indoor Space Heaters
          </h1>
          <time className="text-white/60">March 28, 2024</time>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          <p className="lead text-xl text-slate-600">
            Indoor space heaters can often be used in the winter in order to easily heat up a single room or location. However, there are several risks associated with the use of indoor space heaters. Understanding the risks will help you to make the best decision for the comfort of your home.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Increased Risk of Fire
          </h2>

          <p>
            The use of indoor space heaters can result in an increased risk of fire to your building. For one thing, an overloaded circuit can potentially lead to the development of a fire. Alternatively, a space heater can tip over, which can cause fires to occur. Using indoor space heaters around flammable objects can result in housefires, as well.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Shock Hazard
          </h2>

          <p>
            Any electrical device has the potential to shock someone. This may occur due to issues with the wiring or other potential problems. When you use indoor space heaters, it is important to ensure that you are aware that there is the possibility of shocking.
          </p>

          <p>
            It is also important to ensure that you never use a space heater in a room where there is the possibility of the space heater coming into contact with water, such as the bathroom or kitchen. Electricity and water is never a good combination.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Overload Circuits
          </h2>

          <p>
            Indoor space heaters ultimately use a fairly substantial amount of electricity. Due to this, it is possible that the use of a space heater will result in an increased risk of a circuit becoming overloaded. There are two main things that may occur when a space heater overloads the circuit: power failure to your home, or an increased overall risk of a housefire within the building.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Higher Electricity Bill
          </h2>

          <p>
            The increased use of energy can lead to substantial spikes in your electricity bill. A space heater is ultimately much less efficient than the heating and cooling system of your property. In order to efficiently heat the area, it will require much more energy to do so.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Indoor Space Heaters Can Cause Burns
          </h2>

          <p>
            A space heater can cause burns to you, children, or pets. When you use a space heater, the element will have to heat up a substantial amount before it can cause the surrounding space to heat up as well. When the surface is incredibly hot, it can cause serious burns to anyone that accidentally brushes against it.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Carbon Monoxide Poisoning
          </h2>

          <p>
            Carbon monoxide poisoning is another potential side effect of using an indoor space heater. If you are using a space heater that is fueled by gas, it will generally produce carbon monoxide as it works. When you fall asleep or aren't paying attention, it can easily produce unsafe levels of carbon monoxide inside of your home.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink mt-12 mb-4">
            Staying Safe During the Winter
          </h2>

          <p>
            Ultimately, using your HVAC system is a far safer alternative to the use of a space heater to improve the level of comfort within your home. This is a far more efficient solution, as well, which can save you money. You may also want to consider improving the overall insulation of your home.
          </p>

          <p>
            However, if you intend to still use a space heater, follow these safety tips:
          </p>

          <ul className="space-y-2">
            <li>Never leave any pets or young children alone in a room with a space heater</li>
            <li>Obtain a space heater that has a guard around the heating element</li>
            <li>Never leave your space heater on whenever you leave the house or go to sleep</li>
            <li>Regularly check your space heater for signs of wear</li>
            <li>Don't use space heaters in rooms where they may get wet (bathrooms or kitchens)</li>
            <li>Ensure your smoke detectors and carbon monoxide detectors are working</li>
          </ul>

          <div className="mt-12 p-6 bg-surface rounded-xl">
            <p className="font-semibold text-ink mb-2">Keep your HVAC system in top condition</p>
            <p className="text-slate-600 mb-4">
              Regular duct cleaning can help your HVAC system work efficiently, reducing the need for space heaters. Our expert team can provide the duct cleaning services necessary to minimize issues with your HVAC system.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Schedule Your Service
            </Link>
          </div>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
