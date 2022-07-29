import React, { useState } from "react";
import logo from "./../assets/images/klcodes-logo-primary.png";
import { ThemeContext } from "./ThemeContext";

const Navigation = (props) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const links = ["home", "about", "skills", "projects", "contact"];
  const [section, setSection] = useState("home");
  const [navShow, setNavShow] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && !navActive) setNavActive(true);
    if (window.scrollY === 0 && navActive) setNavActive(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={
        "px-2 sm:px-4 py-2.5 fixed z-20 top-0 left-0 right-0 " +
        (navActive
          ? "bg-white dark:bg-gray-600 border-b border-gray-50 dark:border-gray-700"
          : "bg-transparent dark:bg-transparent")
      }
    >
      <div className="container flex justify-between items-center mx-auto max-w-6xl">
        <a href="#" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="klcodes Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            klcodes
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 dark:text-gray-400 dark:hover:bg-gray-700 md:hi transition duration-500 ease-in-out"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => {
              setNavShow(!navShow);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            "justify-between items-center w-full md:flex md:w-auto md:order-1 fixed top-[45px] left-0 right-0 md:relative md:top-auto " +
            (navShow ? "" : "hidden")
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg border border-gray-100 md:border-0 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {links &&
              links.map((link, index) => (
                <li key={index}>
                  <a
                    href={"#" + link}
                    onClick={() => {
                      setSection(link);
                      setNavShow(!navShow);
                    }}
                    className={
                      "block py-4 pr-4 pl-3 text-black bg-gray-50 rounded-lg hover:bg-gray-200 md:bg-transparent md:rounded-none md:hover:bg-transparent md:hover:border-b-2 md:hover:border-blue-500 md:text-black md:py-2 md:px-0 dark:text-white " +
                      (section === link
                        ? "md:border-b-2 md:border-blue-500 md:text-blue-500 md:dark:border-blue-200 md:dark:text-blue-200"
                        : "")
                    }
                  >
                    {link.toUpperCase()}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
