"use client";
import { PageWrapper } from "@/components/page-wrapper";
import { motion } from "framer-motion";
import { FaRegIdBadge, FaRegPaperPlane, FaRegKeyboard } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  return (
    <PageWrapper>

      <main className="min-h-screen flex bg-base-300">
        <div className=" min-w-max h-screen fixed top-0 left-0  flex flex-col items-start justify-center pl-6">
          <div className="sidebar-icon tab tab-bordered group">
            <FaRegPaperPlane size="24" />
            <span className="sidebar-tooltip group-hover:scale-100">
              Introduction
            </span>
          </div>

          <div className="sidebar-icon tab tab-bordered group">
            <FaRegIdBadge size="24" />
            <span className="sidebar-tooltip group-hover:scale-100">About me</span>
          </div>

          <div className="sidebar-icon tab tab-bordered group">
            <FaRegKeyboard size="26" />
            <span className="sidebar-tooltip group-hover:scale-100">My projects</span>
          </div>
        </div>

        <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
        <div className="hero min-h-screen bg-base-200 snap-start">
          <div className="hero-content ">
            <div className="max-w-md">
              <motion.div className="">
                <h2 className="mb-6 text-lg">Recently I&apos;ve been...</h2>
                <ul className="list-disc ">
                  <li>
                    Solo-developing a journalling&nbsp;
                    <span className="underline decoration-stone-700"><a href="https://zeno-jcn.vercel.app/" target="_blank" className="kbd hover:bg-stone-400 transition-all duration-150">
                    app
                    </a></span>
                    &nbsp;using Next.JS, and Supabase with Postgres.
                  </li>
                  <li className="py-2">
                    Working at&nbsp;<span className="underline decoration-stone-700">
                    <a href="https://www.energyintell.com/" target="_blank" className="kbd hover:bg-stone-400 transition-all duration-150">
                    EnergyIntell
                    </a></span> 
                    &nbsp;to scale and automate data archival to store 51 million rows using C# .NET and SQL server
                  </li>
                </ul>
                <h2 className="my-6 text-lg">and away from work, I&apos;ve been...</h2>
                <ul class="list-disc ">
              <li className="">Training to a 185 benchpress (5 pounds away)</li>
              <li className="py-2">Starting to get into road cycling again as the weather warms up</li>
            </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <section className="snap-start bg-teal-200 w-screen h-screen">
          <p>test</p>
        </section>
        </div>
      </main>
    </PageWrapper>
  );
}
