import { motion } from "framer-motion";
import Grocery from '../assets/Grocery.png';
import Mobile from '../assets/Mobile.png';
import Portfolio from '../assets/Portfolio.png';
const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with React and Tailwind CSS showcasing my work and skills.",
    tech: ["React", "Tailwind", "Framer Motion"],
    img: "/Prtfolio.png",
    link: "#",
  },
  {
    title: "Grocery Web App",
    desc: "A full-stack grocery app with product management and authentication using MongoDB and Node.js.",
    tech: ["Node.js", "Express", "MongoDB"],
    img: "/Grocery.png",
    link: "#",
  },
  {
    title: "Mobile App UI",
    desc: "A sleek mobile app interface prototype designed in Flutter and inspired by modern UI trends.",
    tech: ["Flutter", "UI/UX"],
    img: '/Mobile.png',
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 text-black text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-12 text-primary"
      >
        My Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="bg-white  rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-primary hover:underline font-semibold"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
