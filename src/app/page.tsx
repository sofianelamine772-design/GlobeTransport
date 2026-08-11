import Link from "next/link";
import styles from "./page.module.css";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Formes abstraites animées en arrière-plan */}
      <div className="bg-blob bg-blob-primary animate-float" style={{ top: '20%', left: '-10%', width: '500px', height: '500px', animationDelay: '0s' }}></div>
      <div className="bg-blob bg-blob-accent animate-float" style={{ top: '60%', right: '-5%', width: '400px', height: '400px', animationDelay: '-3s' }}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={`${styles.heroContent} animate-fade-in-up`}>
            <h1 className={styles.heroTitle}>
              Votre Partenaire de Confiance pour le Transport et le Déménagement
            </h1>
            <p className={styles.heroSubtitle}>
              Efficacité, Fiabilité et Rapidité. Nous prenons en charge vos biens avec le plus grand soin.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary">Obtenir un devis gratuit</Link>
              <Link href="/services" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Découvrir nos services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Logistics Section */}
      <section className={styles.customSection}>
        <div className={`container ${styles.customContainer}`}>
          <div className={`${styles.customText} animate-fade-in-left`}>
            <h2>Une Logistique Sur Mesure</h2>
            <p>
              Parce que chaque déménagement est unique, nous concevons des solutions parfaitement adaptées à vos besoins. De l'emballage de vos objets les plus fragiles jusqu'à la réinstallation complète dans vos nouveaux locaux, nous maîtrisons chaque maillon de la chaîne logistique.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✓</span> Sur Mesure
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✓</span> Sans Stress
              </div>
            </div>
          </div>
          <div className={`${styles.customImageWrapper} animate-fade-in-right delay-200`}>
            <div className={styles.customShapeBg}></div>
            <img 
              src="/realistic_mover.png" 
              alt="Déménageur avec carton" 
              className={styles.customImage}
              style={{ mixBlendMode: 'multiply', boxShadow: 'none', borderRadius: '0' }}
            />
          </div>
        </div>
      </section>

      {/* Mini Galerie / Autres visuels */}
      <section className="section" style={{ padding: '2rem 0', backgroundColor: 'var(--color-background)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', fontSize: '1rem', fontStyle: 'italic', opacity: 0.8 }}>
            D'autres aperçus (générés sur mesure)
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="animate-fade-in-up delay-100 hover-lift">
              <img src="/realistic_mover.png" alt="Déménageur" style={{ width: '220px', height: '160px', objectFit: 'cover', borderRadius: '12px', boxShadow: 'var(--shadow)' }} />
            </div>
            <div className="animate-fade-in-up delay-200 hover-lift">
              <img src="/moving_boxes.png" alt="Cartons" style={{ width: '220px', height: '160px', objectFit: 'cover', borderRadius: '12px', boxShadow: 'var(--shadow)' }} />
            </div>
            <div className="animate-fade-in-up delay-300 hover-lift">
              <img src="/boxes_iso.png" alt="Cartons 3D" style={{ width: '220px', height: '160px', objectFit: 'cover', borderRadius: '12px', boxShadow: 'var(--shadow)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-alt" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-in-up delay-100`}>
            <h2 className={styles.sectionTitle}>Nos Services Principaux</h2>
            <p className={styles.sectionDescription}>
              Des solutions adaptées à tous vos besoins logistiques, que vous soyez un particulier ou un professionnel.
            </p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className="animate-fade-in-up delay-100">
              <ServiceCard 
                title="Déménagement Particuliers"
                description="Un service complet pour un déménagement en toute sérénité. Nous gérons l'emballage, le transport et le déballage de vos biens."
                icon="🏠"
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <ServiceCard 
                title="Déménagement Entreprises"
                description="Transfert de bureaux et d'équipements sans interruption de votre activité. Rapidité et efficacité garanties."
                icon="🏢"
              />
            </div>
            <div className="animate-fade-in-up delay-300">
              <ServiceCard 
                title="Transport de Marchandises"
                description="Livraison sécurisée et ponctuelle de vos marchandises, du petit colis à la palette encombrante."
                icon="🚚"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'activité Section */}
      <section className="section" style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-in-up delay-100`}>
            <h2 className={styles.sectionTitle}>Notre Zone d'Activité</h2>
            <p className={styles.sectionDescription}>
              Un service de proximité, avec une portée nationale.
            </p>
          </div>
          <div className="animate-fade-in-up delay-200" style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '3rem', 
            boxShadow: 'var(--shadow-lg)', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📍</div>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#555' }}>
              Basés à <strong>Bordeaux</strong>, nous intervenons principalement en Nouvelle-Aquitaine pour tous vos besoins logistiques et de déménagement.
              <br/><br/>
              Cependant, nous sommes également <strong>disponibles dans toute la France</strong> pour répondre à vos demandes spécifiques.
              N'hésitez pas à nous contacter pour une étude de faisabilité et obtenir un <strong>devis personnalisé</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="section" style={{ position: 'relative', zIndex: 1, paddingBottom: '8rem' }}>
        <div className={`container ${styles.featuresContainer}`}>
          <div className={`${styles.featuresText} animate-fade-in-left delay-200`}>
            <h2>Pourquoi choisir Globe Transport ?</h2>
            <p>Forts de notre expérience, nous mettons tout en œuvre pour vous offrir un service de qualité supérieure. Notre engagement repose sur trois piliers fondamentaux :</p>
            
            <ul className={styles.featureList}>
              <li>
                <strong>Efficacité</strong>: Des processus optimisés pour un gain de temps maximal.
              </li>
              <li>
                <strong>Fiabilité</strong>: Un soin particulier apporté à vos biens et des équipes expérimentées.
              </li>
              <li>
                <strong>Rapidité</strong>: Respect strict des délais annoncés.
              </li>
            </ul>
            
            {/* <Link href="/about" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              En savoir plus sur nous
            </Link> */}
          </div>
          <div className={`${styles.featuresImage} animate-fade-in-right delay-400`}>
            <div className={`${styles.imageWrapper} animate-fade-in-up delay-200`} style={{ flex: 1, minWidth: '300px' }}>
              <img src="/movers_team.png" alt="Équipe Globe Transport" width={800} height={600} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
