import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">Dryer Master</Link>
        </div>
        {/* Hidden checkbox for toggling menu */}
        <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
        <label htmlFor="menu-toggle" className={styles.hamburger}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </label>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
