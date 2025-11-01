import { CopyIcon, Github } from "lucide-react";
import { DiGithub } from "react-icons/di";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-300 py-6 flex justify-between items-center ">
      <div className="flex flex-col md:flex md:flex-row justify-between items-center mx-40 space-y-10 space-x-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <div>
          <a href="https://github.com/dashboard"><FaGithub className=" size-16"/></a>
          <span className="text-2xl font-medium">Github</span>
        </div>
        <div>
          <a href="https://www.facebook.com/asad.ciise.142/"><FaFacebook className=" size-16"/></a>
          <span className="text-2xl font-medium">Facebook</span>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=+252610729128&text="><FaWhatsapp className=" size-16 hover:transition-all ease-in-out duration-200 transition-shadow "/></a>
          <span className=" text-2xl font-medium">WhatsApp</span>
        </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
