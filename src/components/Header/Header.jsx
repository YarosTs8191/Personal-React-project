import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.header} ${styles.section}`}>
      <div className={`${styles.container} container`}>
        <a className={styles.logo} href="/">
          GreenWest
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#hero">Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="#services">Services</a>
            </li>
            <li className={styles.navItem}>
              <a href="#about">About</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <a className={styles.headerBtn} href="#contact">
          Get a quote
        </a>
      </div>
    </header>
  );
}

export default Header;
