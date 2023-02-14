import { motion } from "framer-motion"
import {
    FaRegIdBadge,
    FaRegPaperPlane,
    FaRegKeyboard,
  } from "react-icons/fa";
export default function NavBar() {
    const banner = {
        animate: {
          transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
          },
        },
      };
    
      const letterAni = {
        initial: { y: 400 },
        animate: {
          y: 0,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          },
        },
      };
    return (
        <motion.div
            variants={banner}
            initial="initial"
            animate="animate"
            className=" min-w-max h-screen fixed top-0 left-0  flex flex-col items-start justify-center pl-6"
        >
            <a href="/">
                <motion.div
                    variants={letterAni}
                    initial="initial"
                    animate="animate"
                    className="sidebar-icon tab tab-bordered group"
                >
                    <FaRegPaperPlane size="24" />

                    <span className="sidebar-tooltip group-hover:scale-100">
                        Lets watch that animation again!
                    </span>
                </motion.div>
            </a>
            <a href="#p1">
                <motion.div
                    variants={letterAni}
                    initial="initial"
                    animate="animate"
                    className="sidebar-icon tab tab-bordered group"
                >
                    <FaRegIdBadge size="24" />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        About me
                    </span>
                </motion.div>
            </a>
            <a href="#p2">
                <motion.div
                    variants={letterAni}
                    initial="initial"
                    animate="animate"
                    className="sidebar-icon tab tab-bordered group"
                >
                    <FaRegKeyboard size="26" />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        My projects
                    </span>
                </motion.div>
            </a>
        </motion.div>
    )
}