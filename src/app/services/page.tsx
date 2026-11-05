import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "../../components/ServiceCard";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import { SITE } from "../../lib/site";
import {
  IconHome, IconBuilding, IconTruck, IconWarehouse, IconDiamond, IconBox, IconPhone,
} from "../../components/Icons";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Déménagement de particuliers et d'entreprises, transport de marchandises, garde-meubles, transport spécialisé et emballage. Formules Économique, Standard et Luxe.",
};

const SERVICES = [
  {
    icon: <IconHome />,
    title: "Déménagement Particuliers",
    description: "Déménagez l'esprit tranquille. De l'emballage de vos objets fragiles au démontage de vos meubles, nous nous occupons de tout pour un nouveau départ serein.",
  },
  {
    icon: <IconBuilding />,
    title: "Déménagement Professionnels",
    description: "Minimisez le temps d'arrêt de votre activité. Nous planifions et exécutons le transfert de vos bureaux, matériel informatique et archives.",
  },
  {
    icon: <IconTruck />,
    title: "Transport de Marchandises",
    description: "Transport routier sécurisé pour tous types de marchandises. Nos véhicules sont équipés pour garantir l'intégrité de vos envois sur toutes les distances.",
  },
  {
    icon: <IconWarehouse />,
    title: "Garde-Meubles & Stockage",
    description: "Besoin d'espace ? Solutions de stockage sécurisées à court ou long terme pour vos meubles et marchandises.",
  },
  {
    icon: <IconDiamond />,
    title: "Transport Spécialisé",
    description: "Objets d'art, pianos, équipements lourds… Nous disposons du matériel et du savoir-faire pour vos biens les plus précieux ou volumineux.",
  },
  {
    icon: <IconBox />,
    title: "Service d'Emballage",
    description: "Fourniture de cartons de qualité professionnelle et emballage complet réalisé par nos équipes pour une protection optimale.",
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container animate-fade-in-up">
          <span className="eyebrow">Globe Transport</span>
          <h1>Nos <span className="gold-text">Services</span></h1>
          <p>Des prestations complètes, pensées pour répondre à toutes vos exigences de déménagement et de transport.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {SERVICES.map((s, i) => (
              <div key={s.title} className={`reveal delay-${((i % 3) + 1) * 100}`}>
                <ServiceCard index={i + 1} icon={s.icon} title={s.title} description={s.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-alt">
        <Pricing />
      </div>

      <section className="section">
        <div className="container">
          <div className={`${styles.banner} reveal`}>
            <div>
              <h2>Prêt à organiser votre <span className="gold-text">déménagement</span>&nbsp;?</h2>
              <p>Notre équipe vous conseille et vous remet un devis gratuit, après une visite sans engagement.</p>
            </div>
            <div className={styles.bannerActions}>
              <Link href="/contact" className="btn btn-primary btn-lg">Demander un devis</Link>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline btn-lg"><IconPhone /> {SITE.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
