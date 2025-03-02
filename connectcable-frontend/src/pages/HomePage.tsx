import React from "react";
import { BoxReveal } from "../components/magicui/box-reveal";

export default function HomePage() {
  return (
    <div className="min-h-screen py-24">
      {/* Outer container shifted to the left */}
      <div className="max-w-6xl ml-8 px-4 sm:px-6 md:px-8 space-y-12">
        {/* Heading (widest) */}
        <BoxReveal boxColor="#2563eb" duration={0.5}>
          <h1 className="w-full text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-blue-600">
            Revolutionize Your Wiring with Next-Gen Cable Harness Solutions
          </h1>
        </BoxReveal>

        {/* Subheading (narrower) */}
        <BoxReveal boxColor="#2563eb" duration={0.75}>
          <p className="max-w-3xl text-left text-base sm:text-lg md:text-xl font-medium text-gray-700">
            Precision-engineered harnesses designed for maximum efficiency,
            safety, and reliability—across every industry.
          </p>
        </BoxReveal>

        {/* Intro Paragraph (narrowest) */}
        <BoxReveal boxColor="#2563eb" duration={1.0}>
          <div className="max-w-2xl text-left space-y-4 text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-gray-600">
            <p>
              At Connect Cables, we specialize in creating advanced cable
              harness solutions that power devices, systems, and machinery
              around the globe. Our expert team merges top-quality materials
              with decades of engineering experience to deliver harnesses that
              stand up to rigorous demands—from automotive to aerospace,
              consumer electronics to industrial applications.
            </p>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}
