import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.info}>
          <h3>Dryer Master</h3>
          <p>
            Helping optimize drying processes with advanced monitoring,
            real-time adjustments, and analytics in Kitchener and beyond.
          </p>
          <p>Address: 123 Main St, Kitchener, ON, N2H 5G5</p>
          <p>
            Email:{' '}
            <Link href="mailto:info@dryermaster.com">info@dryermaster.com</Link>
          </p>
          <p>
            Phone: <Link href="tel:+11234567890">(123) 456-7890</Link>
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className={styles.social}>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link href="https://facebook.com" target="_blank" rel="noopener">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank" rel="noopener">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" target="_blank" rel="noopener">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} Dryer Master. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
