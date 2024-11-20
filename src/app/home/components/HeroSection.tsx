import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.gradientBackground}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Revolutionize <span>Your Drying Process</span>
        </h1>
        <p className={styles.subtitle}>
          Enhance precision and efficiency with innovative drying solutions
          tailored to your needs.
        </p>
        <div className={styles.buttons}>
          <a href="/contact" className="btn btn-primary">
            Get Started
          </a>
          <a href="/learn-more" className="btn btn-outline">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
