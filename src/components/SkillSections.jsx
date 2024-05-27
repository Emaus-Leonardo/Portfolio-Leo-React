import React from "react";

const SkillSection = ({ src, alt, title }) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center gap-3
       text-black w-[150px] h-[150px] bg-white rounded-2xl">
        <img src={src} alt={alt} />
        <h2 className="text-[15px] font-normal leading-[26px]">{title}</h2>
      </div>
    </div>
  );
};

export default SkillSection;
