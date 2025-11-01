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
      <motion.div
       initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Portfolio div */}
        <div className=" border border-gray-200 shadow-lg cursor-pointer hover:shadow-2xl">
          <img src={Portfolio} alt="Portfolio " className=" w-full h-48 object-cover" />
          <h1 className="text-start mx-2 text-2xl font-medium my-4">Portfolio Website</h1>
          <p className="text-gray-400 font-medium mx-1">A modern Personal  portolio built with react and Tailwind CSS showcasing my work and skills </p>
          <div className="flex space-x-10 items-center mx-2 my-4">
            <h1 className="font-medium text-1xl">React</h1>
            <h1 className="font-medium text-1xl">Taiwlind CSS</h1>
            <h1 className="font-medium text-1xl">Framer Motion</h1>
          </div>
          <div>
              <button className="items-start text-2xl my-3 border border-gray-400 p-3 cursor-pointer hover:bg-pink-400 font-medium">View Project</button>
            </div>
        </div>
        {/* Grocery div */}
        <div className=" border border-gray-200 shadow-md cursor-pointer hover:shadow-2xl">
          <img src={Grocery} alt="Portfolio " className=" w-full h-48 object-cover" />
          <h1 className="text-start mx-2 text-2xl font-medium my-4">Grocery Web App</h1>
          <p className="text-gray-400 font-medium mx-1">A full-stack grocery app with product management and authentication using MongoDB and Node.Js </p>
          <div className="flex space-x-10 items-center mx-2 my-4">
            <h1 className="font-medium text-1xl">Node.Js</h1>
            <h1 className="font-medium text-1xl">Express</h1>
            <h1 className="font-medium text-1xl">MongoDB</h1>
          </div>
          <div>
              <button className="items-start text-2xl my-3 border border-gray-400 p-3 cursor-pointer hover:bg-pink-400 font-medium">View Project</button>
            </div>
        </div>
        {/* Mobile App div */}
        <div className=" border border-gray-200 shadow-lg cursor-pointer hover:shadow-2xl">
          <img src={Mobile} alt="Portfolio " className=" w-full h-48 object-cover" />
          <h1 className="text-start mx-2 text-2xl font-medium my-4">Mobile App UI</h1>
          <p className="text-gray-400 font-medium mx-1">A sleek Mobile App interface designed in Flutter and insepired by modern UI trends </p>
          <div className="flex space-x-10 items-center mx-2 my-4">
            <h1 className="font-medium text-1xl">React</h1>
            <h1 className="font-medium text-1xl">Taiwlind CSS</h1>
            <h1 className="font-medium text-1xl">Framer Motion</h1>
          </div>
          <div>
              <button className="items-start text-2xl my-3 border border-gray-400 p-3 cursor-pointer hover:bg-pink-400 font-medium">View Project</button>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
