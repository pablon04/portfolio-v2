import type { Experience } from '../types';

// =============================================================================
// Experiencia y formación de Pablo
// TODO: Reemplaza con tus datos reales (empresa, fechas, descripción).
//       endDate: undefined significa "Presente".
// =============================================================================

export const experiences: Experience[] = [
  {
    id: 'asir',
    type: 'education',
    title: 'Técnico Superior en Administración de Sistemas Informáticos en Red',
    organization: 'IES / Centro de Formación', // TODO: nombre real de tu centro
    location: 'España',
    startDate: '2023-09',
    endDate: undefined, // Aún en curso
    description:
      'Ciclo formativo de grado superior enfocado en administración de sistemas, redes, servicios en red y virtualización.',
    highlights: [
      'Administración de sistemas Linux y Windows Server',
      'Configuración de redes: routing, VLANs, DNS, DHCP',
      'Virtualización con VirtualBox y contenedores Docker',
      'Scripting con Bash y Python para automatización',
      'Implantación de servicios web y bases de datos',
    ],
  },
  {
    id: 'freelance-dev',
    type: 'work',
    title: 'Desarrollador Web Freelance',
    organization: 'Proyectos propios',
    startDate: '2024-06',
    endDate: undefined,
    description:
      'Desarrollo de proyectos personales y colaboraciones puntuales aplicando tecnologías web modernas.',
    highlights: [
      'Desarrollo frontend con React y TypeScript',
      'Despliegue de aplicaciones con Docker',
      'Control de versiones con Git y GitHub',
    ],
    technologies: ['React', 'TypeScript', 'Docker', 'Git'],
  },
];

// Solo la educación formal
export const education = experiences.filter((e) => e.type === 'education');

// Solo experiencia laboral
export const workExperience = experiences.filter((e) => e.type === 'work');
