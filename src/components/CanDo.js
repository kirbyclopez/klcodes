const CanDo = () => {
  return (
    <section className="bg-white dark:bg-gray-800 dark:text-white">
      <div className="flex flex-col max-w-6xl mx-auto py-10">
        <h1 className="text-3xl text-center font-semibold mb-6 relative after:w-[50px] after:h-[3px] after:bg-blue-500 after:absolute after:bottom-[-15px] after:left-[calc(50%-25px)]">
          What Can I Do?
        </h1>
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start w-full mt-6">
          <div className="group flex flex-col items-center p-7 rounded-lg hover:shadow-xl transition-shadow duration-300 sm:max-w-[350px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-500 duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            <h3 className="text-xl font-semibold py-7 group-hover:text-blue-500 duration-300 dark:text-white dark:group-hover:text-blue-500">
              Web Design
            </h3>
            <p className="text-lg font-light text-center leading-6 dark:text-gray-300">
              I can create the layout and design of a website based on the
              client's requirements and theme.
            </p>
          </div>
          <div className="group flex flex-col items-center p-7 rounded-lg hover:shadow-xl transition-shadow duration-300 sm:max-w-[350px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-500 duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold py-7 group-hover:text-blue-500 duration-300 dark:text-white dark:group-hover:text-blue-500">
              Web Development
            </h3>
            <p className="text-lg font-light text-center leading-6 dark:text-gray-300">
              I can develop a web applications that satisfies the requirements
              of the client ranging from simple single static page to complex
              web applications.
            </p>
          </div>
          <div className="group flex flex-col items-center p-7 rounded-lg hover:shadow-xl transition-shadow duration-300 sm:max-w-[350px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-500 duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold py-7 group-hover:text-blue-500 duration-300 dark:text-white dark:group-hover:text-blue-500">
              Responsive Design
            </h3>
            <p className="text-lg font-light text-center leading-6 dark:text-gray-300">
              I can develop a system/website that can work on any device,
              regarding the size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanDo;
