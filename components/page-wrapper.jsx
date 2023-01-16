"use client";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/navigation';
export const PageWrapper = ({
  children,
  className,
}) =>{
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
    <motion.div
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="existState"
      transition={{
        duration:0.75,
      }}
      variants={{
        initialState: {
          opacity: 0
        },
        animateState: {
          opacity: 1
        },
        existState: {

        }
      }}
    >
    {children}
  </motion.div>
  </AnimatePresence>
    )
}