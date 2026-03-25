import type { SkillLevel } from '../../../types';
import styles from './SkillBar.module.css';

// ----------------------------------------------------------------------------
// Mapa de nivel numérico → etiqueta legible
// ----------------------------------------------------------------------------
const LEVEL_LABELS: Record<SkillLevel, string> = {
  1: 'Básico',
  2: 'Aprendiendo',
  3: 'Competente',
  4: 'Avanzado',
  5: 'Experto',
};

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
interface SkillBarProps {
  name: string;
  level: SkillLevel;
  description?: string;
  icon?: string;
}

// ----------------------------------------------------------------------------
// Componente
// ----------------------------------------------------------------------------
export default function SkillBar({ name, level, description, icon }: SkillBarProps) {
  // El ancho es proporcional al nivel: nivel 1 = 20%, nivel 5 = 100%
  const widthPercent = level * 20;
  const labelText = LEVEL_LABELS[level];

  return (
    <div className={styles.skillBar}>
      {/* Cabecera: icono (si existe), nombre y etiqueta de nivel */}
      <div className={styles.header}>
        <div className={styles.nameRow}>
          {icon && (
            <img
              src={icon}
              alt=""
              className={styles.icon}
              aria-hidden="true"
            />
          )}
          <span className={styles.name}>{name}</span>
        </div>
        <span className={styles.levelLabel}>{labelText}</span>
      </div>

      {/* Descripción opcional */}
      {description && (
        <p className={styles.description}>{description}</p>
      )}

      {/* Barra de progreso accesible */}
      {/*
        role="progressbar" + aria-valuenow/min/max es el patrón estándar
        para que los lectores de pantalla anuncien el valor correctamente.
      */}
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={widthPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${labelText} (${widthPercent}%)`}
      >
        <div
          className={styles.fill}
          style={{ '--skill-width': `${widthPercent}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
