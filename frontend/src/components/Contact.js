import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-apple-white text-apple-gray-dark py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-apple-black">
          Связаться со мной
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-apple-gray-light p-8 rounded-apple shadow-apple-light">
            <h2 className="text-3xl font-bold mb-6 text-apple-black">
              Отправить сообщение
            </h2>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-apple-gray-dark text-sm font-semibold mb-2"
                >
                  Имя:
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm appearance-none border border-apple-gray-light rounded-apple w-full py-3 px-4 text-apple-black leading-tight focus:outline-none focus:ring-2 focus:ring-apple-accent-blue focus:border-transparent transition duration-200"
                  placeholder="Ваше имя"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-apple-gray-dark text-sm font-semibold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm appearance-none border border-apple-gray-light rounded-apple w-full py-3 px-4 text-apple-black leading-tight focus:outline-none focus:ring-2 focus:ring-apple-accent-blue focus:border-transparent transition duration-200"
                  placeholder="Ваш email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-apple-gray-dark text-sm font-semibold mb-2"
                >
                  Сообщение:
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="shadow-sm appearance-none border border-apple-gray-light rounded-apple w-full py-3 px-4 text-apple-black leading-tight focus:outline-none focus:ring-2 focus:ring-apple-accent-blue focus:border-transparent transition duration-200"
                  placeholder="Ваше сообщение"
                ></textarea>
              </div>
              <div className="flex items-center justify-start">
                {' '}
                {/* Align button to the left */}
                <button
                  type="submit"
                  className="bg-apple-accent-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 shadow-apple-medium"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="bg-apple-gray-light rounded-apple shadow-apple-light overflow-hidden">
            <div className="h-full w-full flex items-center justify-center text-apple-gray p-8">
              {' '}
              {/* Added padding */}
              {/* Placeholder for interactive map */}
              <p className="text-center">Карта будет здесь</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
