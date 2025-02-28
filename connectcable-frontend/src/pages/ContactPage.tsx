import React from "react";

export default function ContactPage() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
      <p className="mt-4 text-gray-700">
        Have questions or need a quote? Reach out to us at{" "}
        <a
          href="mailto:info@connectcables.com"
          className="text-blue-600 hover:underline"
        >
          info@connectcables.com
        </a>
        .
      </p>
    </div>
  );
}
