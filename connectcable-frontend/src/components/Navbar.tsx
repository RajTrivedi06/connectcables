import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold text-xl">Connect Cables</div>
        <div className="space-x-4">
          <Link className="text-white hover:text-gray-300" to="/">
            Home
          </Link>
          <Link className="text-white hover:text-gray-300" to="/about">
            About
          </Link>
          <Link className="text-white hover:text-gray-300" to="/services">
            Services
          </Link>
          <Link className="text-white hover:text-gray-300" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
