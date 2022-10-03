import { useEffect, useState } from "react";
import herobg from "./../assets/images/hero-bg.png";

const HeroHeader = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [grow, setGrow] = useState(false);

  useEffect(() => {
    setIsFocused(true);

    setTimeout(() => {
      setGrow(true);

      setTimeout(() => {
        setGrow(false);
      }, 700);
    }, 1500);
  }, []);

  const sectionStyle = {
    backgroundImage: `url(${herobg})`,
  };

  return (
    <section
      id="home"
      className="bg-gray-50 dark:bg-gray-700 pb-4"
      style={sectionStyle}
    >
      <div className="flex flex-col justify-center items-center h-screen min-h-max max-w-6xl mx-auto px-4">
        <h1
          className={`relative text-7xl sm:text-8xl font-semibold dark:text-white text-center transition-all duration-1000 ease-in-out ${
            isFocused
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-75 opacity-0 translate-y-36"
          }`}
        >
          <span
            className={`inline-block transition-all duration-700 ease-out ${
              grow ? "scale-110" : "scale-100"
            }`}
          >
            Hello there!
          </span>
        </h1>
        <h3
          className={`relative text-2xl sm:text-3xl mt-6 md:mb-16 dark:text-gray-200 text-center transition-all duration-1000 delay-500 ease-in-out ${
            isFocused
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-75 opacity-0 translate-y-36"
          }`}
        >
          I am <span className="text-blue-600">Kirby Lopez</span>. I develop
          systems and websites.
        </h3>
      </div>
    </section>
  );
};

export default HeroHeader;
