import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Satisfy } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Reveal from "../components/Reveal";
import { SITE } from "../lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Globe Transport | Déménagement à Talence, Bordeaux & partout en France",
    template: "%s | Globe Transport Déménagement",
  },
  description:
    "Globe Transport Déménagement à Talence (33) : déménagement de particuliers et de professionnels, transport sécurisé, visite et devis gratuits. Bordeaux, Gironde et toute la France.",
  keywords: [
    "déménagement Talence",
    "déménageur Bordeaux",
    "déménagement Gironde",
    "déménagement entreprise",
    "transport de marchandises",
    "devis déménagement gratuit",
  ],
  openGraph: {
    title: "Globe Transport Déménagement",
    description: "Votre nouveau départ, notre priorité ! Un déménagement en toute sérénité, partout, pour vous.",
    locale: "fr_FR",
    type: "website",
    siteName: "Globe Transport Déménagement",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: SITE.name,
  telephone: SITE.phoneTel,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    postalCode: SITE.postalCode,
    addressLocality: SITE.city,
    addressCountry: "FR",
  },
  areaServed: ["Bordeaux", "Talence", "Gironde", "France"],
  slogan: "Votre nouveau départ, notre priorité !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} ${satisfy.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main style={{ overflowX: 'hidden', position: 'relative', width: '100%' }}>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Reveal />
      </body>
    </html>
  );
}
