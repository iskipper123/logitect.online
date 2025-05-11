import React, { useState } from 'react'

const Quote = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    deadline: '',
    details: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission, e.g., send data to backend
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-apple-white text-apple-gray-dark py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-apple-black">
          Получить Оценку Стоимости
        </h1>

        <div className="max-w-2xl mx-auto bg-apple-gray-light p-8 rounded-apple shadow-apple-light">
          <h2 className="text-3xl font-bold mb-6 text-apple-black text-center">
            Расскажите о вашем проекте
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="projectType"
                className="block text-apple-gray-dark text-sm font-semibold mb-2"
              >
                Тип проекта:
              </label>
              <input
                type="text"
                id="projectType"
                className="shadow-sm appearance-none border border-apple-gray-light rounded-apple w-full py-3 px-4 text-apple-black leading-tight focus:outline-none focus:ring-2 focus:ring-apple-accent-blue focus:border-transparent transition duration-200"
                placeholder="Например: Корпоративный сайт, Интернет-магазин"
                value={formData.projectType}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="budget"
                className="block text-apple-gray-dark text-sm font-semibold mb-2"
              >
                Бюджет (ориентировочно):
              </label>
              <input
                type="text"
                id="budget"
                className="shadow-sm appearance-none border border-apple-gray-light rounded-apple w-full py-3 px-4 text-apple-black leading-tight focus:outline-none focus:ring-2 focus:ring-apple-accent-blue focus:border-transparent transition duration-200"
                placeholder="Например: $5000 - $10000"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="deadline"
                className="block text-apple-gray-dark text-sm font-semibold mb-2"
              >
                Сроки (если есть):
              </label>
              <input
                type="text"
                id="deadline"
                className="shadow-sm appearance-none border border-apple-gray-light rounded-apple w-full py-3 px-4 text-apple-black leading-tight focus:outline-none focus:ring-2 focus:ring-apple-accent-blue focus:border-transparent transition duration-200"
                placeholder="Например: 2-3 месяца"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="details"
                className="block text-apple-gray-dark text-sm font-semibold mb-2"
              >
                Подробности проекта:
              </label>
              <textarea
                id="details"
                rows="6"
                className="shadow-sm appearance-none border border-apple-gray-light rounded-apple w-full py-3 px-4 text-apple-black leading-tight focus:outline-none focus:ring-2 focus:ring-apple-accent-blue focus:border-transparent transition duration-200"
                placeholder="Опишите ваш проект как можно подробнее"
                value={formData.details}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-apple-accent-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 shadow-apple-medium"
              >
                Отправить запрос
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Quote
