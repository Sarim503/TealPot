"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Mechanics and Auto Repair",
    image: "/HeroImage2.webp",
  },
  {
    id: 2,
    title: "Electrical Services",
    image: "/HeroImage2.webp",
  },
  {
    id: 3,
    title: "Construction and Manufacturing",
    image: "/HeroImage2.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/HeroImage2.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/HeroImage2.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/HeroImage2.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/HeroImage2.webp",
  },
  {
    id: 4,
    title: "Landscaping & Grounds keeping",
    image: "/HeroImage2.webp",
  },
];

export default function ServicesCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const distance = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -distance : distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-12 py-12 bg-white flex justify-center">
  <div className="relative w-[80%]">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">Services We Offer</h2>
    <p className="text-blue-700 font-medium mb-6">
      Whatever your need is, we have the most professional & trusted on-demand workforce for you!
    </p>

    <div
      ref={scrollRef}
      className="flex gap-4 overflow-hidden scrollbar-hide"
    >
      {services.map((service) => (
        <div
          key={service.id}
          className="min-w-[250px] flex-shrink-0 bg-white rounded-lg shadow p-2"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover rounded-md"
          />
          <p className="mt-2 text-center text-sm font-medium">{service.title}</p>
        </div>
      ))}
    </div>

    <div className="flex justify-end items-center mt-4 space-x-4">
      <button onClick={() => scroll("left")} className="bg-white border p-1 rounded shadow hover:bg-gray-100">
        <ChevronLeft size={18} />
      </button>
      <button onClick={() => scroll("right")} className="bg-white border p-1 rounded shadow hover:bg-gray-100">
        <ChevronRight size={18} />
      </button>
    </div>
  </div>
</div>

  );
}
