import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const SermReputationSection: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const quotes = [
    'Цифровая репутация — это валюта будущего. Как не обесцениться',
    'Почему негатив в интернете никогда не исчезает сам — и как его обогнать'
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setQuoteIndex(current => (current === 0 ? 1 : 0));
        setIsTransitioning(false);
      }, 500);
    }, 8000);

    return () => clearInterval(quoteInterval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-headline mb-6">
          SERM Репутация персон
        </h2>
        <p className="section-subheadline mb-16 max-w-3xl mx-auto">
          Построение Цифрового профиля в Яндекс и Google
        </p>

        {/* Animated Quote */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative">
            <Quote className="w-16 h-16 text-accent mx-auto mb-8 opacity-20" />
            <blockquote 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-primary italic transition-all duration-500"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)'
              }}
            >
              {quotes[quoteIndex]}
            </blockquote>
          </div>
        </div>

        {/* CTA Button */}
        <div className="fade-in" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={scrollToContact}
            className="button-primary text-lg px-12 py-5"
            aria-label="Обсудить проект по управлению репутацией"
          >
            Обсудить проект
          </button>
        </div>
      </div>
    </section>
  );
};

export default SermReputationSection;