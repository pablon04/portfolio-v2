import type { Project } from '../types';

// =============================================================================
// Proyectos de Pablo
// TODO: Reemplaza los datos de ejemplo con tus proyectos reales.
//       Rellena repoUrl, liveUrl e imageUrl cuando los tengas.
// =============================================================================

export const projects: Project[] = [
  {
    id: 'portfolio-v2',
    title: 'Portfolio Personal v2',
    description:
      'Portfolio web personal construido con React, TypeScript y Vite. Incluye toggle de tema oscuro/claro y diseño responsivo.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    status: 'in-progress',
    repoUrl: 'https://github.com/pablonav/portfolio-v2', // TODO: actualiza con tu URL real
    startDate: '2025-03',
    featured: true,
  },
  {
    id: 'sysadmin-scripts',
    title: 'Scripts de Administración Linux',
    description:
      'Colección de scripts Bash para automatizar tareas comunes de administración de sistemas: backup, monitorización de servicios y gestión de usuarios.',
    technologies: ['Bash', 'Linux', 'Cron', 'systemd'],
    status: 'completed',
    repoUrl: undefined, // TODO: añade URL si está en GitHub
    startDate: '2024-09',
    endDate: '2025-01',
    featured: true,
  },
  {
    id: 'network-lab',
    title: 'Laboratorio de Redes',
    description:
      'Simulaciones y configuraciones de redes realizadas durante el ciclo ASIR: VLANs, routing estático, DNS y DHCP con equipos virtualizados.',
    technologies: ['Cisco Packet Tracer', 'VirtualBox', 'Linux', 'TCP/IP'],
    status: 'completed',
    startDate: '2024-01',
    endDate: '2024-06',
    featured: false,
  },
];

// Proyectos marcados como destacados para la sección principal
export const featuredProjects = projects.filter((p) => p.featured);
