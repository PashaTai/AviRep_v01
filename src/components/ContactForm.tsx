import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contacts: '',
    companyName: '',
    platforms: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-headline text-center mb-6">Оставить заявку</h2>
        <p className="section-subheadline text-center mb-12">
          Заполните форму, и мы свяжемся с вами для обсуждения деталей
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="contacts" className="block text-sm font-medium mb-2">
              Контакты (телефон/e-mail, мессенджер)
            </label>
            <input
              type="text"
              id="contacts"
              name="contacts"
              value={formData.contacts}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium mb-2">
              Название компании
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="platforms" className="block text-sm font-medium mb-2">
              На каких площадках требуется работа
            </label>
            <input
              type="text"
              id="platforms"
              name="platforms"
              value={formData.platforms}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
              Дополнительная информация
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={4}
              className="input-field"
            ></textarea>
          </div>

          <button type="submit" className="button-primary w-full flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;