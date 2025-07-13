import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import DownloadCTA from '../components/DownloadCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <DownloadCTA />
    </>
  );
};

export default Home;