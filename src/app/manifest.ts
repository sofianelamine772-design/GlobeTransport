import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Globe Transport Déménagement',
    short_name: 'Globe Transport',
    description: 'Déménagement de particuliers et professionnels à Talence, Bordeaux et partout en France.',
    lang: 'fr',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#050505',
    icons: [
      { src: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
