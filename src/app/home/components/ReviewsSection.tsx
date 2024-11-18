import React from 'react';
import styles from './ReviewsSection.module.css';

const reviews = [
  {
    name: 'John Doe',
    review:
      'Dryer Master has transformed our operations. The real-time monitoring is a game changer!',
  },
  {
    name: 'Jane Smith',
    review:
      'The automated adjustments have significantly improved our drying efficiency and product quality.',
  },
  {
    name: 'David Lee',
    review:
      'Their analytics tools give us the insights we need to make informed decisions.',
  },
];

const ReviewsSection = () => {
  return (
    <section className={styles.reviews}>
      <h2>What Our Clients Say</h2>
      <div className={styles.reviewList}>
        {reviews.map((review, index) => (
          <blockquote key={index} className={styles.review}>
            <p>{review.review}</p>
            <footer>- {review.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
