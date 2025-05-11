import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-apple-gray-dark text-apple-white py-12">
      <div className="container mx-auto px-4 text-center text-sm text-apple-gray">
        <p>&copy; {new Date().getFullYear()} Logitect. Все права защищены.</p>
        {/* Optional: Add social media links or other footer navigation */}
        {/* <div className="mt-4">
          <a href="#" className="text-apple-gray hover:text-apple-white transition duration-200 mx-2">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="text-apple-gray hover:text-apple-white transition duration-200 mx-2">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
