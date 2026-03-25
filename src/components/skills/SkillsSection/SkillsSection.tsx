import { skillsByCategory } from '../../../data/skills';
import type { SkillCategory } from '../../../types';
import SkillBar from '../../ui/SkillBar/SkillBar';
import styles from './SkillsSection.module.css';

// ----------------------------------------------------------------------------
// Mapa de categoría (clave técnica) → título legible en español
// Si añades una categoría nueva en types/index.ts, añádela también aquí.
// ----------------------------------------------------------------------------
const CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend:  'Frontend',
  backend:   'Backend',
  systems:   'Sistemas',
  devops:    'DevOps',
  languages: 'Lenguajes',
  tools:     'Herramientas',
};

// Orden de aparición de las categorías en pantalla.
// Solo se muestran las que realmente tengan skills en el array.
const CATEGORY_ORDER: SkillCategory[] = [
  'languages',
  'frontend',
  'backend',
  'systems',
  'devops',
  'tools',
];

// ----------------------------------------------------------------------------
// Componente
// ----------------------------------------------------------------------------
export default function SkillsSection() {
  // Filtramos a las categorías que tienen al menos una skill
  // y las ordenamos según CATEGORY_ORDER.
  const orderedCategories = CATEGORY_ORDER.filter(
    (cat) => skillsByCategory[cat]?.length > 0,
  );

  return (
    <section className={styles.section} id="skills" aria-labelledby="skills-heading">
      <div className={`container ${styles.inner}`}>
        <h2 id="skills-heading" className={styles.sectionTitle}>
          Habilidades
        </h2>
        <p className={styles.sectionSubtitle}>
          Tecnologías y herramientas que uso en el día a día.
        </p>

        <div className={styles.grid}>
          {orderedCategories.map((category) => (
            <div key={category} className={styles.categoryGroup}>
              <h3 className={styles.categoryTitle}>
                {CATEGORY_LABELS[category]}
              </h3>
              <ul className={styles.skillList} role="list">
                {skillsByCategory[category].map((skill) => (
                  <li key={skill.id}>
                    <SkillBar
                      name={skill.name}
                      level={skill.level}
                      description={skill.description}
                      icon={skill.icon}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
