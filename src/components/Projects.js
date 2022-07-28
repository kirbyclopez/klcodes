import { Carousel } from "flowbite-react";
import todoappimg from "./../assets/images/todoapp.jpg";
import weatherappimg from "./../assets/images/weatherapp.jpg";

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
        <div className="h-[360px] md:h-[560px] xl:h-[560px] 2xl:h-[560px] mt-10">
          <Carousel slide={false}>
            <img src={todoappimg} alt="Todo App" />
            <img src={weatherappimg} alt="Weather App" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
