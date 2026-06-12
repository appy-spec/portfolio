import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGitAlt } from "@fortawesome/free-brands-svg-icons";

import { faServer, faCode } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MongoDB",
  "MySQL",
];

const labelsSecond = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "JWT",
  "Microservices",
  "Mongoose",
  "API Integration",
];

const labelsThird = [
  "Java",
  "C",
  "Git",
  "GitHub",
  "Postman",
  "Render",
  "Vercel",
  "DSA",
  "OOPs",
  "System Design",
  "Database",
  "AWS Basics",
];

const skills = [
  {
    icon: faReact,
    title: "Full Stack Web Development",

    desc: "Building responsive and secure web applications using modern frontend and backend technologies. Experience creating complete applications with authentication, APIs, and scalable architecture.",

    tech: labelsFirst,
  },

  {
    icon: faServer,
    title: "Backend & Database Development",

    desc: "Developing server-side applications, building APIs, implementing authentication systems, and managing databases for reliable application performance.",

    tech: labelsSecond,
  },

  {
    icon: faGitAlt,
    title: "Tools & Software Engineering",

    desc: "Applying software engineering practices including deployment, version control, debugging, testing, and performance optimization.",

    tech: labelsThird,
  },
];

function Expertise() {
  return (
    <section id="expertise" className="px-6 pt-20 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black font-medium mb-8">Expertise</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="mb-6 text-black-500">
                <FontAwesomeIcon icon={skill.icon} size="3x" />
              </div>

              <h3 className="text-2xl font-medium mb-4">{skill.title}</h3>

              <p className="text-gray-600 leading-7 mb-6">{skill.desc}</p>

              <div className="flex flex-wrap gap-2">
                <span className="font-semibold text-sm w-full mb-1">
                  Tech Stack:
                </span>

                {skill.tech.map((label) => (
                  <span
                    key={label}
                    className="
                      rounded-full
                      bg-gray-100
                      px-4
                      py-2
                      text-sm
                      text-black-400
                    "
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
