import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Headline Impact + Call To Action */}
      <section className="h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-white">
            Ваш цифровой успех начинается здесь
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Создаю премиальные веб-решения для амбициозных компаний.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Получить бесплатную консультацию
          </button>
        </div>
      </section>

      {/* General Services Overview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Мои услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Web Development
              </h3>
              <p className="text-gray-300">
                Frontend и Backend разработка с использованием современных
                технологий.
              </p>
            </div>
            {/* Service Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                UI/UX Design
              </h3>
              <p className="text-gray-300">
                Создание интуитивно понятных и эстетически приятных интерфейсов.
              </p>
            </div>
            {/* Service Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                SEO & Speed Optimization
              </h3>
              <p className="text-gray-300">
                Оптимизация для поисковых систем и максимальной скорости
                загрузки.
              </p>
            </div>
            {/* Service Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Online Marketing Strategy
              </h3>
              <p className="text-gray-300">
                Разработка комплексных стратегий для вашего онлайн-присутствия.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">
            Почему стоит работать со мной?
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Я предлагаю не просто код, а комплексные решения, которые помогут
            вашему бизнесу расти. Индивидуальный подход, внимание к деталям и
            стремление к совершенству - вот что отличает мою работу.
          </p>
          {/* Add more points here */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Отзывы клиентов
          </h2>
          {/* Add testimonials carousel or grid here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial Item */}
            <div className="bg-gray-800 p-6 rounded-lg italic text-gray-300 shadow-lg">
              "Отличная работа! Проект был выполнен в срок и превзошел все
              ожидания." - Клиент А
            </div>
            {/* Testimonial Item */}
            <div className="bg-gray-800 p-6 rounded-lg italic text-gray-300 shadow-lg">
              "Очень профессиональный подход и высокое качество кода.
              Рекомендую!" - Клиент Б
            </div>
          </div>
        </div>
      </section>

      {/* Footer would go here */}
    </div>
  )
}

export default Home
