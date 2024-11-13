import { Divider } from "@nextui-org/react";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <Divider />
      <footer className="flex flex-wrap-reverse justify-center max-sm:text-center md:justify-between items-center py-4  px-[5%] max-sm:gap-4">
        <p className="text-[12px]">
          © Annual Fest &apos;24,
          <br />
          Developed with <span className="text-red-600">❤</span> By{" "}
          <a className="font-semibold text-amber-400" target="_blank" href="#">
            Azad
          </a>
        </p>
        <div className="icons flex items-center space-x-4 text-2xl">
        <p>Follow on</p> 
          <span>|</span>
          <a href="http://" target="_blank">
            <FaInstagram />
          </a>
          <a href="" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="http://" target="_blank">
          <FaYoutube />
          </a>
        </div>
      </footer>
    </>
  );
}
