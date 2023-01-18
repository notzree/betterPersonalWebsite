import { motion, AnimatePresence } from "framer-motion";
import { wrap } from '@popmotion/popcorn';
import { useState } from "react";
import { ProjectDisplay } from "./project-display";
export default function Carousel ({descripArray}){
    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
          };
        }
      };
    
      const swipeConfidenceThreshold = 10000;
      const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
      };
      
    const [[page, direction], setPage] = useState([0, 0]);
    const descripIndex = wrap(0, descripArray.length, page);
    
    const paginate = (newDirection) => {
      setPage([page + newDirection, newDirection]);
    };
    return (
        <>
        <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
        
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  >
                  <ProjectDisplay projectName={descripArray[descripIndex].projectName} projectParagraph = {descripArray[descripIndex].projectParagraph}/>
                  </motion.div>
                </AnimatePresence>
                
                </>
    )
}