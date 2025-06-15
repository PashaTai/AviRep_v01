import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/Logo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Get all sections
      const sections = ['advantages', 'prices', 'guarantees', 'testimonials', 'contact'];
      
      // Find the current section
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Add some offset to account for the header height
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger fade-in animation after component mount
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigateToPage = (path: string) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  const NavLink = ({ id, text, isExternal = false }: { id: string; text: string; isExternal?: boolean }) => {
    const isCurrentPage = window.location.pathname === '/' && !isExternal;
    const isActive = isCurrentPage && activeSection === id;
    
    return (
      <button 
        onClick={() => isExternal ? navigateToPage(id) : scrollToSection(id)}
        className={`transition-colors ${
          isActive 
            ? 'text-[#ff2d55] font-medium' 
            : 'text-primary hover:text-[#ff2d55]'
        }`}
        aria-label={isExternal ? `Перейти на страницу ${text}` : `Перейти к разделу ${text}`}
      >
        {text}
      </button>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div 
            className={`flex items-center gap-3 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <a href="/">
              <img 
                src={logo} 
                alt="Avi Reputation Logo" 
                className="w-auto transition-all duration-300"
                style={{
                  height: isScrolled ? '3rem' : '4.5rem',
                  '@media (min-width: 640px)': {
                    height: isScrolled ? '3.5rem' : '5.5rem',
                  },
                  '@media (min-width: 768px)': {
                    height: isScrolled ? '4rem' : '6.5rem',
                  },
                  '@media (min-width: 1024px)': {
                    height: isScrolled ? '4.5rem' : '7.5rem',
                  }
                }}
              />
            </a>
          </div>
          
          <nav className={`hidden md:block transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink id="advantages" text="Преимущества" />
              </li>
              <li>
                <NavLink id="prices" text="Цены" />
              </li>
              <li>
                <NavLink id="guarantees" text="Гарантии" />
              </li>
              <li>
                <NavLink id="testimonials" text="Отзывы" />
              </li>
              <li>
                <NavLink id="/blog" text="Блог" isExternal={true} />
              </li>
              <li>
                <button 
                  onClick={() => window.location.pathname === '/' ? scrollToSection('contact') : navigateToPage('/#contact')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === 'contact' 
                      ? 'bg-accent text-white hover:bg-opacity-90'
                      : 'bg-black text-white hover:bg-[#ff2d55]'
                  }`}
                  aria-label="Связаться с нами"
                >
                  Связаться
                </button>
              </li>
            </ul>
          </nav>
          
          <button 
            className={`md:hidden text-primary focus:outline-none transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden glass-effect">
          <ul className="py-4 px-6 space-y-4">
            <li>
              <NavLink id="advantages" text="Преимущества" />
            </li>
            <li>
              <NavLink id="prices" text="Цены" />
            </li>
            <li>
              <NavLink id="guarantees" text="Гарантии" />
            </li>
            <li>
              <NavLink id="testimonials" text="Отзывы" />
            </li>
            <li>
              <NavLink id="/blog" text="Блог" isExternal={true} />
            </li>
            <li>
              <button 
                onClick={() => window.location.pathname === '/' ? scrollToSection('contact') : navigateToPage('/#contact')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 w-full ${
                  activeSection === 'contact' 
                    ? 'bg-accent text-white hover:bg-opacity-90'
                    : 'bg-black text-white hover:bg-[#ff2d55]'
                }`}
                aria-label="Связаться с нами"
              >
                Связаться
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;