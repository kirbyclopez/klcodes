import profile from "./../assets/images/profile.png";
import resume from "./../assets/docs/resume.pdf";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const About = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { ref: divRef, inView: isVisible } = useInView();

  useEffect(() => {
    if (!isFocused && isVisible) setIsFocused(true);
  }, [isVisible]);

  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-800 dark:text-white overflow-hidden"
    >
      <div
        className={`flex flex-col md:flex-row justify-around items-center max-w-6xl mx-auto py-10 transition-all duration-1000 ease-in-out ${
          isFocused ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
        ref={divRef}
      >
        <h1 className="text-3xl font-semibold mb-6 md:hidden">About Me</h1>
        <div className="">
          <img src={profile} alt="Profile" className="h-80 max-w-none" />
        </div>
        <div className="flex flex-col w-full px-10 sm:px-24 md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl font-semibold mb-6 hidden md:block">
            About Me
          </h1>
          <p className="text-justify font-light mb-8 dark:text-gray-300">
            I'm Kirby, from General Trias, Cavite, Philippines, a Full-Stack
            Developer with a background in the payroll service industry. I have
            a serious passion for coding especially in web development. I've
            been working in the web development industry for 5 years. I believe
            that learning never stops, which is especially true in the
            fast-moving ever-changing tech industry, that's why I'm continuously
            discovering new things that I can use in my projects.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-sm font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 place-self-center md:place-self-start"
          >
            <a href={resume} download>
              DOWNLOAD CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
