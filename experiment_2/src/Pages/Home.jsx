import React from 'react';
import HeroSection from '../Components/HeroSection';
import CardComponent from '../Components/CardComponent';

function Home() {
  return (
    <div className="container mt-4">
      <HeroSection />
      <CardComponent title="First Blog Post" text="This is the first blog post example." />
      <CardComponent title="Second Blog Post" text="Another blog post to show layout." />
      <CardComponent title="Third Blog Post" text="Yet another entry for practice." />
    </div>
  );
}

export default Home;
