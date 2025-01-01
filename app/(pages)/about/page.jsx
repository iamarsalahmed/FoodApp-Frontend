"use client";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-teal-600 fixed top-0 left-0 w-full z-50 shadow-lg">
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
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg sm:text-xl">
            Discover who we are and what drives us to deliver excellence every day.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At <span className="text-teal-600 font-bold">FoodieApp</span>, we are passionate about connecting people with the meals they love. Our mission is to make food delivery seamless, fast, and enjoyable while ensuring top-notch quality every step of the way.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-teal-700 shadow-lg rounded-lg p-8 max-w-sm text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Customer First</h3>
              <p className="text-white/90">
                We prioritize our customers by delivering exceptional service and meals that make them smile.
              </p>
            </div>
            <div className="bg-teal-700 shadow-lg rounded-lg p-8 max-w-sm text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-white/90">
                Constantly improving and embracing technology to offer the best solutions for food delivery.
              </p>
            </div>
            <div className="bg-teal-700 shadow-lg rounded-lg p-8 max-w-sm text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-white/90">
                Supporting eco-friendly practices to make a positive impact on our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8AjZgzH-nX-51el_14JWv00IEBWqiTGsIg&s"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-teal-600">CEO & Founder</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm text-center">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1636100249202-5NY98C6ASRIFFPO9GZTU/image-asset.octet-stream?format=500w"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-teal-600">CTO</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm text-center">
              <img
                src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Emily Brown</h3>
              <p className="text-teal-600">Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-lg mb-8">
            Experience the ease of food delivery and be part of a community that values quality, innovation, and sustainability.
          </p>
          <Link
            href="/contact"
            className="bg-white text-teal-600 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-gray-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Food Delivery App. All rights reserved.</p>
      </footer>
    </div>
  );
}
