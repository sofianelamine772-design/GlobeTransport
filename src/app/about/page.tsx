import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="bg-blob bg-blob-primary animate-float" style={{ top: '10%', left: '-5%', width: '600px', height: '600px', animationDelay: '0s' }}></div>
      <div className="bg-blob bg-blob-accent animate-float" style={{ bottom: '10%', right: '-10%', width: '500px', height: '500px', animationDelay: '-4s' }}></div>

      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center', padding: '6rem 1rem', clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)', marginBottom: '4rem' }}>
        <div className="container animate-fade-in-up">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>À Propos de Nous</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
            L'histoire et les valeurs d'une entreprise dédiée à la réussite de votre mobilité.
          </p>
        </div>
      </section>

      <section className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div className="animate-fade-in-left">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', position: 'relative', display: 'inline-block' }}>
              Notre Histoire
              <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '40px', height: '4px', backgroundColor: 'var(--color-accent)', borderRadius: '2px' }}></span>
            </h2>
            <p style={{ marginBottom: '1.5rem', color: '#555', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Fondée sur une vision claire et une volonté de simplifier la vie de nos clients, <strong>Globe Transport Déménagement</strong> s'est rapidement imposée comme un acteur de confiance dans le secteur de la logistique et du déménagement.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Notre parcours est marqué par une croissance constante, soutenue par une équipe de professionnels passionnés. Chaque jour, nous relevons de nouveaux défis logistiques avec un seul but : garantir l'intégrité de vos biens et vous offrir une tranquillité d'esprit absolue.
            </p>
          </div>
          <div className="animate-fade-in-right delay-200 hover-lift" style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(226, 232, 240, 0.5)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Nos Valeurs Fondamentales</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', transition: 'var(--transition)' }}>
                <span style={{ fontSize: '2rem', background: 'rgba(5, 150, 105, 0.1)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>🎯</span>
                <div>
                  <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Efficacité</strong>
                  <p style={{ color: '#666', fontSize: '1rem' }}>Des méthodes éprouvées pour des résultats optimaux.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', transition: 'var(--transition)' }}>
                <span style={{ fontSize: '2rem', background: 'rgba(5, 150, 105, 0.1)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>🛡️</span>
                <div>
                  <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Fiabilité</strong>
                  <p style={{ color: '#666', fontSize: '1rem' }}>Une transparence totale et un engagement sans faille.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', transition: 'var(--transition)' }}>
                <span style={{ fontSize: '2rem', background: 'rgba(5, 150, 105, 0.1)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>⚡</span>
                <div>
                  <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Rapidité</strong>
                  <p style={{ color: '#666', fontSize: '1rem' }}>Le respect de vos plannings est notre priorité.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--color-background-alt)', borderRadius: '100px 0 0 0', zIndex: -1 }}></div>
        <div className="container animate-fade-in-up delay-200" style={{ textAlign: 'center', paddingTop: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>L'Équipe Dirigeante</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem', color: '#666', fontSize: '1.1rem' }}>
            Des experts de la logistique à votre écoute, supervisant chaque étape de vos projets pour en garantir le succès.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            {[1, 2, 3].map((item, index) => (
              <div key={item} className={`animate-fade-in-up delay-${(index + 1) * 200} hover-lift`} style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow)', width: '280px', cursor: 'pointer' }}>
                <div style={{ width: '120px', height: '120px', backgroundColor: '#e2e8f0', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: '#94a3b8' }}>👤</div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Expert Logistique {item}</h4>
                <p style={{ color: 'var(--color-secondary)', fontSize: '1rem', fontWeight: 'bold' }}>Co-Fondateur</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
