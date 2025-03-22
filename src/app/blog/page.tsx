import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="heading-1 text-center mb-12">Блог</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} мин чтения</span>
                </div>
                <h2 className="heading-3 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark"
                >
                  Читать далее
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

const blogPosts = [
  {
    title: 'Как организовать идеальный корпоратив с играми',
    excerpt: 'Узнайте, как сделать корпоративное мероприятие не только полезным, но и увлекательным с помощью настольных игр.',
    date: '15 марта 2024',
    readTime: 5,
    image: '/images/blog/corporate.jpg',
    slug: 'organize-perfect-corporate',
    tags: ['Корпоративы', 'Тимбилдинг', 'Советы'],
  },
  {
    title: 'Топ-5 игр для детского праздника',
    excerpt: 'Подборка самых интересных и развивающих игр, которые сделают детский праздник незабываемым.',
    date: '10 марта 2024',
    readTime: 4,
    image: '/images/blog/kids-party.jpg',
    slug: 'top-5-kids-games',
    tags: ['Детские праздники', 'Игры', 'Развитие'],
  },
  {
    title: 'Почему настольные игры полезны для развития',
    excerpt: 'Исследование влияния настольных игр на развитие когнитивных способностей и социальных навыков.',
    date: '5 марта 2024',
    readTime: 6,
    image: '/images/blog/development.jpg',
    slug: 'board-games-development',
    tags: ['Развитие', 'Исследования', 'Образование'],
  },
  {
    title: 'Как выбрать идеальную игру для компании',
    excerpt: 'Руководство по выбору настольной игры с учетом возраста, количества игроков и интересов.',
    date: '1 марта 2024',
    readTime: 5,
    image: '/images/blog/choose-game.jpg',
    slug: 'choose-perfect-game',
    tags: ['Советы', 'Выбор игр', 'Компания'],
  },
  {
    title: 'История настольных игр: от древности до наших дней',
    excerpt: 'Увлекательное путешествие по истории настольных игр и их эволюции.',
    date: '25 февраля 2024',
    readTime: 7,
    image: '/images/blog/history.jpg',
    slug: 'board-games-history',
    tags: ['История', 'Культура', 'Образование'],
  },
  {
    title: 'Топ-10 игр для вечеринки',
    excerpt: 'Подборка самых веселых и динамичных игр, которые сделают любую вечеринку незабываемой.',
    date: '20 февраля 2024',
    readTime: 5,
    image: '/images/blog/party.jpg',
    slug: 'top-10-party-games',
    tags: ['Вечеринки', 'Игры', 'Развлечения'],
  },
] 