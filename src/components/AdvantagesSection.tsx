import React from 'react';
import { Shield, Users, Pen, Globe, Lock, Zap } from 'lucide-react';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: <Pen className="w-8 h-8" />,
      title: 'Авторский подход',
      description: 'Профессиональные копирайтеры создают уникальные тексты с естественной лексикой'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Индивидуальность',
      description: 'Разрабатываем стратегию под конкретные задачи вашего бизнеса'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Человечность',
      description: 'Создаем органичные тексты без использования искусственного интеллекта'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Масштаб',
      description: 'Работаем с отечественными и международными площадками'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Прозрачность',
      description: 'Четкая смета и оплата только за достигнутые результаты'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Универсальность',
      description: 'Решения для частных лиц и компаний любого масштаба'
    }
  ];

  return (
    <section id="advantages" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-center mb-20">
          Преимущества, которые
          <br />
          говорят сами за себя
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl hover-scale"
              style={{
                animation: 'fadeIn 0.5s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="mb-6 text-accent">{advantage.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
              <p className="text-secondary text-lg">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;