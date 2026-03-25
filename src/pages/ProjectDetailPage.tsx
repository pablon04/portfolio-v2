// Página de detalle de un proyecto concreto.
// useParams() es un hook de React Router que extrae los parámetros dinámicos
// de la URL. En nuestra ruta "/projects/:id", extrae el valor de :id.
// Ejemplo: si el usuario visita /projects/portfolio-v2, params.id = "portfolio-v2"
import { useParams } from 'react-router';

export default function ProjectDetailPage() {
  // Desestructuramos el parámetro "id" de la URL
  const { id } = useParams<{ id: string }>();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Detalle del Proyecto</h1>
      <p>
        ID del proyecto: <strong>{id}</strong>
      </p>
      <p>El contenido completo llegará en Fase 3.</p>
    </main>
  );
}
