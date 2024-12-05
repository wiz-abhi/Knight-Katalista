import React from 'react';
import { Hero } from '../components/home/Hero';
import { Categories } from '../components/home/Categories';
import { BestSelling } from '../components/home/BestSelling';
import { NewArrivals } from '../components/home/NewArrivals';
import { Footer } from '../components/layout/Footer';

export function Home() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <BestSelling />
        <NewArrivals />
      </main>
      <Footer />
    </>
  );
}