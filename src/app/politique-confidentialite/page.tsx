import type { Metadata } from "next";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Informations</span>
          <h1>Politique de <span className="gold-text">confidentialité</span></h1>
        </div>
      </section>

      <div className="container legal">
        <section>
          <h2>1. Collecte des données personnelles</h2>
          <p>Lorsque vous nous contactez (téléphone, WhatsApp, email) pour une demande de renseignements ou de devis, nous pouvons être amenés à collecter les données suivantes : nom, adresse email, numéro de téléphone, adresses de départ et d&apos;arrivée, et les détails de votre demande.</p>
        </section>

        <section>
          <h2>2. Utilisation des données</h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul>
            <li>Répondre à vos demandes de renseignements.</li>
            <li>Établir et vous faire parvenir des devis personnalisés.</li>
            <li>Vous recontacter dans le cadre de l&apos;exécution de nos services de déménagement ou de transport.</li>
          </ul>
        </section>

        <section>
          <h2>3. Conservation des données</h2>
          <p>Vos données personnelles sont conservées pendant la durée nécessaire à la gestion de notre relation commerciale, et au maximum 3 ans après notre dernier contact.</p>
        </section>

        <section>
          <h2>4. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition concernant vos données personnelles. Pour exercer ce droit, contactez-nous à l&apos;adresse : <strong>{SITE.email}</strong>.</p>
        </section>
      </div>
    </>
  );
}
