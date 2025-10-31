import { motion } from "framer-motion";
import image from '../assets/imgae.jpg'
const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.9 }}
        className="md:w-1/2"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Hello, I’m <span className="text-3xl text-blue-600">Eng-Asad</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          I’m a passionate <span className="text-primary">Full Stack Developer</span> who loves building modern, fast, and responsive web applications.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-primary text-center text-2xl px-5 py-2 rounded-full hover:bg-primary/80 border border-gray-500 hover:bg-blue-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className=" text-center text-2xl border border-primary text-primary px-6 py-2 rounded-full hover:bg-pink-400 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 mt-10 md:mt-0"
      >
        <img
          src={image}
          alt="Eng-Asad"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg mx-auto cursor-pointer"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
