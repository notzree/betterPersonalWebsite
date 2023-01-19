"use client";
import Link from "next/link";
import { motion,} from "framer-motion";

import { PageWrapper } from "@/components/page-wrapper";
export default function Home() {

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAni = {
    initial: { x: -400 },
    animate: {
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
  return (
      <PageWrapper >
        <main className="">
          <motion.div 
          variants={banner}
          initial = "initial"
          animate = "animate"
          className="hero min-h-screen bg-base-200 overflow-hidden">
            <motion.div 
            variants={letterAni}
            initial = "initial"
            animate = "animate"
            className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hi, I'm Richard</h1>
                <p className="py-6">
                  {" "}
                  I'm a fullstack developer studying&nbsp; 
                  <span className="underline decoration-accent h-5">Systems Design Engineering</span>
                   
                  &nbsp;at the University of
                  Waterloo
                </p>
                <Link
                  className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  href="/hero"
                >
                  Learn more
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </PageWrapper>
        
  );
}
