"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

const navigation = {
  aboutUs: {
    label: "About Us",
    items: [
      { label: "FAQs", href: "/faqs" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
    ],
  },
  ductServices: {
    label: "Duct Services",
    items: [
      { label: "Air Duct Inspections", href: "/duct-services/air-duct-inspections" },
      { label: "Air Duct Cleaning", href: "/duct-services/air-duct-cleaning" },
      { label: "Dryer Vent Cleaning", href: "/duct-services/dryer-vent-cleaning" },
      { label: "Duct Sealing with Duct Armor", href: "/duct-services/duct-sealing" },
    ],
  },
  serviceAreas: {
    label: "Service Areas",
    items: [
      { label: "North Ogden, UT", href: "/service-areas/north-ogden-duct-cleaning" },
      { label: "Clearfield, UT", href: "/service-areas/clearfield-duct-cleaning" },
      { label: "Layton, UT", href: "/service-areas/layton-duct-cleaning" },
      { label: "Farmington, UT", href: "/service-areas/farmington-duct-cleaning" },
      { label: "Bountiful, UT", href: "/service-areas/bountiful-duct-cleaning" },
      { label: "Salt Lake City, UT", href: "/service-areas/salt-lake-city-duct-cleaning" },
    ],
  },
  contactUs: {
    label: "Contact Us",
    items: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "Feedback", href: "/feedback" },
      { label: "Referral Program", href: "/referral-program" },
    ],
  },
};

function DropdownMenu({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors"
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-surface hover:text-navy-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown && !(e.target as Element).closest(".relative")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdown]);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const toggleMobileDropdown = (key: string) => {
    setOpenMobileDropdown(openMobileDropdown === key ? null : key);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled ? "bg-navy-900" : "bg-navy-900/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="Fresh Ducts"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Home
            </Link>
            <DropdownMenu
              label={navigation.aboutUs.label}
              items={navigation.aboutUs.items}
              isOpen={openDropdown === "aboutUs"}
              onToggle={() => toggleDropdown("aboutUs")}
            />
            <DropdownMenu
              label={navigation.ductServices.label}
              items={navigation.ductServices.items}
              isOpen={openDropdown === "ductServices"}
              onToggle={() => toggleDropdown("ductServices")}
            />
            <DropdownMenu
              label={navigation.serviceAreas.label}
              items={navigation.serviceAreas.items}
              isOpen={openDropdown === "serviceAreas"}
              onToggle={() => toggleDropdown("serviceAreas")}
            />
            <DropdownMenu
              label={navigation.contactUs.label}
              items={navigation.contactUs.items}
              isOpen={openDropdown === "contactUs"}
              onToggle={() => toggleDropdown("contactUs")}
            />
            <a
              href={PHONE_HREF}
              className="text-sm text-white hover:text-yellow-500 transition-colors font-medium"
            >
              {PHONE_NUMBER}
            </a>
          </nav>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-4">
            <a href={PHONE_HREF} className="text-sm text-white">
              {PHONE_NUMBER}
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-1"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-white py-3 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* About Us */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleMobileDropdown("aboutUs")}
                  className="w-full flex items-center justify-between text-white py-3"
                >
                  {navigation.aboutUs.label}
                  <span className={`transition-transform ${openMobileDropdown === "aboutUs" ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openMobileDropdown === "aboutUs" && (
                  <div className="pl-4 pb-3">
                    {navigation.aboutUs.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white/70 hover:text-white py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Duct Services */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleMobileDropdown("ductServices")}
                  className="w-full flex items-center justify-between text-white py-3"
                >
                  {navigation.ductServices.label}
                  <span className={`transition-transform ${openMobileDropdown === "ductServices" ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openMobileDropdown === "ductServices" && (
                  <div className="pl-4 pb-3">
                    {navigation.ductServices.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white/70 hover:text-white py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleMobileDropdown("serviceAreas")}
                  className="w-full flex items-center justify-between text-white py-3"
                >
                  {navigation.serviceAreas.label}
                  <span className={`transition-transform ${openMobileDropdown === "serviceAreas" ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openMobileDropdown === "serviceAreas" && (
                  <div className="pl-4 pb-3">
                    {navigation.serviceAreas.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white/70 hover:text-white py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleMobileDropdown("contactUs")}
                  className="w-full flex items-center justify-between text-white py-3"
                >
                  {navigation.contactUs.label}
                  <span className={`transition-transform ${openMobileDropdown === "contactUs" ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openMobileDropdown === "contactUs" && (
                  <div className="pl-4 pb-3">
                    {navigation.contactUs.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white/70 hover:text-white py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
