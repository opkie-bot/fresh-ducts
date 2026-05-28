import {
  Hero,
  Services,
  VideoInspection,
  WhyChooseUs,
  Process,
  Reviews,
  ServiceArea,
  FAQ,
  WhatToExpect,
  CTABand,
} from "@/components/sections";
import { LocalBusinessSchema, FAQSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <LocalBusinessSchema />
      <FAQSchema />

      {/* Page Sections */}
      <Hero />
      <Services />
      <VideoInspection />
      <WhyChooseUs />
      <Process />
      <Reviews />
      <ServiceArea />
      <FAQ />
      <WhatToExpect />
      <CTABand />
    </>
  );
}
