import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import Newsletterbox from '../components/Newsletterbox';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <Newsletterbox/>
      <Footer/>
    </div>
  )
}

export default Home;
