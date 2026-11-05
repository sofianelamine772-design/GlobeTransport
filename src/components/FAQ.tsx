import styles from './FAQ.module.css';

export const FAQS = [
  {
    q: 'Combien coûte un déménagement avec Globe Transport ?',
    a: "Le prix dépend du volume à déménager, de la distance, de l'accessibilité des logements (étage, ascenseur, stationnement) et de la formule choisie (Économique, Standard ou Luxe). C'est pourquoi nous réalisons une visite gratuite : vous recevez ensuite un devis clair et détaillé, sans frais cachés ni engagement.",
  },
  {
    q: 'La visite et le devis sont-ils vraiment gratuits ?',
    a: "Oui. Nous nous déplaçons gratuitement à Talence, Bordeaux et dans toute la Gironde pour évaluer le volume et vos besoins, puis nous vous remettons un devis détaillé, sans engagement. Vous pouvez aussi nous envoyer des photos sur WhatsApp pour une première estimation.",
  },
  {
    q: "Quels sont vos délais d'intervention ?",
    a: "Nous pouvons généralement intervenir sous 48 à 72 heures selon la période de l'année et votre localisation.",
  },
  {
    q: "Combien de temps à l'avance dois-je réserver mon déménagement ?",
    a: "Nous vous conseillons de nous contacter 3 à 4 semaines à l'avance, et un peu plus tôt pour les périodes chargées (fins de mois, été, rentrée). Pour une demande urgente, appelez-nous : nous trouvons souvent une solution rapide.",
  },
  {
    q: 'Quelle formule choisir : Économique, Standard ou Luxe ?',
    a: "Économique si vous préparez vous-même vos cartons et voulez maîtriser votre budget. Standard si vous souhaitez que nous nous occupions aussi du démontage et du remontage des meubles. Luxe pour une prise en charge complète : emballage de tous vos biens, y compris fragiles, et protection premium.",
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
    q: 'Intervenez-vous en dehors de Bordeaux et de la Gironde ?',
    a: "Oui. Basés à Talence, nous intervenons dans toute la métropole bordelaise (Bordeaux, Mérignac, Pessac, Bègles, Villenave-d'Ornon…), dans toute la Gironde (Libourne, Arcachon…) et organisons aussi des déménagements longue distance partout en France.",
  },
  {
    q: 'Déménagez-vous aussi les entreprises et les bureaux ?',
    a: "Oui. Nous organisons le transfert de bureaux, de commerces, de matériel informatique et d'archives, en planifiant l'opération pour limiter au maximum l'interruption de votre activité.",
  },
  {
    q: 'Proposez-vous une solution de garde-meubles ?',
    a: "Oui, nous proposons des solutions de stockage sécurisées à court ou long terme pour vos meubles et marchandises, par exemple entre deux logements ou pendant des travaux.",
  },
  {
    q: 'Comment bien préparer mon déménagement ?',
    a: "Triez et désencombrez quelques semaines avant, prévenez vos organismes (fournisseurs d'énergie, internet, banque, La Poste pour le suivi du courrier), réservez si besoin une place de stationnement pour le camion, et étiquetez vos cartons par pièce. Avec nos formules Standard et Luxe, nous prenons en charge une grande partie de ces étapes.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FAQ() {
  return (
    <section className="section section-alt" id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Questions <span className="gold-text">fréquentes</span></h2>
          <p>Tout ce que vous devez savoir avant votre déménagement à Talence, Bordeaux ou ailleurs en France.</p>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((faq, index) => (
            <details key={faq.q} className={`${styles.item} reveal`} open={index === 0}>
              <summary className={styles.question}>
                <h3 className={styles.questionText}>{faq.q}</h3>
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
