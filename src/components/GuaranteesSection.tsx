import React from 'react';
import { Shield, AlertCircle, CheckCircle2, FileText, MessageSquare, Users } from 'lucide-react';

const GuaranteesSection: React.FC = () => {
  return (
    <section id="guarantees" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-center mb-20">Наши гарантии</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white hover-scale">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="w-10 h-10 text-accent" />
              <h3 className="text-2xl font-semibold">Гарантия результата</h3>
            </div>
            
            <p className="text-secondary mb-6">
              Если в течение 30 дней после публикации отзыв будет удален, мы:
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  1
                </div>
                <span>Бесплатно опубликуем новый материал</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  2
                </div>
                <span>Полностью возместим стоимость удаленного контента</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 rounded-2xl bg-white hover-scale">
            <div className="flex items-center gap-4 mb-8">
              <AlertCircle className="w-10 h-10 text-accent" />
              <h3 className="text-2xl font-semibold">Процедура обжалования</h3>
            </div>
            
            <p className="text-secondary mb-6">
              При обнаружении нарушений в негативных отзывах мы инициируем процесс обжалования с использованием:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FileText className="w-6 h-6 text-black" />
                <span>Юридически выверенных формулировок</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-black" />
                <span>Аргументированного изложения нарушенных правил</span>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquare className="w-6 h-6 text-black" />
                <span>Технических методов коммуникации с модераторами</span>
              </li>
              <li className="flex items-center gap-4">
                <Users className="w-6 h-6 text-black" />
                <span>Официальных обращений от лица клиентов</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;