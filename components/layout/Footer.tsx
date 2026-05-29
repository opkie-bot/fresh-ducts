import Link from "next/link";
import Image from "next/image";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.webp"
                alt="Fresh Ducts"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <address className="not-italic text-sm text-white/60 space-y-1">
              <p>874 W 26th St #101</p>
              <p>Ogden, UT 84401</p>
              <p className="pt-2">
                <a href={PHONE_HREF} className="text-white hover:text-yellow-500">
                  {PHONE_NUMBER}
                </a>
              </p>
              <p>Mon–Fri 8am–5pm</p>
            </address>
          </div>

          {/* Services */}
          <div>
            <p className="font-medium text-sm mb-3">Services</p>
            <ul className="text-sm text-white/60 space-y-1.5">
              <li>
                <Link href="/duct-services/air-duct-cleaning" className="hover:text-white">
                  Air Duct Cleaning
                </Link>
              </li>
              <li>
                <Link href="/duct-services/dryer-vent-cleaning" className="hover:text-white">
                  Dryer Vent Cleaning
                </Link>
              </li>
              <li>
                <Link href="/duct-services/duct-sealing" className="hover:text-white">
                  Duct Sealing
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white">
                  Free Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className="font-medium text-sm mb-3">Service Areas</p>
            <ul className="text-sm text-white/60 space-y-1.5">
              <li>Weber County</li>
              <li>Davis County</li>
              <li>Salt Lake County</li>
              <li>Cache County</li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <p className="font-medium text-sm mb-3">Trust</p>
            <ul className="text-sm text-white/60 space-y-1.5">
              <li>4.9★ on Google (309 reviews)</li>
              <li>BBB Accredited</li>
              <li>Since 1993</li>
            </ul>
          </div>
        </div>

        {/* Scam notice */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40 mb-4">
            <span className="text-white/60">Scam alert:</span> If someone calls
            claiming to be Fresh Ducts from a different number, it&apos;s not us. Our
            only number is {PHONE_NUMBER}.
          </p>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Fresh Ducts. Serving Northern Utah since
            1993.
          </p>
        </div>
      </div>
    </footer>
  );
}
