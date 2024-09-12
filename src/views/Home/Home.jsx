import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>CINEMA EC</h1>
      <h2>El catálogo del cine ecuatoriano</h2>
      <p>
        Aquí encontrarás el castálogo de películas del cine
        ecuatoriano, además, encontrarás las películas que
        son parte del Banco de Contenidos del IFCI y son de
        acceso gratuito para miembros de la Red de Espacios
        Audiovisuales y Usuarios del Banco de Contenidos.
      </p>
    </div>
  )
}

export default Home
