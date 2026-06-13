import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import instaStay from "../assets/images/instaStay.png";
import childDiary from "../assets/images/childDiary.png";
import hdNotes from "../assets/images/hdNotes.png";
import sigmaGpt from "../assets/images/sigmaGpt.png";
import secureOps from "../assets/images/secureOps.png";

const projects = [
  {
    image: instaStay,

    title: "Insta Stay",

    github: "https://github.com/appy-spec/InstaStay",

    live: "https://insta-stay.onrender.com",

    desc: "Hotel booking inspired full-stack platform with authentication, property management, reviews, Cloudinary uploads, and Mapbox integration.",

    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "JavaScript",
      "MVC",
      "Cloudinary",
      "Mapbox",
    ],
  },

  {
    image: childDiary,

    title: "Child Diary",

    github: "https://github.com/appy-spec/Child_Dairy",

    live: "https://child-dairy.onrender.com",

    desc: "Role-based school management platform with JWT authentication, email verification, announcements, homework, and dashboard features.",

    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Axios",
      "Nodemailer",
      "JavaScript",
      "EJS",
      "MVC",
    ],
  },

  {
    image: hdNotes,

    title: "Hd Notes",

    github: "https://github.com/appy-spec/Hd-Notes",

    live: "https://hd-notes-frontend.onrender.com",

    desc: "Designed and developed a MERN-based notes application allowing users to create, edit, and organize high-quality notes with image integration and an intuitive user experience.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "JWT",
      "REST APIs",
      "Nodemailer",
      "Bcrypt",
    ],
  },

  {
    image: sigmaGpt,

    title: "Sigma GPT",

    github: "https://github.com/appy-spec/Sigma_Gpt",

    live: "https://sigma-gpt-cyan.vercel.app",

    desc: "Built a full-stack AI-powered chat platform using the MERN stack and OpenAI API, enabling real-time conversations, persistent chat storage, and seamless access to previous interactions.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "JavaScript",
      "REST APIs",
      "Bootstrap",
    ],
  },

  {
    image: secureOps,

    title: "Secure Ops",

    github: "https://github.com/appy-spec/secureOps",

    live: "",

    desc: "Designed and developed an endpoint security monitoring platform that collects Linux host data, installed packages, and CIS benchmark results, delivering centralized visibility through a real-time web dashboard.",

    tech: [
      "Go",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Linux",
      "AWS EC2",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 pt-20 mt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black font-medium mb-12 text-center text-underline">
          Projects
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-lg
                transition-all
                duration-300
                hover:shadow-2xl
              "
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      hover:cusor-pointer
                    "
                  />
                </div>
              </a>

              <div className="p-6">
                <div className="flex items-center">
                  <h2 className="text-2xl font-medium mr-3">{project.title}</h2>
                  <div className="flex gap-2 ">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 hover:cursor-pointer"
                    >
                      <GitHubIcon />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 hover:cursor-pointer"
                    >
                      <OpenInNewIcon />
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 leading-7">{project.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-gray-100
                        px-3
                        py-2
                        text-sm
                        text-black-400
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
