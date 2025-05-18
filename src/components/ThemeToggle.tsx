import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.style.setProperty('--primary', '#000000');
      html.style.setProperty('--secondary', '#86868b');
      html.style.setProperty('--background', '#fbfbfd');
      setIsDark(false);
    } else {
      html.style.setProperty('--primary', '#ffffff');
      html.style.setProperty('--secondary', '#a1a1a6');
      html.style.setProperty('--background', '#1d1d1f');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;