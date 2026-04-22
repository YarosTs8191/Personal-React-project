import { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header() {
  // State to track mobile menu open/close status

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu on Escape key press

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Prevent background scrolling when mobile menu is open

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContainer}>
          <div className={styles.topBar}>
            <a className={styles.logo} href="#hero">
              GreenWest
            </a>

            <button
              className={styles.burgerButton}
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
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
                <a href="#projects">Projects</a>
              </li>
              <li className={styles.navItem}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <a className={styles.headerBtn} href="#contact">
            Request a quote
          </a>
        </div>
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
                  <a href="#projects" onClick={closeMenu}>
                    Projects
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
