import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.col}>
          <img src="/logo.png" alt="Globe Transport Logo" className={styles.footerLogo} />
          <p className={styles.description}>
            EFFICACITÉ • FIABILITÉ • RAPIDITÉ.<br/>
            Votre partenaire de confiance pour tous vos besoins en déménagement et transport.
          </p>
        </div>
        <div className={styles.col}>
          <h4 className={styles.title}>Liens Rapides</h4>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.link}>Accueil</Link></li>
            <li><Link href="/services" className={styles.link}>Nos Services</Link></li>
            {/* <li><Link href="/about" className={styles.link}>À Propos</Link></li> */}
            <li><Link href="/contact" className={styles.link}>Contact</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.title}>Légal</h4>
          <ul className={styles.list}>
            <li><Link href="/mentions-legales" className={styles.link}>Mentions Légales</Link></li>
            <li><Link href="/politique-confidentialite" className={styles.link}>Politique de Confidentialité</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.title}>Contact</h4>
          <ul className={styles.list}>
            <li className={styles.contactItem}>140 rue Robespierre, 33400 Talence</li>
            <li className={styles.contactItem}>globe-transport-déménagement@hotmail.com</li>
            <li className={styles.contactItem}>06 59 78 02 70</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Globe Transport Déménagement. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
