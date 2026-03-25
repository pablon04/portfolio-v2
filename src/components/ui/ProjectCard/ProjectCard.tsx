import { Link } from 'react-router';
import type { Project, ProjectStatus } from '../../../types';
import styles from './ProjectCard.module.css';

// ----------------------------------------------------------------------------
// Configuración de badges de status
// ----------------------------------------------------------------------------
const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  'completed':   { label: 'Completado',  className: styles.statusCompleted  },
  'in-progress': { label: 'En progreso', className: styles.statusInProgress },
  'archived':    { label: 'Archivado',   className: styles.statusArchived   },
};

// ----------------------------------------------------------------------------
// Props: el objeto Project completo (tipado desde types/index.ts)
// ----------------------------------------------------------------------------
interface ProjectCardProps {
  project: Project;
}

// ----------------------------------------------------------------------------
// Componente
// ----------------------------------------------------------------------------
export default function ProjectCard({ project }: ProjectCardProps) {
  const statusCfg = STATUS_CONFIG[project.status];

  return (
    <article className={styles.card}>
      {/* --- Imagen o placeholder con gradiente --- */}
      <div className={styles.imageWrapper}>
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`Preview de ${project.title}`}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          /*
            Cuando no hay imagen usamos un div con gradiente generado
            a partir de las variables CSS del design system.
            El símbolo decorativo es aria-hidden para no confundir
            a los lectores de pantalla.
          */
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <span className={styles.placeholderIcon}>&lt;/&gt;</span>
          </div>
        )}

        {/* Badge de status superpuesto sobre la imagen */}
        <span className={`${styles.statusBadge} ${statusCfg.className}`}>
          {statusCfg.label}
        </span>
      </div>

      {/* --- Contenido principal --- */}
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        {/* Lista de tecnologías como badges */}
        <ul className={styles.techList} role="list" aria-label="Tecnologías">
          {project.technologies.map((tech) => (
            <li key={tech} className={styles.techBadge}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* --- Footer: links externos + enlace de detalle --- */}
      <div className={styles.footer}>
        <div className={styles.externalLinks}>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkExternal}
              aria-label={`Ver repositorio de ${project.title}`}
            >
              {/* Icono GitHub SVG inline */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Repo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkExternal}
              aria-label={`Ver demo en vivo de ${project.title}`}
            >
              {/* Icono de enlace externo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Demo
            </a>
          )}
        </div>

        {/*
          Link interno a la página de detalle.
          Usamos <Link> de React Router (no <a>) para que la navegación
          sea del lado del cliente y no recargue la página.
        */}
        <Link
          to={`/projects/${project.id}`}
          className={styles.detailLink}
          aria-label={`Ver más detalles de ${project.title}`}
        >
          Ver más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
