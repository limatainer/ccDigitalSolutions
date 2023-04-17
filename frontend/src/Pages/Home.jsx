import React from 'react';
import {
  Navbar,
  Hero,
  Feature,
  Article,
  Call,
  RealCase,
  ReturnToTopButton,
  Footer,
  Contato,
} from '../Components';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Call />
      <Article />
      <RealCase />
      <Contato />
      <ReturnToTopButton />
      <Footer />
    </>
  );
}
