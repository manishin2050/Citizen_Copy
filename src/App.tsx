import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WatchLineup from './components/WatchLineup';
import FeaturedProducts from './components/FeaturedProducts';
import TechnologySection from './components/TechnologySection';
import Craftsmanship from './components/Craftsmanship';
import CelebrityLook from './components/CelebrityLook';
import VideoShowcase from './components/VideoShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <WatchLineup />
      <FeaturedProducts />
      <TechnologySection />
      <VideoShowcase />
      <CelebrityLook />
      <Craftsmanship />
      <Footer />
    </div>
  );
}

export default App;