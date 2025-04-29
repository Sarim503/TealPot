import React from "react";

const caseStudies = [
  {
    title: "Construction Company Saves 40% on Hiring Costs",
    challenge:
      "A midsized construction company struggled with high turnover rates and excessive recruitment costs.",
    solution:
      "By using TealPot, they accessed pre-vetted bluecollar workers ondemand, reducing hiring time by 65%.",
    results: [
      "40% reduction in recruitment expenses",
      "50% faster project completion rates",
      "90% worker retention after six months",
    ],
  },
  {
    title: "Retail Chain Cuts Staffing Time in Half",
    challenge:
      "A growing retail chain faced seasonal hiring spikes that overwhelmed their HR department.",
    solution:
      "TealPot provided instant access to skilled temporary staff, ensuring stores were always adequately staffed.",
    results: [
      "50% reduction in time-to-hire",
      "30% lower overtime costs",
      "Improved customer satisfaction scores",
    ],
  },
  {
    title: "Logistics Firm Improves Worker Retention",
    challenge:
      "High driver turnover led to delivery delays and rising training costs for a logistics company.",
    solution:
      "TealPot’s vetted pool of drivers reduced onboarding time and improved job satisfaction.",
    results: [
      "60% lower turnover rate",
      "40% faster delivery times",
      "20% boost in client retention",
    ],
  },
];

const PricingCards = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
        Real Businesses, Real Results – Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {caseStudies.map((card, index) => (
            <div
              key={index}
              className=" w-[80%] h-auto bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow space-y-6"
            >
              <h3 className="text-xl font-bold mb-4 text-[#008080] ">{card.title}</h3>
              <p className="mb-2 text-gray-700">
                <strong>Challenge:</strong> {card.challenge}
              </p>
              <p className="mb-2 text-gray-700">
                <strong>Solution:</strong> {card.solution}
              </p>
              <div className="mt-4">
                <p className="font-medium mb-1">Results:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {card.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      <div className="flex justify-center items-center mt-8">
      <button className="text-[#008080] border-2 border-[#008080] hover:bg-[#008080] hover:text-white font-medium px-3 py-2 rounded-xl">
          Schedule a session
        </button>
        </div>
    </div>
  );
};

export default PricingCards;
