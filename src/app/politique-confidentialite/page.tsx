export default function PolitiqueConfidentialite() {
  return (
    <div className="container section" style={{ maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '2rem' }}>Politique de Confidentialité</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.6', color: '#333' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>1. Collecte des données personnelles</h2>
          <p>Dans le cadre de l'utilisation de notre site web, notamment via notre formulaire de contact et de demande de devis, nous sommes amenés à collecter les données suivantes : Nom complet, adresse email, numéro de téléphone, et les détails de votre demande de service.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>2. Utilisation des données</h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Répondre à vos demandes de renseignements.</li>
            <li>Établir et vous faire parvenir des devis personnalisés.</li>
            <li>Vous recontacter dans le cadre de l'exécution de nos services de déménagement ou de transport.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>3. Conservation des données</h2>
          <p>Vos données personnelles sont conservées pendant la durée nécessaire à la gestion de notre relation commerciale, et au maximum pour une durée de 3 ans après notre dernier contact.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>4. Vos droits</h2>
          <p>Conformément à la réglementation applicable (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Vous pouvez exercer ce droit en nous contactant à l'adresse suivante : <strong>globe-transport-déménagement@hotmail.com</strong>.</p>
        </section>
      </div>
    </div>
  );
}
