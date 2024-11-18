import React from 'react';
import Image from 'next/image';
import styles from './FeaturesSection.module.css';

const features = [
  {
    title: 'Real-Time Monitoring',
    description:
      'Keep track of your drying processes with cutting-edge sensors and control systems.',
    image: '/images/solutions/real-time-monitoring.jpg',
  },
  {
    title: 'Automated Adjustments',
    description:
      'Our systems automatically adjust parameters to optimize efficiency and product quality.',
    image: '/images/solutions/automated-adjustments.jpg',
  },
  {
    title: 'Detailed Analytics',
    description:
      'Gain insights from comprehensive analytics to make data-driven decisions.',
    image: '/images/solutions/detailed-analytics.jpg',
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <article key={index} className={styles.feature}>
            <Image
              src={feature.image}
              alt={feature.title}
              width={300}
              height={200}
              quality={85}
            />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
