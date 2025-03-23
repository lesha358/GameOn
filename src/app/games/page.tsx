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
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="heading-3 mb-2">{game.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{game.description}</p>
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
                <div className="flex justify-between items-center mt-auto">
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
    image: '/images/games/manchkin.jpg',
    tags: ['Ролевая', 'Карточная', '3-6 игроков'],
  },
  {
    title: 'Имаджинариум',
    description: 'Творческая игра в ассоциации, где игроки придумывают и угадывают образы, связанные с картинками.',
    players: '4-8',
    duration: '30-60 минут',
    price: 'от 2 500 ₽',
    image: '/images/games/imaginarium.jpg',
    tags: ['Творческая', '4-8 игроков'],
  },
  {
    title: 'Колонизаторы',
    description: 'Стратегическая игра, где игроки строят поселения, прокладывают дороги и торгуют ресурсами.',
    players: '2-4',
    duration: '1-2 часа',
    price: 'от 3 000 ₽',
    image: '/images/games/colonizers.jpg',
    tags: ['Стратегия', '2-4 игрока'],
  },
  {
    title: 'Каркассон',
    description: 'Игра, где игроки строят средневековый город, размещая плитки с дорогами, городами и монастырями.',
    players: '2-5',
    duration: '30-45 минут',
    price: 'от 2 800 ₽',
    image: '/images/games/carcassonne.jpg',
    tags: ['Стратегия', '2-5 игроков'],
  },
  {
    title: 'Алиас',
    description: 'Командная игра в слова, где нужно объяснять слова товарищам по команде, не используя однокоренные слова.',
    players: '4+',
    duration: '30-60 минут',
    price: 'от 1 800 ₽',
    image: '/images/games/alias.jpg',
    tags: ['Командная', '4+ игрока'],
  },
  {
    title: 'Дженга',
    description: 'Игра на ловкость, где игроки по очереди вынимают блоки из башни и кладут их наверх.',
    players: '2+',
    duration: '15-30 минут',
    price: 'от 1 500 ₽',
    image: '/images/games/jenga.jpg',
    tags: ['Ловкость', '2+ игрока'],
  },
  {
    title: 'Кодовые имена',
    description: 'Командная игра в слова, где нужно угадывать слова по ассоциациям, избегая слов противника.',
    players: '4+',
    duration: '15-30 минут',
    price: 'от 2 200 ₽',
    image: '/images/games/Codenames00-Photoroom.png',
    tags: ['Командная', 'Слова', '4+ игрока'],
  },
  {
    title: 'Безмолвный свидетель',
    description: 'Детективная игра, где игроки расследуют преступления, собирая улики и опрашивая свидетелей.',
    players: '2-6',
    duration: '1-2 часа',
    price: 'от 2 800 ₽',
    image: '/images/games/bezmolvnyi-svidetel-Photoroom.png',
    tags: ['Детектив', '2-6 игроков'],
  },
  {
    title: 'Бухта торговцев',
    description: 'Экономическая игра, где игроки торгуют товарами и развивают свой порт.',
    players: '2-4',
    duration: '1-1.5 часа',
    price: 'от 3 200 ₽',
    image: '/images/games/buhta_torgovcev-Photoroom.png',
    tags: ['Экономика', '2-4 игрока'],
  },
  {
    title: 'Криминалист',
    description: 'Детективная игра, где игроки расследуют преступления, используя научные методы.',
    players: '2-6',
    duration: '1-2 часа',
    price: 'от 2 900 ₽',
    image: '/images/games/Kriminalist-1024x1024-wm-Photoroom.png',
    tags: ['Детектив', '2-6 игроков'],
  },
  {
    title: 'Мафия',
    description: 'Классическая игра в социальную дедукцию, где нужно разоблачить преступников.',
    players: '6+',
    duration: '30-60 минут',
    price: 'от 1 800 ₽',
    image: '/images/games/Mafiya_Vsya_Semya_V_Sbore_Maski00-1024x1024-wm-Photoroom.png',
    tags: ['Дедукция', '6+ игроков'],
  },
  {
    title: 'Мансионы безумия',
    description: 'Ужасы Лавкрафта в настольной игре, где игроки исследуют жуткие особняки.',
    players: '1-5',
    duration: '2-3 часа',
    price: 'от 4 500 ₽',
    image: '/images/games/Mansions-of-Madness_box-1024x1024-wm-Photoroom.png',
    tags: ['Ужасы', '1-5 игроков'],
  },
  {
    title: 'Не бомби!',
    description: 'Веселая игра на реакцию и координацию, где нужно аккуратно разминировать бомбу.',
    players: '2-6',
    duration: '15-30 минут',
    price: 'от 2 100 ₽',
    image: '/images/games/Ne_Bombani00-1200x800-Photoroom.png',
    tags: ['Реакция', '2-6 игроков'],
  },
  {
    title: 'Опасные слова',
    description: 'Игра в слова, где нужно объяснять понятия, избегая запрещенных слов.',
    players: '4+',
    duration: '30-60 минут',
    price: 'от 2 300 ₽',
    image: '/images/games/Opasnie_Slova-1024x1024-wm-Photoroom.png',
    tags: ['Слова', '4+ игрока'],
  },
  {
    title: 'Паранормальные исследователи',
    description: 'Игра о расследовании сверхъестественных явлений и паранормальных активностей.',
    players: '2-6',
    duration: '1-2 часа',
    price: 'от 3 100 ₽',
    image: '/images/games/Paranormal_3d_right-1-Photoroom.png',
    tags: ['Мистика', '2-6 игроков'],
  },
  {
    title: 'Поэзия неандертальцев',
    description: 'Творческая игра, где нужно объяснять слова, используя только простые звуки.',
    players: '4+',
    duration: '30-60 минут',
    price: 'от 2 400 ₽',
    image: '/images/games/poezia-neandertalcev-00-1200x800-Photoroom.png',
    tags: ['Творческая', '4+ игрока'],
  },
  {
    title: 'Шериф Ноттингема',
    description: 'Игра о торговле и контрабанде в средневековой Англии.',
    players: '2-4',
    duration: '1-1.5 часа',
    price: 'от 3 300 ₽',
    image: '/images/games/Sherif_Nottingema_00-1024x1024-wm-Photoroom.png',
    tags: ['Экономика', '2-4 игрока'],
  },
  {
    title: 'Сумерки империи',
    description: 'Грандиозная стратегическая игра о завоевании космоса.',
    players: '2-6',
    duration: '4-8 часов',
    price: 'от 5 500 ₽',
    image: '/images/games/Sumerki_Imperii00-1200x800-Photoroom.png',
    tags: ['Стратегия', '2-6 игроков'],
  },
  {
    title: 'Вечная зима',
    description: 'Кооперативная игра о выживании в суровых условиях вечной зимы.',
    players: '1-4',
    duration: '1-2 часа',
    price: 'от 3 400 ₽',
    image: '/images/games/vechnaya_zima-1024x1024-wm-Photoroom.png',
    tags: ['Кооперативная', '1-4 игрока'],
  },
  {
    title: 'Виноделие',
    description: 'Игра о создании и развитии собственного винодельческого хозяйства.',
    players: '2-4',
    duration: '1.5-2 часа',
    price: 'от 3 600 ₽',
    image: '/images/games/vinodelie-polnoe-izdanie-Photoroom.png',
    tags: ['Экономика', '2-4 игрока'],
  },
  {
    title: 'Зомбицид',
    description: 'Кооперативная игра о выживании в мире, охваченном зомби-апокалипсисом.',
    players: '1-6',
    duration: '1-2 часа',
    price: 'от 3 800 ₽',
    image: '/images/games/Zombicide_2ed_00-1024x1024-wm-Photoroom.png',
    tags: ['Кооперативная', '1-6 игроков'],
  }
] 