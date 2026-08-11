import styles from './contact.module.css';

export default function Contact() {
  return (
    <>
      <div className="bg-blob bg-blob-primary animate-float" style={{ top: '15%', right: '-5%', width: '500px', height: '500px', animationDelay: '0s' }}></div>
      <div className="bg-blob bg-blob-accent animate-float" style={{ bottom: '15%', left: '-10%', width: '600px', height: '600px', animationDelay: '-3s' }}></div>

      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center', padding: '6rem 1rem', clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)', marginBottom: '4rem' }}>
        <div className="container animate-fade-in-up">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Contact & Devis</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
            Prêt à planifier votre déménagement ou transport ? Contactez-nous dès aujourd'hui pour obtenir une estimation gratuite.
          </p>
        </div>
      </section>

      <section className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div className={`container ${styles.contactGrid}`}>
          {/* Informations de contact */}
          <div className={`${styles.contactInfo} animate-fade-in-left`}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nos Coordonnées</h2>
            <p style={{ color: '#555', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              Notre équipe est à votre disposition du Lundi au Samedi de 8h à 19h pour répondre à toutes vos interrogations.
            </p>

            <div className={`${styles.infoBlock} hover-lift`} style={{ padding: '1rem', borderRadius: 'var(--radius)', transition: 'var(--transition)' }}>
              <div className={styles.icon} style={{ background: 'rgba(5, 150, 105, 0.1)', color: 'var(--color-accent)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
              <div>
                <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Adresse Siège Social</strong>
                <p style={{ color: '#555' }}>140 rue Robespierre, 33400 Talence</p>
              </div>
            </div>

            <div className={`${styles.infoBlock} hover-lift`} style={{ padding: '1rem', borderRadius: 'var(--radius)', transition: 'var(--transition)', marginTop: '1rem' }}>
              <div className={styles.icon} style={{ background: 'rgba(5, 150, 105, 0.1)', color: 'var(--color-accent)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📞</div>
              <div>
                <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Téléphone</strong>
                <p style={{ color: '#555' }}>06 59 78 02 70</p>
              </div>
            </div>

            <div className={`${styles.infoBlock} hover-lift`} style={{ padding: '1rem', borderRadius: 'var(--radius)', transition: 'var(--transition)', marginTop: '1rem' }}>
              <div className={styles.icon} style={{ background: 'rgba(5, 150, 105, 0.1)', color: 'var(--color-accent)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>✉️</div>
              <div>
                <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Email</strong>
                <p style={{ color: '#555' }}>globe-transport-déménagement@hotmail.com</p>
              </div>
            </div>

            <div className="hover-lift" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--color-background-alt)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Zone d'intervention</h3>
              <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.6' }}>Nous intervenons sur toute la France et assurons également des transports vers les pays frontaliers de l'Union Européenne.</p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className={`${styles.contactFormContainer} animate-fade-in-right delay-200`} style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(226, 232, 240, 0.5)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Demander un devis en ligne</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Nom complet</label>
                <input type="text" id="name" className={styles.input} placeholder="Jean Dupont" required style={{ borderRadius: 'var(--radius)' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Adresse Email</label>
                  <input type="email" id="email" className={styles.input} placeholder="jean.dupont@email.com" required style={{ borderRadius: 'var(--radius)' }} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" className={styles.input} placeholder="06 12 34 56 78" required style={{ borderRadius: 'var(--radius)' }} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="service">Type de Service</label>
                <select id="service" className={styles.input} required style={{ borderRadius: 'var(--radius)' }}>
                  <option value="">Sélectionnez un service...</option>
                  <option value="demenagement_particulier">Déménagement Particulier</option>
                  <option value="demenagement_entreprise">Déménagement Entreprise</option>
                  <option value="transport">Transport de Marchandises</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Détails de votre demande (Volume, date, adresses...)</label>
                <textarea id="message" className={styles.textarea} placeholder="Décrivez votre besoin en détail..." rows={5} required style={{ borderRadius: 'var(--radius)' }}></textarea>
              </div>

              <button type="submit" className="btn btn-primary hover-lift" style={{ width: '100%', fontSize: '1.2rem', padding: '1rem', borderRadius: 'var(--radius-lg)' }}>Envoyer la demande</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
