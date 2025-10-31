import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white text-black text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-10 text-primary"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-gray-600 max-w-2xl mx-auto mb-10"
      >
        Feel free to reach out if you’d like to collaborate on a project or just
        want to say hello 👋
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto flex flex-col gap-5 bg-gray-100  p-8 rounded-2xl shadow"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-black text-2xl border border-gray-400 hover:bg-blue-400 cursor-pointer py-3 rounded-md hover:bg-primary/80 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
