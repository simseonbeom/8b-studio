import { useEffect } from 'react';
import { Contact } from './components/Contact';
import { Faq } from './components/Faq';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MobileCta } from './components/MobileCta';
import { Portfolio } from './components/Portfolio';
import { Problem } from './components/Problem';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { Services } from './components/Services';
import { Trust } from './components/Trust';
import { startReveal, startSmoothScroll } from './motion';

export default function App() {
  useEffect(() => {
    const stopScroll = startSmoothScroll();
    const stopReveal = startReveal();
    return () => {
      stopScroll();
      stopReveal();
    };
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Trust />
        <Problem />
        <Services />
        <Portfolio />
        <Process />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <MobileCta />
    </>
  );
}
