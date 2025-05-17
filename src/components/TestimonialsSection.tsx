import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: 'Заказывал здесь улучшение репутации — помогли быстро и грамотно. Ребята сами сделали аудит, подсказали, где лучше разместиться. Через месяц увидел реальные изменения: в поиске стало больше положительных отзывов, звонки участились. Работают честно и прозрачно.',
      author: 'Александр М.',
      position: 'Владелец автосервиса',
      rating: 5
    },
    {
      content: 'Спасибо за качественную работу. Проблема была с отзывами на irecommend и otzovik, помогли красиво закрыть негатив и вытянуть позиции вверх. Чувствуется, что работают не на потоке, а с подходом.',
      author: 'Максим К.',
      position: 'Владелец интернет-магазина',
      rating: 5
    },
    {
      content: 'Заказала продвижение на 2ГИС, Flamp и Google. Сначала скептически относилась, но потом увидела, как изменилась картина — репутация реально стала лучше. И главное, не просто на словах, а в поиске.',
      author: 'Наталья Г.',
      position: 'Сфера недвижимости',
      rating: 5
    },
    {
      content: 'Обратилась за восстановлением репутации после негативной статьи в интернете. Всё сделали аккуратно, негатив ушёл. Спасибо!',
      author: 'Елена К.',
      position: 'Репетитор',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-center mb-20">
          Отзывы клиентов
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gray-50 flex flex-col justify-between hover-scale min-h-[320px]"
              style={{
                animation: 'fadeIn 0.5s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6">{testimonial.content}</p>
              </div>
              
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-secondary">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;