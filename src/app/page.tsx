import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="Настольные игры"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Погрузитесь в мир настольных игр
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
              Увлекательные игры для любой компании. Корпоративы, детские праздники, семейные вечера и многое другое.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/services" className="btn btn-primary btn-lg text-center">
                Наши услуги
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg text-center text-white border-white hover:bg-white hover:text-primary">
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <h2 className="heading-2 text-center mb-8 sm:mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-2">Опытные ведущие</h3>
              <p className="text-sm sm:text-base text-gray-600">Наши ведущие имеют многолетний опыт проведения игровых мероприятий</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-2">Большой выбор игр</h3>
              <p className="text-sm sm:text-base text-gray-600">В нашей коллекции более 100 различных настольных игр</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-2">Для любой компании</h3>
              <p className="text-sm sm:text-base text-gray-600">Проводим мероприятия для групп от 2 до 50 человек</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-12 sm:py-20">
        <div className="container">
          <h2 className="heading-2 text-center mb-8 sm:mb-12">Популярные игры</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {popularGames.map((game, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="heading-3 mb-2">{game.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/games" className="btn btn-primary btn-lg">
              Смотреть все игры
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const popularGames = [
  {
    title: 'Манчкин',
    description: 'Карточная ролевая игра, где каждый игрок стремится достичь 10 уровня.',
    image: '/images/games/manchkin.jpg',
    tags: ['Ролевая', 'Карточная', '3-6 игроков'],
  },
  {
    title: 'Имаджинариум',
    description: 'Творческая игра в ассоциации, где игроки придумывают и угадывают образы.',
    image: '/images/games/imaginarium.jpg',
    tags: ['Творческая', '4-8 игроков'],
  },
  {
    title: 'Колонизаторы',
    description: 'Стратегическая игра, где игроки строят поселения и торгуют ресурсами.',
    image: '/images/games/colonizers.jpg',
    tags: ['Стратегия', '2-4 игрока'],
  },
] 