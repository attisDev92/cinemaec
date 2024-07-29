import MenuContainer from './MenuContainer'
import styles from './Header.module.css'
import logoRea from '../../public/assets/icons/rea_logo_w.png'

const Header = () => {
  return (
    <header className={styles.Header}>
      <img
        className={styles.logo}
        src={logoRea}
        alt="REA"
      />
      <MenuContainer />
    </header>
  )
}

export default Header
