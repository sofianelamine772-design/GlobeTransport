"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { SITE } from '../lib/site';
import { IconPhone, IconMail } from './Icons';

const LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Nos Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Fermer le menu lors d'un changement de page
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setIsMenuOpen(false);
  }

  // Ombre / fond renforcé au défilement
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.navbar}`}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Globe Transport Déménagement — Accueil"
          onClick={() => {
            if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          <img src="/globe-gold.png" alt="" width={165} height={110} className={styles.brandGlobe} />
          <span className={styles.brandText}>
            <span className={`${styles.brandName} gold-text`}>Globe Transport</span>
            <span className={styles.brandSub}>Déménagement</span>
          </span>
        </Link>

        {/* Navigation Bureau */}
        <nav className={styles.navDesktop} aria-label="Navigation principale">
          <ul className={styles.navList}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${styles.navLink} ${pathname === l.href ? styles.navLinkActive : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actionsDesktop}>
          <a href={`tel:${SITE.phoneTel}`} className={styles.phoneLink}>
            <IconPhone />
            {SITE.phoneDisplay}
          </a>
          <Link href="/contact" className="btn btn-primary">Devis gratuit</Link>
        </div>

        {/* Bouton Menu Burger */}
        <button
          className={`${styles.burgerBtn} ${isMenuOpen ? styles.burgerBtnOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.mobileMenuOverlayOpen : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Tiroir mobile */}
      <div className={`${styles.mobileMenuDrawer} ${isMenuOpen ? styles.mobileMenuDrawerOpen : ''}`}>
        <nav className={styles.navMobile} aria-label="Navigation mobile">
          <ul className={styles.navMobileList}>
            {LINKS.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: `${0.1 + i * 0.06}s` }}>
                <Link href={l.href} className={styles.navMobileLink}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileDivider} style={{ transitionDelay: '0.3s' }}></div>

          <div className={styles.mobileContactInfo} style={{ transitionDelay: '0.35s' }}>
            <p className={styles.mobileScript}>Besoin d&apos;aide ?</p>
            <a href={`tel:${SITE.phoneTel}`}><IconPhone /> {SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`}><IconMail /> {SITE.email}</a>
          </div>

          <div className={styles.mobileActions} style={{ transitionDelay: '0.4s' }}>
            <Link href="/contact" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Demander un devis gratuit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
