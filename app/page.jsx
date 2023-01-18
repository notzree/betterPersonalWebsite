"use client";
import Link from "next/link";


import { PageWrapper } from "@/components/page-wrapper";
export default function Home() {
  
  return (
      <PageWrapper >
        <main className="">
          <div className="hero min-h-screen bg-base-200 overflow-hidden">
            <div className="hero-content text-center">
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
            </div>
          </div>
        </main>
      </PageWrapper>
        
  );
}
