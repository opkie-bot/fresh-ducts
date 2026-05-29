import { Metadata } from "next";
import { ServiceAreaTemplate } from "@/components/templates/ServiceAreaTemplate";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in North Ogden, UT | Fresh Ducts",
  description: "Professional air duct cleaning services in North Ogden, Utah. Free video inspections, truck-mounted equipment. Serving Weber County since 1993.",
};

export default function NorthOgdenPage() {
  return <ServiceAreaTemplate city="North Ogden" county="Weber County" />;
}
