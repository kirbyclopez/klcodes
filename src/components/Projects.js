import { Carousel } from "flowbite-react";

const Projects = (props) => {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-800 dark:text-white"
    >
      <div className="flex flex-col max-w-5xl mx-auto py-10">
        <h1 className="text-3xl text-center font-semibold mb-6 relative after:w-[50px] after:h-[3px] after:bg-blue-500 after:absolute after:bottom-[-15px] after:left-[calc(50%-25px)]">
          Projects
        </h1>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
