import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ServiceCard from "../components/ServiceCard";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import GoldSwoosh from "../components/GoldSwoosh";
import { SITE, whatsappLink } from "../lib/site";
import {
  IconHome, IconBuilding, IconShield, IconHandshake, IconTruck,
  IconWhatsApp, IconPhone, IconChat, IconClipboard, IconCheck, IconClock, IconPin,
} from "../components/Icons";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const PILLARS = [
  { icon: <IconHome />, label: "Particuliers" },
  { icon: <IconBuilding />, label: "Professionnels" },
  { icon: <IconShield />, label: "Sécurité" },
  { icon: <IconHandshake />, label: "Confiance" },
];

const STEPS = [
  {
    icon: <IconChat />,
    title: "Prise de contact",
    text: "Appelez-nous ou écrivez-nous sur WhatsApp. Nous échangeons sur votre projet, vos dates et vos contraintes.",
  },
  {
    icon: <IconClipboard />,
    title: "Visite & devis gratuits",
    text: "Nous nous déplaçons chez vous pour évaluer le volume et vous remettons un devis clair, détaillé et sans engagement.",
  },
  {
    icon: <IconTruck />,
    title: "Déménagement serein",
    text: "Le jour J, notre équipe s'occupe de tout : protection, chargement, transport sécurisé et installation.",
  },
];

const CITIES = ["Bordeaux", "Talence", "Mérignac", "Pessac", "Villenave-d'Ornon", "Bègles", "Libourne", "Arcachon"];

