import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero.jpg"
        alt="Dryer Master hero banner"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority={true}
      />
      <div className={styles.content}>
        <h1>Welcome to Dryer Master</h1>
        <p>Your trusted partner in optimizing drying processes.</p>
      </div>
    </section>
  );
};

export default HeroSection;
