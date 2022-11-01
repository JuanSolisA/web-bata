import React from "react";

const CardAboutUs = ({ imageSource, title, url, alt}) => {
  return (
    <div className=" bg-gray-400 border-8 shadow-2xl">
      <div className="flex">
        <div className="flex flex-col w">
          <a href={url}>
            <img src={imageSource} alt={alt} />
            <h2 className="text-center text-base md:text-xl md:font-semibold">{title}</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAboutUs;
