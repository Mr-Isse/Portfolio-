import { motion } from "framer-motion";
import image from '../assets/imgae.jpg'
const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center md:text-left"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.img
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={image}
          alt="About Eng-Asad"
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I'm <span className="font-semibold">Eng-Asad</span>, a dedicated and creative{" "}
            <span className="text-primary">Full Stack Developer</span> skilled in
            building fast, modern, and scalable web applications.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I have experience in both <span className="text-primary">Frontend</span> and{" "}
            <span className="text-primary">Backend</span> development using technologies
            like <strong>React, Tailwind CSS, Node.js, MongoDB, and Firebase</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My goal is to create digital experiences that are both visually stunning
            and highly functional. I’m also passionate about{" "}
            <strong>UI/UX Design</strong> and <strong>Mobile App Development</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
