import ServiceCard from "../../components/ServiceCard";
import Link from "next/link";
import FAQ from "../../components/FAQ";

export default function Services() {
  return (
    <>
      <div className="bg-blob bg-blob-accent animate-float" style={{ top: '20%', left: '-5%', width: '400px', height: '400px', animationDelay: '0s' }}></div>
      
      <section className="section" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 59, 115, 0.8), rgba(0, 59, 115, 0.95)), url('/hero_truck.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        textAlign: 'center', 
        padding: '8rem 1rem 6rem', 
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)', 
        marginBottom: '4rem' 
      }}>
        <div className="container animate-fade-in-up">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Nos Services</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
            Découvrez l'ensemble de nos prestations conçues pour répondre à vos exigences logistiques.
          </p>
        </div>
      </section>

      <section className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="animate-fade-in-up delay-100">
              <ServiceCard 
                title="Déménagement Particuliers"
                description="Déménagez l'esprit tranquille. De l'emballage de vos objets fragiles au démontage de vos meubles, nous nous occupons de tout. Un accompagnement personnalisé pour un nouveau départ."
                icon="🏠"
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <ServiceCard 
                title="Déménagement Entreprises"
                description="Minimisez le temps d'arrêt de votre activité. Nos équipes planifient et exécutent le transfert de vos bureaux, matériel informatique et archives avec une efficacité redoutable."
                icon="🏢"
              />
            </div>
            <div className="animate-fade-in-up delay-300">
              <ServiceCard 
                title="Transport de Marchandises"
                description="Transport routier sécurisé pour tous types de marchandises. Nos véhicules sont équipés pour garantir l'intégrité de vos envois sur toutes les distances."
                icon="🚚"
              />
            </div>
            <div className="animate-fade-in-up delay-400">
              <ServiceCard 
                title="Garde-Meubles et Stockage"
                description="Besoin d'espace ? Nous proposons des solutions de stockage sécurisées à court ou long terme pour vos meubles et marchandises, avec accès contrôlé 24/7."
                icon="📦"
              />
            </div>
            <div className="animate-fade-in-up delay-500">
              <ServiceCard 
                title="Transport Spécialisé"
                description="Objets d'art, pianos, équipements lourds... Nous disposons du matériel et de l'expertise nécessaires pour transporter vos biens les plus précieux ou volumineux."
                icon="🎹"
              />
            </div>
            <div className="animate-fade-in-up delay-500">
              <ServiceCard 
                title="Service d'Emballage"
                description="Fourniture de cartons de qualité professionnelle et service d'emballage complet réalisé par nos experts pour une protection optimale."
                icon="🏷️"
              />
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ textAlign: 'center', marginTop: '5rem', background: 'var(--color-background-alt)', padding: '4rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Prêt à organiser votre transport ?</h3>
            <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>Notre équipe est à votre disposition pour vous conseiller et vous fournir un devis gratuit.</p>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Demander un devis personnalisé
            </Link>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <FAQ />
    </>
  );
}
