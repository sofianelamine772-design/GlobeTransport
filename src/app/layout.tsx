import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Globe Transport | Entreprise de Déménagement à Talence",
  description: "Globe Transport Déménagement à Talence (33). Services de déménagement sur-mesure pour particuliers et entreprises. Transport sécurisé et devis gratuit !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Navbar />
        <main style={{ overflowX: 'hidden', position: 'relative', width: '100%' }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
