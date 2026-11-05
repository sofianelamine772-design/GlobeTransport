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

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
