"use client";

import { AnimatedTitle } from "./AnimatedTitle";
import Button from "./Button";
import { useRouter } from "next/navigation";



const Story = () => {
  const router = useRouter();
  return (
    <section id="story" className="min-h-screen w-full bg-hack-300 text-blue-50">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 lg:px-16 py-10">
          <p className="font-general text-sm uppercase tracking-wider md:text-[10px] mb-4">
            The Multiversal of Hack
          </p>
          
          <div className="mb-8">
            <h1 className="text-6xl font-bold tracking-tight whitespace-nowrap text-hack-400">
              Our Story
            </h1>
          </div>

          <div className="max-w-xl">
            <p className="font-circular-web text-lg text-violet-50">
              Where innovation meets passion—HACKMIT-WPU is the launchpad for the
              next big idea.
            </p>
            <Button
              id="realm-button"
              title="ABOUT HACK MIT-WPU"
              containerClass="mt-8"
              href="/about-us"
            />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="/img/hackImage-3.JPG"
            alt="entrance"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;