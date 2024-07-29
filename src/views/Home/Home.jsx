import Section from '../../components/Section'
import About from './components/About'
import styles from './Home.module.css'
import videoRea from '../../../public/assets/videos/presentacionREA.mp4'
import Contact from '../../components/Contact'

const Home = () => {
  return (
    <>
      <Section id="home">
        <div className={styles.Home}>
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
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Delectus necessitatibus,
              voluptatibus dolorum ipsum asperiores sapiente
              perferendis deleniti alias odit eum similique,
              possimus ullam ab eos nostrum aperiam ratione.
              Fugit, voluptatibus? Lorem ipsum dolor, sit
              amet consectetur adipisicing elit.
              Perspiciatis sequi impedit facere vitae
              nostrum alias nemo labore aliquid recusandae
              iure! Consectetur omnis necessitatibus, non
              est odio quibusdam nemo doloremque nisi!
            </p>
          </div>
        </div>
      </Section>
      <About />
      <Contact />
    </>
  )
}

export default Home
