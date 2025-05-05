import React from 'react'
import { ArrowRight } from "lucide-react";
import Image from 'next/image';

const HeroSection = () => {
    const images = [
        { id: 1, url: "/HeroImage2.webp" },
        { id: 2, url: "/HeroImage2.webp" },
        { id: 3, url: "/HeroImage2.webp" },
      ];
      
  return (
    <>
<section className="min-h-screen flex flex-col  items-center justify-evenly px-6 md:px-16 py-10 lg:flex-row bg-gray-100">
  {/* Left Side - Text */}
  <div className="md:w-1/2 text-center md:text-left space-y-6 ">
    <h1 className="text-3xl mt-20 md:text-5xl lg:mt-0 font-bold text-gray-900  ">
     
Hire Trusted Blue-Collar Pros on a Project Basis Fast, Safe, and Free!
    </h1>
    import Image from 'next/image';

    <div className="flex items-center space-x-[-10px]">
  {images.map((img) => (
    <div key={img.id} className="w-[50px] h-[50px] relative rounded-full overflow-hidden border-2 border-white">
      <Image
        src={img.url}
        alt={`Image ${img.id}`}
        fill
        className="object-cover"
      />
    </div>
  ))}
  <p className="px-5 font-semibold text-black">824 companies joined us!</p>
</div>





<button className="flex items-center gap-2 text-black hover:text-gray-600 px-4 py-2 rounded transition">
View services in Dallas
  <ArrowRight className="w-4 h-4" />
</button>
  </div>


  <div className="lg:h-screen w-90  lg:w-1/4 flex justify-center items-center lg:bg-yellow-300">
  <img
    src="/HeroImage2.webp"
    alt="Hero Image"
    className="w-full h-full object-contain lg:object-cover lg:h-[60%]  lg:mr-20"
  />
</div>


</section>
<div className="w-full flex justify-center bg-gray-100">
<p className="max-w-7xl text-2xl text-center px-2 text-[#6b7296] ">
    At TealPot, we understand that the backbone of any thriving enterprise is a dedicated and skilled workforce.
    That is why we specialize in connecting businesses of all sizes and industries with top-tier blue-collar professionals.
    Our commitment to excellence ensures that you receive not only the manpower you need but also the quality and reliability you deserve.
  </p>
</div>

  </>
  )
}

export default HeroSection