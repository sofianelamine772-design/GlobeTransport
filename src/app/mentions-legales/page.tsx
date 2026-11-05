import type { Metadata } from "next";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Informations</span>
          <h1>Mentions <span className="gold-text">légales</span></h1>
        </div>
      </section>

      <div className="container legal">
        <section>
          <h2>1. Informations générales</h2>
          <p>Le site est édité par la société <strong>Globe Transport Déménagement</strong>.</p>
          <ul>
            <li><strong>Statut juridique :</strong> SAS</li>
            <li><strong>SIRET :</strong> 989 487 574 00018</li>
            <li><strong>Siège social :</strong> {SITE.street}, {SITE.postalCode} {SITE.city}</li>
          </ul>
        </section>

        <section>
          <h2>2. Contact</h2>
          <ul>
            <li><strong>Téléphone :</strong> {SITE.phoneDisplay}</li>
            <li><strong>Email :</strong> {SITE.email}</li>
          </ul>
        </section>

        <section>
          <h2>3. Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
        </section>

        <section>
          <h2>4. Propriété intellectuelle</h2>
          <p>Le contenu de ce site (textes, images, logo, etc.) est la propriété exclusive de Globe Transport Déménagement, sauf mention contraire. Toute reproduction, distribution, modification ou adaptation de ces éléments sans autorisation expresse est strictement interdite.</p>
        </section>
      </div>
    </>
  );
}
