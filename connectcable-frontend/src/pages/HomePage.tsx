import React from "react";
import { BoxReveal } from "../components/magicui/box-reveal";
import wireHarness from "../assets/wireharnessimage.png";

export default function HomePage() {
  return (
    <div className="min-h-screen py-24">
      {/* Outer container for spacing and layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        {/* Heading */}
        <BoxReveal boxColor="#2563eb" duration={0.5}>
          <h1 className="w-full text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-blue-600">
            Revolutionize Your Wiring with Next-Gen Cable Harness Solutions
          </h1>
        </BoxReveal>

        {/* Subheading */}
        <BoxReveal boxColor="#2563eb" duration={0.75}>
          <p className="max-w-3xl text-left text-base sm:text-lg md:text-xl font-medium text-gray-700">
            Precision-engineered harnesses designed for maximum efficiency,
            safety, and reliability—across every industry.
          </p>
        </BoxReveal>

        {/* Paragraph and Right-Aligned Image with Curved Edges & Graphics */}
        <BoxReveal boxColor="#2563eb" duration={1.0}>
          <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-8">
            {/* Text on the Left */}
            <div className="md:w-1/2 max-w-2xl text-left space-y-4 text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-gray-600">
              <p>
                At Connect Cables, we specialize in creating advanced cable
                harness solutions that power devices, systems, and machinery
                around the globe. Our expert team merges top-quality materials
                with decades of engineering experience to deliver harnesses that
                stand up to rigorous demands—from automotive to aerospace,
                consumer electronics to industrial applications.
              </p>
            </div>

            {/* Image Container */}
            <div className="relative md:w-1/2">
              {/* Background shapes */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full transform -rotate-6 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-100 rounded-full transform rotate-6 -z-10" />

              {/* Wire Harness Image */}
              <img
                src={wireHarness}
                alt="Wire Harness"
                className="rounded-3xl shadow-xl max-w-full"
              />
            </div>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}
