import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <a className={styles.logo} href="/">
            GreenWest
          </a>

          <button
            className={styles.burgerButton}
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={openMenu}
          >
            ☰
          </button>
        </div>

        <nav className={styles.desktopNav} aria-label="Main navigation">
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

      {isOpen && (
        <div className={styles.backdrop} onClick={closeMenu}>
          <div
            className={styles.mobileMenu}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ✕
            </button>

            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              <ul className={styles.mobileNavList}>
                <li className={styles.navItem}>
                  <a href="#hero" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#services" onClick={closeMenu}>
                    Services
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#about" onClick={closeMenu}>
                    About
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#contact" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <a className={styles.mobileBtn} href="#contact" onClick={closeMenu}>
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
