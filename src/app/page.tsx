import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dryer Master | Home',
  description: '',
};
const Home = () => {
  return (
    <section>
      <h1>Welcome to Dryer Master</h1>
      <p>This is the homepage of Dryer Master</p>
    </section>
  );
};

export default Home;
