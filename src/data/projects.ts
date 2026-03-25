import type { Project } from '../types';

// =============================================================================
// Proyectos de Pablo
// TODO: Reemplaza los datos de ejemplo con tus proyectos reales.
//       Rellena repoUrl, liveUrl e imageUrl cuando los tengas.
// =============================================================================

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'Portfolio web personal construido con React, TypeScript y Vite. Incluye toggle de tema oscuro/claro y diseño responsivo.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'Vercel'],
    status: 'in-progress',
    repoUrl: 'https://github.com/pablon04/portfolio-v2', // TODO: actualiza con tu URL real
    startDate: '2026-03',
    featured: true,
  },
  {
    id: 'soporte-tecnico',
    title: 'Soporte Técnico',
    description:
      'Sistema de Tickets diseñado para cualquier empresa que necesite un sistema interno.',
    technologies: ['Angular', 'TypeScript', 'TailwindCss', 'Supabase', 'Vercel'],
    status: 'completed',
    repoUrl: 'https://github.com/pablon04/soporte-tecnico', // TODO: añade URL si está en GitHub
    startDate: '2025-11',
    endDate: '2026-01',
    featured: true,
  },
  {
    id: 'register-lab',
    title: 'Registro de Muestras',
    description:
      'Sistema de registro de muestras que entraban en el laboratorio, con avisos que superen fechas para eliminarlos, etc.',
    technologies: ['Angular', 'TailwindCss', 'Supabase', 'Vercel'],
    status: 'completed',
    repoUrl: 'https://github.com/pablon04/app-web-registros',
    startDate: '2025-04',
    endDate: '2025-05',
    featured: false,
  },
];

// Proyectos marcados como destacados para la sección principal
export const featuredProjects = projects.filter((p) => p.featured);
