import React from "react";
import Card from "../home1/_components/Card";
import { cn } from "@/lib/utils";
import { DotPattern } from "./_components/DotPattern";
import { TextAnimate } from "./_components/TextAnimate";

const page = () => {
  return (
    <>
      <section className="relative flex w-full  justify-center rounded-lg border bg-background md:shadow-xl">
        <div className="z-50 p-4">
          <TextAnimate
            animation="blurInUp"
            by="character"
            className={"text-center text-7xl font-semibold py-8"}
            duration={5}
          >
            Conveners
          </TextAnimate>
          <div className="mx-auto w-fit h-fit mt-8">
            <Card
              imgUri={"/img/milind-pande.jpg"}
              title={"Prof. Dr. Milind Pande "}
              subtitle={
                "Prof. Dr. Milind Pande holds the position of Pro-Vice Chancellor at MIT-WPU. He is an educationist, institution builder and a researcher. With over 30 years of academic experience."
              }
            />
          </div>

          {/* <TextAnimate
            animation="blurInUp"
            by="character"
            className={
              "text-center sm:text-5xl text-4xl font-semibold pt-16 pb-16"
            }
          >
            Program Directors
          </TextAnimate> */}
          <div className="sm:flex justify-evenly w-screen mt-16">
            <Card
              imgUri={"/img/ravi-kumar.jpeg"}
              title={"Prof. Dr. Ravi Kumar Chitnis "}
              subtitle={
                "Prof. Dr. R. M. Chitnis holds the position of Vice Chancellor at MIT World Peace University. He has been associated with the noble field of education for more than three decades."
              }
            />
            <Card
              imgUri={"/img/sanjay-kamtekar.webp"}
              title={"  Dr. Sanjay Kamtekar"}
              subtitle={
                "Dr. Sanjay Dinesh Kamtekar serves as the Chief Academic Officer at MIT World Peace University. He holds an M.S. and Ph.D. in Analytical Instrumentation from the University of Massachusetts, Lowell. "
              }
            />
          </div>
        </div>

        <DotPattern
          className={
            cn()
            // "[mask-image:radial-gradient(950px_circle_at_center,white,transparent)]"
          }
        />
      </section>
    </>
  );
};

export default page;
