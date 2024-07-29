import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FloatButton } from 'antd'
import {
  InfoCircleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
import logoREA from '../../public/assets/icons/rea_logo_w.png'
import logoIFCI from '../../public/assets/icons/logo_ifci.png'

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
        <a>Reglamento Red de Espacios Audiovisuales</a>
        <a>
          Instituto de Fomento a la Creatividad y la
          Innovación
        </a>
        <p>Desarrollado por AttisDev92</p>
      </div>
      <div className={styles.logos__container}>
        <div className={styles.logo}>
          <img src={logoREA} alt="REA" />
        </div>
        <div className={styles.logo}>
          <img src={logoIFCI} alt="IFCI" />
        </div>
      </div>
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{
          right: 94,
        }}
        icon={<InfoCircleOutlined />}
      >
        <FloatButton
          target="_blank"
          href="https://www.facebook.com/Creatividad.Ec"
          icon={<FacebookOutlined />}
        />
        <FloatButton
          target="_blank"
          href="https://www.instagram.com/creatividad_ec/?hl=es"
          icon={<InstagramOutlined />}
        />
        <FloatButton
          target="_blank"
          href="https://maps.app.goo.gl/WRSKKHGnx3HxgfRK9"
          icon={<EnvironmentOutlined />}
        />
      </FloatButton.Group>
    </footer>
  )
}

export default Footer
