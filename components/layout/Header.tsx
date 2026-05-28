"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled ? "bg-navy-900" : "bg-navy-900/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-lg font-semibold text-white">
            Fresh Ducts
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/duct-services/air-duct-cleaning"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <a
              href={PHONE_HREF}
              className="text-sm text-white hover:text-yellow-500 transition-colors"
            >
              {PHONE_NUMBER}
            </a>
          </nav>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-4">
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
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-3">
              <Link
                href="/duct-services/air-duct-cleaning"
                className="text-white/70 hover:text-white py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact-us"
                className="text-white/70 hover:text-white py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
