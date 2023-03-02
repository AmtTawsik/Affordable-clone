import React from "react";
import HR from "../../Components/HR";
import p1 from "../../Media/Benifits/p1.png";
import p2 from "../../Media/Benifits/p2.png";
import p3 from "../../Media/Benifits/p3.png";
import p4 from "../../Media/Benifits/p4.png";
import p5 from "../../Media/Benifits/p5.png";

const Benefits = () => {
  return (
    <div className="py-28" id="How">
      <h2 className="text-6xl font-bold text-center">Benefits & Features</h2>
      <div className="flex md:justify-center lg:col-span-12 mt-10 ">
        <div className="md:mx-10 mx-2">
          <div className="flex justify-center mb-4">
            <img className="w-6/12 md:w-[100px]" src={p1} alt="" />
          </div>
          <p className="text-center md:text-lg text-sm">SEO Ready</p>
        </div>
        <div className="md:mx-10 mx-2">
          <div className="flex justify-center mb-4">
            <img className="w-6/12 md:w-[100px]" src={p2} alt="" />
          </div>
          <p className="text-center md:text-lg text-sm">Search Engine Ready</p>
        </div>
        <div className="md:mx-10 mx-2">
          <div className="flex justify-center mb-4">
            <img className="w-6/12 md:w-[100px]" src={p3} alt="" />
          </div>
          <p className="text-center md:text-lg text-sm">Blog Ready</p>
        </div>
        <div className="md:mx-10 mx-2">
          <div className="flex justify-center mb-4">
            <img className="w-6/12 md:w-[100px]" src={p4} alt="" />
          </div>
          <p className="text-center md:text-lg text-sm">Highly Integratable</p>
        </div>
        <div className="md:mx-10 mx-2">
          <div className="flex justify-center mb-4">
            <img className="w-6/12 md:w-[100px]" src={p5} alt="" />
          </div>
          <p className="text-center md:text-lg text-sm">Ad Friendly</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
