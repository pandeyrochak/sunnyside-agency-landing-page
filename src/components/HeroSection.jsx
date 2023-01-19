import React, { useState } from "react";

const HeroSection = () => {
  const [showMobileNav, setshowMobileNav] = useState(false);
  const handleMobileNav = () => {
    setshowMobileNav(!showMobileNav);
  };

  return (
    <header className="h-screen w-full text-white">
      <nav className="container relative flex content-center justify-between py-4 px-4 md:px-0">
        <div className="font-semibold">sunnyside</div>
        {/* desktop navigation */}
        <div className="hidden content-center gap-8 md:flex">
          <ul className="flex flex-wrap content-center gap-4">
            <li className="h-fit cursor-pointer border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white">
              About
            </li>
            <li className="h-fit cursor-pointer border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white">
              Services
            </li>
            <li className="h-fit cursor-pointer border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white">
              Projects
            </li>
          </ul>
          <button className="rounded-full bg-white px-4 py-2 font-serif text-xs uppercase text-black hover:bg-opacity-40 hover:text-white">
            contact
          </button>
        </div>
        <div
          className={`block cursor-pointer md:hidden`}
          onClick={handleMobileNav}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-hamburger.svg`}
            alt=""
          />
        </div>
        {/* mobile navigation */}
        <div
          className={`absolute top-full left-1/2 block w-5/6 translate-y-2 -translate-x-1/2 bg-white p-8 text-center text-xs text-neutral-dark-blue md:hidden ${
            showMobileNav ? "block" : "hidden"
          }`}
        >
          <div className="absolute -top-3.5 -right-3.5 h-7 w-7 rotate-45 bg-white"></div>
          <div className="absolute -top-5 -right-10 h-10 w-10 bg-primary-sky-blue"></div>
          <ul className="flex flex-col flex-wrap content-center gap-4">
            <li className="h-fit">About</li>
            <li className="h-fit">Services</li>
            <li className="h-fit">Projects</li>
          </ul>
          <button className="mt-6 rounded-full bg-primary-yellow px-4 py-1 font-serif text-xs font-bold uppercase text-black">
            contact
          </button>
        </div>
      </nav>
      <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 flex-col items-center justify-center">
        <h1 className="text-center font-serif text-4xl font-bold uppercase lg:text-6xl">
          we are creatives
        </h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/icon-arrow-down.svg`}
          alt=""
          className="mt-16 animate-bounce-slow"
        />
      </div>
    </header>
  );
};

export default HeroSection;
