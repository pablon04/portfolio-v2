// HomePage ya no recibe props de tema — el toggle vive en el Navbar.
// Las variables CSS del tema siguen funcionando igual porque se aplican
// en el elemento <html>, no en este componente.
import { Link } from 'react-router';
import { featuredProjects } from '../data/projects';
import SkillsSection from '../components/skills/SkillsSection/SkillsSection';
import ExperienceSection from '../components/experience/ExperienceSection/ExperienceSection';
import ProjectCard from '../components/ui/ProjectCard/ProjectCard';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>

      {/* ===================================================================
          HERO
          Primer impacto visual: nombre, tagline y CTAs.
          =================================================================== */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={`container ${styles.heroInner}`}>

          {/* Saludo pequeño sobre el nombre */}
          <p className={styles.greeting}>Hola, soy</p>

          {/* Nombre principal — tamaño grande con degradado de acento */}
          <h1 id="hero-heading" className={styles.name}>
            Pablo Navarro
          </h1>

          {/* Tagline */}
          <p className={styles.role}>
            Estudiante de ASIR <span className={styles.separator}>·</span> Desarrollador Web
          </p>

          <p className={styles.bio}>
            Apasionado de la informática y programador Web, construyendo
            proyectos con React, TypeScript, etc.
          </p>

          {/* CTAs principales */}
          <div className={styles.ctas}>
            {/*
              Link a /projects — React Router, sin recarga.
            */}
            <Link to="/projects" className={styles.ctaPrimary}>
              Ver proyectos
            </Link>

            {/*
              El "Ver experiencia" hace scroll suave a la sección #experience.
              Usamos <a> estándar (no <Link>) porque es un ancla en la misma página.
              El scroll-behavior: smooth está definido en index.css.
            */}
            <a href="#experience" className={styles.ctaSecondary}>
              Ver experiencia
            </a>
          </div>
        </div>

        {/* Decoración de fondo: puntos en grid */}
        <div className={styles.heroBgDecoration} aria-hidden="true" />
      </section>

      {/* ===================================================================
          SKILLS
          Delegamos toda la lógica al componente SkillsSection.
          =================================================================== */}
      <SkillsSection />
      
          {/* ===================================================================
          PROYECTOS DESTACADOS
          Solo los proyectos con featured: true
          =================================================================== */}
      {featuredProjects.length > 0 && (
        <section className={styles.featuredSection} aria-labelledby="featured-heading">
          <div className={`container ${styles.featuredInner}`}>
            <div className={styles.sectionHeader}>
              <h2 id="featured-heading" className={styles.sectionTitle}>
                Proyectos destacados
              </h2>
              <Link to="/projects" className={styles.seeAllLink}>
                Ver todos
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

            <ul className={styles.projectsGrid} role="list">
              {featuredProjects.map((project) => (
                <li key={project.id}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===================================================================
          EXPERIENCIA
          Delegamos toda la lógica al componente ExperienceSection.
          =================================================================== */}
      <ExperienceSection />

    </main>
  );
}
