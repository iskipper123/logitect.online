import React from 'react'

const Blog = () => {
  // Placeholder data for blog posts
  const posts = [
    {
      id: 1,
      title: 'Технические статьи о веб-разработке',
      summary: 'Краткое изложение статьи...',
      date: '11 мая 2025',
    },
    {
      id: 2,
      title: 'SEO и оптимизация скорости сайта',
      summary: 'Краткое изложение статьи...',
      date: '10 мая 2025',
    },
    // Add more posts here
  ]

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
          Блог
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-white">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.summary}</p>
              <a href="#" className="text-blue-400 hover:underline">
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
