import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Cards = ({ title, img, github, demo, category, summary, technologies }) => {
  return (
    <div className={`relative flex flex-col w-[300px] h-[350px] bg-white text-black rounded-xl shadow-elegant transition-all duration-500 hover:scale-[1.02] group overflow-hidden ${category} animate-fade-in`}>
      {/* Image Container */}
      <div className="relative w-full h-[250px] overflow-hidden rounded-t-xl">
        <img
          src={img}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          alt={title}
        />

        {/* Overlay with summary */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4">
          <p className="text-white text-center text-[13px] font-medium leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {summary}
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between flex-1 p-6">
        {/* Title */}
        <div className="mb-4">
          <h2 className="font-bold text-xl mb-2 text-black leading-tight group-hover:text-gray-800 transition-colors duration-300">
            {title}
          </h2>

          {/* Technologies */}
          {technologies && (
            <div className="flex flex-wrap gap-1 mb-3">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-md">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 bg-transparent border-2 border-black px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
          >
            <Github className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 bg-black text-white border-2 border-black px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
          >
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            Demo
          </a>
        </div>
      </div>

    </div>
  );
};

export default Cards;
