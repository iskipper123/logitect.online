import React from 'react'

const Portfolio = () => {
  // Placeholder data for projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of project one.',
      imageUrl: 'https://via.placeholder.com/1920x1080',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of project two.',
      imageUrl: 'https://via.placeholder.com/1920x1080',
    },
    // Add more projects here
  ]

  // Placeholder data for case studies
  const caseStudies = [
    {
      id: 1,
      title: 'Case Study One',
      description: 'Summary of case study one.',
    },
    {
      id: 2,
      title: 'Case Study Two',
      description: 'Summary of case study two.',
    },
    // Add more case studies here
  ]

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
          Мое Портфолио
        </h1>

        {/* Fullscreen Projects */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-blue-400 text-center">
            Проекты
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-blue-400 text-center">
            Кейсы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {study.title}
                </h3>
                <p className="text-gray-300">{study.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Portfolio
