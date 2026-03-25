import type { Skill } from '../types';

// =============================================================================
// Skills de Pablo
// Niveles (1-5): 1=Básico, 2=En aprendizaje, 3=Competente, 4=Avanzado, 5=Experto
// =============================================================================

export const skills: Skill[] = [
  // --- Frontend ---
  {
    id: 'html-css',
    name: 'HTML / CSS',
    category: 'frontend',
    level: 5,
    description: 'Maquetación semántica, Flexbox, Grid y diseño responsivo.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'languages',
    level: 4,
    description: 'ES6+, manipulación del DOM, fetch API y programación asíncrona.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    level: 3,
    description: 'Tipado estático, interfaces y tipos en proyectos React.',
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 3,
    description: 'Componentes funcionales, hooks, React Router y CSS Modules.',
  },

  // --- Backend / Scripting ---
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    level: 2,
    description: 'Scripting, automatización de tareas y manejo de ficheros.',
  },
  {
    id: 'bash',
    name: 'Bash / Shell',
    category: 'systems',
    level: 4,
    description: 'Scripts de administración, automatización y tareas de sistema.',
  },

  // --- Sistemas ---
  {
    id: 'networking',
    name: 'Redes / TCP-IP',
    category: 'systems',
    level: 3,
    description: 'Modelo OSI, TCP/IP, DNS, DHCP, HTTP/S, VLANs y routing básico.',
  },

  // --- DevOps ---
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 3,
    description: 'Contenedores, Docker Compose y despliegue de servicios.',
  },

  // --- Herramientas ---
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 3,
    description: 'Control de versiones, flujo con ramas y GitHub.',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    level: 3,
    description: 'Control de versiones, flujo con ramas y GitHub.',
  }
];

// Agrupadas por categoría — útil para renderizar secciones separadas
export const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<string, Skill[]>,
);
