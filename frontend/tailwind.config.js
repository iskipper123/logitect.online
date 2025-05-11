/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'apple-white': '#F5F5F7', // Светло-серый, почти белый
        'apple-gray-light': '#E8E8ED', // Светло-серый
        'apple-gray': '#86868B', // Средне-серый
        'apple-gray-dark': '#1D1D1F', // Темно-серый, почти черный
        'apple-black': '#000000', // Черный
        'apple-accent-blue': '#007AFF', // Яркий синий акцент
        'apple-accent-metallic': '#A1A7B2', // Металлический серый
      },
      boxShadow: {
        'apple-light':
          '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'apple-medium':
          '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
      },
      borderRadius: {
        apple: '10px', // Скругленные углы в стиле Apple
      },
    },
  },
  plugins: [],
}
