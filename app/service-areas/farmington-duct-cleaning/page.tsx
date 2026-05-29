import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/templates/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Farmington, UT | Fresh Ducts",
  description: "Professional air duct cleaning services in Farmington, Utah. Free video inspections, truck-mounted equipment. Serving Davis County since 1993.",
};

export default function FarmingtonPage() {
  return <ServiceAreaTemplate city="Farmington" county="Davis County" />;
}
