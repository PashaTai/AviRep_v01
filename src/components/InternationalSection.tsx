import React from 'react';
import { CheckCircle2, Linkedin, Globe2, Palette, Star } from 'lucide-react';

const InternationalSection: React.FC = () => {
  const platforms = [
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" /> },
    { name: 'Xing', icon: <Globe2 className="w-6 h-6" /> },
    { name: 'Behance / Dribbble', icon: <Palette className="w-6 h-6" /> },
    { name: 'Trustpilot / Sitejabber', icon: <Star className="w-6 h-6" /> }
  ];

  const benefits = [
    'Создание аутентичного профиля с нуля или восстановление заблокированного аккаунта',
    'Профессиональное оформление личной страницы или бизнес-аккаунта',
    'Формирование экспертного позиционирования и положительного имиджа',
    'Получение рекомендаций от реальных профессионалов отрасли'
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-center mb-6">
          Международное продвижение
        </h2>
        <p className="section-subheadline text-center mb-16 max-w-3xl mx-auto">
          Создаем профессиональный имидж на международных платформах
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-gray-50 hover-scale"
                  style={{
                    animation: 'fadeIn 0.5s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="text-accent mb-4">{platform.icon}</div>
                  <p className="font-medium">{platform.name}</p>
                </div>
              ))}
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Почему это важно?</h3>
              <p className="text-secondary">
                Профессиональный профиль в LinkedIn становится обязательным элементом деловой репутации. 
                Это первое, что анализируют потенциальные партнеры, заказчики и рекрутеры по всему миру.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover-scale"
                style={{
                  animation: 'fadeIn 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="text-accent">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;