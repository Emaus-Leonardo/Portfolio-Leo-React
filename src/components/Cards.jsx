import React from "react";

const Cards = ({ title, img, github, demo, category, summary }) => {
  return (
    <div
      className={`relative flex flex-col justify-between items-center w-[300px] h-[320px] bg-white text-black rounded-xl p-1 shadow-lg ${category} group`}
    >
      <div className="w-[290px] h-[200px] flex justify-center items-center rounded-t-lg overflow-hidden relative">
        <img src={img} className="object-cover w-full h-full" alt={title} />

        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-center break-words text-[13px] px-4">{summary}</p>
        </div>
        
      </div>

      <div className="flex flex-col justify-center items-start mt-4 w-full pl-6 py-3">
        <h2 className="font-primary font-bold text-[18px] mb-4">{title}</h2>

        <div className="flex items-start gap-4 w-full font-semibold">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-black px-3 py-1 rounded-md hover:bg-black hover:text-white transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-black px-5 py-1 rounded-md hover:bg-black hover:text-white transition-all duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
