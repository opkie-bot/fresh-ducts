"use client";

import Link from "next/link";

const PHONE_HREF = "tel:+18013952822";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-900 border-t border-white/10">
      <div className="grid grid-cols-2">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center py-4 text-white text-sm font-medium"
        >
          Call now
        </a>
        <Link
          href="/contact-us"
          className="flex items-center justify-center py-4 bg-yellow-500 text-navy-900 text-sm font-medium"
        >
          Free inspection
        </Link>
      </div>
    </div>
  );
}
