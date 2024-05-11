import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iyofnyc",
        "template_fseeha1",
        form.current,
        "yPZBQEZL7wTy7XUXV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          alert(
            "An error occurred while sending the email. Please try again later."
          );
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex flex-col sm:flex-row justify-center items-center sm:mx-auto gap-x-7  text-gray-400 sm:w-3/4 py-12 mx-4 sm:py-28 mb-8 rounded-md shadow-md shadow-lime-300"
    >
      <div className="flex flex-col justify-between items-center text-2xl sm:text-3xl font-extrabold sm:w-1/3">
        <span>
          Get in{" "}
          <span className=" sm:text-5xl font-extrabold text-orange-600">
            touch!
          </span>
        </span>
        <span>Contact me</span>
        <br />
        <span className=" sm:text-4xl font-bold text-lime-400 mb-3">
          +91 7006602813
        </span>
        <div className="flex justify-center items-center gap-x-4 text-2xl w-full ">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className="">
        <form className="flex flex-col " ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col sm:flex-row gap-x-2">
            <input
              type="text"
              name="user_name"
              className="  mb-3 py-3 px-4 bg-transparent font-semibold rounded-sm  text-gray-200 border border-gray-600 w-full"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className=" mb-3 py-3 px-4 bg-transparent  font-semibold  rounded-sm text-gray-200 border border-gray-600 w-full"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            name="user_subject"
            className=" mb-3 py-3 px-4 bg-transparent font-semibold  rounded-sm text-gray-200 border border-gray-600 w-full "
            placeholder="Subject"
          />
          <textarea
            name="message"
            className="mb-3 pb-14 px-4 bg-transparent  rounded-sm text-gray-200 border border-gray-600 w-full"
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            value="SEND A MESSAGE"
            className="w-full bg-lime-400 text-black cursor-pointer hover:bg-orange-500 hover:text-gray-300 transition duration-500 text-lg font-bold py-3 rounded-sm "
          />
          <span className=" text-gray-600 font-semibold">
            {done && "Thanks For Contacting Me"}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
