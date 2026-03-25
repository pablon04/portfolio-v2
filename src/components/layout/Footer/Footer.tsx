import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // <footer> es el elemento semántico correcto para el pie de página.
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} container`}>

        {/* Nombre y copyright */}
        <p className={styles.copy}>
          &copy; {currentYear} <span className={styles.name}>Pablo Nav</span>
        </p>

        {/* Texto central opcional */}
        <p className={styles.tagline}>
          Construido con React + TypeScript
        </p>

        {/* Links externos */}
        <nav aria-label="Links de contacto" className={styles.links}>
          <a
            href="https://github.com/pablonav"
            target="_blank"
            rel="noopener noreferrer"  /* Seguridad: evita que la nueva pestaña acceda a window.opener */
            className={styles.link}
            aria-label="Perfil de GitHub de Pablo Nav"
          >
            GitHub
          </a>
          <span className={styles.separator} aria-hidden="true">·</span>
          <a
            href="https://linkedin.com/in/pablonav"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Perfil de LinkedIn de Pablo Nav"
          >
            LinkedIn
          </a>
        </nav>

      </div>
    </footer>
  );
}
