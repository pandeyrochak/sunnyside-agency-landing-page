import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col  bg-primary-moderate-cyan text-center text-primary-desaturated-cyan py-10">
      <h3 className="text-2xl font-extrabold">sunnyside</h3>
      <ul className="flex flex-wrap content-center justify-center gap-7 mt-4 mb-16">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <ul className="flex flex-wrap content-center justify-center gap-7">
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-facebook.svg`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-instagram.svg`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-twitter.svg`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-pinterest.svg`}
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
