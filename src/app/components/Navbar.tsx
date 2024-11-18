'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';

const Navbar = ({ initialPath }: { initialPath: string }) => {
  const pathname = usePathname() || initialPath;
  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
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

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.active : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
