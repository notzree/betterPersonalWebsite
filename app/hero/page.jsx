"use client";
import { PageWrapper } from "@/components/page-wrapper";
import { motion } from "framer-motion";
import {
  FaRegIdBadge,
  FaRegPaperPlane,
  FaRegKeyboard,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";
import { BsArrowDownSquare } from "react-icons/bs";
import NavBar from "@/components/navigation";
import Carousel from "@/components/carousel";

export default function Home() {
  const descripArray = [
    {
      projectName: "Zeno",
      projectImage:
        "https://user-images.githubusercontent.com/118649285/211843750-71db9321-dce8-4512-9ae9-3cfd56e6952b.PNG",
      projectParagraph:
        "Web app that allows users to 'chat with themselves', similar to journalling on a notebook. Uses Next.JS with Tailwind CSS for all the frontend design and Next.JS for creating the CRUD API's. Leverages Supabase Auth to provide secure authentication for user accounts.  ",
      projectSkills: ["Next.JS", "Supabase", "Supabase Auth", "Tailwind"],
      projectLink: "https://zeno-jcn.vercel.app/",
    },

    {
      projectName: "Persona Generation App",
      projectImage:
        "https://user-images.githubusercontent.com/118649285/209454385-c735ebee-7612-4e3c-b723-e01e29d8887d.png",
      projectParagraph:
        "Fullstack web app that randomly generates a fictional user as well as a customizable user story to aid in user-centric design. Uses OpenAi's Chat-GPT API to intelligently generate a unique user story.",
      projectSkills: ["Next.JS", "Axios", "OpenAI API"],
      projectLink: "https://github.com/notzree/personaGenerator",
    },

    {
      projectName: "Database download service",
      projectImage:
        "https://user-images.githubusercontent.com/118649285/213586391-94479155-9ac7-4db5-9e92-6b24e18258ba.png",
      projectParagraph:
        ".NET console application that downloads clients yearly data and stores the relevant information to local storage and a SQLserver database using Entity Framework. Adheres to CQRS principals using the MediatR library to decouple code ",
      projectSkills: [
        ".NET",
        "Entity Framework",
        "MediatR",
        "CQRS",
        "SQLserver",
        "Dependency Injection",
      ],
      projectLink: "",
    },
    {
      projectName: "write:here (Hackville 2023 Winner)",
      projectImage:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/380/383/datas/medium.png",
      projectParagraph:
        "Write:here is designed to allow people with barriers to using technology to send emails the old fashioned way using AI-powered Optical Character Reognition (OCR) to convert hand written letters into an email. This email is then sent through Co:Here's NLP model to do grammer checking, formatting, and automatic subject line generation. It is then sent using EmailJs to their specified recepient. This was my team project for Hackville 2023, and I was mainly resonsible for setting up the backend and implementing the AI-powered OCR and helping out on integrating the Co:here NLP. I used Next.JS for the web app as well as Google Cloud services (sepcifically Vision API) and Co:here's NLP API. Links to Github and Figma located in the devpost. ",
      projectSkills: [
        "NextJS",
        "Google Cloud Vision API",
        "co:here",
      ],
      projectLink: "https://devpost.com/software/write-here",
    },
    {
      projectName: "Restaurant finder app",
      projectImage: "https://user-images.githubusercontent.com/118649285/202923794-f214e1ca-6d14-4901-947f-73222ae29d61.png",
      projectParagraph: "Fetched restaurant and location data using Axios.js from google-maps API. Utilized react and Material-UI to develop a mobile-responsive web app.",
      projectSkills: ["React", "Google-maps API", "Material-UI", "Tailwind"],
      projectLink: "https://github.com/notzree/uwfoodmap"
    },
    {
      projectName: "Market research Paper",
      projectImage: "https://user-images.githubusercontent.com/118649285/209455298-5aa587a9-b0fe-4118-b8c3-53d35425f799.png",
      projectLink: "/rzBusinessIA.pdf",
      projectParagraph: "Researched and Analyzed Richmond Hill Muay Thai's online marketing strategies to optimize marketing spending in lieu of a new location opening. Leveraged business frameworks like force-field analysis and surveyed 50+ members to collect data.",
      projectSkills: ["Research", "Business management", "Stakeholder analysis"]
    }
  ];


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
  const letterAniLeft = {
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
    <PageWrapper>
      <main className="min-h-screen flex bg-base-300 ">
        <div className=" hidden sm:block ">
          <NavBar />
        </div>
        <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden scrollbar ">
          <div className="hero min-h-screen bg-base-200 snap-start ">
            <motion.div
              variants={letterAniLeft}
              initial="initial"
              animate="animate"
              className="sm:-mb-24 min-w-full flex flex-col items-center justify-center content-center "
            >
              <h1 className="text-5xl font-bold">Hi, I'm Richard</h1>

              <p className="py-6">
                {" "}
                I'm a fullstack developer studying&nbsp;
                <span className="underline decoration-accent h-5">
                  Systems Design Engineering
                </span>
                &nbsp;at the University of Waterloo
              </p>
            </motion.div>
            <motion.div
              variants={letterAni}
              initial="initial"
              animate="animate"
              className="hero-content row-start-2 -mt-16"
            >
              <div className="max-w-md flex justify-center ">
                <motion.div initial="enter" animate="center" exit="exit">
                  <div className="max-w-md flex justify-evenly py-10">
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

                  <h2 id="p1" className="my-4 text-lg underline">
                    Recently I&apos;ve been...
                  </h2>
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
                  <h2 className="my-4 text-lg underline">
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
                  <div className="overflow-hidden flex items-center justify-center h-12 min-w-min tooltip mt-12">
                    <BsArrowDownSquare size="24" className=" animate-bounce" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="snap-start bg-base-200 w-screen h-screen flex-col items items-center">
            <div className="flex justify-center items-center">
              <h2 className="mb-6 text-lg mt-20">
                Here are some of my recent projects (swipe with your mouse)
              </h2>
            </div>
            <div className="hero">
              <Carousel descripArray={descripArray} />
              <div id="p2" className="hero-content"></div>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
