import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-apple-white text-apple-gray-dark">
      {/* Premium Product Section (Inspired by Apple) */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Product Image/Visual (Placeholder) */}
        <div className="absolute inset-0 z-0">
          {/* Replace with your large product image or video */}
          <img
            src="placeholder-product-image.jpg" // Replace with actual image path
            alt="Premium Product"
            className="w-full h-full object-cover object-center opacity-75" // Adjust opacity as needed
          />
          {/* Optional: Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-apple-white via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4 text-apple-black">
            Представляем [Название Продукта]
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-apple-gray">
            [Краткое, интригующее описание продукта]
          </p>
          <button className="bg-apple-accent-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-apple-medium">
            Узнать больше
          </button>
          {/* Optional: Secondary Call To Action */}
          {/* <button className="ml-4 text-apple-accent-blue hover:underline font-semibold py-3 px-8 rounded-full transition duration-300">
            Посмотреть видео
          </button> */}
        </div>
      </section>

      {/* General Services Overview - Styled for Apple Aesthetic */}
      <section className="py-20 bg-apple-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-apple-black">
            Мои услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Item */}
            <div className="bg-apple-white p-6 rounded-apple shadow-apple-light">
              <h3 className="text-2xl font-bold mb-4 text-apple-accent-blue">
                Web Development
              </h3>
              <p className="text-apple-gray-dark">
                Frontend и Backend разработка с использованием современных
                технологий.
              </p>
            </div>
            {/* Service Item */}
            <div className="bg-apple-white p-6 rounded-apple shadow-apple-light">
              <h3 className="text-2xl font-bold mb-4 text-apple-accent-blue">
                UI/UX Design
              </h3>
              <p className="text-apple-gray-dark">
                Создание интуитивно понятных и эстетически приятных интерфейсов.
              </p>
            </div>
            {/* Service Item */}
            <div className="bg-apple-white p-6 rounded-apple shadow-apple-light">
              <h3 className="text-2xl font-bold mb-4 text-apple-accent-blue">
                SEO & Speed Optimization
              </h3>
              <p className="text-apple-gray-dark">
                Оптимизация для поисковых систем и максимальной скорости
                загрузки.
              </p>
            </div>
            {/* Service Item */}
            <div className="bg-apple-white p-6 rounded-apple shadow-apple-light">
              <h3 className="text-2xl font-bold mb-4 text-apple-accent-blue">
                Online Marketing Strategy
              </h3>
              <p className="text-apple-gray-dark">
                Разработка комплексных стратегий для вашего онлайн-присутствия.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section - Styled for Apple Aesthetic */}
      <section className="py-20 bg-apple-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-apple-black">
            Почему стоит работать со мной?
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-apple-gray-dark">
            Я предлагаю не просто код, а комплексные решения, которые помогут
            вашему бизнесу расти. Индивидуальный подход, внимание к деталям и
            стремление к совершенству - вот что отличает мою работу.
          </p>
          {/* Add more points here */}
        </div>
      </section>

      {/* Testimonials Section - Styled for Apple Aesthetic */}
      <section className="bg-apple-gray-light py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-apple-black">
            Отзывы клиентов
          </h2>
          {/* Add testimonials carousel or grid here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial Item */}
            <div className="bg-apple-white p-6 rounded-apple italic text-apple-gray-dark shadow-apple-light">
              "Отличная работа! Проект был выполнен в срок и превзошел все
              ожидания." - Клиент А
            </div>
            {/* Testimonial Item */}
            <div className="bg-apple-white p-6 rounded-apple italic text-apple-gray-dark shadow-apple-light">
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
