import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import TechnologySection from './components/TechnologySection';
import Collections from './components/Collections';
import WatchLineup from './components/WatchLineup';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SpecialContent from './components/SpecialContent';
import RelevantVideo from './components/RelevantVideo';
import CelebrityLook from './components/CelebrityLook';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WatchLineup />
      <FeaturedProducts />
      <TechnologySection />
      <CelebrityLook />
      <Collections />
      <SpecialContent />
      <Newsletter />
      <RelevantVideo />
      <Footer />
    </div>
  );
}

export default App;