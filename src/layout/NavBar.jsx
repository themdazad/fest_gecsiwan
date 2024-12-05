import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <motion.div
      className="m-auto z-[999] fixed top-4 w-full h-[60px] grid justify-center "
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <nav>
        <div className="nav-menu bg-zinc-900 text-white backdrop-blur-lg px-8 shadow-xl h-full rounded-2xl flex justify-center items-center space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/EventDetails">Events</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    </motion.div>
  );
}
