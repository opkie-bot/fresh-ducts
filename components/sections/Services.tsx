import Link from "next/link";

const services = [
  {
    title: "Air Duct Cleaning",
    description:
      "Remove years of dust, allergens, and debris from your entire duct system using our truck-mounted equipment.",
    href: "/duct-services/air-duct-cleaning",
  },
  {
    title: "Dryer Vent Cleaning",
    description:
      "Clogged dryer vents are a leading cause of house fires. We clean the full run from your dryer to the exterior.",
    href: "/duct-services/dryer-vent-cleaning",
  },
  {
    title: "Free Video Inspection",
    description:
      "See exactly what's inside your ducts before any work begins. We show you the footage and give you an honest assessment.",
    href: "/contact-us",
  },
  {
    title: "Duct Sealing",
    description:
      "Leaky ducts waste energy and reduce air quality. Our Duct Armor sealing process stops leaks at the source.",
    href: "/duct-services/duct-sealing",
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">
            What we do
          </h2>
          <p className="text-slate-600">
            Professional duct services for homes and businesses across Northern
            Utah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block border-t border-line pt-6"
            >
              <h3 className="font-display text-xl font-semibold text-ink mb-2 group-hover:text-navy-700 transition-colors">
                {service.title}
                <span className="inline-block ml-2 text-slate-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
