import { useState } from 'react';
import { projects } from '../data/projects';
import type { ProjectStatus } from '../types';
import ProjectCard from '../components/ui/ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.css';

// ----------------------------------------------------------------------------
// Opciones del filtro de status
// "all" es una opción especial que muestra todos los proyectos.
// ----------------------------------------------------------------------------
type FilterValue = ProjectStatus | 'all';

const FILTER_OPTIONS: { value: FilterValue; label: string }[] = [
  { value: 'all',         label: 'Todos'        },
  { value: 'in-progress', label: 'En progreso'  },
  { value: 'completed',   label: 'Completados'  },
];

// ----------------------------------------------------------------------------
// Componente
// ----------------------------------------------------------------------------
export default function ProjectsPage() {
  /*
    useState con tipo explícito: el estado solo puede ser FilterValue.
    Empezamos mostrando todos los proyectos.
  */
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  // Filtramos el array según el filtro activo.
  // Si es "all" no filtramos, devolvemos todos.
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>

        {/* --- Cabecera --- */}
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Proyectos</h1>
          <p className={styles.pageSubtitle}>
            Una selección de proyectos personales y académicos.
          </p>
        </header>

        {/* --- Filtros de status --- */}
        {/*
          role="group" + aria-label agrupa los botones semánticamente
          para lectores de pantalla, igual que un <fieldset>.
        */}
        <div className={styles.filters} role="group" aria-label="Filtrar proyectos por estado">
          {FILTER_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              className={`${styles.filterBtn} ${activeFilter === value ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(value)}
              aria-pressed={activeFilter === value}
            >
              {label}
              {/* Contador de proyectos para cada filtro */}
              <span className={styles.filterCount}>
                {value === 'all'
                  ? projects.length
                  : projects.filter((p) => p.status === value).length}
              </span>
            </button>
          ))}
        </div>

        {/* --- Grid de tarjetas --- */}
        {filteredProjects.length > 0 ? (
          <ul className={styles.grid} role="list">
            {filteredProjects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          /* Estado vacío cuando no hay proyectos para el filtro activo */
          <div className={styles.emptyState}>
            <p>No hay proyectos con este filtro todavía.</p>
          </div>
        )}

      </div>
    </main>
  );
}
