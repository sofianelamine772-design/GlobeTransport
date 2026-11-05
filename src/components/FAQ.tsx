import styles from './FAQ.module.css';

const FAQS = [
  {
    q: "Quels sont vos délais d'intervention ?",
    a: "Nous pouvons généralement intervenir sous 48 à 72 heures selon la période de l'année et votre localisation.",
  },
  {
    q: 'Fournissez-vous les cartons de déménagement ?',
    a: "Oui, nous proposons une gamme complète de matériel d'emballage (cartons, adhésifs, papier bulle) incluse dans nos forfaits.",
  },
  {
    q: 'Mes biens sont-ils assurés pendant le transport ?',
    a: 'Absolument. Toutes nos prestations incluent une assurance contractuelle pour garantir la sécurité de vos biens.',
  },
  {
    q: 'Faites-vous du démontage / remontage de meubles ?',
    a: 'Oui, nos équipes sont formées pour démonter et remonter vos meubles avec le plus grand soin (formules Standard et Luxe).',
  },
  {
    q: 'La visite et le devis sont-ils vraiment gratuits ?',
    a: "Oui. Nous nous déplaçons gratuitement pour évaluer le volume et vos besoins, puis nous vous remettons un devis détaillé, sans engagement.",
  },
];

export default function FAQ() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Questions <span className="gold-text">fréquentes</span></h2>
          <p>Tout ce que vous devez savoir avant votre déménagement.</p>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((faq, index) => (
            <details key={faq.q} className={`${styles.item} reveal`} open={index === 0}>
              <summary className={styles.question}>
                {faq.q}
                <span className={styles.toggle} aria-hidden />
              </summary>
              <p className={styles.answer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
