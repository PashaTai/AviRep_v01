import React from 'react';
import { ClipboardList, BarChart2, PenTool, Send, LineChart } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: 'Консультация',
      description: 'Анализируем вашу ситуацию и определяем цели'
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: 'Стратегия',
      description: 'Разрабатываем индивидуальный план действий'
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Создание',
      description: 'Пишем уникальные тексты и согласовываем с вами'
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: 'Реализация',
      description: 'Размещаем материалы по оптимальному графику'
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Мониторинг',
      description: 'Отслеживаем эффективность и предоставляем отчетность'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-center mb-20">
          Этапы сотрудничества
        </h2>
        
        <div className="relative">          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center"
                style={{
                  animation: 'fadeIn 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="bg-white p-6 rounded-full shadow-lg mb-6 relative z-10">
                  <div className="text-accent">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;