import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import avtar from "../assets/images/avtar.jfif";
import bg from "../assets/images/background.png";

function Main() {
  return (
    <section
      id="main"
      className="
        relative
        px-6
        pt-43
        overflow-hidden
        flex
        items-center
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          -z-10
        "
      >
        <img
          src={bg}
          alt="background-image"
          className="
            w-full
            h-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-white/45
          "
        />
      </div>

      <div
        className="
          max-w-6xl
          mx-auto
          lg:mr-61
          w-full
          pr-5
          pl-1
          grid
          lg:grid-cols-2
          items-center
          gap-10
        "
      >
        {/* LEFT */}
        <div
          className="
            flex
            justify-center
            lg:justify-end
          "
        >
          <div
            className="
              h-[230px]
              w-[230px]

              md:h-[260px]
              md:w-[260px]

              rounded-full
              overflow-hidden

              border
              border-black/20

              shadow-2xl
              hover:shadow-5xl
              transition 300
            "
          >
            <img
              src={avtar}
              alt="Rahul Patel"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            flex-col
            justify-center
            text-black
            text-center
            md:text-center
            lg:text-left
          "
        >
          <p
            className="
              text-blue-800
              text-lg
              mb-4
            "
          >
            Hello, I&apos;m
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-medium
            "
          >
            Rahul Patel
          </h1>

          <h2
            className="
              mt-5
              text-3xl
              text-black-600
              font-light
            "
          >
            Full Stack Developer
          </h2>

          <p
            className="
              mt-8
              text-black-500
              max-w-3xl
              text-lg
            "
          >
            Computer Engineering graduate passionate about building scalable web
            applications, backend systems, and AI-powered solutions using modern
            technologies.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-10
              justify-center
              lg:justify-start
            "
          >
            <a
              href="#projects"
              className="
                px-7
                py-3
                rounded-full
                bg-black
                text-white
                hover:scale-90
                transition
              "
            >
              View Projects
            </a>

            <a
              href="/RahulPatel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-7
                py-3
                rounded-full
                border
                border-black-600
                bg-black
                text-white
                hover:scale-90
                transition
              "
            >
              Resume
            </a>
          </div>

          {/* Icons */}
          <div
            className="
              flex
              gap-3
              mt-10
              justify-center
              lg:justify-start
              text-black
            "
          >
            <a
              href="https://github.com/appy-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black-800 hover:cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <GitHubIcon fontSize="large" />
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-patel-70265126b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-800 hover:cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <LinkedInIcon fontSize="large" />
            </a>

            <a
              href="https://leetcode.com/u/RahulP74"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-orange-500 hover:cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <SiLeetcode size={28} />
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/rahulpateln1a?tab=activity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-green-600 hover:cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <SiGeeksforgeeks size={36} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
