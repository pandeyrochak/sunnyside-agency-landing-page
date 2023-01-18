import React from "react";

const SingleColumnView = (props) => {
  const { imageUrl, title, description, textColor } = props;
  // replace desktop in imageUrl with mobile
  const mobileImageUrl = imageUrl.replace("desktop", "mobile");
  // if window width is less than 768px, use mobileImageUrl
  const image = window.innerWidth < 768 ? mobileImageUrl : imageUrl;
  return (
    <div className="relative  col-span-2 md:col-span-1">
      <img
        src={`${process.env.PUBLIC_URL}${image}`}
        alt=""
        className="w-full object-cover"
      />
      <div
        className={`absolute bottom-10 flex flex-col flex-wrap content-center justify-center px-24 text-center ${textColor} `}
      >
        <h3 className="font-serif text-xl font-extrabold">{title}</h3>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};

const TwoColumnImageView = (props) => {
  const { imageUrl, title, description, imageUrl2, title2, description2 } =
    props;
  return (
    <div className="grid w-full grid-cols-2">
      <SingleColumnView
        imageUrl={imageUrl}
        title={title}
        description={description}
        textColor="text-primary-desaturated-cyan"
      />
      <SingleColumnView
        imageUrl={imageUrl2}
        title={title2}
        description={description2}
        textColor="text-primary-dark-blue"
      />
    </div>
  );
};

export default TwoColumnImageView;
