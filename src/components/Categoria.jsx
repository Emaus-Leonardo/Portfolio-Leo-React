import React, { useState } from "react";
import { motion } from "framer-motion";
import Smooth from "../SmoothTransition";
import { CgChevronLeft } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";


function Categoria({ children }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, name]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== name)
      );
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const filteredChildren = React.Children.toArray(children).filter(
    (child) =>
      selectedCategories.length === 0 ||
      selectedCategories.some((category) =>
        child.props.category.includes(category)
      )
  );

  return (
    <div className="flex justify-center items-center">
      <motion.div
        initial={{ opacity: 1, x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }} 
        exit={{ opacity: 1, x: "-100%" }}
        transition={Smooth}
        className={`fixed left-0 z-20 flex justify-center items-center w-[150px] 
      h-auto bg-white p-4 rounded-e-md shadow-2xl`}
      >
        <div className="flex flex-col items-start">
          <h2 className="mb-4 text-[15px] font-semibold">Technology:</h2>
          {["HTML", "CSS", "JavaScript", "React", "Python", "Tailwind"].map(
            (category) => (
              <div key={category} className="mb-2 ">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCheckboxChange}
                    className="mr-2 cursor-pointer"
                  />
                  {category}
                </label>
              </div>
            )
          )}
        </div>

        <div className="absolute flex justify-center items-center -right-5 ">
          <button
            onClick={toggleMenu}
            className="flex justify-center items-center w-[40px] h-[40px] pl-2 bg-white rounded-full"
          >
            {menuOpen ? <CgChevronLeft size={25} /> : <CgChevronRight size={25} />}
          </button>
        </div>
      </motion.div>

      <div className="flex h-screen p-8 pt-16">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {filteredChildren}
        </div>
      </div>
    </div>
  );
}

export default Categoria;
