import WorkIcon from "@mui/icons-material/Work";

function LearningPath() {
  const experiences = [
    {
      year: "July 2021",
      title: "Started B.Tech in Computer Engineering",
      company: "D. Y. Patil School of Engineering & Technology",
      description:
        "Began my Computer Engineering journey, building strong foundations in Data Structures & Algorithms, OOP, Database Management Systems, Computer Networks, and Operating Systems.",
    },

    {
      year: "July 2023 - Aug 2023",
      title: "Web Developer Intern",
      company: "Suven Consultants & Technology Pvt. Ltd.",
      description:
        "Developed responsive web applications, collaborated with development teams, resolved technical issues, and improved application performance through industry-standard development practices.",
    },

    {
      year: "Aug 2024 - Oct 2024",
      title: "Software Engineer Intern",
      company: "Zidio Development",
      description:
        "Worked on responsive web applications, integrated APIs, and contributed to frontend and backend development while ensuring performance optimization and project requirement alignment.",
    },

    {
      year: "Dec 2024",
      title: "Insta Stay",
      company: "Full Stack Project",
      description:
        "Built a hotel-booking platform using Node.js, Express.js, MongoDB, and JavaScript with authentication, property management, reviews, Cloudinary image uploads, and Mapbox integration.",
    },

    {
      year: "May 2025",
      title: "Child Diary",
      company: "Role-Based Management System",
      description:
        "Engineered a secure role-based platform with JWT authentication, email verification, announcements, homework management, and personalized dashboards for students and teachers.",
    },

    {
      year: "June 2025",
      title: "B.Tech Graduation",
      company: "CGPA 9.17 / 10",
      description:
        "Graduated in Computer Engineering with strong academic performance and practical experience in full-stack development and software engineering.",
    },

    {
      year: "Sept 2025",
      title: "HD Notes",
      company: "MERN Stack Project",
      description:
        "Designed and developed a MERN-based notes application allowing users to create, edit, and organize high-quality notes with image integration and an intuitive user experience.",
    },

    {
      year: "Feb 2026",
      title: "Sigma GPT",
      company: "AI Application",
      description:
        "Built a full-stack AI-powered chat platform using the MERN stack and OpenAI API, enabling real-time conversations, persistent chat storage, and seamless retrieval of previous interactions.",
    },

    {
      year: "2026",
      title: "SecureOps",
      company: "Security Monitoring Platform",
      description:
        "Developing an endpoint security monitoring platform using Go, React, Node.js, and MongoDB to collect Linux security information and visualize it through a centralized dashboard.",
    },
  ];
  return (
    <section id="learning-path" className="px-6 pt-25 mt-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-medium text-center text-underline">
            Learning Path
          </h1>
          <p className="mt-3 text-gray-500 text-md text-center">
            Each milestone represents growth, curiosity, and continuous progress
            toward becoming a better engineer.
          </p>
        </div>

        <div className="relative border-l border-gray-200 ml-2">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-10 relative">
              <div
                className="
                  absolute
                  -left-[52px]
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                "
              >
                <WorkIcon fontSize="small" />
              </div>

              <p className="text-sm text-gray-400 mb-2">{exp.year}</p>

              <h3 className="text-2xl font-medium">{exp.title}</h3>

              <p className="text-blue-500 mb-3">{exp.company}</p>

              <p className="text-gray-500 leading-7">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningPath;
