import React, { useState, type ChangeEvent, type ReactElement, type ReactNode } from "react";
import { motion } from "framer-motion";
import Smooth from "../SmoothTransition";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const TECHNOLOGIES = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Python", "Tailwind"];

/** Children passed to <Categoria> carry the categories they belong to. */
export interface CategoryItemProps {
  category: string[];
  children?: ReactNode;
}

/** Wrapper that tags its content with categories so <Categoria> can filter it. */
export function CategoryItem({ children }: CategoryItemProps) {
  return <>{children}</>;
}

// Legacy technology filter used by the desktop-mode Projects window.
function Categoria({ children }: { children: ReactNode }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedCategories((prev) => (checked ? [...prev, name] : prev.filter((category) => category !== name)));
  };

  const toggleMenu = () => setMenuOpen((open) => !open);

  const filteredChildren = React.Children.toArray(children).filter((child) => {
    if (selectedCategories.length === 0) return true;
    const categories = (child as ReactElement<CategoryItemProps>).props.category ?? [];
    return selectedCategories.some((category) => categories.includes(category));
  });

  return (
    <div className="flex justify-center items-center">
      <motion.div
        initial={{ opacity: 1, x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        exit={{ opacity: 1, x: "-100%" }}
        transition={Smooth}
        className={`fixed left-0 z-20 flex justify-center items-center w-[150px]
      h-auto bg-white p-4 rounded-e-md shadow-xl`}
      >
        <div className="flex flex-col items-start">
          <h2 className="mb-4 text-[15px] font-semibold">Technology:</h2>
          {TECHNOLOGIES.map((category) => (
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
          ))}
        </div>

        <div className="absolute flex justify-center items-center -right-5 ">
          <button
            onClick={toggleMenu}
            className="flex justify-center items-center w-[40px] h-[40px]  pl-2 bg-white rounded-full"
          >
            {menuOpen ? <CgChevronLeft size={25} /> : <CgChevronRight size={25} />}
          </button>
        </div>
      </motion.div>

      <div className="flex h-screen md:h-full p-8 pt-16">
        <div className="flex flex-wrap justify-center items-center gap-4">{filteredChildren}</div>
      </div>
    </div>
  );
}

export default Categoria;
