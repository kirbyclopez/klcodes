import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import todoappimg from "./../assets/images/todoapp.jpg";
import calculatorappimg from "./../assets/images/calculatorapp.jpg";

const Projects = () => {
  const [isFocusedHead, setIsFocusedHead] = useState(false);
  const [isFocusedDiv, setIsFocusedDiv] = useState(false);

  const { ref: headRef, inView: isVisibleHead } = useInView();
  const { ref: divRef, inView: isVisibleDiv } = useInView();

  useEffect(() => {
    if (!isFocusedHead && isVisibleHead) setIsFocusedHead(true);
  }, [isVisibleHead]);

  useEffect(() => {
    if (!isFocusedDiv && isVisibleDiv) setIsFocusedDiv(true);
  }, [isVisibleDiv]);

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-800 dark:text-white"
    >
      <div className="flex flex-col max-w-5xl mx-auto py-10 px-4">
        <h1
          ref={headRef}
          className={`text-3xl text-center font-semibold mb-6 relative after:w-[50px] after:h-[3px] after:bg-blue-500 after:absolute after:bottom-[-15px] after:left-[calc(50%-25px)] transition-all duration-1000 ease-in-out ${
            isFocusedHead
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-28"
          }`}
        >
          Projects
        </h1>
        <div
          ref={divRef}
          className={`h-[260px] sm:h-[340px] md:h-[420px] lg:h-[560px] mt-6 transition-all duration-1000 ease-in-out ${
            isFocusedDiv
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <Carousel slide={false}>
            <div className="relative">
              <img src={calculatorappimg} alt="Calculator App" />
              <div className="absolute right-20 bottom-14">
                <a
                  href="http://calculator.klcodes.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block -mt-1 mr-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  Demo
                </a>
                <a
                  href="https://github.com/kirbyclopez/calculator-app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block -mt-1 mr-1"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
