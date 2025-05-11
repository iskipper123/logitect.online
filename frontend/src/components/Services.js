import React from 'react'

const Services = () => {
  return (
    <div className="min-h-screen bg-apple-white text-apple-gray-dark py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-apple-black">
          Мои Услуги
        </h1>

        {/* Web Development */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-apple-black">
            Web Development
          </h2>
          <p className="text-lg text-apple-gray-dark mb-12 max-w-3xl">
            Создание современных, быстрых и масштабируемых веб-приложений. Я
            специализируюсь как на frontend, так и на backend разработке,
            используя передовые технологии для достижения оптимальной
            производительности и удобства использования.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-apple-gray-light p-8 rounded-apple shadow-apple-light">
              <h3 className="text-2xl font-semibold mb-4 text-apple-black">
                Frontend Development
              </h3>
              <p className="text-apple-gray-dark">
                Разработка пользовательских интерфейсов с использованием
                React.js, обеспечивая высокую интерактивность и адаптивность.
              </p>
            </div>
            <div className="bg-apple-gray-light p-8 rounded-apple shadow-apple-light">
              <h3 className="text-2xl font-semibold mb-4 text-apple-black">
                Backend Development
              </h3>
              <p className="text-apple-gray-dark">
                Создание надежных и эффективных серверных решений на базе
                Node.js с использованием Express или Next.js API Routes.
              </p>
            </div>
          </div>
        </section>

        {/* UI/UX Design & Graphics */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-apple-black">
            UI/UX Design & Graphics
          </h2>
          <p className="text-lg text-apple-gray-dark mb-12 max-w-3xl">
            Разработка интуитивно понятных и визуально привлекательных
            интерфейсов, которые обеспечивают превосходный пользовательский
            опыт.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-apple-gray-light p-8 rounded-apple shadow-apple-light">
              <h3 className="text-2xl font-semibold mb-4 text-apple-black">
                UI Design
              </h3>
              <p className="text-apple-gray-dark">
                Создание эстетически приятных и функциональных пользовательских
                интерфейсов.
              </p>
            </div>
            <div className="bg-apple-gray-light p-8 rounded-apple shadow-apple-light">
              <h3 className="text-2xl font-semibold mb-4 text-apple-black">
                UX Design
              </h3>
              <p className="text-apple-gray-dark">
                Проектирование пользовательского опыта, который делает
                взаимодействие с продуктом легким и приятным.
              </p>
            </div>
          </div>
        </section>

        {/* SEO + Speed Optimization */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-apple-black">
            SEO + Speed Optimization
          </h2>
          <p className="text-lg text-apple-gray-dark mb-12 max-w-3xl">
            Оптимизация вашего веб-сайта для улучшения видимости в поисковых
            системах и обеспечения максимально быстрой загрузки страниц.
          </p>
          {/* Add more details here */}
        </section>

        {/* Online Marketing Strategy */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-apple-black">
            Online Marketing Strategy
          </h2>
          <p className="text-lg text-apple-gray-dark mb-12 max-w-3xl">
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
