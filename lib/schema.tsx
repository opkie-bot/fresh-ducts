const businessData = {
  name: "Fresh Ducts",
  description:
    "Duct and vent cleaning specialists that handle commercial and domestic air-quality issues, with after-service photos.",
  telephone: "(801) 395-2822",
  address: {
    streetAddress: "874 W 26th St #101",
    addressLocality: "Ogden",
    addressRegion: "UT",
    postalCode: "84401",
    addressCountry: "US",
  },
  url: "https://freshducts.com",
  priceRange: "$$",
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 309,
  },
  openingHours: ["Mo-Fr 08:00-17:00"],
  areaServed: [
    "Davis County, UT",
    "Weber County, UT",
    "Salt Lake County, UT",
    "Cache County, UT",
  ],
  serviceType: [
    "Air Duct Cleaning",
    "Air Duct Inspection",
    "Dryer Vent Cleaning",
    "Duct Sealing",
  ],
};

const faqData = [
  {
    question: "What is duct cleaning and why is it important?",
    answer:
      "Duct cleaning involves removing dust, debris, allergens, and contaminants from your HVAC system's air ducts. This improves indoor air quality, helps your system run more efficiently, and can reduce allergy symptoms and respiratory issues for your family.",
  },
  {
    question: "How often should I have my ducts cleaned?",
    answer:
      "We recommend duct cleaning every 3-5 years for most homes. However, you may need more frequent cleaning if you have pets, allergies, smokers in the home, recent renovations, or notice visible dust or musty odors coming from your vents.",
  },
  {
    question: "What are the signs that my ducts need cleaning?",
    answer:
      "Common signs include visible dust around vents, increased allergy symptoms, musty or stale odors when your HVAC runs, inconsistent airflow between rooms, and higher than normal energy bills. Our free video inspection can show you exactly what's in your ducts.",
  },
  {
    question: "Can dirty ducts affect my health?",
    answer:
      "Yes, dirty ducts can circulate dust, mold spores, pet dander, and other allergens throughout your home. This can trigger allergies, asthma, and other respiratory issues. People with compromised immune systems are especially vulnerable.",
  },
  {
    question: "How long does a duct cleaning take?",
    answer:
      "A typical residential duct cleaning takes 2-4 hours depending on the size of your home and the condition of your ducts. We work efficiently while being thorough to minimize disruption to your day.",
  },
  {
    question: "Can duct cleaning help with allergies?",
    answer:
      "Absolutely. By removing allergens like dust mites, pet dander, pollen, and mold spores from your duct system, many customers report significant improvement in their allergy symptoms after professional cleaning.",
  },
  {
    question: "How much does duct cleaning cost?",
    answer:
      "Cost varies based on the size of your home and the condition of your ducts. We provide free video inspections so you can see exactly what needs to be done, followed by a fair, no-pressure quote. No surprises.",
  },
  {
    question: "Do you use chemicals in the cleaning process?",
    answer:
      "We primarily use powerful vacuum suction and mechanical agitation to remove debris. We only use EPA-registered sanitizers when specifically requested and appropriate, and we always discuss options with you first.",
  },
  {
    question: "Can I clean my ducts myself?",
    answer:
      "While you can clean vent covers and visible areas, professional equipment is needed for thorough cleaning. Our truck-mounted systems provide 3-4x more suction than portable units and can reach the entire duct system, including areas you can't access.",
  },
];

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://freshducts.com/#business",
    name: businessData.name,
    description: businessData.description,
    telephone: businessData.telephone,
    url: businessData.url,
    priceRange: businessData.priceRange,
    address: {
      "@type": "PostalAddress",
      ...businessData.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.2330,
      longitude: -111.9738,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessData.aggregateRating.ratingValue,
      reviewCount: businessData.aggregateRating.reviewCount,
      bestRating: 5,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: businessData.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Duct Cleaning Services",
      itemListElement: businessData.serviceType.map((service, index) => ({
        "@type": "Offer",
        "@id": `https://freshducts.com/#service-${index}`,
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    sameAs: [
      "https://www.facebook.com/freshducts",
      "https://www.google.com/maps/place/Fresh+Ducts",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://freshducts.com/#business",
      name: businessData.name,
    },
    areaServed: businessData.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
