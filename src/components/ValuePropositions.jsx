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
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
      Value Propositions
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {caseStudies.map((card, io) => (
        <div
          key={io}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 flex flex-col items-start"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-40 object-contain rounded-xl mb-4"
          />

          <h3 className="text-xl font-bold text-[#008080] mb-2">
            {card.title}
          </h3>

          <p className="text-gray-700">{card.solution}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ValuePropositions;
