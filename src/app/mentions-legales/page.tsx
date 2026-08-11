export default function MentionsLegales() {
  return (
    <div className="container section" style={{ maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '2rem' }}>Mentions Légales</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.6', color: '#333' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>1. Informations Générales</h2>
          <p>Le site est édité par la société <strong>Globe Transport Déménage</strong>.</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li><strong>Statut juridique :</strong> SAS</li>
            <li><strong>SIRET :</strong> 989 487 574 00018</li>
            <li><strong>Adresse du siège social :</strong> 140 rue Robespierre, 33400 Talence</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>2. Contact</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li><strong>Téléphone :</strong> 06 59 78 02 70</li>
            <li><strong>Email :</strong> globe-transport-déménagement@hotmail.com</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>3. Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>4. Propriété intellectuelle</h2>
          <p>Le contenu de ce site web (textes, images, logo, etc.) est la propriété exclusive de Globe Transport Déménagement, sauf mention contraire. Toute reproduction, distribution, modification ou adaptation de ces éléments sans autorisation expresse est strictement interdite.</p>
        </section>
      </div>
    </div>
  );
}
