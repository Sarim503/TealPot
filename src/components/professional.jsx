import React from "react";
import Image from 'next/image';

const Professional = () => {
  return (
<div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-6 md:space-y-0 py-10 p-4 bg-gray-100">

      <div className="w-[100%] md:w-[38%] p-2 space-y-6  ">
        <h1 className="text-5xl font-semibold">
          Are you a blue-collar professional?
        </h1>
        <div>
          <h3 className="font-semibold">
            Are you a skilled worker or a blue-collar service provider looking
            for a steady stream of job opportunities? TealPot connects you with
            businesses actively seeking your expertise. Here's why joining us is
            a game-changer:
          </h3>
        </div>
        <div>
          <h3 className="font-semibold">Consistent Work Opportunities</h3>
          <p>
            Gain access to a wide range of jobs from reputable companies looking
            for skilled professionals like you.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">No Paying for Leads</h3>
          <p>
            Unlike other platforms that charge workers to access job listings,
            TealPot connects you with jobs for free—no lead fees, no hidden
            costs!
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Secure Payments</h3>
          <p>
            No more chasing after payments! We ensure timely and reliable
            payments for all completed jobs.
          </p>
        </div>
        <p>
          Join TealPot today and start getting matched with high-quality job
          opportunities!
        </p>
        <button className="text-white border-2 border-[#008080] bg-[#008080] hover:text-white font-medium px-3 py-2 rounded-xl">
          Get Started
        </button>
      </div>

      
<div className="w-full lg:w-1/4 flex md:flex-col justify-center p-2">
  <Image
    src="/p1.webp"
    alt="Preview"
    width={400}
    height={300}
    className="w-full h-full rounded-lg object-cover"
  />
</div>
    </div>
  );
};

export default Professional;
