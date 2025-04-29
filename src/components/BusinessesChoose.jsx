import React from "react";

const BusinessesChoose = () => {
  return (
    <div className="flex justify-center items-center gap-4 px-4 py-10 ">
      <div className="w-1/2 space-y-10">
        <h1 className="text-2xl font-bold">Why Businesses Choose TealPot</h1>
        <div>
          <h3 className="font-semibold">Comprehensive Background Checks</h3>
          <p >
            We prioritize your peace of mind. Every blue-collar worker in our
            network undergoes rigorous background screenings, ensuring they meet
            the highest standards of integrity and competence.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Diverse Talent Pool</h3>
          <p>
            From construction and manufacturing to logistics and maintenance,
            our extensive database encompasses a wide range of skilled
            professionals ready to meet your specific needs.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Tailored Staffing Solutions</h3>
          <p>
            We recognize that each business is unique. Our team collaborates
            closely with you to understand your requirements and provide
            customized staffing solutions that align with your goals.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Swift and Efficient Placement</h3>
          <p>
            Time is of the essence. Our streamlined processes ensure that you
            are matched with the right candidates promptly, minimizing downtime
            and maximizing productivity.
          </p>
        </div>
        <button className="text-[#008080] border-2 border-[#008080] hover:bg-[#008080] hover:text-white font-medium px-3 py-2 rounded-xl">
          Schedule a session
        </button>
      </div>

      <div className="w-1/3 flex justify-center">
        <img src="HeroImage2.webp" className="w-full h-full" />
      </div>
    </div>
  );
};

export default BusinessesChoose;
