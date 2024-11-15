import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dryer Master | Home',
  description: '',
};
const Home = () => {
  return (
    <section>
      <div className="container">
        <header>
          <h1>Welcome to Dryer Master</h1>
          <p>
            Your trusted partner in optimizing drying processes with advanced
            monitoring, real-time adjustments, and detailed analytics.
          </p>
        </header>

        <section className="typography-demo">
          <h2>Typography Demonstration</h2>
          <h3>Headings</h3>
          <p>
            This is an example of how headings (`h1` through `h6`) look when
            styled using the global typography settings.
          </p>
          <h1>Heading Level 1</h1>
          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <h5>Heading Level 5</h5>
          <h6>Heading Level 6</h6>

          <h3>Paragraphs</h3>
          <p>
            This is a paragraph of text designed to demonstrate the default
            styling of `p` elements. It includes proper spacing, line height,
            and maximum width for readability. Adjustments are made for small
            and large devices to ensure consistent appearance.
          </p>

          <h3>Lists</h3>
          <ul>
            <li>List Item 1: Advanced Monitoring</li>
            <li>List Item 2: Real-Time Adjustments</li>
            <li>List Item 3: Detailed Analytics</li>
          </ul>
          <ol>
            <li>Ordered Item 1: Setup Your Dryer</li>
            <li>Ordered Item 2: Optimize Drying</li>
            <li>Ordered Item 3: Review Analytics</li>
          </ol>

          <h3>Blockquotes</h3>
          <blockquote>
            "Efficiency is doing things right; effectiveness is doing the right
            things."
            <footer>— Peter Drucker</footer>
          </blockquote>

          <h3>Small Text</h3>
          <p>
            This is an example of <small>small text</small>, often used for
            captions or disclaimers.
          </p>
        </section>

        <footer>
          <p>
            Want to know more? Visit our <a href="/about">About</a> page or
            check out our <a href="/contact">Contact</a> information.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Home;
