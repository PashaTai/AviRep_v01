import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import PriceListSection from './components/PriceListSection';
import SeoPackagesSection from './components/SeoPackagesSection';
import InternationalSection from './components/InternationalSection';
import ProcessSection from './components/ProcessSection';
import GuaranteesSection from './components/GuaranteesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    document.title = 'Avi Reputation - Управление онлайн-репутацией';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <PriceListSection />
        <SeoPackagesSection />
        <InternationalSection />
        <ProcessSection />
        <GuaranteesSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App