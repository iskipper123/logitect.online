import React from 'react'

const Prices = () => {
  // Placeholder data for pricing packages
  const packages = [
    {
      id: 1,
      name: 'Start',
      price: 'От $1000',
      benefits: [
        'Базовый веб-сайт',
        'Адаптивный дизайн',
        'SEO оптимизация (базовая)',
        'Интеграция форм связи',
      ],
    },
    {
      id: 2,
      name: 'Business',
      price: 'От $5000',
      benefits: [
        'Все из пакета Start',
        'Индивидуальный дизайн',
        'CMS интеграция',
        'Расширенная SEO оптимизация',
        'Интеграция с социальными сетями',
      ],
    },
    {
      id: 3,
      name: 'Premium',
      price: 'От $10000',
      benefits: [
        'Все из пакета Business',
        'Разработка кастомных функций',
        'Интеграция с внешними сервисами',
        'Полная маркетинговая стратегия',
        'Приоритетная поддержка',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-apple-white text-apple-gray-dark py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-apple-black">
          Цены
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-apple-gray-light p-8 rounded-apple shadow-apple-light flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 text-apple-black">
                  {pkg.name}
                </h2>
                <p className="text-2xl font-semibold mb-6 text-apple-gray-dark">
                  {pkg.price}
                </p>
                <ul className="list-none text-apple-gray-dark mb-8 space-y-2">
                  {' '}
                  {/* Removed list-disc for cleaner look */}
                  {pkg.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      {/* Optional: Add a simple checkmark icon here */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-apple-accent-blue mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-apple-accent-blue hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 self-center shadow-apple-medium">
                Выбрать пакет
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-apple-gray mt-12 text-sm">
          *Ориентировочные цены. Окончательная стоимость зависит от сложности
          проекта.
        </p>
      </div>
    </div>
  )
}

export default Prices
