import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto text-center text-white">
        &copy; {new Date().getFullYear()} Connect Cables. All rights reserved.
      </div>
    </footer>
  );
}
