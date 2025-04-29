import React from 'react'
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    const images = [
        { id: 1, url: "/HeroImage2.webp" },
        { id: 2, url: "/HeroImage2.webp" },
        { id: 3, url: "/HeroImage2.webp" },
      ];
      
  return (
    <>
<section className="min-h-screen flex flex-col md:flex-row items-center justify-evenly px-6 md:px-16 py-10 bg-white">
  {/* Left Side - Text */}
  <div className="md:w-1/2 text-center md:text-left space-y-6 ">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900  ">
     
Hire Trusted Blue-Collar Pros on a Project Basis Fast, Safe, and Free!
    </h1>
    <div className="flex items-center space-x-[-10px]">
  {images.map((img, index) => (
    <img
      key={img.id}
      src={img.url}
      alt={`Image ${img.id}`}
      className="w-10 h-10 rounded-full border-2 border-white object-cover"
    />
  ))}
  <p className="px-5 font-semibold text-black">824 companies joined us!</p>
</div>


<button className="flex items-center gap-2 text-black hover:text-gray-600 px-4 py-2 rounded transition">
  Get Started
  <ArrowRight className="w-4 h-4" />
</button>
  </div>


  <div className="h-screen bg-yellow-300 w-1/4 flex justify-center items-center">
    <img src="/HeroImage2.webp" alt="Hero Image" className="w-full h-96 mr-20 object-cover" />
  </div>

</section>
<div className="flex justify-center">
  <p className="max-w-7xl text-center px-2 ">
    At TealPot, we understand that the backbone of any thriving enterprise is a dedicated and skilled workforce.
    That is why we specialize in connecting businesses of all sizes and industries with top-tier blue-collar professionals.
    Our commitment to excellence ensures that you receive not only the manpower you need but also the quality and reliability you deserve.
  </p>
</div>

  </>
  )
}

export default HeroSection