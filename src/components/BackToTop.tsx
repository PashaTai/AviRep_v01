import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show button when user has scrolled 75% of the page
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      setIsVisible(scrollPercentage > 0.75);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 bottom-8 z-50 p-4 rounded-full bg-white shadow-lg 
        transition-all duration-300 hover:shadow-xl hover:transform hover:scale-110
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}`}
      aria-label="Вернуться к началу страницы"
    >
      <ChevronUp className="w-6 h-6 text-black" />
    </button>
  );
};

export default BackToTop;