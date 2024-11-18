import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dryer Master | Home',
  description:
    'Your trusted partner in optimizing drying processes with advanced monitoring, real-time adjustments, and detailed analytics.',
};
const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to Dryer Master!</p>
    </section>
  );
};

export default Home;
