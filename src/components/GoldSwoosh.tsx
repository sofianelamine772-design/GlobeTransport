import { useId } from 'react';

/** Vagues dorées décoratives, inspirées des courbes des cartes de visite. */
export default function GoldSwoosh({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={className} viewBox="0 0 600 600" fill="none" aria-hidden preserveAspectRatio="none">
      <defs>
        <linearGradient id={`g1${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7e7a8" stopOpacity="0" />
          <stop offset="0.45" stopColor="#e2c063" />
          <stop offset="0.7" stopColor="#a8812f" />
          <stop offset="1" stopColor="#f3d98b" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id={`g2${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#a8812f" stopOpacity="0" />
          <stop offset="0.6" stopColor="#d4af37" />
          <stop offset="1" stopColor="#f7e7a8" />
        </linearGradient>
      </defs>
      <path d="M40 600 C 220 520, 430 380, 600 90" stroke={`url(#g1${id})`} strokeWidth="10" strokeLinecap="round" />
      <path d="M120 600 C 290 540, 480 420, 600 220" stroke={`url(#g2${id})`} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      <path d="M0 560 C 200 500, 380 400, 560 0" stroke={`url(#g2${id})`} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
