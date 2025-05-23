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
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
  <div className="w-full mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
      Real Businesses, Real Results – Case Studies
    </h2>

    <div className="w-full md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {caseStudies.map((card, ii) => (
        <div
          key={ii}
          className="w-full bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow space-y-4"
        >
          <h3 className="text-xl font-bold text-[#008080]">{card.title}</h3>

          <div>
            <p className="text-[#607184] font-semibold">Challenge:</p>
            <p className="text-[#6b7286]">{card.challenge}</p>
          </div>

          <div>
            <p className="text-[#607184] font-semibold">Solution:</p>
            <p className="text-[#6b7286]">{card.solution}</p>
          </div>

          <div>
            <p className="text-[#607184] font-semibold">Results:</p>
            <ul className="list-disc list-inside text-[#6b7286] space-y-1">
              {card.results.map((result, i) => (
                <li key={i}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="flex justify-center mt-10">
    <button className="text-white bg-[#008080] hover:bg-[#006666] border border-[#008080] font-medium px-6 py-3 rounded-xl transition">
      Schedule a free consultation today
    </button>
  </div>
</div>

  
  );
};

export default PricingCards;
