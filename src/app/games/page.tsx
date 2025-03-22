import Image from 'next/image'

export default function GamesPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="heading-1 text-center mb-12">Наши игры</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{game.price}</span>
                  <button className="btn btn-primary">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const games = [
  {
    title: 'Манчкин',
    description: 'Карточная ролевая игра, где каждый игрок стремится достичь 10 уровня, сражаясь с монстрами и используя волшебные предметы.',
    players: '3-6',
    duration: '1-2 часа',
    price: 'от 2 000 ₽',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    tags: ['Ролевая', 'Карточная', '3-6 игроков'],
  },
  {
    title: 'Имаджинариум',
    description: 'Творческая игра в ассоциации, где игроки придумывают и угадывают образы, связанные с картинками.',
    players: '4-8',
    duration: '30-60 минут',
    price: 'от 2 500 ₽',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
    tags: ['Творческая', '4-8 игроков'],
  },
  {
    title: 'Колонизаторы',
    description: 'Стратегическая игра, где игроки строят поселения, прокладывают дороги и торгуют ресурсами.',
    players: '2-4',
    duration: '1-2 часа',
    price: 'от 3 000 ₽',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1000&auto=format&fit=crop',
    tags: ['Стратегия', '2-4 игрока'],
  },
  {
    title: 'Каркассон',
    description: 'Игра, где игроки строят средневековый город, размещая плитки с дорогами, городами и монастырями.',
    players: '2-5',
    duration: '30-45 минут',
    price: 'от 2 800 ₽',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    tags: ['Стратегия', '2-5 игроков'],
  },
  {
    title: 'Алиас',
    description: 'Командная игра в слова, где нужно объяснять слова товарищам по команде, не используя однокоренные слова.',
    players: '4+',
    duration: '30-60 минут',
    price: 'от 1 800 ₽',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
    tags: ['Командная', '4+ игрока'],
  },
  {
    title: 'Дженга',
    description: 'Игра на ловкость, где игроки по очереди вынимают блоки из башни и кладут их наверх.',
    players: '2+',
    duration: '15-30 минут',
    price: 'от 1 500 ₽',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1000&auto=format&fit=crop',
    tags: ['Ловкость', '2+ игрока'],
  },
] 