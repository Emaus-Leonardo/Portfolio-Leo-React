import React, { useState } from "react";

function Categoria({ children }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, name]);
    } else {
      setSelectedCategories(selectedCategories.filter(category => category !== name));
    }
  };

  const filteredChildren = React.Children.toArray(children).filter(child =>
    selectedCategories.length === 0 || selectedCategories.some(category => child.props.category.includes(category))
  );

  return (
    <div className="flex justify-center items-center">
      <div className="fixed   left-0 z-20 flex justify-center items-center w-[200px] h-auto bg-[#e5e5e5] p-4 rounded-lg shadow-lg">
        <div className="flex flex-col items-start">
          <h2 className="mb-4 text-[15px] font-semibold">Selecione as Categorias:</h2>
          {["HTML", "JavaScript", "React", "Python", "CSS", "Tailwind"].map(category => (
            <div key={category} className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name={category}
                  checked={selectedCategories.includes(category)}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 px-4">
        {filteredChildren}
      </div>
    </div>
  );
}

export default Categoria;
