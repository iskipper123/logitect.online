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
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
          Получить Оценку Стоимости
        </h1>

        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Расскажите о вашем проекте
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="projectType"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Тип проекта:
              </label>
              <input
                type="text"
                id="projectType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.projectType}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="budget"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Бюджет (ориентировочно):
              </label>
              <input
                type="text"
                id="budget"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="deadline"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Сроки (если есть):
              </label>
              <input
                type="text"
                id="deadline"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="details"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Подробности проекта:
              </label>
              <textarea
                id="details"
                rows="6"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.details}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
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
