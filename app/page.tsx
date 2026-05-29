import {
  Hero,
  Services,
  VideoInspection,
  BeforeAfter,
  WhyChooseUs,
  Process,
  TruckShowcase,
  Reviews,
  ServiceArea,
  FAQ,
  CTABand,
} from "@/components/sections";
import { LocalBusinessSchema, FAQSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />

      <Hero />
      <Services />
      <VideoInspection />
      <BeforeAfter />
      <WhyChooseUs />
      <Process />
      <TruckShowcase />
      <Reviews />
      <ServiceArea />
      <FAQ />
      <CTABand />
    </>
  );
}
