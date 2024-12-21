import React from 'react';
import { Hero } from '../components/home/Hero';
import { ColorTherapySection } from '../components/home/ColorTherapy/ColorTherapySection';
import { Categories } from '../components/home/Categories';
import { BestSelling } from '../components/home/BestSelling';
// import { NewArrivals } from '../components/home/NewArrivals';
import { VideoSection } from '../components/home/VideoSection';
import { Footer } from '../components/layout/Footer';

export function Home() {
  return (
    <>
      <main>
        <Hero />
        <ColorTherapySection />
        <Categories />
        <BestSelling />
        {/* <NewArrivals /> */}
        <VideoSection />
      </main>
      <Footer />
    </>
  );
}