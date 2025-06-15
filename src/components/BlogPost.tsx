import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, User, Share2, Tag } from 'lucide-react';

interface BlogPostProps {
  slug: string;
}

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  slug: string;
  publishDate: string;
  readTime: string;
  author: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const blogPosts: Record<string, BlogPostData> = {
    'pochemu-vazhno-kontrolirovat-informatsiyu-o-vas-v-internete': {
      id: '1',
      title: 'Почему важно контролировать информацию о вас в интернете',
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
      metaDescription: 'Узнайте, как цифровой профиль влияет на бизнес и личные возможности. Советы по управлению репутацией в интернете от экспертов Avi Reputation.'
    }
  };

  const post = blogPosts[slug];

  useEffect(() => {
    if (post) {
      // Update page title and meta description
      document.title = post.metaTitle;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', post.metaDescription);
        document.head.appendChild(metaDescription);
      }

      // Add structured data for article
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.metaDescription,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Avi Reputation",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.avireputation.ru/logo.png"
          }
        },
        "datePublished": post.publishDate,
        "dateModified": post.publishDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.avireputation.ru/blog/${post.slug}`
        }
      };

      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Статья не найдена</h1>
          <p className="text-secondary mb-8">Запрашиваемая статья не существует или была удалена.</p>
          <a href="/blog" className="button-primary">
            Вернуться к блогу
          </a>
        </div>
      </div>
    );
  }

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-semibold mb-6 mt-12 first:mt-0">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      return (
        <p key={index} className="text-lg leading-relaxed mb-6">
          {paragraph}
        </p>
      );
    });
  };

  const navigateToHome = () => {
    window.location.href = '/#contact';
  };

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.metaDescription,
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована в буфер обмена');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8" aria-label="Хлебные крошки">
          <ol className="flex items-center space-x-2 text-sm text-secondary">
            <li>
              <a href="/" className="hover:text-accent transition-colors">Главная</a>
            </li>
            <li className="flex items-center">
              <ArrowLeft className="w-4 h-4 mx-2 rotate-180" />
              <a href="/blog" className="hover:text-accent transition-colors">Блог</a>
            </li>
            <li className="flex items-center">
              <ArrowLeft className="w-4 h-4 mx-2 rotate-180" />
              <span className="text-primary font-medium">{post.title}</span>
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-secondary mb-6">
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

          <h1 className="section-headline mb-6">{post.title}</h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-secondary" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <button 
              onClick={shareArticle}
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
              aria-label="Поделиться статьей"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Поделиться</span>
            </button>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {formatContent(post.content)}
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Нужна помощь с управлением репутацией?</h3>
            <p className="text-secondary mb-6">
              Получите персональную консультацию от экспертов Avi Reputation. 
              Мы поможем создать положительный цифровой профиль и защитить вашу репутацию в интернете.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={navigateToHome}
                className="button-primary"
              >
                Получить консультацию
              </button>
              <a href="/blog" className="button-secondary">
                Читать другие статьи
              </a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;