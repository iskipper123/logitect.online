import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
          Связаться со мной
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Отправить сообщение
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Имя:
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Сообщение:
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="h-full w-full flex items-center justify-center text-gray-300">
              {/* Placeholder for interactive map */}
              Карта будет здесь
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
