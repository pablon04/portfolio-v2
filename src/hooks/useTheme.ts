import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '../types';

// Clave que usamos en localStorage para persistir la preferencia del usuario
const STORAGE_KEY = 'portfolio-theme';

/**
 * Lee la preferencia de tema del sistema operativo del usuario.
 * Esto usa la media query prefers-color-scheme para detectar si el OS
 * tiene configurado el modo oscuro.
 */
function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Lee el tema guardado en localStorage.
 * Si no hay nada guardado, devuelve la preferencia del sistema.
 */
function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // localStorage puede fallar en algunos contextos (ej. navegación privada)
  }
  return getSystemTheme();
}

/**
 * Aplica el atributo data-theme al elemento <html>.
 * Lo ponemos en <html> (documentElement) y no en <body> para que
 * las variables CSS estén disponibles desde cualquier punto del DOM,
 * incluido el <head> si algún día añadimos estilos críticos.
 */
function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
}

// ---------------------------------------------------------------------------

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

/**
 * Hook para gestionar el tema oscuro/claro del portfolio.
 *
 * Uso:
 *   const { theme, toggleTheme, isDark } = useTheme();
 *
 * - `theme`: valor actual ('dark' | 'light')
 * - `toggleTheme`: función para alternar entre los dos temas
 * - `isDark`: booleano de conveniencia
 */
export function useTheme(): UseThemeReturn {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Aplicar el tema al DOM cada vez que cambie
  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Silenciar errores de localStorage
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}
