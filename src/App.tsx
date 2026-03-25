import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { useTheme } from './hooks/useTheme';

// Layout
import Layout from './components/layout/Layout';

// Páginas
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <BrowserRouter>
      <Routes>
        {/*
          La ruta padre "/" usa el Layout como elemento.
          Todas las rutas hijas (index, /projects, /projects/:id) se renderizan
          dentro del <Outlet /> del Layout, automáticamente rodeadas de Navbar y Footer.

          Pasamos theme, toggleTheme e isDark al Layout para que el Navbar
          tenga acceso al toggle. El resto de páginas NO necesitan el tema
          porque los estilos se aplican desde las variables CSS en <html>.
        */}
        <Route
          element={
            <Layout toggleTheme={toggleTheme} isDark={isDark} />
          }
        >
          {/* index={true} significa que esta ruta se activa cuando la URL es exactamente "/" */}
          <Route index element={<HomePage />} />

          {/* Listado de proyectos */}
          <Route path="projects" element={<ProjectsPage />} />

          {/* Detalle de un proyecto: :id es el parámetro dinámico */}
          <Route path="projects/:id" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
