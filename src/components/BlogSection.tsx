import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import blogHeroImage from '../images/blog-hero.png';

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
  heroImage?: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Почему важно контролировать информацию о вас в интернете',
      excerpt: 'Сегодня цифровой профиль — это не просто имидж, а важный фактор, который влияет на бизнес и личные возможности.',
      content: `Сегодня цифровой профиль это не просто имидж а важный фактор который влияет на бизнес и личные возможности. При проверках благонадёжности комплаенс-проверках или анализе данных в первую очередь смотрят что о вас написано в интернете в поисковых системах и публичных базах данных.

Если в поисковой выдаче есть сомнительная или устаревшая информация это может вызвать вопросы у банков партнёров или государственных органов и иногда стать причиной отказа в важных сделках открытии счетов или получении разрешений.

Мы помогаем сформировать положительный и актуальный цифровой профиль который улучшает ваше положение и снижает риски при прохождении любых проверок.

## Как мы помогаем

Мы анализируем все значимые упоминания о вас и вашей компании в интернете и убираем нежелательную или устаревшую информацию из первых страниц поисковой выдачи чтобы она не влияла на решения проверяющих. Работаем с ключевыми международными и российскими базами, обеспечиваем правильное и актуальное отражение данных.

Также помогаем создавать и поддерживать официальный цифровой профиль который отражает ваши реальные достижения и направления деятельности. Предоставляем рекомендации и комплексные решения для снижения комплаенс-рисков.

## Кому это важно

Наши услуги полезны владельцам и руководителям бизнеса любого масштаба от предпринимателей до крупных компаний. Также мы работаем с публичными лицами и государственными служащими для которых цифровой профиль является частью профессиональной безопасности.

Если вы хотите укрепить доверие партнёров банков и государственных органов облегчить прохождение комплаенс-проверок и обеспечить стабильную работу наши решения помогут вам.

## Почему выбирают нас

Мы не предлагаем универсальные решения. Каждая стратегия разрабатывается с учётом ваших особенностей и задач. Наш опыт и уникальные технологии позволяют эффективно управлять цифровым профилем как в России так и за рубежом.`,
      slug: 'pochemu-vazhno-kontrolirovat-informatsiyu-o-vas-v-internete',
      publishDate: '2025-06-15',
      readTime: '5 мин',
      author: 'Владимир Иванов',
      tags: ['Управление репутацией', 'Цифровой профиль', 'Комплаенс'],
      metaTitle: 'Почему важно контролировать информацию о вас в интернете | Avi Reputation',
      metaDescription: 'Узнайте, как цифровой профиль влияет на бизнес и личные возможности. Советы по управлению репутацией в интернете от экспертов Avi Reputation.',
      heroImage: blogHeroImage
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
                  className="bg-gray-50 rounded-2xl overflow-hidden hover-scale"
                  style={{
                    animation: 'fadeIn 0.5s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  {/* Hero Image */}
                  {post.heroImage && (
                    <div className="relative w-full h-48 md:h-64 overflow-hidden">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}

                  <div className="p-8">
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
                  {['Управление репутацией', 'SEO', 'SERM', 'Отзывы', 'Цифровой профиль', 'Комплаенс'].map((tag, index) => (
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