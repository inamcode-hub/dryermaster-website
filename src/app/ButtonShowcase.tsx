// app/components/ButtonShowcase.tsx
import React from 'react';
import styles from './ButtonShowcase.module.css';

const ButtonShowcase = () => {
  return (
    <div className={styles.showcaseContainer}>
      <h1 className={styles.title}>Button Showcase</h1>
      <div className={styles.buttonGrid}>
        <button className="btn active">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-outline">Outline Button</button>
        <button className="btn btn-warning">Warning Button</button>
        <button className="btn btn-success">Success Button</button>
        <button className="btn" disabled>
          Disabled Button
        </button>
        <button className="btn btn-small">Small Button</button>
        <button className="btn btn-medium">Medium Button</button>
        <button className="btn btn-large">Large Button</button>
        <button className="btn btn-block">Block Button</button>
        <button className="btn btn-icon">
          <i className="icon-example" /> Button with Icon
        </button>
      </div>
    </div>
  );
};

export default ButtonShowcase;
