import MenuContainer from './MenuContainer'
import styles from './Header.module.css'
import logoRea from '../assets/icons/rea_logo_w.png'
import logoIFCI from '../assets/icons/logo_ifci.png'

const Header = () => {
  return (
    <header className={styles.Header}>
      <img
        className={styles.logo}
        src={logoRea}
        alt="REA"
      />
      <img
        className={styles.logo__ifci}
        src={logoIFCI}
        alt="IFCI"
      />
      <MenuContainer />
    </header>
  )
}

export default Header
