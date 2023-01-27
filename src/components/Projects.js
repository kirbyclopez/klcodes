import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import portfolioappimg from "./../assets/images/portfolioapp.jpg";
import calculatorappimg from "./../assets/images/calculatorapp.jpg";
import CarouselItem from "./CarouselItem";

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
          <Carousel slide={true}>
            <CarouselItem
              appName="klcodes Portfolio"
              imgSrc={portfolioappimg}
              linkDemo="https://www.klcodes.com/"
              linkSrc="https://github.com/kirbyclopez/klcodes"
            />
            <CarouselItem
              appName="Calculator App"
              imgSrc={calculatorappimg}
              linkDemo="https://calculator-react.klcodes.com/"
              linkSrc="https://github.com/kirbyclopez/calculator-react-app"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
