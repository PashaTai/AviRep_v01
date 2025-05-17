import React, { useState, useEffect } from 'react';
import { ChevronDown, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animatingStars, setAnimatingStars] = useState<number[]>([]);

  const texts = [
    'Мы специализируемся на управлении онлайн-репутацией (ORM) для бизнеса и частных лиц. Каждый отзыв — это история. Каждый клиент — это партнёр.',
    'Пишем качественные, реалистичные отзывы, выводим негатив из поисковой выдачи, помогаем бренду сформировать положительное информационное поле в интернете.'
  ];

  useEffect(() => {
    // Text rotation effect
    const textInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setTextIndex(current => (current === 0 ? 1 : 0));
        setIsTransitioning(false);
      }, 500);
    }, 10000);

    // Star wave animation
    const startWaveAnimation = () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          setAnimatingStars(prev => [...prev, i]);
          // Remove the star from animation after it completes
          setTimeout(() => {
            setAnimatingStars(prev => prev.filter(star => star !== i));
          }, 300);
        }, i * 100);
      }
    };

    // Start wave animation every 5 seconds
    const waveInterval = setInterval(() => {
      startWaveAnimation();
    }, 5000);

    // Initial wave animation
    startWaveAnimation();

    return () => {
      clearInterval(textInterval);
      clearInterval(waveInterval);
    };
  }, []);

  const companyLogos = [
    {
      name: 'Яндекс',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Yandex_logo_ru.svg',
      width: 120,
      loading: "lazy"
    },
    {
      name: 'Google',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      width: 120,
      loading: "lazy"
    },
    {
      name: '2GIS',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/2GIS_logo.svg/2560px-2GIS_logo.svg.png',
      width: 80,
      loading: "lazy"
    },
    {
      name: 'Авито',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Avito_logo.svg/2560px-Avito_logo.svg.png',
      width: 100,
      loading: "lazy"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Company Logos */}
        <div 
          className="flex justify-center items-center gap-8 mb-12 flex-wrap"
          style={{
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.1s',
            opacity: 0
          }}
        >
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.url}
              alt={logo.name}
              width={logo.width}
              height={logo.width * 0.3}
              loading={logo.loading}
              style={{ 
                width: logo.width,
                height: 'auto',
                animation: 'fadeIn 0.5s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            />
          ))}
        </div>

        {/* Animated Stars */}
        <div className="flex justify-center gap-2 mb-12">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-8 h-8 text-yellow-400 fill-yellow-400 transition-transform duration-300`}
              style={{
                transform: animatingStars.includes(index) ? 'translateY(-20px)' : 'translateY(0)',
              }}
            />
          ))}
        </div>

        <h1 className="section-headline mb-8 fade-in">
          Управление
          <br />
          репутацией в интернете
        </h1>
        
        <p 
          className="section-subheadline mb-12 max-w-3xl mx-auto"
          style={{
            opacity: isTransitioning ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          {texts[textIndex]}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in" style={{animationDelay: '0.4s'}}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="button-primary"
            aria-label="Начать сотрудничество"
          >
            Начать сейчас
          </button>
          <button 
            onClick={() => document.getElementById('advantages')?.scrollIntoView({ behavior: 'smooth' })} 
            className="button-secondary"
            aria-label="Узнать о преимуществах"
          >
            Узнать больше
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" aria-hidden="true" />
      </div>
    </section>
  );
};

export default HeroSection;