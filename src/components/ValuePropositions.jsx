import React from "react";

const ValuePropositions = () => {
  const caseStudies = [
    {
      image: "/v1.webp",
      title: "Improve outcomes",

      solution:
        "According to a McKinsey study, 40% of companies say poor work quality leads to costly delays and rework. TealPot helps you avoid that by connecting you with pre-vetted, skilled blue-collar professionals.",
    },
    {
      image: "/v2.webp",
      title: "Invoice payments",

      solution:
        "TealPot provides a flexible and secure invoicing system that supports a variety of payment methods, giving you complete control over your transactions.",
    },
    {
      image: "/v3.webp",
      title: "Reduce costs",

      solution:
        "According to the U.S. Bureau of Labor Statistics, the average employer pays 30% more in total compensation for W-2 employees due to benefits, taxes, and overhead. With TealPot, businesses save up to 30% by hiring skilled workers instead of full-time workers, and up to 20% compared to traditional staffing agencies by avoiding hidden margins and markups.",
    },
    {
      image: "/v4.webp",
      title: "Respond quickly",

      solution:
        "A report from MBO Partners shows that 70% of businesses are turning to on-demand labor to fill skill gaps fast. With TealPot’s wide talent pool, you can respond to customer demands within hours —not days or weeks—boosting responsiveness and client satisfaction.",
    },
  ];
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Value Propositions
        </h2>
        <div className="w-[100%] h-[100%] m-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
          {caseStudies.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[380px]  min-h-[300px]   bg-white p-4  rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-start"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-contain rounded-xl"
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

export default ValuePropositions;
