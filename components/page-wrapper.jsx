"use client";
import classNames from "classnames";
import { AnimatePresence, motion,  } from "framer-motion";
import { useRouter } from 'next/navigation';
export const PageWrapper = ({
  children,
  className,

}) =>{
    const router = useRouter();
    const pageWrapperVariants =
    {
      initialState: {
        opacity: 0,
       
      },
      animateState: {
        opacity: 1,
        
      },
      exitState: {
        
      },
    };
    
   return (
    <AnimatePresence mode="wait">
    <motion.div
      
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration:0.75,
      }}
      variants={pageWrapperVariants}
    >
    {children}
  </motion.div>
  </AnimatePresence>
    )
   
}