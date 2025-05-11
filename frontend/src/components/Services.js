import React from 'react'

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
          Мои Услуги
        </h1>

        {/* Web Development */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            Web Development
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Создание современных, быстрых и масштабируемых веб-приложений. Я
            специализируюсь как на frontend, так и на backend разработке,
            используя передовые технологии для достижения оптимальной
            производительности и удобства использования.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Frontend Development
              </h3>
              <p className="text-gray-300">
                Разработка пользовательских интерфейсов с использованием
                React.js, обеспечивая высокую интерактивность и адаптивность.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Backend Development
              </h3>
              <p className="text-gray-300">
                Создание надежных и эффективных серверных решений на базе
                Node.js с использованием Express или Next.js API Routes.
              </p>
            </div>
          </div>
        </section>

        {/* UI/UX Design & Graphics */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            UI/UX Design & Graphics
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Разработка интуитивно понятных и визуально привлекательных
            интерфейсов, которые обеспечивают превосходный пользовательский
            опыт.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-white">UI Design</h3>
              <p className="text-gray-300">
                Создание эстетически приятных и функциональных пользовательских
                интерфейсов.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-white">UX Design</h3>
              <p className="text-gray-300">
                Проектирование пользовательского опыта, который делает
                взаимодействие с продуктом легким и приятным.
              </p>
            </div>
          </div>
        </section>

        {/* SEO + Speed Optimization */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            SEO + Speed Optimization
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Оптимизация вашего веб-сайта для улучшения видимости в поисковых
            системах и обеспечения максимально быстрой загрузки страниц.
          </p>
          {/* Add more details here */}
        </section>

        {/* Online Marketing Strategy */}
        <section>
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            Online Marketing Strategy
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Разработка и реализация эффективных стратегий онлайн-маркетинга для
            привлечения целевой аудитории и увеличения конверсии.
          </p>
          {/* Add more details here */}
        </section>
      </div>
    </div>
  )
}

export default Services
