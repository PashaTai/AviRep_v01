import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishDate: string;
  readTime: string;
  author: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '3',
      title: 'Управление репутацией в Смоленске: как мы привели 100 клиентов в студию маникюра без рекламы',
      excerpt: 'Реальный кейс из Смоленска: как правильная работа с репутацией помогла студии красоты привлечь 100+ новых клиентов за месяц без рекламного бюджета.',
      content: '',
      slug: 'upravlenie-reputaciej-smolensk-studiya-manikyura',
      publishDate: '2025-06-22',
      readTime: '7 мин',
      author: 'Владимир Иванов',
      tags: ['Кейс', 'Смоленск', 'Управление репутацией', 'Локальный бизнес'],
      metaTitle: 'Управление репутацией в Смоленске: кейс студии маникюра — 100 клиентов без рекламы | AVIREPUTATION',
      metaDescription: 'Реальный кейс управления репутацией в Смоленске: как мы привели 100+ клиентов в студию маникюра за месяц без рекламного бюджета. ORM и SERM для локального бизнеса.'
    },
    {
      id: '2',
      title: 'Управление репутацией: Как мы увеличили лиды с 40 до 120 заявок в месяц, улучшив онлайн репутацию стоматологии',
      excerpt: 'Реальный кейс: как правильная работа с отзывами и репутацией помогла стоматологии увеличить поток пациентов на 200% без дополнительных затрат на рекламу.',
      content: '',
      slug: 'upravlenie-reputaciej-stomatologii-kejs',
      publishDate: '2025-01-15',
      readTime: '8 мин',
      author: 'Владимир Иванов',
      tags: ['Кейс', 'Стоматология', 'Управление репутацией', 'Лиды'],
      metaTitle: 'Управление репутацией в интернете: как увеличить лиды стоматологии с 40 до 120 заявок | AVIREPUTATION',
      metaDescription: 'Управление репутацией компании в интернете для медицинских клиник. Реальный кейс: увеличение потока пациентов на 200% через работу с отзывами и рейтингами.'
    },
    {
      id: '1',
      title: 'Почему важно контролировать информацию о вас в интернете',
      excerpt: 'Сегодня цифровой профиль — это не просто имидж, а важный фактор, который влияет на бизнес и личные возможности.',
      content: '',
      slug: 'pochemu-vazhno-kontrolirovat-informatsiyu-o-vas-v-internete',
      publishDate: '2025-06-15',
      readTime: '5 мин',
      author: 'Владимир Иванов',
      tags: ['Управление репутацией', 'Цифровой профиль', 'Комплаенс'],
      metaTitle: 'Почему важно контролировать информацию о вас в интернете | Avi Reputation',
      metaDescription: 'Узнайте, как цифровой профиль влияет на бизнес и личные возможности. Советы по управлению репутацией в интернете от экспертов Avi Reputation.'
    }
  ];

  const navigateToHome = () => {
    window.location.href = '/#contact';
  };

  useEffect(() => {
  // Update page title
  document.title = 'Блог | Avi Reputation';
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Экспертные статьи о управлении репутацией, SEO и цифровом маркетинге от специалистов Avi Reputation');
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Экспертные статьи о управлении репутацией, SEO и цифровом маркетинге от специалистов Avi Reputation');
    document.head.appendChild(metaDescription);
  }
  
  // Add canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', 'https://www.avireputation.ru/blog');
  } else {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.avireputation.ru/blog');
    document.head.appendChild(canonicalLink);
  }
}, []);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-8" aria-label="Хлебные крошки">
          <ol className="flex items-center space-x-2 text-sm text-secondary">
            <li>
              <a href="/" className="hover:text-accent transition-colors">Главная</a>
            </li>
            <li className="flex items-center">
              <ArrowRight className="w-4 h-4 mx-2" />
              <span className="text-primary font-medium">Блог</span>
            </li>
          </ol>
        </nav>

        <div className="text-center mb-16">
          <h1 className="section-headline mb-6">Блог</h1>
          <p className="section-subheadline max-w-3xl mx-auto">
            Экспертные статьи о управлении репутацией, SEO и цифровом маркетинге
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="bg-gray-50 rounded-2xl p-8 hover-scale"
                  style={{
                    animation: 'fadeIn 0.5s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="flex items-center gap-4 text-sm text-secondary mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('ru-RU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold mb-4 hover:text-accent transition-colors">
                    <a href={`/blog/${post.slug}`}>
                      {post.title}
                    </a>
                  </h2>

                  <p className="text-secondary mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-white rounded-full text-sm text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                    >
                      Читать далее
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* About */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">О блоге</h3>
                <p className="text-secondary mb-6">
                  Делимся экспертными знаниями в области управления репутацией, 
                  SEO-продвижения и цифрового маркетинга.
                </p>
                <button 
                  onClick={navigateToHome}
                  className="button-primary w-full"
                >
                  Получить консультацию
                </button>
              </div>

              {/* Popular Tags */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Популярные темы</h3>
                <div className="flex flex-wrap gap-2">
                  {['Управление репутацией', 'SEO', 'SERM', 'Отзывы', 'Цифровой профиль', 'Комплаенс', 'Кейсы', 'Смоленск', 'Локальный бизнес'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-white rounded-full text-sm text-secondary hover:text-accent cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-black text-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Нужна помощь?</h3>
                <p className="text-gray-300 mb-6">
                  Получите персональную консультацию по управлению репутацией
                </p>
                <a 
                  href="https://t.me/vladimir_lvanovv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all w-full inline-block text-center"
                >
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;