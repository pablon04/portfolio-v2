import { Link, useParams } from 'react-router';
import { projects } from '../data/projects';
import type { ProjectStatus } from '../types';
import styles from './ProjectDetailPage.module.css';

// ----------------------------------------------------------------------------
// Helpers de formato
// ----------------------------------------------------------------------------

const STATUS_CONFIG: Record<ProjectStatus, { label: string; className: string }> = {
  'completed':   { label: 'Completado',  className: styles.statusCompleted  },
  'in-progress': { label: 'En progreso', className: styles.statusInProgress },
  'archived':    { label: 'Archivado',   className: styles.statusArchived   },
};

function formatDate(isoYearMonth: string): string {
  const [year, month] = isoYearMonth.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
}

// ----------------------------------------------------------------------------
// Componente
// ----------------------------------------------------------------------------
export default function ProjectDetailPage() {
  // useParams() extrae los parámetros de la URL.
  // La ruta está definida como "/projects/:id", así que id puede ser undefined
  // si por alguna razón se navega a la ruta sin el parámetro.
  const { id } = useParams<{ id: string }>();

  // Buscamos el proyecto en el array de datos.
  // Array.find devuelve el primer elemento que cumple la condición,
  // o undefined si no existe ninguno.
  const project = projects.find((p) => p.id === id);

  // --- Caso de error: proyecto no encontrado ---
  if (!project) {
    return (
      <main className={styles.page}>
        <div className={`container ${styles.notFound}`}>
          <p className={styles.notFoundEmoji} aria-hidden="true">404</p>
          <h1 className={styles.notFoundTitle}>Proyecto no encontrado</h1>
          <p className={styles.notFoundText}>
            No existe ningún proyecto con el identificador <code>{id}</code>.
          </p>
          <Link to="/projects" className={styles.backLink}>
            ← Volver a proyectos
          </Link>
        </div>
      </main>
    );
  }

  // --- Caso normal: proyecto encontrado ---
  const statusCfg = STATUS_CONFIG[project.status];

  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>

        {/* --- Enlace de vuelta --- */}
        <Link to="/projects" className={styles.backLink}>
          ← Volver a proyectos
        </Link>

        {/* --- Hero del proyecto --- */}
        <header className={styles.hero}>
          {/* Imagen o placeholder */}
          <div className={styles.imageWrapper}>
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={`Preview de ${project.title}`}
                className={styles.image}
              />
            ) : (
              <div className={styles.imagePlaceholder} aria-hidden="true">
                <span className={styles.placeholderIcon}>&lt;/&gt;</span>
              </div>
            )}
          </div>

          <div className={styles.heroMeta}>
            {/* Status badge */}
            <span className={`${styles.statusBadge} ${statusCfg.className}`}>
              {statusCfg.label}
            </span>

            <h1 className={styles.title}>{project.title}</h1>

            {/* Rango de fechas */}
            <p className={styles.dateRange}>
              <time>{formatDate(project.startDate)}</time>
              {' — '}
              {project.endDate ? (
                <time>{formatDate(project.endDate)}</time>
              ) : (
                <span>Presente</span>
              )}
            </p>
          </div>
        </header>

        <div className={styles.content}>

          {/* --- Descripción larga --- */}
          <section className={styles.descSection} aria-labelledby="desc-heading">
            <h2 id="desc-heading" className={styles.sectionTitle}>Descripción</h2>
            {/*
              Si existe longDescription la usamos; si no, recurrimos a description.
              El operador ?? (nullish coalescing) comprueba null o undefined,
              no valores falsy como "" o 0.
            */}
            <p className={styles.descText}>
              {project.longDescription ?? project.description}
            </p>
          </section>

          {/* --- Tecnologías --- */}
          <section className={styles.techSection} aria-labelledby="tech-heading">
            <h2 id="tech-heading" className={styles.sectionTitle}>Tecnologías</h2>
            <ul className={styles.techList} role="list">
              {project.technologies.map((tech) => (
                <li key={tech} className={styles.techBadge}>
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* --- Links externos --- */}
          {(project.repoUrl || project.liveUrl) && (
            <section className={styles.linksSection} aria-labelledby="links-heading">
              <h2 id="links-heading" className={styles.sectionTitle}>Enlaces</h2>
              <div className={styles.links}>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    {/* Icono GitHub */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Ver repositorio
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
                  >
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
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    Ver demo en vivo
                  </a>
                )}
              </div>
            </section>
          )}

        </div>
      </div>
    </main>
  );
}
