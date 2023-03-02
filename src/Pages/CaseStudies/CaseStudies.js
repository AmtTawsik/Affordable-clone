import React from "react";
import HR from "../../Components/HR";

const CaseStudies = () => {
  return (
    <div className="bg-case-bg bg-cover">
      <div className="grid grid-cols-12 w-11/12 mx-auto py-32 text-white">
        <div className="md:col-span-6"></div>
        <div className="md:col-span-6 col-span-12 md:w-8/12">
          <h2 className="text-5xl font-bold">Peace of Mind for Business Owners</h2>
          <p className="text-xl my-4">
            Get unlimited support. Website updates when you want. Secured &
            monitored 24/7. A development team that is available – All the time!
          </p>
          <h3 className="text-4xl">Covid-Recovery Pricing</h3>
          <h2 className="text-5xl font-bold text-red-500 my-4">$300</h2>
          <button className="text-white bg-cyan-400 hover:bg-cyan-500 px-7 py-2.5 rounded-sm mb-3">
            Schedule A Free Consultation!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
