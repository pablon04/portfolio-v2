import { experiences } from '../../../data/experience';
import type { ExperienceType } from '../../../types';
import styles from './ExperienceSection.module.css';

// ----------------------------------------------------------------------------
// Iconos SVG inline para cada tipo de experiencia
// Evitamos dependencias externas y mantenemos el bundle pequeño.
// ----------------------------------------------------------------------------
function WorkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function CertificationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

// ----------------------------------------------------------------------------
// Helper: clase CSS según el tipo de experiencia
// ----------------------------------------------------------------------------
const TYPE_ICON: Record<ExperienceType, React.ReactNode> = {
  work:          <WorkIcon />,
  education:     <EducationIcon />,
  certification: <CertificationIcon />,
  volunteer:     <WorkIcon />,
};

const TYPE_CLASS: Record<ExperienceType, string> = {
  work:          styles.typeWork,
  education:     styles.typeEducation,
  certification: styles.typeCertification,
  volunteer:     styles.typeVolunteer,
};

// ----------------------------------------------------------------------------
// Helper: formatear fecha "2023-09" → "Sep 2023"
// Esto es localización básica sin librería externa.
// ----------------------------------------------------------------------------
function formatDate(isoYearMonth: string): string {
  const [year, month] = isoYearMonth.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
}

// ----------------------------------------------------------------------------
// Componente
// ----------------------------------------------------------------------------
export default function ExperienceSection() {
  return (
    <section
      className={styles.section}
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className={`container ${styles.inner}`}>
        <h2 id="experience-heading" className={styles.sectionTitle}>
          Experiencia y Formación
        </h2>
        <p className={styles.sectionSubtitle}>
          Mi trayectoria académica y profesional.
        </p>

        {/* Timeline vertical */}
        <ol className={styles.timeline} role="list">
          {experiences.map((exp, index) => (
            <li key={exp.id} className={styles.timelineItem}>
              {/* Línea vertical + punto del timeline */}
              <div className={styles.timelineGutter}>
                {/* Punto con icono del tipo */}
                <div className={`${styles.timelineDot} ${TYPE_CLASS[exp.type]}`}>
                  {TYPE_ICON[exp.type]}
                </div>
                {/* Línea conectora (no se muestra en el último elemento) */}
                {index < experiences.length - 1 && (
                  <div className={styles.timelineLine} aria-hidden="true" />
                )}
              </div>

              {/* Contenido de la entrada */}
              <div className={styles.timelineContent}>
                {/* Fechas */}
                <time className={styles.dateRange}>
                  {formatDate(exp.startDate)}
                  {' — '}
                  {exp.endDate ? formatDate(exp.endDate) : 'Presente'}
                </time>

                {/* Título y organización */}
                <h3 className={styles.entryTitle}>{exp.title}</h3>
                <p className={styles.organization}>
                  {exp.organization}
                  {exp.location && (
                    <span className={styles.location}> · {exp.location}</span>
                  )}
                </p>

                {/* Descripción */}
                <p className={styles.description}>{exp.description}</p>

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className={styles.highlights} role="list">
                    {exp.highlights.map((h) => (
                      <li key={h} className={styles.highlightItem}>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tecnologías usadas */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <ul className={styles.techList} role="list" aria-label="Tecnologías">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className={styles.techBadge}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
