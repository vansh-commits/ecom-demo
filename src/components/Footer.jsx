function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TechDekho</h3>
              <p className="text-gray-300">Your one-stop shop for the latest tech gadgets and accessories.</p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/cart" className="text-gray-300 hover:text-white">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="/signin" className="text-gray-300 hover:text-white">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="/signup" className="text-gray-300 hover:text-white">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-300">
                <p>Vansh Malhotra</p>
                <p>Scaler School of Technology</p>
                <p>Email: dummyemail.techdekho.com</p>
                <p>Phone: 9310062968</p>
              </address>
            </div>
          </div>
  
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2025 TechDekho. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  