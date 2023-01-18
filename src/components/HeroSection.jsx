import React from "react";

const HeroSection = () => {
  return (
    <header className="w-full text-white h-screen">
      <nav className="container flex content-center justify-between py-4 px-4 md:px-0">
        <div className="font-semibold">sunnyside</div>
        <div className="content-center gap-8 hidden md:flex">
          <ul className="flex content-center gap-4 flex-wrap">
            <li className="h-fit">About</li>
            <li className="h-fit">Services</li>
            <li className="h-fit">Projects</li>
          </ul>
          <button className="uppercase bg-white text-black rounded-full px-4 py-1 font-serif text-xs">
            contact
          </button>
        </div>
      </nav>
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 flex flex-col justify-center items-center">
        <h1 className="uppercase text-center text-4xl font-serif font-bold">
          we are creatives
        </h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/icon-arrow-down.svg`}
          alt=""
          className="mt-16"
        />
      </div>
    </header>
  );
};

export default HeroSection;
