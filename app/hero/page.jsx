import { PageWrapper } from "@/components/page-wrapper";
import Link from "next/link";
export default function Home() {
  return (
    <PageWrapper>
      <main>
        <div className="hero min-h-screen bg-base-200 overflow-hidden">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hi, I'm Richard</h1>
              <p className="py-6">
                {" "}
                I'm studying Systems Design Engineering at the University of
                Waterloo
              </p>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
