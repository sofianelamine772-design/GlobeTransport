import type { Metadata } from "next";
import styles from './page.module.css';
import { SITE, whatsappLink } from '../../lib/site';
import { IconPhone, IconMail, IconWhatsApp, IconPin, IconArrow } from '../../components/Icons';

export const metadata: Metadata = {
  title: "Contact & Devis gratuit",
  description:
    "Contactez Globe Transport Déménagement à Talence : téléphone, WhatsApp ou email. Visite et devis gratuits pour votre déménagement.",
};

export default function Contact() {
  const cards = [
    {
      href: `tel:${SITE.phoneTel}`,
      icon: <IconPhone />,
      title: 'Téléphone',
      value: SITE.phoneDisplay,
      action: 'Appeler directement',
      big: true,
    },
    {
      href: whatsappLink("Bonjour, je souhaite avoir des informations concernant vos services de déménagement."),
      icon: <IconWhatsApp />,
      title: 'WhatsApp',
      value: 'Réponse rapide, photos & visite',
      action: 'Ouvrir la discussion',
      external: true,
    },
    {
      href: `mailto:${SITE.email}`,
      icon: <IconMail />,
      title: 'Email',
      value: SITE.email,
      action: 'Envoyer un email',
    },
    {
      href: SITE.mapsUrl,
      icon: <IconPin />,
      title: 'Adresse',
      value: `${SITE.street}, ${SITE.postalCode} ${SITE.city}`,
      action: 'Voir sur la carte',
      external: true,
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container animate-fade-in-up">
          <span className="eyebrow">Visite gratuite · Devis gratuit</span>
          <h1>Contactez-<span className="gold-text">nous</span></h1>
          <p>Notre équipe est à votre disposition pour répondre à toutes vos demandes avec réactivité.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cardsContainer}>
            {cards.map((c, i) => (
              <div key={c.title} className={`reveal delay-${(i + 1) * 100}`}>
                <a
                  href={c.href}
                  className={styles.card}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className={styles.iconWrapper}>{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p className={c.big ? styles.bigValue : undefined}>{c.value}</p>
                  <span className={styles.actionText}>{c.action} <IconArrow /></span>
                </a>
              </div>
            ))}
          </div>

          <div className={`${styles.note} reveal`}>
            <p className="script gold-text">Votre nouveau départ, notre priorité&nbsp;!</p>
            <p>Envoyez-nous quelques photos de votre logement sur WhatsApp pour une première estimation encore plus rapide.</p>
          </div>
        </div>
      </section>
    </>
  );
}
