"use client";

import { AnimatePresence, motion,  } from "framer-motion";
import { useRouter } from 'next/navigation';
export const PageWrapper = ({children,}) =>{
    const router = useRouter();
    const pageWrapperVariants =
    {
      initial: {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
        transition: { duration: .75 }
      },
      animate: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: { duration: .75, staggerChildren: .1 }
      },
      exit: {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        transition: { duration: .75 }
      }
    };
    
   return (
    <AnimatePresence mode="wait">
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      exit="exit"
      
      variants={pageWrapperVariants}
      className = "w-screen"
    >
    {children}
  </motion.div>
  </AnimatePresence>
    )
   
}