/* eslint-disable react-refresh/only-export-components */
// your root page
import { motion } from "framer-motion";
import { Button, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";
import Timer from "./components/Event_Timer/Timer";

export const Layout = () => {
  return (
    <div className="overflow-hidden ">
      <motion.div
        className=" bg-[url('images/chahal_bg.webp')] bg-no-repeat bg-cover bg-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false, amount: 0 }}
      >
        <Hero_Section />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: false, amount: 0 }}
      >
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: false, amount: 0 }}
      ></motion.div>
      <motion.div className="bg-[#1B1601] "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: false, amount: 0 }}
      >
        <Need_Assistance />
      </motion.div>
    </div>
  );
};

export const Hero_Section = () => {
  return (
    <>
      {/*Hero Background Animation  */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <header className="context max-w-[1440px] h-screen py-24 grid place-content-center m-auto text-center justify-center justify-items-center  px-[5%] ">
        <div className="hero-content items-center space-y-2">
          <div className="flex justify-center bg-blend-multiply">
            <Image src="images/gecsiwanlogo.png" height={80} width={80} className="bg-blend-multiply"/>
          </div>
          <h3 className="uppercase text-black pb-8">
            Presenting
          </h3>
          <Image src="images/revealsoon.svg" />
          {/* add google form link in button  */}
        </div>

        <span className="text-lg sm:text-2xl font-semibold text-white text-center tracking-widest px-2">
          Coming Soon
        </span>
        {/* Timer  */}
        <Timer/>
          
        <Button as={NavLink} to={"/Events"} className=" justify-items text-amber-400" color="warning" size="lg" variant="ghost" con endContent={"s"}>
        Participate ↗
      </Button>  

      </header>
    </>
  );
};


export const Need_Assistance = () => {
  return (
    <>
      <section className="max-w-[1920px] text-center m-auto py-16 px-[5%] md:px-[10%] space-y-4">
        <h2 className="text-2xl font-semibold">
          Need{" "}
          <span className="text-amber-500 underline underline-offset-4">
            Support
          </span>
          ? We&apos;re Here to Help
        </h2>
        <p className="text-lg">
          We&apos;re committed to ensuring that your experience with us is
          smooth and enriching. If you have any queries or need assistance at
          any step, please contact us
        </p>

        <Button
          as={NavLink}
          size="lg"
          to="mailto:support.devconfig@gmail.com"
          variant="bordered"
          startContent={<MdMarkEmailUnread />}
        >
          fest.gecsiwan@gmail.com
        </Button>
      </section>
    </>
  );
};
