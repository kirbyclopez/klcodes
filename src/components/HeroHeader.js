import herobg from "./../assets/images/hero-bg.png";

const HeroHeader = (props) => {
  const sectionStyle = {
    backgroundImage: `url(${herobg})`,
  };

  return (
    <section
      id="home"
      className="bg-gray-50 dark:bg-gray-700"
      style={sectionStyle}
    >
      <div className="flex flex-col justify-center items-center h-screen min-h-max max-w-6xl mx-auto px-4">
        <h1 className="text-7xl sm:text-8xl font-semibold dark:text-white text-center">
          Hello there!
        </h1>
        <h3 className="text-2xl sm:text-3xl mt-6 md:mb-16 dark:text-gray-200 text-center">
          I am <span className="text-blue-600">Kirby Lopez</span>. I develop
          systems and websites.
        </h3>
      </div>
    </section>
  );
};

export default HeroHeader;
