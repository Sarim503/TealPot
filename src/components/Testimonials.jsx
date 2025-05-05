import React from "react";

const Testimonials = () => {
  const caseStudies = [
    {
      image: "/t1.webp",
      title: "Brandon",

      solution:
        "Before TealPot, we relied on agencies to find skilled workers, but the process was slow and often unreliable. Now, we have immediate access to top workers and can hire precisely when we need them.",
    },
    {
      image: "/t2.webp",
      title: "Angelina",

      solution:
        "In the past, hiring blue-collar workers involved lengthy negotiations and high costs. With TealPot, we save time and money by hiring directly and paying only for completed work.",
    },
    {
      image: "/t3.webp",
      title: "Mark Smith",

      solution:
        "Previously, managing a fluctuating workforce was a challenge. TealPot’s on-demand platform gives us the flexibility to scale our team as needed, without the commitment of full-time hires..",
    },
  ];
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
        <h3 className="text-lg font-semibold text-[#4b5563] text-center mb-8">
          Here is what our clients have to say about us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center">
          {caseStudies.map((card, k) => (
            <div
              key={k}
              className="w-full max-w-[380px] h-auto min-h-[380px] bg-white p-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-start"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-96 object-cover rounded-xl"
              />

              <h3 className="text-xl font-bold mb-4 text-[#008080] ">
                {card.title}
              </h3>

              <p className="mb-2 text-gray-700">{card.solution}</p>
              <div className="mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
