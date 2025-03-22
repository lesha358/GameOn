import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
  readTime: number
  slug: string
  tags: string[]
}

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
    title: 'Как организовать корпоратив с настольными играми',
    excerpt: 'Советы по организации успешного корпоративного мероприятия с настольными играми',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    date: '2024-03-15',
    author: 'Алексей Петров',
    category: 'Корпоративы',
    readTime: 5,
    slug: 'organize-corporate-games',
    tags: ['Корпоративы', 'Тимбилдинг', 'Советы'],
  },
  {
    title: 'Детские праздники с настольными играми',
    excerpt: 'Как сделать детский праздник увлекательным и развивающим',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
    date: '2024-03-10',
    author: 'Мария Иванова',
    category: 'Детские праздники',
    readTime: 4,
    slug: 'kids-party-games',
    tags: ['Детские праздники', 'Развитие', 'Игры'],
  },
  {
    title: 'Развитие навыков через настольные игры',
    excerpt: 'Как настольные игры помогают развивать важные навыки',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1000&auto=format&fit=crop',
    date: '2024-03-05',
    author: 'Дмитрий Сидоров',
    category: 'Развитие',
    readTime: 6,
    slug: 'skills-development-games',
    tags: ['Развитие', 'Образование', 'Навыки'],
  },
  {
    title: 'Как выбрать игру для компании',
    excerpt: 'Руководство по выбору подходящей настольной игры',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    date: '2024-02-28',
    author: 'Анна Козлова',
    category: 'Советы',
    readTime: 5,
    slug: 'choose-game-company',
    tags: ['Советы', 'Выбор игр', 'Компания'],
  },
  {
    title: 'История настольных игр',
    excerpt: 'От древних времен до современности: эволюция настольных игр',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
    date: '2024-02-20',
    author: 'Иван Смирнов',
    category: 'История',
    readTime: 7,
    slug: 'board-games-history',
    tags: ['История', 'Культура', 'Образование'],
  },
  {
    title: 'Организация игровых вечеринок',
    excerpt: 'Советы по организации успешной игровой вечеринки',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1000&auto=format&fit=crop',
    date: '2024-02-15',
    author: 'Елена Попова',
    category: 'Вечеринки',
    readTime: 5,
    slug: 'game-party-organization',
    tags: ['Вечеринки', 'Игры', 'Развлечения'],
  },
] 