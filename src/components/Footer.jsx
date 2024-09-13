import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import SocialSpeedDial from './SocialSpeedDial'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul>
        <p>Secciones:</p>
        <li>
          <Link className={styles.link} to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={'/about'}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={'/galery'}>
            Banco de Contenidos
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={'/register'}>
            Home
          </Link>
        </li>
      </ul>
      <div className={styles.reference}>
        <a
          href="/assets/downloads/IFCI-DE-2023-0024-R.pdf"
          target="_blank"
        >
          Reglamento Red de Espacios Audiovisuales
        </a>
        <a
          href="https://www.creatividad.gob.ec"
          target="_blank"
        >
          Instituto de Fomento a la Creatividad y la
          Innovación
        </a>
      </div>
      <div className={styles.logos__container}>
        <div className={styles.logo}>
          <img
            src="/assets/icons/rea_logo_w.png"
            alt="REA"
          />
        </div>
        <div className={styles.logo}>
          <img
            src="/assets/icons/logo_ifci.png"
            alt="IFCI"
          />
        </div>
      </div>
      <SocialSpeedDial />
    </footer>
  )
}

export default Footer
