import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Helpful = () => {
  const caseStudies = [
    {
      title: "Construction Company Saves 40% on Hiring Costs",
      slug: "construction-company-hiring-costs",
    },
    {
      title: "Retail Chain Cuts Staffing Time in Half",
      slug: "retail-chain-staffing-time",
    },
    {
      title: "Logistics Firm Improves Worker Retention",
      slug: "logistics-firm-worker-retention",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl text-center mb-8">
          Helpful Resources & Tools
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {caseStudies.map((card, index) => (
            <div
              key={index}
              className="w-[100%] h-[100%] bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#008080]">
                  {card.title}
                </h3>
                <p className="mb-2 text-gray-700">{card.solution}</p>
              </div>

              <Link href={`/case-studies/${card.slug}`}>
  <button className="mt-2  font-sm flex items-center">
    Details <FaArrowRight className="ml-2" />
  </button>
</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Helpful;
