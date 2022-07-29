import React, { useState } from "react";
import skills_json from "./../assets/data/skills.json";

const Skills = () => {
  const techs = skills_json;
  const filters = ["all", "frontend", "backend", "other"];
  const [filter, setFilter] = useState("all");
  const [filteredTechs, setFilteredTechs] = useState(techs);

  const handleFilter = (e, filt) => {
    setFilter(filt);
    let filtTechs =
      filt !== "all" ? techs.filter((tech) => tech.category === filt) : techs;
    setFilteredTechs(filtTechs);
  };

  return (
    <section
      id="skills"
      className="bg-gray-50 dark:bg-gray-700 dark:text-white"
    >
      <div className="flex flex-col max-w-5xl mx-auto py-10">
        <h1 className="text-3xl text-center font-semibold mb-6 relative after:w-[50px] after:h-[3px] after:bg-blue-500 after:absolute after:bottom-[-15px] after:left-[calc(50%-25px)]">
          Skills
        </h1>
        <div>
          <ul className="max-w-[340px] px-5 mt-6 mx-auto flex justify-between">
            {filters.map((filt, index) => (
              <li
                key={index}
                className={
                  "text-xs cursor-pointer transition-colors duration-300 dark:text-white " +
                  (filt === filter
                    ? "text-blue-500 pointer-events-none hover:text-sec dark:text-blue-500"
                    : "")
                }
                onClick={(e) => {
                  handleFilter(e, filt);
                }}
              >
                {filt.toUpperCase()}
                {filt === filter && <div className="h-[2px] bg-blue-500"></div>}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 px-6 xl:px-0">
          {filteredTechs &&
            filteredTechs.map((tech, index) => {
              const image = require("./../assets/images/" + tech.img);

              return (
                <div
                  key={index}
                  className="relative shadow-md grid justify-items-center py-8 px-2 bg-white rounded-md transition-colors duration-300 dark:bg-gray-800"
                >
                  <img
                    src={image}
                    alt="HTML"
                    className="h-[90px] mb-5 false "
                  />
                  <p className="absolute bottom-2 text-sm text-sec">
                    {tech.name}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
