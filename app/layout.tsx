import type { Metadata, Viewport } from "next";
import { Sora, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/data";
import { localBusinessSchema } from "@/lib/seo";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { Cursor } from "@/components/Cursor";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AudioPlayer } from "@/components/AudioPlayer";
import { CookieBanner } from "@/components/CookieBanner";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} · Taller Bosch Car Service en Murcia`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    "Taller mecánico oficial Bosch Car Service en Murcia. Diagnosis electrónica, frenos, aceite, neumáticos y revisiones con tecnología alemana. Pide cita.",
  keywords: [
    "taller mecánico Murcia",
    "Bosch Car Service Murcia",
    "taller Bosch Murcia",
    "reparación coche Murcia",
    "diagnosis coche Murcia",
    "cambio aceite Murcia",
    "frenos Murcia",
    "neumáticos Murcia",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: BRAND.url },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} · Bosch Car Service`,
    description:
      "Tecnología BOSCH para que tu coche rinda como el primer día. Taller oficial en Murcia.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} · Bosch Car Service`,
    description: "Tecnología BOSCH para tu coche en Murcia.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${display.variable} ${mono.variable} bg-ink-950 antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans text-bone-100">
        <Loader />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <AudioPlayer />
        </SmoothScroll>
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
