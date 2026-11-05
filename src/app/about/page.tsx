import type { Metadata } from "next";
import FAQ from "../../components/FAQ";
import { IconCheck, IconShield, IconClock } from "../../components/Icons";

export const metadata: Metadata = {
  title: "À propos",
  // Page non liée dans le menu pour l'instant : on évite qu'elle soit indexée.
  robots: { index: false, follow: true },
};

const VALUES = [
  { icon: <IconCheck />, title: "Efficacité", text: "Des méthodes éprouvées pour des résultats optimaux." },
  { icon: <IconShield />, title: "Fiabilité", text: "Une transparence totale et un engagement sans faille." },
  { icon: <IconClock />, title: "Rapidité", text: "Le respect de vos plannings est notre priorité." },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container animate-fade-in-up">
          <span className="eyebrow">Globe Transport</span>
          <h1>À propos de <span className="gold-text">nous</span></h1>
          <p>L&apos;histoire et les valeurs d&apos;une entreprise dédiée à la réussite de votre nouveau départ.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div className="reveal">
            <span className="eyebrow eyebrow-left">Notre histoire</span>
            <h2 style={{ fontSize: '2.2rem', margin: '1rem 0 1.5rem', textTransform: 'uppercase' }}>
              Une entreprise <span className="gold-text">de confiance</span>
            </h2>
            <p style={{ marginBottom: '1.25rem', color: 'var(--text-muted)', fontSize: '1.08rem' }}>
              Fondée sur une vision claire et une volonté de simplifier la vie de nos clients, <strong style={{ color: 'var(--text)' }}>Globe Transport Déménagement</strong> s&apos;est imposée comme un acteur de confiance du déménagement en Gironde.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem' }}>
              Chaque jour, nous relevons de nouveaux défis logistiques avec un seul but : garantir l&apos;intégrité de vos biens et vous offrir une tranquillité d&apos;esprit absolue.
            </p>
          </div>

          <div className="lux-card reveal delay-200" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }} className="gold-text">
              Nos valeurs
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {VALUES.map((v) => (
                <li key={v.title} style={{ display: 'flex', gap: '1.1rem', alignItems: 'flex-start' }}>
                  <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 12, border: '1px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-light)' }}>
                    <span style={{ width: 22, height: 22, display: 'flex' }}>{v.icon}</span>
                  </span>
                  <div>
                    <strong style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.95rem' }}>{v.title}</strong>
                    <p style={{ color: 'var(--text-muted)' }}>{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
