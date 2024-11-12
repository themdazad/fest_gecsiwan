import ThemeSwitch from "../Theme/ThemeSwitch";
import { Divider } from "@nextui-org/react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <Divider />
      <footer className="flex flex-wrap-reverse justify-center max-sm:text-center md:justify-between items-center py-4  px-[5%] max-sm:gap-4">
        <p className="text-[12px]">
        DevConfig 2024, ©Copyright reserved.
          <br />
          Maintained with <span className="text-red-600">❤</span> By {" "}
          <a
            className="font-semibold text-sky-600"
            target="_blank"
            href="#"
          >
            DevConfig Team
          </a>
        </p>
        <div className="icons flex items-center space-x-4 text-2xl">
          <a href="http://" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/devconfig-pvt-ltd/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="http://" target="_blank">
            <FaTwitter />
          </a>
          <span>|</span>
          <ThemeSwitch />
        </div>
      </footer>
    </>
  );
}


