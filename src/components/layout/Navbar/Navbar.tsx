// NavLink es como <Link> pero añade automáticamente una clase CSS "active"
// cuando la URL actual coincide con el href del enlace.
// Esto nos ahorra tener que comparar manualmente la ruta actual.
import { NavLink } from 'react-router';
import { useState } from 'react';
import type { Theme } from '../../../types';
import styles from './Navbar.module.css';

// ----------------------------------------------------------------------------
// Props del componente
// ----------------------------------------------------------------------------

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

// ----------------------------------------------------------------------------
// Componente
// ----------------------------------------------------------------------------

export default function Navbar({ theme, toggleTheme, isDark }: NavbarProps) {
  // Estado local para controlar si el menú móvil está abierto o cerrado.
  // Este estado SOLO vive en Navbar; no necesita subir al padre.
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú cuando el usuario hace clic en un enlace.
  // Sin esto, en móvil el menú quedaría abierto tras navegar.
  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    // <header> es el elemento semántico correcto para la cabecera del sitio.
    // role="banner" es redundante con <header> pero ayuda a algunos lectores de pantalla.
    <header className={styles.navbar} role="banner">
      <div className={`${styles.inner} container`}>

        {/* --- Logo / Nombre --- */}
        {/* NavLink con end={true} solo marca "activo" si la URL es exactamente "/",
            no en rutas hijas como "/projects". */}
        <NavLink to="/" end className={styles.logo} onClick={handleLinkClick}>
          <span className={styles.logoName}>Pablo</span>
          <span className={styles.logoDot}>.</span>
          <span className={styles.logoSuffix}>dev</span>
        </NavLink>

        {/* --- Controles: toggle de tema + hamburguesa --- */}
        <div className={styles.controls}>

          {/* Botón toggle dark/light mode */}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
            title={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
          >
            {/* Iconos SVG inline: no requieren ninguna librería externa */}
            {isDark ? (
              // Icono de Sol (modo claro)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              // Icono de Luna (modo oscuro)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Botón hamburguesa (solo visible en móvil via CSS) */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {/*
              Tres líneas que se convierten en una X cuando el menú está abierto.
              Lo hacemos con CSS transitions en el .module.css.
            */}
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineTop : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineMid : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineBot : ''}`} />
          </button>

        </div>
      </div>

      {/* Overlay semitransparente que cierra el menú al hacer clic fuera */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
