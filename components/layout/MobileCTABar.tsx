"use client";

import Link from "next/link";

const PHONE_HREF = "tel:+18013952822";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-900 border-t border-navy-700 safe-area-inset-bottom">
      <div className="grid grid-cols-2 divide-x divide-navy-700">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 py-4 text-white font-medium hover:bg-navy-800 transition-colors"
        >
          <PhoneIcon className="w-5 h-5" />
          <span>Call Now</span>
        </a>
        <Link
          href="/contact-us"
          className="flex items-center justify-center gap-2 py-4 bg-yellow-500 text-navy-900 font-medium hover:bg-yellow-600 transition-colors"
        >
          <CalendarIcon className="w-5 h-5" />
          <span>Book Free</span>
        </Link>
      </div>
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
