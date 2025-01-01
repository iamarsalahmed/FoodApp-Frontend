import Link from 'next/link';

export default function Testimonials() {
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="testimonial-card bg-white shadow-lg rounded-lg p-8 max-w-xs mx-auto text-center transition-transform duration-300 hover:scale-105">
              <p className="text-lg font-semibold text-teal-600 mb-4">"Amazing experience!"</p>
              <p className="text-gray-600 mb-4">The food was delivered quickly, and everything was hot and fresh. Definitely my go-to delivery service!</p>
              <p className="text-sm text-gray-500">- Sarah W.</p>
            </div>
            <div className="testimonial-card bg-white shadow-lg rounded-lg p-8 max-w-xs mx-auto text-center transition-transform duration-300 hover:scale-105">
              <p className="text-lg font-semibold text-teal-600 mb-4">"Best food delivery app!"</p>
              <p className="text-gray-600 mb-4">I love the convenience and variety of restaurants. Plus, the app is super easy to use.</p>
              <p className="text-sm text-gray-500">- John D.</p>
            </div>
            <div className="testimonial-card bg-white shadow-lg rounded-lg p-8 max-w-xs mx-auto text-center transition-transform duration-300 hover:scale-105">
              <p className="text-lg font-semibold text-teal-600 mb-4">"Totally recommend!"</p>
              <p className="text-gray-600 mb-4">Fast service and always on time. I’ve tried many apps, but this one’s the best by far.</p>
              <p className="text-sm text-gray-500">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Download the app and start enjoying fast, fresh, and convenient food delivery today!</p>
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
}
