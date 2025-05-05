import React from "react";

const BusinessesChoose = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 bg-gray-100 ">
      <div className="w-[100%] md:w-[50%] space-y-8">
        <h1 className=" text-3xl md:text-7xl font-bold s">Why Businesses Choose TealPot</h1>
        <div>
          <h3 className="text-lg font-bold text-[#4b5563]">Comprehensive Background Checks</h3>
          <p className="text-lg text-[#6b7287] font-semibold">
            We prioritize your peace of mind. Every blue-collar worker in our
            network undergoes rigorous background screenings, ensuring they meet
            the highest standards of integrity and competence.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#4b5563] ">Diverse Talent Pool</h3>
          <p className="text-lg text-[#6b7287] font-semibold">
            From construction and manufacturing to logistics and maintenance,
            our extensive database encompasses a wide range of skilled
            professionals ready to meet your specific needs.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#4b5563]">Tailored Staffing Solutions</h3>
          <p className="text-lg text-[#6b7287] font-semibold">
            We recognize that each business is unique. Our team collaborates
            closely with you to understand your requirements and provide
            customized staffing solutions that align with your goals.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#4b5563]">Swift and Efficient Placement</h3>
          <p className="text-lg text-[#6b7287] font-semibold">
            Time is of the essence. Our streamlined processes ensure that you
            are matched with the right candidates promptly, minimizing downtime
            and maximizing productivity.
          </p>
        </div>
        <button className="text-[#008080] border-2 border-[#008080] hover:bg-[#008080] hover:text-white font-medium px-3 py-2 rounded-xl">
          Schedule a session
        </button>
      </div>

      <div className="w-full md:w-[30%] h-[300px] md:h-[680px] flex justify-center">
  <img src="f1.webp" className="w-full h-full object-cover" />
</div>



    </div>
  );
};

export default BusinessesChoose;
