import React from 'react'

const Blog = () => {
  // Placeholder data for blog posts
  const posts = [
    {
      id: 1,
      title: 'Технические статьи о веб-разработке',
      summary: 'Краткое изложение статьи...',
      date: '11 мая 2025',
      link: '#', // Placeholder link
    },
    {
      id: 2,
      title: 'SEO и оптимизация скорости сайта',
      summary: 'Краткое изложение статьи...',
      date: '10 мая 2025',
      link: '#', // Placeholder link
    },
    // Add more posts here
  ]

  return (
    <div className="min-h-screen bg-apple-white text-apple-gray-dark py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-apple-black">
          Блог
        </h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-apple-gray-light p-8 rounded-apple shadow-apple-light flex flex-col"
            >
              <h2 className="text-2xl font-bold mb-3 text-apple-black">
                {post.title}
              </h2>
              <p className="text-apple-gray text-sm mb-4">{post.date}</p>
              <p className="text-apple-gray-dark mb-6 flex-grow">
                {post.summary}
              </p>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href={post.link}
                className="text-apple-accent-blue hover:underline font-semibold mt-auto"
              >
                Читать далее
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
