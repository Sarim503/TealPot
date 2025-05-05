import React from "react";

const BusinessesChoose = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 py-10 bg-gray-100">
    {/* Left Content */}
    <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
      <h1 className="text-3xl md:text-6xl font-bold text-gray-900">
        Why Businesses Choose TealPot
      </h1>
  
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-700">Comprehensive Background Checks</h3>
          <p className="text-lg text-gray-600 font-semibold">
            We prioritize your peace of mind. Every blue-collar worker in our network undergoes rigorous background screenings, ensuring they meet the highest standards of integrity and competence.
          </p>
        </div>
  
        <div>
          <h3 className="text-lg font-bold text-gray-700">Diverse Talent Pool</h3>
          <p className="text-lg text-gray-600 font-semibold">
            From construction and manufacturing to logistics and maintenance, our extensive database encompasses a wide range of skilled professionals ready to meet your specific needs.
          </p>
        </div>
  
        <div>
          <h3 className="text-lg font-bold text-gray-700">Tailored Staffing Solutions</h3>
          <p className="text-lg text-gray-600 font-semibold">
            We recognize that each business is unique. Our team collaborates closely with you to understand your requirements and provide customized staffing solutions that align with your goals.
          </p>
        </div>
  
        <div>
          <h3 className="text-lg font-bold text-gray-700">Swift and Efficient Placement</h3>
          <p className="text-lg text-gray-600 font-semibold">
            Time is of the essence. Our streamlined processes ensure that you are matched with the right candidates promptly, minimizing downtime and maximizing productivity.
          </p>
        </div>
      </div>
  
      <button className="text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white font-medium px-5 py-2 rounded-xl transition duration-300">
        Schedule a session
      </button>
    </div>
  
    {/* Right Image */}
    <div className="w-full md:w-1/3 h-72 md:h-[680px] flex justify-center">
      <img src="f1.webp" alt="TealPot Feature" className="w-full h-full object-cover rounded-xl" />
    </div>
  </div>
  
  );
};

export default BusinessesChoose;
