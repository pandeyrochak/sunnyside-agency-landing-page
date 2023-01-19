import React from "react";

const TwoColumnView = (props) => {
  // destructuring props
  const { imageUrl, title, description, orderReverse, linkColor } = props;

  return (
    <div className="grid w-full grid-cols-2">
      <div className="col-span-2  md:col-span-1">
        <img
          src={`${process.env.PUBLIC_URL}${imageUrl}`}
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div
        className={`col-span-2 flex flex-col flex-wrap content-center justify-center px-10 py-16 md:col-span-1 md:content-start md:px-28  md:py-0 ${
          orderReverse ? "md:order-first" : ""
        }`}
      >
        <h3 className="font-serif text-4xl font-extrabold">{title}</h3>
        <p className="mt-8">{description}</p>
        <button
          className={`learn-more-btn mt-8
            font-serif font-extrabold uppercase
            transition-all duration-300 ease-in-out
            before:bg-primary-yellow
            hover:before:h-full
            `}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default TwoColumnView;
