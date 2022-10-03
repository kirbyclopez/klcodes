import {
  Label,
  TextInput,
  Textarea,
  Button,
} from "flowbite-react/lib/esm/components";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [isFocusedHead, setIsFocusedHead] = useState(false);
  const [isFocusedSubHead, setIsFocusedSubHead] = useState(false);
  const [isFocusedForm, setIsFocusedForm] = useState(false);
  const [isFocusedSubHead2, setIsFocusedSubHead2] = useState(false);
  const [isFocusedLinks, setIsFocusedLinks] = useState(false);

  const { ref: headRef, inView: isVisibleHead } = useInView();
  const { ref: subHeadRef, inView: isVisibleSubHead } = useInView();
  const { ref: formRef, inView: isVisibleForm } = useInView();
  const { ref: subHeadRef2, inView: isVisibleSubHead2 } = useInView();
  const { ref: linksRef, inView: isVisibleLinks } = useInView();

  useEffect(() => {
    if (!isFocusedHead && isVisibleHead) setIsFocusedHead(true);
  }, [isVisibleHead]);

  useEffect(() => {
    if (!isFocusedSubHead && isVisibleSubHead) setIsFocusedSubHead(true);
  }, [isVisibleSubHead]);

  useEffect(() => {
    if (!isFocusedForm && isVisibleForm) setIsFocusedForm(true);
  }, [isVisibleForm]);

  useEffect(() => {
    if (!isFocusedSubHead2 && isVisibleSubHead2) setIsFocusedSubHead2(true);
  }, [isVisibleSubHead2]);

  useEffect(() => {
    if (!isFocusedLinks && isVisibleLinks) setIsFocusedLinks(true);
  }, [isVisibleLinks]);

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-700 dark:text-white"
    >
      <div className="flex flex-col max-w-5xl mx-auto py-10 items-center px-4 overflow-hidden">
        <h1
          ref={headRef}
          className={`text-3xl text-center font-semibold mb-6 relative after:w-[50px] after:h-[3px] after:bg-blue-500 after:absolute after:bottom-[-15px] after:left-[calc(50%-25px)] transition-all duration-1000 ease-in-out ${
            isFocusedHead
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-28"
          }`}
        >
          Contact Me
        </h1>
        <h3
          ref={subHeadRef}
          className={`mt-6 text-lg font-semibold text-center transition-all duration-1000 ease-in-out ${
            isFocusedSubHead
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          I'd love to hear from you. Drop me a message!
        </h3>
        <form
          ref={formRef}
          className={`flex flex-col gap-4 w-full max-w-[640px] mt-6 transition-all duration-1000 ease-in-out ${
            isFocusedForm
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name1" value="Name" />
            </div>
            <TextInput
              id="name1"
              type="text"
              placeholder="Enter your name"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email Address" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Enter your email address"
              required={true}
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a message..."
              required={true}
              rows={4}
            />
          </div>
          <div className="flex flex-row gap-2 justify-end">
            <Button type="button" color="light">
              Clear
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
        <h3
          ref={subHeadRef2}
          className={`mt-10 text-lg font-semibold transition-all duration-1000 ease-in-out ${
            isFocusedSubHead2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-28"
          }`}
        >
          or contact me through
        </h3>
        <div
          ref={linksRef}
          className={`flex flex-row gap-10 mt-10 transition-all duration-1000 ease-in-out ${
            isFocusedLinks
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-14"
          }`}
        >
          <a href="tel:+63273584718" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 hover:text-blue-500 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
          <a href="mailto:kirbyclopez@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 hover:text-blue-500 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/kirby-lopez-0b687276/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 hover:text-blue-500 transition-colors duration-200"
              fill="none"
              viewBox="0 0 448 512"
              stroke="currentColor"
              strokeWidth="30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
