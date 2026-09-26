import type { Project } from '../types';
import cuentasPlatformImage from '../assets/cuentas-platform.jpeg';

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
  {
    id: 'bot-citas',
    title: 'Bot de Citas en Telegram',
    description:
      'Bot de Telegram automatizado para gestionar citas de revisión de vehículos: pedir, consultar y cancelar citas mediante botones, con los huecos y reservas guardados en Google Sheets.',
    technologies: ['Node.js', 'Telegram', 'Google Sheets API', 'Apps Script', 'Vercel'],
    status: 'completed',
    repoUrl: 'https://github.com/pablon04/bot_citas',
    startDate: '2026-03',
    endDate: '2026-03',
    featured: true,
  },
  {
    id: 'cuentas-platform',
    title: 'CuentasPlatform',
    description:
      'Plataforma de finanzas personales (web y app Android) para controlar efectivo, tarjeta y carpetas de ahorro, con historial de ingresos/gastos y detección de pagos NFC con Google Wallet.',
    technologies: ['Next.js', 'React Native', 'Expo', 'TypeScript', 'TailwindCss', 'Supabase', 'Turborepo'],
    status: 'in-progress',
    repoUrl: 'https://github.com/pablon04/CuentaPlatform',
    imageUrl: cuentasPlatformImage,
    startDate: '2026-09',
    featured: true,
  },
];

// Proyectos marcados como destacados para la sección principal
export const featuredProjects = projects.filter((p) => p.featured);
