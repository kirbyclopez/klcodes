import profile from "./../assets/images/profile.png";
import resume from "./../assets/docs/resume.pdf";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-800 dark:text-white">
      <div className="flex flex-row justify-around items-center max-w-6xl mx-auto py-10">
        <div className="">
          <img src={profile} alt="Profile" className="h-80 max-w-none" />
        </div>
        <div className="flex-col w-1/2">
          <h1 className="text-3xl font-semibold mb-6">About Me</h1>
          <p className="text-justify font-light mb-8 dark:text-gray-300">
            I'm Kirby, from General Trias, Cavite, Philippines, a Full-Stack
            Developer with a background in the payroll service industry. I have
            a serious passion for coding expecially in web development. I've
            been working in the web development industry for 5 years. I believe
            that learning never stops, which is especially true in the
            fast-moving ever-changing tech industry, that's why I'm continuously
            discovering new things that I can use in my projects.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-sm font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
