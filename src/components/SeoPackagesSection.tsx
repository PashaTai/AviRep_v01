import React, { useState } from 'react';
import { CheckCircle2, XCircle, Shield, Globe2, Zap, Sparkles } from 'lucide-react';

const SeoPackagesSection: React.FC = () => {
  const [isPackageMode, setIsPackageMode] = useState(true);

  const packages = [
    {
      name: 'Базовый',
      description: 'Идеально для новых сайтов и малого бизнеса, которые хотят заложить прочный SEO-фундамент.',
      tokens: 'SEO-оптимизация + контент',
      packagePrice: '109 000',
      separatePrice: '123 000',
      services: [
        { name: 'Комплексная SEO-оптимизация сайта', included: true },
        { name: 'Написание и SEO-оптимизация блог-постов (2 шт.)', included: true },
        { name: 'Ссылочное продвижение', included: false },
        { name: 'Поведенческие факторы в Яндекс', included: false },
        { name: 'SERM публикации', included: false },
        { name: 'Создание SEO-лендинга', included: false }
      ],
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: 'Оптимальный',
      description: 'Для развивающегося бизнеса, готового к значительному улучшению SEO-показателей.',
      tokens: 'Комплексное продвижение',
      packagePrice: '149 000',
      separatePrice: '168 000',
      popular: true,
      services: [
        { name: 'Комплексная SEO-оптимизация сайта', included: true },
        { name: 'Написание и SEO-оптимизация блог-постов (4 шт.)', included: true },
        { name: 'Ссылочное продвижение', included: true },
        { name: 'Поведенческие факторы в Яндекс', included: true },
        { name: 'SERM публикации', included: false },
        { name: 'Создание SEO-лендинга', included: false }
      ],
      icon: <Globe2 className="w-8 h-8" />
    },
    {
      name: 'Максимальный',
      description: 'Для амбициозных компаний, нацеленных на лидерство в высококонкурентных нишах.',
      tokens: 'Полное доминирование + SERM',
      packagePrice: '479 000',
      separatePrice: '518 000',
      services: [
        { name: 'Комплексная SEO-оптимизация сайта', included: true },
        { name: 'Написание и SEO-оптимизация блог-постов (8 шт.)', included: true },
        { name: 'Ссылочное продвижение', included: true },
        { name: 'Поведенческие факторы в Яндекс', included: true },
        { name: 'SERM публикации', included: true },
        { name: 'Создание SEO-лендинга', included: true }
      ],
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-center mb-6">SEO Продвижение</h2>
        <p className="section-subheadline text-center mb-16">
          Выберите подходящий пакет услуг для вашего проекта
        </p>

        <div className="flex justify-center items-center gap-6 mb-16">
          <span className={`text-lg ${!isPackageMode ? 'text-accent font-medium' : 'text-secondary'}`}>
            Отдельные услуги
          </span>
          <button
            onClick={() => setIsPackageMode(!isPackageMode)}
            className="relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none"
            style={{ backgroundColor: isPackageMode ? 'var(--accent)' : '#333' }}
            aria-label={isPackageMode ? 'Переключить на отдельные услуги' : 'Переключить на пакеты со скидкой'}
          >
            <div
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300"
              style={{ transform: isPackageMode ? 'translateX(32px)' : 'translateX(0)' }}
            />
          </button>
          <span className={`text-lg ${isPackageMode ? 'text-accent font-medium' : 'text-secondary'}`}>
            Пакеты со скидкой
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 hover-scale relative flex flex-col ${
                pkg.popular ? 'border-2 border-accent' : ''
              }`}
              style={{
                animation: 'fadeIn 0.5s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                height: '100%'
              }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-6 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </div>
              )}

              <div className="text-accent mb-6">{pkg.icon}</div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                <div className="text-accent font-medium mb-2">{pkg.tokens}</div>
                <p className="text-secondary text-sm">{pkg.description}</p>
              </div>

              <div className="mb-8">
                {isPackageMode && (
                  <div className="text-secondary line-through text-lg mb-1">
                    {pkg.separatePrice} ₽
                  </div>
                )}
                <div className="text-4xl font-bold mb-2">
                  {isPackageMode ? pkg.packagePrice : pkg.separatePrice} ₽
                </div>
                <div className="text-secondary text-sm">Единоразово</div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {pkg.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-3">
                      {service.included ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={service.included ? 'text-primary' : 'text-secondary'}>
                        {service.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={scrollToContact}
                  className={`w-full ${
                    pkg.popular
                      ? 'button-primary'
                      : 'button-secondary'
                  }`}
                >
                  {isPackageMode ? 'Заказать пакет' : 'Заказать услуги'}
                </button>
              </div>
            </div>
          ))}

          {/* Custom Package Card */}
          <div
            className="bg-white rounded-2xl p-8 hover-scale flex flex-col"
            style={{
              animation: 'fadeIn 0.5s ease-out forwards',
              animationDelay: '0.4s',
              opacity: 0,
              height: '100%'
            }}
          >
            <div className="text-accent mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Индивидуальный</h3>
              <div className="text-accent font-medium mb-2">Персональное решение</div>
              <p className="text-secondary text-sm">
                Создадим уникальный пакет услуг под ваши конкретные задачи и бюджет.
              </p>
            </div>

            <div className="flex-grow">
              <div className="text-center">
                <div className="text-2xl font-bold mb-4">
                  Не подходит ни один из готовых вариантов?
                </div>
                <p className="text-secondary">
                  Мы внимательно изучим ваш проект, проанализируем конкурентов и составим персональное предложение с оптимальным набором услуг.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button onClick={scrollToContact} className="button-primary w-full">
                Обсудить проект
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoPackagesSection;