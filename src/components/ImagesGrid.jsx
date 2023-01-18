import React from "react";

const ImagesGrid = (props) => {
  const { imagesArray } = props;
  return (
    <div className="grid grid-cols-4">
      {imagesArray.map((image) => (
        <div className="col-span-2 md:col-span-1">
          <img
            src={`${process.env.PUBLIC_URL}${image}`}
            alt=""
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesGrid;
