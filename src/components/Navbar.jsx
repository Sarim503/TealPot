"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-100">
     <div className="flex justify-end">
  <button className="text-white bg-[#008080] m-2 border-2 border-[#008080]  hover:text-white font-medium px-3 py-2 rounded-xl md:hidden" onClick={()=>{alert("button clicked and there is no function exists")}} >
    Open App
  </button>
</div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
  <a href="/" className="flex items-center space-x-4">
    <img src="/Logo.png" className="w-10" />
    <p className="font-semibold text-4xl tracking-wider text-[#008080]">
      Tealpot
    </p>
  </a>
</div>


        <div className="hidden lg:flex space-x-6">
          <a href="#" className="text-black hover:text-[#008080]" onClick={()=>{alert("button clicked and there is no function exists")}}>
            Home
          </a>
          <a href="#" className="text-black hover:text-[#008080]" onClick={()=>{alert("button clicked and there is no function exists")}}>
            About
          </a>
          <a href="#" className="text-black hover:text-[#008080]" onClick={()=>{alert("button clicked and there is no function exists")}}>
            Available Work Orders
          </a>
          <a href="#" className="text-black hover:text-[#008080]" onClick={()=>{alert("button clicked and there is no function exists")}}>
            Contact
          </a>
          <a href="#" className="text-black hover:text-[#008080]" onClick={()=>{alert("button clicked and there is no function exists")}}>
            Blogs
          </a>
          <a href="#" className="text-black hover:text-[#008080]" onClick={()=>{alert("button clicked and there is no function exists")}}>
            Help
          </a>
          <a href="#" className="text-black hover:text-[#008080]" onClick={()=>{alert("button clicked and there is no function exists")}}>
            Resources
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
  <button className="hidden lg:inline-block text-[#008080] border-2 border-[#008080] hover:bg-[#008080] hover:text-white font-medium px-3 py-2 rounded-xl" onClick={()=>{alert("button clicked and there is no function exists")}}>
    Schedule a session
  </button>
  <button className="text-[#008080] border-2 border-[#008080] hover:bg-[#008080] hover:text-white font-medium px-3 py-2 rounded-xl" onClick={()=>{alert("button clicked and there is no function exists")}}>
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
