import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/templates/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Bountiful, UT | Fresh Ducts",
  description: "Professional air duct cleaning services in Bountiful, Utah. Free video inspections, truck-mounted equipment. Serving Davis County since 1993.",
};

export default function BountifulPage() {
  return <ServiceAreaTemplate city="Bountiful" county="Davis County" mapQuery="Bountiful, Utah" />;
}
