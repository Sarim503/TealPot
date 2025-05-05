import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Stayinformed = () => {
  const caseStudies = [
    {
      image: "/s1.webp",
      title: "Do Tenants Have to Pay for Plumbing Repairs?",
    
      slug: "construction-company-hiring-costs",
    },
    {
      image: "/s2.webp",
      title: "Are Healthcare Workers Considered Blue-Collar Workers?",
     
      slug: "retail-chain-staffing-time",
    },
    {
      image: "/s3.webp",
      title: "Logistics Firm Improves Worker Retention",
      
      slug: "logistics-firm-worker-retention",
    },
  ];
  
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 ">
      <div className="max-w-7xl mx-auto ">
      <div className="w-full ">
  <h3 className="w-[75%] mx-auto text-lg text-center mb-8 font-semibold text-[#555563]">
    Stay informed with industry trends, expert advice, and success stories
    from the world of blue-collar work. Check out our latest blog posts
  </h3>
</div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {caseStudies.map((card, index) => (
            <div
              key={index}
              className=" w-[100%] h-auto bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow space-y-6"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"

              />

              <h3 className="text-xl font-bold mb-4 text-[#008080] ">
                {card.title}
              </h3>

             
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

export default Stayinformed;
