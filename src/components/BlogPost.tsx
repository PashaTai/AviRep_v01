import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, User, Share2, Tag } from 'lucide-react';
import blogHeroImage from '../images/blog-hero.png';
import digitalReputationImage from '../images/digital-reputation-team.png';
import dentistHeroImage from '../images/smiling_dentist_in_medicine_dentist_cabinet_reading_positive_reviews_on_tablet_jsh19qkpp59rf7sim8li_0.png';

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
  heroImage?: string;
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
      metaDescription: 'Узнайте, как цифровой профиль влияет на бизнес и личные возможности. Советы по управлению репутацией в интернете от экспертов Avi Reputation.',
      heroImage: blogHeroImage
    },
    'upravlenie-reputaciej-stomatologii-kejs': {
      id: '2',
      title: 'Управление репутацией: Как мы увеличили лиды с 40 до 120 заявок в месяц, улучшив онлайн репутацию стоматологии',
      content: `Сегодня ваше дело могут убивать не конкуренты, не налоги и даже не кризисы. Его может "медленно гасить" плохая репутация в интернете. Особенно это критично в медицинской сфере, где каждый отзыв и каждая звезда рейтинга стоматологии буквально стоят денег. Этот кейс — как раз про такую историю влияния отзывов на продажи.

К нам в AVIREPUTATION, агентство по управлению репутацией, обратилась частная стоматология из города с населением чуть меньше 600 тыс.чел. Владельцы — не новички, клиника работала давно, стоматологи с опытом, оборудование современное. Но поток пациентов падал уже больше полугода.

Они запускали рекламу — не помогло. Трафик шёл, а звонков нет и мало клиентов в стоматологии. Проблема оказалась не в спросе, а в доверии клиентов. Люди просто не доходили до клиники, потому что в интернете картина была удручающей:
– рейтинг на Яндекс Картах — 3,2,
– на ПроДокторов отзывы содержали устаревшую информацию о врачах,
– в 2ГИС отзывы показывали дубли карточек и путаницу с адресами,
– отзывы старые, много негативных отзывов, без ответов.

## Репутация компании — ключ к доверительным продажам

Если вы не занимаетесь управлением репутацией бизнеса, то это делает кто-то за вас. Или вообще никто, и тогда решение клиент принимает по "общей картинке". А она формируется из отзывов, рейтингов, внешнего вида карточек и того, что видно при поиске по названию. Как улучшить репутацию компании? Нужен системный подход.

Мы в AVIREPUTATION фокусируемся на системной работе с отзывами: от аудита репутации компании и устранения барьеров до продвижения положительного цифрового образа бренда. Это не "накрутка отзывов" и не "удаление плохого" — это работа на уровне доверия и конверсии из отзывов.

## Что мы сделали для репутации стоматологии

После первичного мониторинга репутации стало ясно: нужны быстрые действия.
Мы начали с самых влиятельных площадок — Яндекс.Карты, ПроДокторов, 2ГИС, Отзовик, Google.

- **Обновили карточки клиники:** корректные адреса, график работы, услуги, описание, фотографии для продвижения стоматологии.
- **Удалили дубли** и технические ошибки в репутации на отзовиках.
- **Восстановили данные о стоматологах:** фото, специализации, опыт, сертификаты для улучшения репутации медицинской клиники.
- **Подготовили стратегию по отзывам** — помогли собрать обратную связь от настоящих клиентов, давно лечившихся в клинике, но ранее не делившихся впечатлениями для получения положительных отзывов.
- **Ответили на негативные отзывы** — вежливо, но по существу, показывая, что клиника работает над ошибками. Теперь вы знаете, плохие отзывы что делать.

И самое главное — мы не ограничились только площадками. Как поднять рейтинг клиники комплексно?

В AVIREPUTATION мы всегда смотрим шире: как выглядит бренд в поиске, какие сайты занимают топ, куда ведут ссылки. Мы создали дополнительные карточки на отзовиках, которые чаще всего просматривают пациенты перед визитом — Spr.ru, NaPopravku, Yell, Yandex Services. Это важно для тех, кто ищет отзывы о стоматологии.

## Результат: +200% лидов и переход на постоянное сопровождение

Через месяц клиент сообщил: "Удалось увеличить поток пациентов".
За первые 30 дней прирост составил около 80%. Через 2 месяца вышли на 120 лидов в месяц против прежних 40 — без единого рубля на рекламу. Это чистый эффект от улучшения онлайн репутации. Мы показали как увеличить лиды через репутацию.

Сейчас мы продолжаем сотрудничество: клиент решил заказать управление репутацией у AVIREPUTATION на постоянной основе, потому что понял, что результат зависит не от единичных действий, а от системности. Мы следим за отзывами, новыми площадками, продвигаем карточки, где высокая конверсия. Это позволяет удерживать рост и защищать клинику от репутационных рисков в будущем. При низком рейтинге клиники важна постоянная работа.

## Почему это работает?

Репутация в интернете — это не абстрактное "мнение в интернете". Это конкретный показатель, по которому клиент принимает решение: идти к вам или к конкуренту.

Люди смотрят не только на рейтинг стоматологии. Они читают отзывы, смотрят, как работать с отзывами умеете вы, насколько подробно представлена информация. Всё это — подсознательные триггеры доверия. Мы в AVIREPUTATION умеем с этим работать.

Наша задача — построить репутацию, которая продаёт сама. Чтобы потенциальный клиент, просто набрав в поиске название клиники, увидел: да, этим специалистам можно доверять. Стоимость управления репутацией окупается многократно.

## Зачем бизнесу работать с репутацией

Если у вас стоматология, медицинская клиника, частный бизнес в услугах или локальный бренд — вы обязаны следить за тем, как вас видят в интернете. Отзывы, карточки, выдача — всё это стало витриной, важнее любого сайта. Репутация на Яндекс Картах особенно важна для локального бизнеса.

В AVIREPUTATION мы предлагаем не просто "удалить негативные отзывы", а построить цифровой образ бренда, который будет вызывать доверие, увеличивать конверсию и защищать вас от ущерба. Мы работаем честно, системно и с фокусом на результат.

Если вы хотите, как и наш клиент, не терять клиентов, а стабильно получать лиды, зарабатывать и развивать бизнес, а не сидеть вечерами в панике, думая о закрытии дела, то вы просто обязаны обратиться в AVIREPUTATION.

Мы не просто "поднимаем рейтинг" — мы возвращаем доверие к вашему бренду и переводим его в деньги.

Оставьте заявку на аудит репутации — покажем, как вы выглядите в глазах ваших клиентов и что нужно, чтобы вас начали выбирать.`,
      slug: 'upravlenie-reputaciej-stomatologii-kejs',
      publishDate: '2025-01-15',
      readTime: '8 мин',
      author: 'Владимир Иванов',
      tags: ['Кейс', 'Стоматология', 'Управление репутацией', 'Лиды', 'Медицинские клиники'],
      metaTitle: 'Управление репутацией в интернете: как увеличить лиды стоматологии с 40 до 120 заявок | AVIREPUTATION',
      metaDescription: 'Управление репутацией компании в интернете для медицинских клиник. Реальный кейс: увеличение потока пациентов на 200% через работу с отзывами и рейтингами. Аудит репутации бизнеса от AVIREPUTATION.',
      heroImage: dentistHeroImage
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

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://www.avireputation.ru/blog/${post.slug}`);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', `https://www.avireputation.ru/blog/${post.slug}`);
      document.head.appendChild(canonicalLink);
    }

      // Add structured data for article
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.metaDescription,
        "image": post.heroImage ? post.heroImage : undefined,
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
    const sections = content.split('\n\n');
    const formattedSections: JSX.Element[] = [];
    
    sections.forEach((section, index) => {
      if (section.startsWith('## ')) {
        formattedSections.push(
          <h2 key={index} className="text-3xl font-semibold mb-6 mt-12 first:mt-0">
            {section.replace('## ', '')}
          </h2>
        );
        
        // Add image after "Как мы помогаем" section for the first blog post
        if (section.includes('Как мы помогаем') && slug === 'pochemu-vazhno-kontrolirovat-informatsiyu-o-vas-v-internete') {
          formattedSections.push(
            <div key={`image-${index}`} className="my-12 -mx-6 md:mx-0">
              <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden md:rounded-2xl">
                <img
                  src={digitalReputationImage}
                  alt="Цифровая репутация - это необходимость при построении бренда"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <p className="text-center text-secondary mt-4 italic text-lg">
                Цифровая репутация — это необходимость при построении бренда
              </p>
            </div>
          );
        }
      } else {
        formattedSections.push(
          <p key={index} className="text-lg leading-relaxed mb-6">
            {section}
          </p>
        );
      }
    });
    
    return formattedSections;
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

        {/* Hero Image */}
        {post.heroImage && (
          <div className="mb-12 -mx-6 md:mx-0">
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden md:rounded-2xl">
              <img
                src={post.heroImage}
                alt={post.title}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        )}

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