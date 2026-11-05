import styles from './Pricing.module.css';
import { whatsappLink } from '../lib/site';
import { IconCheck, IconX } from './Icons';

const FEATURES = [
  'Chargement et déchargement',
  'Transport sécurisé',
  'Mise en place des meubles',
  'Démontage et remontage',
  'Emballage complet (fragile & non fragile)',
  'Protection premium (housses, papier bulle pro)',
];

const PLANS = [
  {
    name: 'Économique',
    tagline: 'Vous emballez, nous transportons.',
    desc: 'La solution idéale pour les petits budgets.',
    included: 3,
  },
  {
    name: 'Standard',
    tagline: 'Le meilleur compromis.',
    desc: 'Nous gérons le mobilier (démontage / remontage), vous gérez les cartons.',
    included: 4,
    popular: true,
  },
  {
    name: 'Luxe',
    tagline: 'La prestation clé en main.',
    desc: 'Protection maximale et prise en charge totale, des objets fragiles aux meubles.',
    included: 6,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="formules">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Nos formules</span>
          <h2>Une formule pour <span className="gold-text">chaque projet</span></h2>
          <p>Choisissez le niveau de service qui correspond à vos besoins et à votre budget. Devis gratuit et sans engagement.</p>
        </div>

        <div className={styles.grid}>
          {PLANS.map((plan, i) => (
            <div key={plan.name} className={`${styles.cell} reveal delay-${(i + 1) * 100}`}>
            <div className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <span className={styles.badge}>Le plus choisi</span>}
              <p className={styles.kicker}>Formule</p>
              <h3 className={styles.name}>{plan.name}</h3>
              <p className={styles.tagline}>{plan.tagline}</p>
              <p className={styles.desc}>{plan.desc}</p>

              <ul className={styles.list}>
                {FEATURES.map((f, idx) => {
                  const ok = idx < plan.included;
                  return (
                    <li key={f} className={ok ? styles.included : styles.excluded}>
                      {ok ? <IconCheck /> : <IconX />}
                      <span>{f}</span>
                    </li>
                  );
                })}
              </ul>

              <a
                href={whatsappLink(`Bonjour, je souhaite un devis pour la formule ${plan.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                Demander un devis
              </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
