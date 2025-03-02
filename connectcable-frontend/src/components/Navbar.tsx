import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactButton = ({ to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="relative bg-[#2563eb] text-white font-medium text-[17px] 
        h-[2.8em] px-4 pr-12 rounded-[0.9em] flex items-center 
        shadow-[inset_0_0_1.6em_-0.6em_#714da6] hover:-translate-x-[0.05em] 
        hover:-translate-y-[0.05em] hover:shadow-[0.15em_0.15em_#5566c2] 
        active:translate-x-[0.05em] active:translate-y-[0.05em] 
        active:shadow-[0.05em_0.05em_#5566c2] transition-all duration-300"
    >
      Contact
      <div
        className="absolute right-1 ml-4 h-8 w-8 rounded-[0.7em] 
        shadow-[0.1em_0.1em_0.6em_0.2em_#7a8cf3] flex items-center justify-center"
      >
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          />
        </svg>
      </div>
    </button>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Market", path: "/market" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
  ]; // Removed Contact from navigation array

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="text-2xl font-extrabold text-black">
            Connect Cables
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium"
              >
                {item.title}
              </Link>
            ))}
            <ContactButton to="/contact" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block text-gray-700 hover:text-[#7079f0] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4">
              <ContactButton to="/contact" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
