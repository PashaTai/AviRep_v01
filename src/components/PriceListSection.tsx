import React from 'react';
import { MapPin, MessageSquare, ShoppingBag, Globe, Shield } from 'lucide-react';

const PriceListSection: React.FC = () => {
  const categories = [
    {
      title: 'Геосервисы',
      icon: <MapPin className="w-8 h-8" />,
      services: [
        { name: 'Яндекс Карты', price: '600 ₽' },
        { name: 'Google Карты', price: '600 ₽' },
        { name: '2ГИС', price: '350 ₽' },
      ]
    },
    {
      title: 'Отзывики компаний',
      icon: <MessageSquare className="w-8 h-8" />,
      services: [
        { name: 'Otzovik.com', price: '1100 ₽' },
        { name: 'Irecommend.ru', price: '1100 ₽' },
        { name: 'Flamp.ru', price: '350 ₽' },
      ]
    },
    {
      title: 'Отзывики услуг и товаров',
      icon: <ShoppingBag className="w-8 h-8" />,
      services: [
        { name: 'Яндекс Услуги', price: '600 ₽' },
        { name: 'Prodoctorov.ru', price: '1100 ₽' },
        { name: 'Авито', price: '650 ₽' },
        { name: 'Яндекс Маркет', price: '600 ₽' },
      ]
    },
    {
      title: 'Специальные услуги',
      icon: <Globe className="w-8 h-8" />,
      services: [
        { name: 'Отзывы с выкупом товара', price: '1100 ₽' },
        { name: 'Иностранные площадки', price: 'от 400 ₽' },
        { name: 'Создание соцсетей (LinkedIn и др.)', price: 'от 6000 ₽' },
        { name: 'Создание иностранных соцсетей', price: 'от 1100 ₽' },
        { name: 'Удаление негатива из поиска', price: 'от 35 000 ₽' },
        { name: 'Обжалование', price: '400 ₽' },
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="prices" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-center mb-20"> ORM Прайс-лист</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gray-50 hover-scale flex flex-col"
              style={{
                animation: 'fadeIn 0.5s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-accent">{category.icon}</div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4 flex-grow">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <span className="text-gray-800 pr-3">{service.name}</span>
                    <span className="font-medium text-accent whitespace-nowrap">{service.price}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className="mt-8 w-full button-primary"
              >
                Заказать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;