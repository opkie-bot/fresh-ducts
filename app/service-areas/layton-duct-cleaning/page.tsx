import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/templates/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Layton, UT | Fresh Ducts",
  description: "Professional air duct cleaning services in Layton, Utah. Free video inspections, truck-mounted equipment. Serving Davis County since 1993.",
};

export default function LaytonPage() {
  return <ServiceAreaTemplate city="Layton" county="Davis County" />;
}
