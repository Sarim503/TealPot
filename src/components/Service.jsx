"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: "Mechanics and Auto Repair",
    image: "/1a.webp",
  },
  {
    id: 2,
    title: "Electrical Services",
    image: "/1b.webp",
  },
  {
    id: 3,
    title: "Construction and Manufacturing",
    image: "/1c.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/1d.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/1e.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/1f.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/1g.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/1c.webp",
  },
];

export default function ServicesCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const distance = 420;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -distance : distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-4  py-12 bg-gray-100 flex justify-center">
      <div className="relative w-full lg:w-[80%]   ">
        <h2 className="text-4xl font-bold text-gray-900 mb-2 text-left ">
          Services We Offer
        </h2>
        <p className="text-[#6b7296] text-2xl  mb-6">
          Whatever your need is, we have the most professional & trusted
          on-demand workforce for you!
        </p>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden scrollbar-hide    "
        >
          {services.map((service) => (
           <div
           key={service.id}
           className="min-w-[400px] lg:min-w-[250px] w-[25%] rounded-lg shadow"
         >
           <Image
             src={service.image}
             alt={service.title}
             width={400}
             height={320}
             className="w-full h-80 object-cover rounded-md"
           />
           <p className="mt-2 text-left text-[#6b7296] text-lg font-medium truncate">
             {service.title}
           </p>
         </div>
          ))}
        </div>

        <div className="flex justify-end items-center mt-4 space-x-4">
          <button
            onClick={() => scroll("left")}
            className="bg-white border p-1 rounded shadow hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-black text-white border p-1 rounded shadow"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
