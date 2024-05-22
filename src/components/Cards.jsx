import React from "react";

const Cards = ({ title, img, github, demo, category }) => {
  return (
    <section
      className={`flex flex-col justify-between items-center w-[270px] h-auto bg-white text-black rounded-xl p-1 shadow-lg ${category}`}
    >
      <div className="w-[260px] h-[150px] flex justify-center items-center rounded-t-lg overflow-hidden">
        <img src={img} className="object-cover w-full h-full" alt={title} />
      </div>

      <div className="flex flex-col justify-center items-start mt-4 w-full pl-6 py-3">
        <h2 className="font-primary font-bold text-[18px] mb-4">{title}</h2>

        <div className="flex items-start gap-4 w-full font-semibold">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-black px-3 py-1 rounded-md hover:bg-black hover:text-white transition duration-200"
          >
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-black px-5 py-1 rounded-md hover:bg-black hover:text-white transition duration-200"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cards;
