import styles from './WhatsAppButton.module.css';
import { SITE, whatsappLink } from '../lib/site';
import { IconWhatsApp } from './Icons';

export default function WhatsAppButton() {
  const url = whatsappLink("Bonjour, je souhaite avoir des informations pour un déménagement.");

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.whatsappFloat} aria-label="Contactez-nous sur WhatsApp">
      <span className={styles.iconCircle}>
        <IconWhatsApp className={styles.whatsappIcon} />
      </span>
      <span className={styles.label}>
        <small>WhatsApp</small>
        <strong>{SITE.phoneDisplay}</strong>
      </span>
    </a>
  );
}
