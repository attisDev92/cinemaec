import Section from '../../../components/Section'
import styles from '../Rea.module.css'

const About = () => {
  return (
    <div className={styles.About}>
      <Section id="about">
        <img
          className={styles.logo__rea}
          src="/assets/icons/rea_logo_w.png"
          alt="Red de Espacios Audiovisuales"
        />
        <h2>Acerca de Nosotros</h2>
        <p>
          En la Red de Espacios Audiovisuales, nos dedicamos
          a:
        </p>
        <ul>
          <li>
            Facilitamos el registro de espacios y miembros
            en el Banco de Contenidos del IFCI, articulando
            una red de espacios audiovisuales del sector
            público y privado.
          </li>
          <li>
            Apoyamos la difusión del cine ecuatoriano e
            iberoamericano, ofreciendo una plataforma para
            que estas producciones alcancen una audiencia
            más amplia. Colaboración Cultural: Trabajamos
            estrechamente con gestores culturales para
            maximizar el uso de espacios audiovisuales,
            impulsando la cultura cinematográfica en
            diversas comunidades.
          </li>
          <li>
            Formación de Públicos Críticos: Fomentamos la
            creación de públicos críticos y analíticos a
            través de la difusión de obras cinematográficas
            en espacios alternativos, asegurando el acceso a
            contenidos diversos y de calidad.
          </li>
        </ul>
      </Section>
    </div>
  )
}

export default About
