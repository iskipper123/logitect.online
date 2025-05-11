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
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
          Цены
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-400">
                  {pkg.name}
                </h2>
                <p className="text-2xl font-semibold mb-6 text-white">
                  {pkg.price}
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-8">
                  {pkg.benefits.map((benefit, index) => (
                    <li key={index} className="mb-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 self-center">
                Выбрать пакет
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-12">
          *Ориентировочные цены. Окончательная стоимость зависит от сложности
          проекта.
        </p>
      </div>
    </div>
  )
}

export default Prices
