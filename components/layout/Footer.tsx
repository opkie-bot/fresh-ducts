import Link from "next/link";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";
const ADDRESS = "874 W 26th St #101, Ogden, UT 84401";
const HOURS = "Monday – Friday: 8 AM – 5 PM";

const serviceLinks = [
  { href: "/duct-services/air-duct-cleaning", label: "Air Duct Cleaning" },
  { href: "/duct-services/air-duct-inspections", label: "Air Duct Inspections" },
  { href: "/duct-services/dryer-vent-cleaning", label: "Dryer Vent Cleaning" },
  { href: "/duct-services/duct-sealing", label: "Duct Sealing" },
];

const areaLinks = [
  { href: "/services-areas/salt-lake-city-duct-cleaning", label: "Salt Lake City" },
  { href: "/services-areas/ogden-duct-cleaning", label: "Ogden" },
  { href: "/services-areas/layton-duct-cleaning", label: "Layton" },
  { href: "/services-areas/bountiful-duct-cleaning", label: "Bountiful" },
  { href: "/services-areas/logan-duct-cleaning", label: "Logan" },
];

const companyLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & NAP */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-display font-semibold mb-6"
            >
              <span className="text-yellow-500">Fresh</span>
              <span>Ducts</span>
            </Link>
            <address className="not-italic text-white/70 space-y-2 text-sm">
              <p>{ADDRESS}</p>
              <p>{HOURS}</p>
              <p className="pt-2">
                <a
                  href={PHONE_HREF}
                  className="text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
                >
                  {PHONE_NUMBER}
                </a>
              </p>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-4">
              <div className="text-white/50 text-xs">
                <span className="block font-medium text-white/70">BBB</span>
                <span>Accredited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          {/* Scam Notice */}
          <div className="mb-6 p-4 rounded-lg bg-navy-800/50 border border-white/10">
            <p className="text-sm text-white/60">
              <span className="text-yellow-500 font-medium">Notice:</span> Be aware of
              scammers falsely advertising as Fresh Ducts. We only operate from our
              official number{" "}
              <a href={PHONE_HREF} className="text-yellow-500 hover:text-yellow-400">
                {PHONE_NUMBER}
              </a>{" "}
              and verified online listings.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {currentYear} Fresh Ducts. All rights reserved.</p>
            <p>Serving Northern Utah since 1993</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
