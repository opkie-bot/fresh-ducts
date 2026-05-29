import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh Ducts | Utah's Trusted Duct Cleaning Service Since 1993",
  description:
    "Professional air duct cleaning in Utah. Free video inspection shows exactly what's in your ducts. Serving Davis, Weber, Salt Lake & Cache counties. Call (801) 395-2822.",
  icons: {
    icon: "/favicon.webp",
  },
  keywords: [
    "duct cleaning Utah",
    "air duct cleaning",
    "dryer vent cleaning",
    "HVAC cleaning",
    "Ogden duct cleaning",
    "Salt Lake City duct cleaning",
  ],
  authors: [{ name: "Fresh Ducts" }],
  openGraph: {
    title: "Fresh Ducts | Utah's Trusted Duct Cleaning Service",
    description:
      "Professional air duct cleaning with free video inspection. Serving Northern Utah since 1993.",
    url: "https://freshducts.com",
    siteName: "Fresh Ducts",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "GTM-WKNKBLXN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
