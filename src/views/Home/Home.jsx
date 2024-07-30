import Section from '../../components/Section'
import About from './components/About'
import styles from './Home.module.css'
import videoRea from '../../assets/videos/presentacionREA.mp4'
import Contact from '../../components/Contact'
import { HashRouter } from 'react-router-dom'
import Benefits from './components/Benefits'

const Home = () => {
  return (
    <>
      <Section id="home">
        <main className={styles.Home}>
          <video
            className={styles.video}
            autoPlay
            loop
            muted
            controls
          >
            <source src={videoRea} type="video/mp4" />
            Su navegador no soporta video
          </video>
          <div className={styles.parrafo}>
            <h1>RED DE ESPACIOS AUDIOVISUALES</h1>
            <p>
              La Red de Espacios Audiovisuales -REA- es una
              iniciativa que conecta espacios alternativos
              de exhibición cinematográfica, tanto privados
              como públicos, para ofrecer a la ciudadanía
              acceso a una programación diversa y de
              calidad. Esta red se presenta como una
              alternativa innovadora al circuito comercial
              de cine, promoviendo el uso de infraestructura
              cultural y fortaleciendo la colaboración entre
              gestores y usuarios del Banco de Contenidos.
            </p>
          </div>
        </main>
      </Section>
      <About />
      <Benefits />
      <Contact />
    </>
  )
}

export default Home