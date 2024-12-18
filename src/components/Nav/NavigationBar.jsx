import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <motion.div className="m-auto z-[999] fixed top-4 w-full h-[60px] grid justify-center "
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}

    >
      <nav >
        <div className="nav-menu bg-white/20 backdrop-blur-lg px-8 shadow-xl h-full rounded-[100px] flex justify-center items-center space-x-4">
        
          <NavLink to="/" className="text-black text-lg ">
            Home
          </NavLink>
          <NavLink to="/EventDetails" className="text-black text-lg ">
            Events
          </NavLink>
          <NavLink to="/gallery" className="text-black text-lg ">
            Gallery
          </NavLink>
          <NavLink to="/about" className="text-black text-lg ">
            About
          </NavLink>
        </div>
      </nav>
    </motion.div>
  );
}
