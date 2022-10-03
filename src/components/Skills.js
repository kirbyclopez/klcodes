import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import skills_json from "./../assets/data/skills.json";

const Skills = () => {
  const techs = skills_json;
  const filters = ["all", "frontend", "backend", "other"];
  const [filter, setFilter] = useState("all");
  const [filteredTechs, setFilteredTechs] = useState([]);
  const [showTechs, setShowTechs] = useState([]);
  const [hideTechs, setHideTechs] = useState([]);

  const [isFocusedHead, setIsFocusedHead] = useState(false);
  const [isFocusedDiv, setIsFocusedDiv] = useState(false);
  const [isFocusedTechs, setIsFocusedTechs] = useState(false);

  const { ref: headRef, inView: isVisibleHead } = useInView();
  const { ref: divRef, inView: isVisibleDiv } = useInView();
  const { ref: techsRef, inView: isVisibleTechs } = useInView();

  useEffect(() => {
    if (!isFocusedHead && isVisibleHead) setIsFocusedHead(true);
  }, [isVisibleHead]);

  useEffect(() => {
    if (!isFocusedDiv && isVisibleDiv) setIsFocusedDiv(true);
  }, [isVisibleDiv]);

  useEffect(() => {
    if (!isFocusedTechs && isVisibleTechs) setIsFocusedTechs(true);
  }, [isVisibleTechs]);

  useEffect(() => {
    handleFilter("all");
  }, []);

  useEffect(() => {
    let filtTechs =
      filter !== "all"
        ? techs.filter((tech) => tech.category === filter)
        : techs;

    if (showTechs.length === 0) {
      setFilteredTechs([]);
      setTimeout(() => {
        setShowTechs(filtTechs);
      }, 200);
    } else {
      setTimeout(() => {
        setFilteredTechs(filtTechs);
      }, 200);
    }
  }, [showTechs]);

  const handleFilter = (filt) => {
    setFilter(filt);
    setShowTechs([]);

    setTimeout(() => {
      setHideTechs(
        filt !== "all" ? techs.filter((tech) => tech.category !== filt) : []
      );
    }, 200);
  };

  return (
    <section
      id="skills"
      className="bg-gray-50 dark:bg-gray-700 dark:text-white"
    >
      <div className="flex flex-col max-w-5xl mx-auto py-10 transition-all">
        <h1
          ref={headRef}
          className={`text-3xl text-center font-semibold mb-6 relative after:w-[50px] after:h-[3px] after:bg-blue-500 after:absolute after:bottom-[-15px] after:left-[calc(50%-25px)] transition-all duration-1000 ease-in-out ${
            isFocusedHead
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-28"
          }`}
        >
          Skills
        </h1>
        <div
          ref={divRef}
          className={`transition-all duration-1000 ease-in-out ${
            isFocusedDiv
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-28"
          }`}
        >
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
                  handleFilter(filt);
                }}
              >
                {filt.toUpperCase()}
                {filt === filter && <div className="h-[2px] bg-blue-500"></div>}
              </li>
            ))}
          </ul>
        </div>
        <div
          ref={techsRef}
          className={`grid grid-cols-2 gap-5 mt-10 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 px-6 xl:px-0 transition-all duration-1000 ease-in-out ${
            isFocusedTechs
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-28"
          }`}
        >
          {techs &&
            techs.map((tech, index) => {
              const image = require("./../assets/images/" + tech.img);

              const isVisible = showTechs.some((obj) => obj.name === tech.name);
              const isHidden = hideTechs.some((obj) => obj.name === tech.name);
              const inFilter = filteredTechs.some(
                (obj) => obj.name === tech.name
              );

              return (
                <div
                  key={index}
                  className={
                    "relative shadow-md grid justify-items-center py-8 px-2 bg-white rounded-md duration-200 dark:bg-gray-800 transition-all ease-out " +
                    (inFilter
                      ? "opacity-100 scale-100 "
                      : "opacity-0 scale-0 ") +
                    (!isVisible && isHidden ? "hidden" : "")
                  }
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
