import styles from './Header.module.css'
import Menu from './Menu'

const Header = () => {
  return (
    <header className={styles.Header}>
      <img
        className={styles.logo}
        src="/assets/icons/rea_logo_w.png"
        alt="REA"
      />
      <img
        className={styles.logo__ifci}
        src="/assets/icons/logo_ifci.png"
        alt="IFCI"
      />
      <Menu />
    </header>
  )
}

export default Header
