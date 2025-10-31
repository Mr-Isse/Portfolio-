const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 flex justify-between items-center ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Eng-Asad. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary text-sm">
            GitHub
          </a>
          <a href="#" className="hover:text-primary text-sm">
            LinkedIn
          </a>
          <a href="#" className="hover:text-primary text-sm">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
