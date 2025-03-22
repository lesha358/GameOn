import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Game On</h3>
            <p className="text-gray-400">
              Организация игротек и мероприятий с настольными играми
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-400 hover:text-white">
                  Игры
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Телефон: +7 (XXX) XXX-XX-XX</li>
              <li>Email: info@gameon.ru</li>
              <li>Адрес: г. Москва</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.065-1.225-.461-1.9-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.178.121.13.156.305.165.472.009.167-.018.37-.027.522z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">VKontakte</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2m3.08 14.27h-1.46c-.55 0-.72-.44-1.71-1.42-1-.98-1.44-1.1-1.69-1.1-.36 0-.47.1-.47.51v1.21c0 .35-.11.56-1.02.56-1.51 0-3.1-.96-4.24-2.74-1.61-2.21-2.61-5.1-2.61-7.51 0-.29.03-.5.1-.5.19 0 .64.06 1 .06.57 0 .93-.06 1.06-.18.13-.12.2-.33.2-.64 0-.51-.02-.97-.02-1.4 0-1.25.77-1.63 1.79-1.63h1.43c.55 0 .72.44.72.72v2.14c0 .35.11.56 1.02.56.29 0 .57 0 .86-.02.55-.06.63-.45.63-.84V4.63c0-1.25.77-1.63 1.79-1.63h1.43c.55 0 .72.44.72.72v10.02c0 .55-.44.72-.72.72z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Game On. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
} 