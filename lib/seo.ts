import { BRAND } from "./data";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `${BRAND.url}/#business`,
  name: BRAND.name,
  image: `${BRAND.url}/images/hero-poster.svg`,
  url: BRAND.url,
  telephone: BRAND.phone,
  email: BRAND.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address.street,
    addressLocality: BRAND.address.locality,
    addressRegion: BRAND.address.region,
    postalCode: BRAND.address.postalCode,
    addressCountry: BRAND.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BRAND.geo.lat,
    longitude: BRAND.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "16:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [BRAND.social.instagram, BRAND.social.facebook, BRAND.social.google],
  brand: {
    "@type": "Brand",
    name: "Bosch Car Service",
  },
  areaServed: {
    "@type": "City",
    name: "Murcia",
  },
  makesOffer: [
    "Diagnosis electrónica",
    "Reparación de frenos",
    "Cambio de aceite",
    "Neumáticos y alineación",
    "Electricidad del automóvil",
    "Revisiones oficiales",
    "Aire acondicionado",
    "Baterías",
  ].map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s },
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "140",
  },
};
