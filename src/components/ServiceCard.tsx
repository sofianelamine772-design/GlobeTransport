import type { ReactNode } from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index?: number;
}

export default function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  return (
    <article className={`lux-card ${styles.card}`}>
      {index !== undefined && <span className={styles.number}>{String(index).padStart(2, '0')}</span>}
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
