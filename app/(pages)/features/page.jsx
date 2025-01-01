import Link from 'next/link';

const Features = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">

      {/* Navbar Section */}
      <nav className="bg-teal-600 fixed top-0 left-0 w-full z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-semibold">
            Foodie<span className="text-teal-200">App</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/features" className="text-white hover:text-teal-200 transition duration-300">Features</Link>
            <Link href="/testimonials" className="text-white hover:text-teal-200 transition duration-300">
              Testimonials
            </Link>
            <Link href="/about" className="text-white hover:text-teal-200 transition duration-300">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-teal-200 transition duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">App Features</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Feature 1 */}
            <div className="feature-card bg-white shadow-lg rounded-lg p-8 w-80 text-center transition-transform duration-300 hover:scale-105">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m9-9H3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in minutes, so you can enjoy fresh meals without waiting long.</p>
            </div>
            {/* Feature 2 */}
            <div className="feature-card bg-white shadow-lg rounded-lg p-8 w-80 text-center transition-transform duration-300 hover:scale-105">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17l5-5-5-5M4 17l5-5-5-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Multiple Payment Options</h3>
              <p className="text-gray-600">Pay with various methods, including credit/debit cards, PayPal, and more for your convenience.</p>
            </div>
            {/* Feature 3 */}
            <div className="feature-card bg-white shadow-lg rounded-lg p-8 w-80 text-center transition-transform duration-300 hover:scale-105">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12l-4 4-4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Wide Restaurant Variety</h3>
              <p className="text-gray-600">Choose from a large selection of top-rated restaurants with a wide variety of cuisines.</p>
            </div>
            {/* Feature 4 */}
            <div className="feature-card bg-white shadow-lg rounded-lg p-8 w-80 text-center transition-transform duration-300 hover:scale-105">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20m10-10H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Real-Time Tracking</h3>
              <p className="text-gray-600">Track your order in real-time, so you always know when to expect your delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="download" className="py-20 bg-teal-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Download the app now to explore all the features and enjoy quick food delivery.</p>
          <div className="flex justify-center gap-6">
            <Link href="https://play.google.com" className="bg-white text-teal-600 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-gray-200">
              Google Play
            </Link>
            <Link href="https://www.apple.com/app-store/" className="bg-white text-teal-600 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-gray-200">
              App Store
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Food Delivery App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Features;
