import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "KMS Home Appliances — doorstep AC, washing machine and refrigerator repair, service and AMC across Coimbatore city. Same-day slots, genuine parts, upfront pricing and a written warranty. Book on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KMS Home Appliances | AC, Washing Machine & Fridge Service in Coimbatore",
    template: "%s | KMS Home Appliances",
  },
  description,
  keywords: [
    "AC service Coimbatore",
    "AC repair Coimbatore",
    "washing machine repair Coimbatore",
    "refrigerator repair Coimbatore",
    "AC gas filling Coimbatore",
    "appliance service Coimbatore",
    "KMS Home Appliances",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "AC, Washing Machine & Fridge Service in Coimbatore | KMS Home Appliances",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "AC, Washing Machine & Fridge Service in Coimbatore | KMS Home Appliances",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071A33",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  description,
  url: site.url,
  telephone: "+919544400301",
  email: site.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: "Coimbatore" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "21:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "600",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
