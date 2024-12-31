'use client'
import Link from 'next/link';

export default function JoinAsRestaurantOwner() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Navbar Section */}
      <nav className="bg-teal-600 fixed top-0 left-0 w-full z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-semibold">
            Foodie<span className="text-teal-200">App</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="#features" className="text-white hover:text-teal-200 transition duration-300">Features</Link>
            <Link href="#download" className="text-white hover:text-teal-200 transition duration-300">Download</Link>
            <Link href="#testimonials" className="text-white hover:text-teal-200 transition duration-300">Testimonials</Link>
            <Link href="#contact" className="text-white hover:text-teal-200 transition duration-300">Contact</Link>
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

      {/* Hero Section with a Professional Background and Focused Layout */}
      <section className="relative bg-cover bg-center h-[70vh]" style={{ backgroundImage: "url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Partner with FoodieApp</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-lg mx-auto">Take your restaurant digital and reach more customers. Join us and manage your restaurant effortlessly through our easy-to-use platform.</p>
          <div className="flex gap-6">
            <Link href="/admin/login" className="bg-teal-800 hover:bg-teal-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
              Login
            </Link>
            <Link href="/admin/signup" className="bg-teal-800 hover:bg-teal-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-teal-600 mb-6">Why Join as a Restaurant Owner?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center bg-teal-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Reach More Customers</h3>
              <p className="text-gray-700 text-lg">Our platform connects you with local food lovers. Increase your visibility and grow your customer base.</p>
            </div>
            <div className="flex flex-col items-center bg-teal-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Manage Orders Easily</h3>
              <p className="text-gray-700 text-lg">With our simple interface, managing orders, deliveries, and menu updates becomes a breeze.</p>
            </div>
            <div className="flex flex-col items-center bg-teal-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Get Real-Time Insights</h3>
              <p className="text-gray-700 text-lg">Monitor your sales, customer feedback, and more with real-time analytics to optimize your operations.</p>
            </div>
            <div className="flex flex-col items-center bg-teal-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Easy Setup</h3>
              <p className="text-gray-700 text-lg">Our platform is designed to be user-friendly. Setting up your restaurant profile takes only minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Get Started Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Ready to bring your restaurant to a new digital era? Join FoodieApp and start increasing your reach and sales with ease.</p>
          <div className="flex justify-center gap-6">
            <Link href="/admin/signup" className="bg-white text-teal-600 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-gray-200">
              Sign Up Now
            </Link>
            <Link href="/admin/login" className="bg-white text-teal-600 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-gray-200">
              Login to Dashboard
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
