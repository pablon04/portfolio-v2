// =============================================================================
// Tipos globales del portfolio
// =============================================================================

// ----------------------------------------------------------------------------
// Skills
// ----------------------------------------------------------------------------

/**
 * Categorías de habilidades del portfolio.
 * Extiende este union type si añades más categorías.
 */
export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'systems'        // Linux, redes, administración
  | 'devops'         // Docker, CI/CD
  | 'languages'      // Lenguajes de programación
  | 'tools';         // Git, editores, etc.

/**
 * Nivel de dominio de una habilidad.
 * Usamos números del 1 al 5 para poder renderizar barras de progreso.
 * También incluimos una etiqueta descriptiva para mostrar al usuario.
 */
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  /** Nivel del 1 (básico) al 5 (experto) */
  level: SkillLevel;
  /** Descripción corta opcional (ej: "2+ años usando React") */
  description?: string;
  /** Nombre del icono o ruta a imagen del logo de la tecnología */
  icon?: string;
}

// ----------------------------------------------------------------------------
// Projects
// ----------------------------------------------------------------------------

export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Descripción larga para la página de detalle (opcional por ahora) */
  longDescription?: string;
  technologies: string[];
  status: ProjectStatus;
  /** URL del repositorio en GitHub u otra plataforma */
  repoUrl?: string;
  /** URL de la demo en vivo */
  liveUrl?: string;
  /** Ruta o URL de la imagen de preview */
  imageUrl?: string;
  /** Fecha de inicio del proyecto (ISO string: "2024-09") */
  startDate: string;
  endDate?: string;
  /** Si true, aparece destacado en la sección principal */
  featured: boolean;
}

// ----------------------------------------------------------------------------
// Experience
// ----------------------------------------------------------------------------

export type ExperienceType = 'work' | 'education' | 'certification' | 'volunteer';

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  /** Empresa, instituto o entidad */
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;        // undefined = "Presente"
  description: string;
  /** Lista de logros o responsabilidades clave */
  highlights?: string[];
  technologies?: string[];
}

// ----------------------------------------------------------------------------
// Tema (dark / light)
// ----------------------------------------------------------------------------

export type Theme = 'dark' | 'light';
