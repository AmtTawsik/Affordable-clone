import React from "react";
import img from "../../Media/hero-illustration.webp";
import p1 from '../../Media/header-img/p1.png'
import p2 from '../../Media/header-img/p2.png'
import p3 from '../../Media/header-img/p3.png'
import p4 from '../../Media/header-img/p4.png'
import p5 from '../../Media/header-img/p5.png'

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover">
      <section className="w-11/12 mx-auto" id="Projects">
      <div class="grid py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="md:hidden lg:mt-0 lg:col-span-6 mb-10">
          <img className="w-8/12 mx-auto" src={img} alt="mockup" />
        </div>
        <div class="mr-auto place-self-center lg:col-span-6">
          <h2 className="md:text-8xl text-6xl text-white">High</h2>
          <h4 className="text-4xl md:text-5xl text-white my-2">Conversion Website for your Small Business!</h4>
          <p className="text-xl text-white">Attract & retain quality customers with a custom designed website, that does not break the bank.</p>
          <h4 className="text-4xl md:text-5xl text-white my-2">Special Covid-Recovery Pricing</h4>
          <h3 className="text-5xl text-red-500 md:text-6xl font-bold text-white mb-3">$300</h3>
          <button className="text-white bg-cyan-400 hover:bg-cyan-500 px-7 py-2.5 rounded-sm mb-3">Lock In This Price Now!</button>
        </div>
        <div class="hidden md:flex lg:mt-0 lg:col-span-6 ">
          <img src={img} alt="mockup" />
        </div>
        <div className="flex md:justify-center lg:col-span-12 mt-10">
            <div className="md:mx-3">
              <div className="flex justify-center mb-2"><img className="w-6/12 md:w-[55px]" src={p1} alt="" /></div>
              <p className="text-center text-sm md:text-lg text-white">Affordable</p>
            </div>
            <div className="md:mx-3">
              <div className="flex justify-center mb-2"><img className="w-6/12 md:w-[55px]" src={p2} alt="" /></div>
              <p className="text-center text-sm md:text-lg text-white">Custom Design</p>
            </div>
            <div className="md:mx-3">
              <div className="flex justify-center mb-2"><img className="w-6/12 md:w-[55px]" src={p3} alt="" /></div>
              <p className="text-center text-sm md:text-lg text-white">High Quality</p>
            </div>
            <div className="md:mx-3">
              <div className="flex justify-center mb-2"><img className="w-6/12 md:w-[55px]" src={p4} alt="" /></div>
              <p className="text-center text-sm md:text-lg text-white">24/7 Monitoring</p>
            </div>
            <div className="md:mx-3">
              <div className="flex justify-center mb-2"><img className="w-6/12 md:w-[55px]" src={p5} alt="" /></div>
              <p className="text-center text-sm md:text-lg text-white">Secure</p>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;
