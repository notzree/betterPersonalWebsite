"use client";
import { PageWrapper } from "@/components/page-wrapper";
import { motion,} from "framer-motion";
import {
  FaRegIdBadge,
  FaRegPaperPlane,
  FaRegKeyboard,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";
import { BsArrowDownSquare } from "react-icons/bs";

import Carousel from "@/components/carousel";

export default function Home() {
  const descripArray = [ 
    {projectName: "Zeno",projectParagraph: "Test paragraph 1 at index 0"},
    {projectName: "Persona Generation App",projectParagraph: "Test paragraph 2 at index 1"},
    {projectName: "React Tic Tac Toe",projectParagraph: "Test paragraph 2 at index 2"},
    {projectName: "ASP.NET App",projectParagraph: "Test paragraph 2 at index 3"},
  ] 

  return (
    <PageWrapper>
      <main className="min-h-screen flex bg-base-300 ">
        <div className=" min-w-max h-screen fixed top-0 left-0  flex flex-col items-start justify-center pl-6">
          <div className="sidebar-icon tab tab-bordered group">
            <a href="/">
            <FaRegPaperPlane size="24" />
            </a>
            <span className="sidebar-tooltip group-hover:scale-100">
              Lets watch that animation again!
            </span>
          </div>

          <div className="sidebar-icon tab tab-bordered group">
            <a href="#p1">
              <FaRegIdBadge size="24" />
            </a>
            <span className="sidebar-tooltip group-hover:scale-100">
              About me
            </span>
          </div>

          <div className="sidebar-icon tab tab-bordered group">
            <a href="#p2">
            <FaRegKeyboard size="26" />
            </a>
            <span className="sidebar-tooltip group-hover:scale-100">
              My projects
            </span>
          </div>
        </div>

        <div  className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden scrollbar">
          <div className="hero min-h-screen bg-base-200 snap-start">
            <div className="hero-content ">
              <div className="max-w-md flex justify-center ">
                <motion.div className="flex-row items-center">
                  <div className="max-w-md flex justify-evenly pb-10">
                    <div class="tooltip" data-tip="Github">
                      <a
                        href="https://github.com/notzree"
                        className="social-icon"
                      >
                        <FaGithub size="20" />
                      </a>
                    </div>

                    <div class="tooltip" data-tip="LinkedIn">
                      <a
                        href="https://www.linkedin.com/in/richard-zhang-318861217/"
                        className="social-icon"
                      >
                        <FaLinkedin size="20" />
                      </a>
                    </div>

                    <div class="tooltip" data-tip="Resume">
                      <a
                        href="\Resume.pdf"
                        className="social-icon"
                        target="blank"
                      >
                        <FaFilePdf size="20" />
                      </a>
                    </div>
                  </div>
                  <h2 id = "p1" className="mb-6 text-lg">Recently I&apos;ve been...</h2>
                  <ul className="list-disc ">
                    <li>
                      Solo-developing a journalling&nbsp;
                      <span className="underline decoration-stone-700">
                        <a
                          href="https://zeno-jcn.vercel.app/"
                          target="_blank"
                          className="kbd hover:bg-stone-400 transition-all duration-150"
                        >
                          app
                        </a>
                      </span>
                      &nbsp;using Next.JS, and Supabase with Postgres.
                    </li>
                    <li className="py-2">
                      Working at&nbsp;
                      <span className="underline decoration-stone-700">
                        <a
                          href="https://www.energyintell.com/"
                          target="_blank"
                          className="kbd hover:bg-stone-400 transition-all duration-150"
                        >
                          EnergyIntell
                        </a>
                      </span>
                      &nbsp;to scale and automate data archival to store 51
                      million rows using C# .NET and SQL server
                    </li>
                  </ul>
                  <h2 className="my-6 text-lg">
                    and away from work, I&apos;ve been...
                  </h2>
                  <ul class="list-disc ">
                    <li className="">
                      Training to a 185 lb benchpress (Currently at 180)
                    </li>
                    <li className="py-2">
                      Starting to get into road cycling again as the weather
                      warms up
                    </li>
                  </ul>
                  <div className="overflow-hidden flex items-center justify-center h-12 min-w-min tooltip">
                    <BsArrowDownSquare
                      size="24"
                      className="mr-14 animate-bounce"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
            <div className="snap-start bg-base-200 w-screen h-screen flex-col items items-center">
              <div className="flex justify-center items-center">
                
                <h2 className="mb-6 text-lg mt-20">
                Here are some of my recent projects (swipe with your mouse) 
              </h2>
              </div>
              <div className="hero">
               
                <Carousel descripArray={descripArray}/>
                <div id = "p2" className="hero-content">
              </div>
              </div>
            </div>
        </div>
      </main>
      </PageWrapper>
  );
}

