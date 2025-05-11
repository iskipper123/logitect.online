import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-apple-white text-apple-black shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Site Logo/Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-apple-black no-underline hover:text-apple-gray-dark transition duration-200"
        >
          Logitect
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-apple-black hover:text-apple-gray-dark transition duration-200 no-underline"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-apple-black hover:text-apple-gray-dark transition duration-200 no-underline"
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-apple-black hover:text-apple-gray-dark transition duration-200 no-underline"
              >
                Портфолио
              </Link>
            </li>
            <li>
              <Link
                to="/prices"
                className="text-apple-black hover:text-apple-gray-dark transition duration-200 no-underline"
              >
                Цены
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-apple-black hover:text-apple-gray-dark transition duration-200 no-underline"
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-apple-black hover:text-apple-gray-dark transition duration-200 no-underline"
              >
                Контакты
              </Link>
            </li>
            <li>
              <Link
                to="/quote"
                className="text-apple-accent-blue hover:text-blue-600 transition duration-200 no-underline font-semibold"
              >
                Оценка стоимости
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
