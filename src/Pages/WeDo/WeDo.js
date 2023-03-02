import React from "react";
import p1 from '../../Media/do/p1.webp'

const WeDo = () => {
  return (
    <div style={{backgroundImage:`linear-gradient(180deg,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%), url(${p1})`, backgroundSize:'cover'}} id="Blogs">
      <div className="text-gray-50 w-11/12 mx-auto py-20">
        <div className="md:w-6/12">
        <h2 className="text-5xl font-bold">Why?</h2>
        <h2 className="text-5xl font-bold my-5">Why Not?</h2>
        <p className="text-xl">We are a veteran owned, heart-centered small business. During covid-19, we revisited & revamped our business model and built operational efficiency. We designed to enable our business partners thrive, during this pandemic.</p>
        <h4 className="text-3xl font-bold my-5">Our efficiencies = Your Gains!</h4>
        <p className="text-xl">Let’s Build a High Quality Website for Your Business Today!</p>
        <button className="text-white bg-cyan-400 hover:bg-cyan-500 px-7 py-2.5 rounded-sm my-5">Click Here For A Free Consultation!</button>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
