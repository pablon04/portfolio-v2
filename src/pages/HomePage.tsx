// HomePage ya no recibe props de tema — el toggle vive en el Navbar.
// Las variables CSS del tema siguen funcionando igual porque se aplican
// en el elemento <html>, no en este componente.
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* Hero placeholder — se construirá en Fase 3 */}
      <section className={styles.hero}>
        <p className={styles.greeting}>Hola, soy</p>
        <h1 className={styles.name}>Pablo</h1>
        <p className={styles.role}>Estudiante de ASIR & Desarrollador Web</p>
      </section>
    </main>
  );
}
