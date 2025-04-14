import React from "react";
import wireImage from "../assets/wireimage2.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          About Our Company
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our journey, expertise, and commitment to providing
          high-quality wire harness solutions.
        </p>
      </div>

      {/* Main Content: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#2563eb]">
            Premium Wire Harness Manufacturing Since 2005
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Based in the industrial hub of Gandhinagar, Gujarat, we specialize
            in designing and manufacturing high-quality wire harnesses for
            automotive, industrial, and consumer electronics applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our state-of-the-art facility combines advanced technology with
            skilled craftsmanship to deliver reliable, efficient cable
            assemblies that meet the highest industry standards.
          </p>
          {/* Bullet Points */}
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>ISO 9001 certified manufacturing facility</li>
            <li>Advanced testing equipment</li>
            <li>Skilled engineering team</li>
            <li>Custom wire harness solutions</li>
            <li>Automotive & industrial applications expertise</li>
            <li>Rapid prototyping capabilities</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200 max-w-lg w-full">
            <img
              src={wireImage}
              alt="Wire harness manufacturing"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
