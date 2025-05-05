"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-100">
     <div className="flex justify-end">
  <button className="text-white bg-[#008080] m-2 border-2 border-[#008080]  hover:text-white font-medium px-3 py-2 rounded-xl md:hidden">
    Open App
  </button>
</div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/Logo.png" className="w-10" />
          <p
            className="font-semibold text-4xl tracking-wider"
            style={{ color: "#008080" }}
          >
            TealPot
          </p>
        </div>

        <div className="hidden lg:flex space-x-6">
          <a href="#" className="text-black hover:text-[#008080]">
            Home
          </a>
          <a href="#" className="text-black hover:text-[#008080]">
            About
          </a>
          <a href="#" className="text-black hover:text-[#008080]">
            Available Work Orders
          </a>
          <a href="#" className="text-black hover:text-[#008080]">
            Contact
          </a>
          <a href="#" className="text-black hover:text-[#008080]">
            Blogs
          </a>
          <a href="#" className="text-black hover:text-[#008080]">
            Help
          </a>
          <a href="#" className="text-black hover:text-[#008080]">
            Resources
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
  <button className="hidden lg:inline-block text-[#008080] border-2 border-[#008080] hover:bg-[#008080] hover:text-white font-medium px-3 py-2 rounded-xl">
    Schedule a session
  </button>
  <button className="text-[#008080] border-2 border-[#008080] hover:bg-[#008080] hover:text-white font-medium px-3 py-2 rounded-xl">
    Login/Signup
  </button>
</div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none "
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2  w-48 ">
          <a href="#" className="block text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-black">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-black">
            Services
          </a>
          <a href="#" className="block text-gray-700 hover:text-black">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
