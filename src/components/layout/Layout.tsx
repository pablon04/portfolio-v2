// Outlet es el "hueco" donde React Router renderiza la página activa.
// El Layout actúa de contenedor fijo: Navbar arriba, página en el medio, Footer abajo.
import { Outlet } from 'react-router';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import type { Theme } from '../../types';
import styles from './Layout.module.css';

interface LayoutProps {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

export default function Layout({ theme, toggleTheme, isDark }: LayoutProps) {
  return (
    // La clase wrapper asegura que el footer siempre quede al fondo,
    // incluso en páginas con poco contenido (ver Layout.module.css).
    <div className={styles.wrapper}>
      <Navbar theme={theme} toggleTheme={toggleTheme} isDark={isDark} />

      {/*
        <Outlet /> es donde React Router "inyecta" la página activa.
        Si la URL es /projects, aquí aparece <ProjectsPage />.
        Si es /, aparece <HomePage />.
        El Layout ni sabe ni le importa qué página es — solo pone el hueco.
      */}
      <Outlet />

      <Footer />
    </div>
  );
}
