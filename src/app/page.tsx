import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
            alt="Настольные игры"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Погрузитесь в мир настольных игр
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Увлекательные игры для любой компании. Корпоративы, детские праздники, семейные вечера и многое другое.
            </p>
            <div className="flex gap-4">
              <Link href="/services" className="btn btn-primary btn-lg">
                Наши услуги
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-2">Опытные ведущие</h3>
              <p className="text-gray-600">Наши ведущие имеют многолетний опыт проведения игровых мероприятий</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-2">Большой выбор игр</h3>
              <p className="text-gray-600">В нашей коллекции более 100 различных настольных игр</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-2">Для любой компании</h3>
              <p className="text-gray-600">Проводим мероприятия для групп от 2 до 50 человек</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Популярные игры</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularGames.map((game, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-3 mb-2">{game.title}</h3>
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
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
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
    tags: ['Ролевая', 'Карточная', '3-6 игроков'],
  },
  {
    title: 'Имаджинариум',
    description: 'Творческая игра в ассоциации, где игроки придумывают и угадывают образы.',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1000&auto=format&fit=crop',
    tags: ['Творческая', '4-8 игроков'],
  },
  {
    title: 'Колонизаторы',
    description: 'Стратегическая игра, где игроки строят поселения и торгуют ресурсами.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    tags: ['Стратегия', '2-4 игрока'],
  },
] 