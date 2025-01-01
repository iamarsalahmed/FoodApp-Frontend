import Link from 'next/link';

export default function Contact() {
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

      {/* Contact Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-8">Have any questions or need support? Feel free to reach out to us.</p>
          <div className="flex justify-center gap-12">
            {/* Contact Info */}
            <div className="w-1/3">
              <h3 className="text-2xl font-semibold text-teal-600 mb-6">Our Contact Information</h3>
              <ul className="space-y-4 text-lg text-gray-600">
                <li>
                  <strong>Email:</strong> <a href="mailto:support@foodieapp.com" className="text-teal-600 hover:underline">support@foodieapp.com</a>
                </li>
                <li>
                  <strong>Phone:</strong> <a href="tel:+1234567890" className="text-teal-600 hover:underline">+1 (234) 567-890</a>
                </li>
                <li>
                  <strong>Location:</strong> 123 Foodie St, Gourmet City, FC 98765
                </li>
              </ul>
            </div>

            {/* Map and Location */}
            <div className="w-2/3">
              <h3 className="text-2xl font-semibold text-teal-600 mb-6">Find Us Here</h3>
              <div className="relative w-full h-80">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.google.com/maps/embed/v1/place?q=123+Foodie+St,+Gourmet+City,+FC+98765&key=YOUR_GOOGLE_MAPS_API_KEY"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Send Us A Message</h2>
          <p className="text-lg text-gray-600 mb-8">We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, use the form below.</p>
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-800 text-lg font-semibold mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Your Name" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-800 text-lg font-semibold mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Your Email" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-800 text-lg font-semibold mb-2">Message</label>
                  <textarea id="message" rows="6" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Your Message" required></textarea>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-800 text-lg font-semibold mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Message Subject" />
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300">
                    Send Message
                  </button>
                </div>
              </form>
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