export default function Home() {
  const waVisit = whatsappLink("Bonjour, je souhaite prendre rendez-vous pour une visite gratuite / un devis gratuit.");

  return (
    <>
      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <GoldSwoosh className={styles.heroSwoosh} />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-left animate-fade-in-up">Déménageur à Talence · Bordeaux &amp; toute la France</span>

            <h1 className={styles.heroTitle}>
              <span className={`${styles.heroScript} script gold-text animate-fade-in-up delay-100`}>
                Votre nouveau départ,<br />notre priorité&nbsp;!
              </span>
              <span className={`${styles.heroSub} animate-fade-in-up delay-200`}>
                Un déménagement en toute sérénité, partout, pour vous.
              </span>
            </h1>

            <p className={`${styles.heroText} animate-fade-in-up delay-300`}>
              Particuliers comme professionnels, nous prenons en charge vos biens avec le plus grand soin — de l&apos;emballage à l&apos;installation dans votre nouveau lieu de vie.
            </p>

            <div className={`${styles.heroActions} animate-fade-in-up delay-400`}>
              <a href={waVisit} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <IconWhatsApp /> Visite &amp; devis gratuits
              </a>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline btn-lg">
                <IconPhone /> {SITE.phoneDisplay}
              </a>
            </div>

            <ul className={`${styles.heroPerks} animate-fade-in-up delay-500`}>
              <li><IconCheck /> Visite gratuite</li>
              <li><IconCheck /> Devis sans engagement</li>
              <li><IconCheck /> Biens assurés</li>
            </ul>
          </div>

          <div className={`${styles.heroVisual} animate-fade-in-right delay-200`}>
            <div className={styles.heroGlow} />
            <img src="/logo-gold.png" alt="Globe Transport Déménagement" className={`${styles.heroLogo} animate-float`} width={1100} height={453} />
          </div>
        </div>
      </section>

      {/* ============ PILIERS (comme sur la carte) ============ */}
      <section className={styles.pillars} aria-label="Nos engagements">
        <div className={`container ${styles.pillarsGrid}`}>
          {PILLARS.map((p) => (
            <div key={p.label} className={`${styles.pillar} reveal`}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <span className={styles.pillarLabel}>{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Nos services</span>
            <h2>Des solutions <span className="gold-text">sur mesure</span></h2>
            <p>Que vous soyez un particulier ou une entreprise, nous adaptons chaque prestation à votre projet.</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className="reveal delay-100">
              <ServiceCard
                index={1}
                icon={<IconHome />}
                title="Déménagement Particuliers"
                description="Un service complet pour déménager en toute sérénité : emballage, démontage, transport et réinstallation de vos biens."
              />
            </div>
            <div className="reveal delay-200">
              <ServiceCard
                index={2}
                icon={<IconBuilding />}
                title="Déménagement Professionnels"
                description="Transfert de bureaux, matériel et archives, planifié pour limiter l'interruption de votre activité."
              />
            </div>
            <div className="reveal delay-300">
              <ServiceCard
                index={3}
                icon={<IconTruck />}
                title="Transport de Marchandises"
                description="Livraison sécurisée et ponctuelle de vos marchandises, du petit colis à la palette encombrante."
              />
            </div>
          </div>

          <div className={`${styles.centerLink} reveal`}>
            <Link href="/services" className="btn btn-outline">Voir tous nos services</Link>
          </div>
        </div>
      </section>

      {/* ============ FORMULES ============ */}
      <div className="section-alt">
        <Pricing />
      </div>

      {/* ============ ÉTAPES ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Comment ça marche</span>
            <h2>Votre déménagement en <span className="gold-text">3 étapes</span></h2>
            <p>Un accompagnement simple et transparent, du premier appel jusqu&apos;à la remise des clés.</p>
          </div>

          <ol className={styles.steps}>
            {STEPS.map((s, i) => (
              <li key={s.title} className={`${styles.step} reveal delay-${(i + 1) * 100}`}>
                <div className={styles.stepTop}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span className={styles.stepIcon}>{s.icon}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ POURQUOI NOUS ============ */}
      <section className={`section section-alt ${styles.why}`}>
        <div className={`container ${styles.whyGrid}`}>
          <div className={`${styles.whyImage} reveal`}>
            <div className={styles.cards}>
              <Image src="/carte-slogan.jpg" alt="Carte Globe Transport : Votre nouveau départ, notre priorité !" width={1206} height={461} sizes="(min-width: 992px) 480px, 85vw" className={styles.cardBack} />
              <Image src="/carte-logo.jpg" alt="Carte de visite Globe Transport Déménagement" width={1206} height={500} sizes="(min-width: 992px) 480px, 85vw" className={styles.cardFront} />
            </div>
            <div className={styles.whyBadge}>
              <span className="script">Un seul appel,</span>
              <strong>on s&apos;occupe du reste.</strong>
            </div>
          </div>

          <div className={`${styles.whyText} reveal delay-200`}>
            <span className="eyebrow eyebrow-left">Pourquoi Globe Transport</span>
            <h2>L&apos;exigence d&apos;un service <span className="gold-text">haut de gamme</span></h2>
            <p>
              Forts de notre expérience, nous mettons tout en œuvre pour vous offrir un service de qualité supérieure. Notre engagement repose sur trois piliers fondamentaux.
            </p>

            <ul className={styles.whyList}>
              <li>
                <span className={styles.whyIcon}><IconShield /></span>
                <div>
                  <strong>Fiabilité</strong>
                  <p>Un soin particulier apporté à vos biens, des équipes expérimentées et une assurance incluse.</p>
                </div>
              </li>
              <li>
                <span className={styles.whyIcon}><IconCheck /></span>
                <div>
                  <strong>Efficacité</strong>
                  <p>Des méthodes éprouvées et un matériel adapté pour un déménagement rapide et sans casse.</p>
                </div>
              </li>
              <li>
                <span className={styles.whyIcon}><IconClock /></span>
                <div>
                  <strong>Rapidité</strong>
                  <p>Intervention sous 48 à 72 h selon disponibilité et respect strict des délais annoncés.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ TEXTE SEO LOCAL ============ */}
      <section className="section">
        <div className={`container ${styles.seoGrid}`}>
          <div className={`${styles.seoIntro} reveal`}>
            <span className="eyebrow eyebrow-left">Votre déménageur local</span>
            <h2>Déménagement à Talence, Bordeaux <span className="gold-text">&amp; en Gironde</span></h2>
            <p className="script gold-text">Un savoir-faire de proximité.</p>
          </div>
          <div className={`${styles.seoText} reveal delay-200`}>
            <p>
              Installée au <strong>140 rue Robespierre à Talence</strong>, Globe Transport Déménagement accompagne
              les particuliers et les professionnels de la <strong>métropole bordelaise</strong> pour tous leurs projets
              de déménagement : studio, appartement, maison, bureaux ou local commercial.
            </p>
            <p>
              Que vous quittiez <strong>Bordeaux</strong> pour <strong>Mérignac</strong>, <strong>Pessac</strong> ou{' '}
              <strong>Bègles</strong>, que vous partiez vers <strong>Arcachon</strong> ou <strong>Libourne</strong>, ou que
              votre nouvelle vie vous attende à l&apos;autre bout de la France, nous organisons chaque étape :
              visite et devis gratuits, fourniture des cartons, emballage, démontage et remontage des meubles,
              transport sécurisé et installation.
            </p>
            <p>
              Notre objectif est simple : un <strong>déménagement sans stress</strong>, au juste prix, réalisé par une
              équipe soigneuse et ponctuelle. Besoin d&apos;un <strong>garde-meubles</strong> entre deux logements ou d&apos;un
              <strong> transport de marchandises</strong> ? Nous avons aussi la solution.
            </p>
            <div className={styles.seoLinks}>
              <Link href="/services" className="btn btn-outline">Découvrir nos services</Link>
              <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ZONE ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Zone d&apos;intervention</span>
            <h2>De Bordeaux à <span className="gold-text">toute la France</span></h2>
            <p>De la proximité à la mobilité nationale, nous vous accompagnons partout.</p>
          </div>

          <div className={styles.zoneGrid}>
            <div className={`${styles.zoneCard} reveal`}>
              <div className={styles.zoneHead}>
                <span className={styles.zoneIcon}><IconPin /></span>
                <div>
                  <h3>Bordeaux &amp; Gironde</h3>
                  <p>Basés à Talence, nous intervenons rapidement dans toute la métropole et le département.</p>
                </div>
              </div>
              <div className={styles.cityTags}>
                {CITIES.map((c) => <span key={c} className={styles.cityTag}>{c}</span>)}
              </div>
              <div className={styles.national}>
                <h4>Toute la France</h4>
                <p>Votre projet vous emmène plus loin&nbsp;? Nous organisons vos déménagements sur l&apos;ensemble du territoire, avec la même exigence de qualité.</p>
              </div>
            </div>

            <div className={`${styles.mapWrapper} reveal delay-200`}>
              <iframe
                title="Carte de la zone d'intervention autour de Bordeaux"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181140.23199859593!2d-0.7029524021200407!3d44.86370420793616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQ />

      {/* ============ CTA ============ */}
      <section className={styles.cta}>
        <div className="container">
          <div className={`${styles.ctaPanel} reveal`}>
            <GoldSwoosh className={styles.ctaSwoosh} />
            <span className="eyebrow">Visite gratuite &amp; devis gratuit</span>
            <h2 className={styles.ctaTitle}>
              <span className="script gold-text">Prêt pour votre nouveau départ&nbsp;?</span>
            </h2>
            <p className={styles.ctaText}>
              Prenez rendez-vous dès aujourd&apos;hui. Nous nous déplaçons gratuitement pour évaluer vos besoins et vous proposer un devis sur mesure.
            </p>
            <div className={styles.ctaActions}>
              <a href={whatsappLink("Bonjour, je souhaite prendre rendez-vous pour une visite gratuite et un devis.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <IconWhatsApp /> Écrire sur WhatsApp
              </a>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline btn-lg">
                <IconPhone /> Appeler le {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
