import React from 'react';
import HeroSection from '@/app/home/components/HeroSection';
import FeaturesSection from '@/app/home/components/FeaturesSection';
import ReviewsSection from '@/app/home/components/ReviewsSection';

export const metadata = {
  title: 'Dryer Master | Home',
  description:
    'Your trusted partner in optimizing drying processes with advanced monitoring, real-time adjustments, and detailed analytics.',
};

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ReviewsSection />
    </main>
  );
};

export default Home;
