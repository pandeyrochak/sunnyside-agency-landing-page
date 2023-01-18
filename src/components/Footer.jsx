import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col  bg-primary-moderate-cyan py-10 text-center text-primary-desaturated-cyan">
      <h3 className="text-2xl font-extrabold">sunnyside</h3>
      <ul className="mt-4 mb-16 flex flex-wrap content-center justify-center gap-7">
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
