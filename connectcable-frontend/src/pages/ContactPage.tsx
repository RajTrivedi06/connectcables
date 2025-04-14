import React, { useState } from "react";

export default function ContactPage() {
  // Simple local state to simulate form submission
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data or send to server here
    console.log("Form submitted:", formData);
    // Reset form after submission if you like
    setFormData({
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          Get In Touch
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our wire harness solutions? Contact us today to
          discuss your requirements or request a quote.
        </p>
      </div>

      {/* Main Content: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Contact Info & Map (4 Cards) */}
        <div className="flex flex-col space-y-4">
          {/* Card 1: Location */}
          <div className="p-5 bg-white shadow-sm rounded-2xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Our Location
            </h2>
            <p className="text-gray-700 leading-relaxed">
              E-80, GIDC Rd, Sector 26, <br />
              Gandhinagar, Gujarat 382028, India
            </p>
          </div>

          {/* Card 2: Call Us */}
          <div className="p-5 bg-white shadow-sm rounded-2xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Call Us
            </h2>
            <p className="text-gray-700">+91 99798 46166</p>
          </div>

          {/* Card 3: Email Us */}
          <div className="p-5 bg-white shadow-sm rounded-2xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Email Us
            </h2>
            <p className="text-gray-700">
              <a
                href="mailto:info@gandhinagarcables.com"
                className="text-blue-600 hover:underline"
              >
                info@gandhinagarcables.com
              </a>
            </p>
          </div>

          {/* Card 4: Map */}
          <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-200">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.6518751311173!2d72.633561!3d23.255751899999996!2m3!1f0!2f0!3f0!3m2!
                  1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2c0a24c8d83d%3A0xbd03375e53b749cc!
                  2sConnect%20Cables!5e0!3m2!1sen!2sus!4v1744602394435!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="p-6 bg-white shadow-sm rounded-2xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-xl px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-xl px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-xl px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-xl px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Tell us about your requirements"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-[#2563eb] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
