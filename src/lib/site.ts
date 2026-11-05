// Informations de contact centralisées — à modifier ici une seule fois.
export const SITE = {
  name: 'Globe Transport Déménagement',
  phoneDisplay: '06 59 78 02 70',
  phoneTel: '+33659780270',
  whatsappNumber: '33659780270',
  email: 'globe-transport-déménagement@hotmail.com',
  street: '140 rue Robespierre',
  postalCode: '33400',
  city: 'Talence',
  mapsUrl: 'https://maps.google.com/?q=140+rue+Robespierre+33400+Talence',
};

/**
 * Adresse publique du site (SEO : sitemap, robots, liens canoniques, partage).
 * Priorité : variable NEXT_PUBLIC_SITE_URL (à définir sur Vercel quand le nom de domaine
 * est connecté), sinon l'URL de production fournie automatiquement par Vercel.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
