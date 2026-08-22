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
            
            <div className={styles.heroWhatsappBanner}>
              <div className={styles.heroWhatsappBannerContent}>
                <strong>Visite gratuite & Devis gratuit</strong>
                <span>Prenez rendez-vous pour une visite, contactez-nous via WhatsApp !</span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <Link href="https://wa.me/33659780270?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20visite%20gratuite%20/%20un%20devis%20gratuit." target="_blank" rel="noopener noreferrer" className={`btn ${styles.btnWhatsapp}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp : 06 59 78 02 70
              </Link>
              <Link href="/contact" className="btn btn-secondary" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'white', color: 'white' }}>Obtenir un devis</Link>
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
      <section className={styles.zoneSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-in-up delay-100`}>
            <h2 className={styles.sectionTitle}>Notre Zone d'Intervention</h2>
            <p className={styles.sectionDescription}>
              De la proximité à la mobilité nationale, nous vous accompagnons partout.
            </p>
          </div>
          
          <div className={styles.zoneContainer}>
            <div className={`${styles.zoneContent} animate-fade-in-left delay-200`}>
              <h3 style={{ margin: 0, marginBottom: '1rem' }}>Bordeaux & Alentours</h3>
              <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem', margin: 0 }}>
                Basés en plein cœur de la région, nous intervenons rapidement pour tous vos besoins logistiques et de déménagement en Gironde.
              </p>
              <div className={styles.cityTags}>
                <span className={styles.cityTag}>Bordeaux</span>
                <span className={styles.cityTag}>Mérignac</span>
                <span className={styles.cityTag}>Pessac</span>
                <span className={styles.cityTag}>Talence</span>
                <span className={styles.cityTag}>Villenave-d'Ornon</span>
                <span className={styles.cityTag}>Bègles</span>
                <span className={styles.cityTag}>Libourne</span>
                <span className={styles.cityTag}>Arcachon</span>
              </div>

              <div className={styles.nationalText}>
                <h4>Toute la France</h4>
                <p>
                  Votre projet nous emmène plus loin ? Nous organisons vos transports et déménagements sur l'ensemble du territoire national avec la même exigence de qualité.
                </p>
              </div>
            </div>

            <div className={`${styles.mapWrapper} animate-fade-in-right delay-300`}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181140.23199859593!2d-0.7029524021200407!3d44.86370420793616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
