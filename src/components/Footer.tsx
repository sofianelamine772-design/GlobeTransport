import Link from 'next/link';
import styles from './Footer.module.css';
import { SITE } from '../lib/site';
import { IconPhone, IconMail, IconPin } from './Icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <img src="/logo-gold.png" alt="Globe Transport Déménagement" className={styles.footerLogo} width={1100} height={453} />
          <p className={styles.tagline}>Votre nouveau départ, notre priorité&nbsp;!</p>
          <p className={styles.description}>
            Un déménagement en toute sérénité, partout, pour vous. Particuliers et professionnels, à Talence, Bordeaux et dans toute la France.
          </p>
        </div>

        <div>
          <h4 className={styles.title}>Navigation</h4>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.link}>Accueil</Link></li>
            <li><Link href="/services" className={styles.link}>Nos Services</Link></li>
            <li><Link href="/contact" className={styles.link}>Contact & Devis</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Informations</h4>
          <ul className={styles.list}>
            <li><Link href="/mentions-legales" className={styles.link}>Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className={styles.link}>Confidentialité</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Contact</h4>
          <ul className={styles.list}>
            <li>
              <a href={`tel:${SITE.phoneTel}`} className={styles.contactItem}>
                <IconPhone /> <span className={styles.phone}>{SITE.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className={styles.contactItem}>
                <IconMail /> <span>{SITE.email}</span>
              </a>
            </li>
            <li>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <IconPin /> <span>{SITE.street}<br />{SITE.postalCode} {SITE.city}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>&copy; {new Date().getFullYear()} Globe Transport Déménagement. Tous droits réservés.</p>
          <p className={styles.values}>Particuliers <span>◆</span> Professionnels <span>◆</span> Sécurité <span>◆</span> Confiance</p>
        </div>
      </div>
    </footer>
  );
}
