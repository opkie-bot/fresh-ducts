import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/templates/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Salt Lake City, UT | Fresh Ducts",
  description: "Professional air duct cleaning services in Salt Lake City, Utah. Free video inspections, truck-mounted equipment. Serving Salt Lake County since 1993.",
};

export default function SaltLakeCityPage() {
  return <ServiceAreaTemplate city="Salt Lake City" county="Salt Lake County" mapQuery="Salt Lake City, Utah" />;
}
