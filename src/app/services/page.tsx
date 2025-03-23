'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)

  return (
    <div className="section">
      <div className="container">
        <h1 className="heading-1 text-center mb-12">Наши услуги</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{service.price}</span>
                  <button
                    onClick={() => {
                      setSelectedService(service.title)
                      setShowBookingForm(true)
                    }}
                    className="btn btn-primary"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="heading-2">Запись на мероприятие</h2>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Выбранная услуга
                  </label>
                  <input
                    type="text"
                    id="service"
                    value={selectedService || ''}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Предпочтительная дата
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                    Количество гостей
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Дополнительная информация
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const services = [
  {
    title: 'Корпоративы',
    description: 'Разбавим деловые беседы веселыми играми',
    price: 'от 15 000 ₽',
    image: '/images/services/corporate.jpg',
  },
  {
    title: 'Детские Игротеки',
    description: 'Сделайте детский праздник незабываемым!',
    price: 'от 8 000 ₽',
    image: '/images/services/kids.jpg',
  },
  {
    title: 'Детективы',
    description: 'Загадки, тайны, секреты и все это для вас',
    price: 'от 12 000 ₽',
    image: '/images/services/detective.jpg',
  },
  {
    title: 'Сессионные игры',
    description: 'Большие игры, которые затягивают',
    price: 'от 10 000 ₽',
    image: '/images/services/session.jpg',
  },
  {
    title: 'Настольные ролевые игры',
    description: 'Стань главным героем истории',
    price: 'от 12 000 ₽',
    image: '/images/services/rpg.jpg',
  },
  {
    title: 'Квизы для веселой компании',
    description: 'Собери команду, блесни интеллектом',
    price: 'от 8 000 ₽',
    image: '/images/services/quiz.jpg',
  },
] 