import React from 'react'

const Portfolio = () => {
  // Placeholder data for projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of project one.',
      imageUrl: 'https://via.placeholder.com/1920x1080', // Replace with actual project images
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of project two.',
      imageUrl: 'https://via.placeholder.com/1920x1080', // Replace with actual project images
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
    <div className="min-h-screen bg-apple-white text-apple-gray-dark py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-apple-black">
          Мое Портфолио
        </h1>

        {/* Fullscreen Projects */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-apple-black text-center">
            Проекты
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-apple-gray-light rounded-apple shadow-apple-medium overflow-hidden"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover" // Ensure images cover the area
                />
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-apple-black">
                    {project.title}
                  </h3>
                  <p className="text-lg text-apple-gray-dark">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-apple-black text-center">
            Кейсы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-apple-gray-light p-8 rounded-apple shadow-apple-light"
              >
                <h3 className="text-2xl font-semibold mb-4 text-apple-black">
                  {study.title}
                </h3>
                <p className="text-apple-gray-dark">{study.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Portfolio
