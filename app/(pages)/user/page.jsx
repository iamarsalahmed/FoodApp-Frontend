'use client'
import Link from 'next/link';

export default function UserPage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar Section */}
      <nav className="bg-teal-600 fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-semibold">
            Foodie<span className="text-teal-200">App</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/features" className="text-white hover:text-teal-200 transition duration-300">Features</Link>
            <Link href="#about" className="text-white hover:text-teal-200 transition duration-300">About Us</Link>
            <Link href="/contact" className="text-white hover:text-teal-200 transition duration-300">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 text-center max-w-lg px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Welcome to FoodieApp</h1>
          <p className="text-lg sm:text-xl mb-10">Join our platform to explore the best restaurants, order your favorite dishes, and enjoy exclusive deals!</p>
          <div className="flex gap-6 justify-center">
            <Link href="/user/login" className="bg-white text-teal-600 py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition duration-300">
              Login
            </Link>
            <Link href="/user/signup" className="bg-teal-400 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-teal-300 transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-teal-600 mb-6">Why Choose FoodieApp?</h2>
          <p className="text-gray-700 text-lg mb-12">Discover how our platform simplifies your dining experience with unique features and benefits.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Explore Restaurants</h3>
              <p className="text-gray-600">Find the best-rated restaurants in your area with just a few clicks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Exclusive Deals</h3>
              <p className="text-gray-600">Get access to members-only discounts and offers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Quick Payments</h3>
              <p className="text-gray-600">Pay easily with secure and fast payment options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Get Started Now</h2>
          <p className="text-lg mb-8">Create an account or log in to start exploring the best dining experiences near you.</p>
          <div className="flex gap-6 justify-center">
            <Link href="/signup" className="bg-white text-teal-600 py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition duration-300">
              Sign Up
            </Link>
            <Link href="/login" className="bg-white text-teal-600 py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition duration-300">
              Login
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
