import styles from './FAQ.module.css';

export default function FAQ() {
  const faqs = [
    {
      q: "Quels sont vos délais d'intervention ?",
      a: "Nous pouvons généralement intervenir sous 48 à 72 heures selon la période de l'année et votre localisation."
    },
    {
      q: "Fournissez-vous les cartons de déménagement ?",
      a: "Oui, nous proposons une gamme complète de matériel d'emballage (cartons, adhésifs, papier bulle) incluse dans nos forfaits."
    },
    {
      q: "Mes biens sont-ils assurés pendant le transport ?",
      a: "Absolument. Toutes nos prestations incluent une assurance contractuelle pour garantir la sécurité de votre patrimoine."
    },
    {
      q: "Faites-vous du démontage/remontage de meubles ?",
      a: "Oui, nos équipes sont formées pour démonter et remonter vos meubles avec le plus grand soin."
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-background-alt)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Questions Fréquentes</h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Tout ce que vous devez savoir avant votre déménagement.</p>
        </div>
        
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.faqCard} animate-fade-in-up delay-${(index + 1) * 100} hover-lift`}>
              <h4 className={styles.question}>{faq.q}</h4>
              <p className={styles.answer}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
