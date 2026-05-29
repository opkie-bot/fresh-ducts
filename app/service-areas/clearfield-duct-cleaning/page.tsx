import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/templates/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Clearfield, UT | Fresh Ducts",
  description: "Professional air duct cleaning services in Clearfield, Utah. Free video inspections, truck-mounted equipment. Serving Davis County since 1993.",
};

export default function ClearfieldPage() {
  return <ServiceAreaTemplate city="Clearfield" county="Davis County" mapQuery="Clearfield, Utah" />;
}
