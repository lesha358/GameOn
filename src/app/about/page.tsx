import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="heading-1 text-center mb-12">О нас</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="heading-2 mb-6">Наша история</h2>
            <p className="text-gray-600 mb-4">
              Game On начал свою деятельность в 2020 году с небольшой коллекции настольных игр и огромного желания сделать досуг людей более интересным и увлекательным.
            </p>
            <p className="text-gray-600">
              За это время мы провели сотни мероприятий, познакомили тысячи людей с удивительным миром настольных игр и создали дружное сообщество любителей настолок.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
              alt="Наша команда"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
              alt="Наши мероприятия"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="heading-2 mb-6">Наша миссия</h2>
            <p className="text-gray-600 mb-4">
              Мы верим, что настольные игры - это не просто развлечение, а способ объединить людей, развить навыки общения и стратегического мышления.
            </p>
            <p className="text-gray-600">
              Наша миссия - сделать настольные игры доступными для всех, кто хочет разнообразить свой досуг и найти новых друзей.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
              alt="Наша команда за игрой"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1000&auto=format&fit=crop"
              alt="Веселое мероприятие"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="heading-2 text-center mb-12">Наша команда</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                alt="Александр Петров"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="heading-3 mb-2">Александр Петров</h3>
            <p className="text-gray-600">Основатель и ведущий игротехник</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                alt="Елена Смирнова"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="heading-3 mb-2">Елена Смирнова</h3>
            <p className="text-gray-600">Ведущий детских программ</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                alt="Дмитрий Иванов"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="heading-3 mb-2">Дмитрий Иванов</h3>
            <p className="text-gray-600">Ведущий корпоративных мероприятий</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const team = [
  {
    name: 'Алексей Петров',
    role: 'Основатель и ведущий',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop',
    bio: 'Более 5 лет опыта в организации игровых мероприятий. Специализируется на корпоративных мероприятиях и детских праздниках.',
  },
  {
    name: 'Мария Иванова',
    role: 'Ведущий игротехник',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    bio: 'Эксперт по настольным играм с опытом работы более 3 лет. Проводит мастер-классы и обучающие программы.',
  },
  {
    name: 'Дмитрий Сидоров',
    role: 'Ведущий игротехник',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
    bio: 'Специализируется на ролевых играх и квестах. Имеет опыт работы с детскими и подростковыми группами.',
  },
] 