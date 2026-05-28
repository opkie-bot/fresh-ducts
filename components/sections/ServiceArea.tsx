import Link from "next/link";

const areas = [
  {
    county: "Weber County",
    cities: ["Ogden", "North Ogden", "Roy", "South Ogden"],
  },
  {
    county: "Davis County",
    cities: ["Layton", "Bountiful", "Farmington", "Clearfield"],
  },
  {
    county: "Salt Lake County",
    cities: ["Salt Lake City", "Sandy", "West Jordan", "Murray"],
  },
  {
    county: "Cache County",
    cities: ["Logan", "North Logan", "Smithfield", "Hyde Park"],
  },
];

export function ServiceArea() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">
            Where we work
          </h2>
          <p className="text-slate-600">
            Based in Ogden, serving all of Northern Utah. We drive to you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {areas.map((area) => (
            <div key={area.county}>
              <h3 className="font-semibold text-ink mb-3">{area.county}</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                {area.cities.map((city) => (
                  <li key={city}>
                    <Link
                      href={`/services-areas/${city.toLowerCase().replace(/ /g, "-")}-duct-cleaning`}
                      className="hover:text-navy-800 transition-colors"
                    >
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Don&apos;t see your city?{" "}
          <Link
            href="/contact-us"
            className="text-navy-800 underline underline-offset-2"
          >
            Contact us
          </Link>{" "}
          — we likely serve your area.
        </p>
      </div>
    </section>
  );
}
