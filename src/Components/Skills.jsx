import { motion } from "framer-motion";
import { Code, Palette, Smartphone } from "lucide-react";

const skills = [
  {
    icon: <Code size={32} className="text-primary" />,
    title: "Full Stack Development",
    desc: "Building complete web applications using React, Node.js, Express, and MongoDB.",
  },
  {
    icon: <Palette size={32} className="text-primary" />,
    title: "UI / UX Design",
    desc: "Designing clean, modern, and user-friendly interfaces with a focus on great user experience.",
  },
  {
    icon: <Smartphone size={32} className="text-primary" />,
    title: "Mobile App Development",
    desc: "Developing cross-platform apps using React Native and Flutter for seamless performance.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white text-black text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-12 text-primary"
      >
        My Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
