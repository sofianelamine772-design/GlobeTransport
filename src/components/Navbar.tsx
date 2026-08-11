"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le menu lors d'un changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Bloquer le scroll quand le menu est ouvert (avec nettoyage sécurisé)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Nettoyage au démontage pour éviter les bugs de scroll bloqué
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <Link href="/" className={styles.logoContainer}>
          <Image 
            src="/logo.png" 
            alt="Globe Transport Logo" 
            width={240} 
            height={80} 
            className={styles.logo}
          />
        </Link>

        {/* Navigation Bureau */}
        <nav className={styles.navDesktop}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.navLink}>Accueil</Link></li>
            <li><Link href="/services" className={styles.navLink}>Nos Services</Link></li>
            <li><Link href="/about" className={styles.navLink}>À Propos</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.actionsDesktop}>
          <Link href="/contact" className="btn btn-primary">Demander un devis</Link>
        </div>

        {/* Bouton Menu Burger */}
        <button 
          className={`${styles.burgerBtn} ${isMenuOpen ? styles.burgerBtnOpen : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay sombre en arrière-plan */}
      <div 
        className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.mobileMenuOverlayOpen : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Tiroir (Drawer) latéral droit */}
      <div className={`${styles.mobileMenuDrawer} ${isMenuOpen ? styles.mobileMenuDrawerOpen : ''}`}>
        <nav className={styles.navMobile}>
          <ul className={styles.navMobileList}>
            <li style={{ transitionDelay: '0.1s' }}><Link href="/" className={styles.navMobileLink}>Accueil</Link></li>
            <li style={{ transitionDelay: '0.15s' }}><Link href="/services" className={styles.navMobileLink}>Nos Services</Link></li>
            <li style={{ transitionDelay: '0.2s' }}><Link href="/about" className={styles.navMobileLink}>À Propos</Link></li>
            <li style={{ transitionDelay: '0.25s' }}><Link href="/contact" className={styles.navMobileLink}>Contact</Link></li>
          </ul>
          
          <div className={styles.mobileDivider} style={{ transitionDelay: '0.3s' }}></div>

          <div className={styles.mobileContactInfo} style={{ transitionDelay: '0.35s' }}>
            <p><strong>Besoin d'aide ?</strong></p>
            <p>06 59 78 02 70</p>
            <p>globe-transport-déménagement@hotmail.com</p>
          </div>

          <div className={styles.mobileActions} style={{ transitionDelay: '0.4s' }}>
            <Link href="/contact" className="btn btn-primary hover-lift" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', backgroundColor: 'var(--color-accent)' }}>
              Demander un devis
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
