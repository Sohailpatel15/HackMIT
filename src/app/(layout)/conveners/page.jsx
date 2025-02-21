"use client";
import Card from "../home1/_components/Card";
import { cn } from "@/lib/utils";
import { DotPattern } from "./_components/DotPattern";
import { TextAnimate } from "./_components/TextAnimate";
import { VantaBackground } from "../background/_components/VantaBackground";

const ConvenersData = [
  {
    imgUri: "/img/conveners/ravi-kumar-chitnis.jpg",
    title: "Dr. RM Chitnis",
    subtitle: "Vice Chancellor at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/milind-pande.jpg",
    title: "Dr. Milind Pande",
    subtitle: "Pro Vice Chancellor at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/sanjay-kamtekar.webp",
    title: "Dr. Sanjay Kamtekar",
    subtitle: "Chief Academic Officer at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/ganesh-pokhale.jpg",
    title: "Mr. Ganesh Pokhale",
    subtitle: "Registrar at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/hitesh-joshi.jpeg",
    title: "Dr. Hitesh Joshi",
    subtitle: "Director - Student Affairs at MIT World Peace University",
  },
];

const coConvenersData = [
  {
    imgUri: "/img/coordinators/krishna-warhade.jpg",
    title: "Dr. Krishna Warhade",
    subtitle: "Dean, Doctoral Program",
  },
  {
    imgUri: "/img/coordinators/kishanprasad-gunale.jpg",
    title: "Dr. Kishanprasad Gunale",
    subtitle:
      "Assistant Professor, Electronics & Telecommunication Engineering",
  },
];

const DeanData = [
  {
    imgUri: "/img/conveners/siddharth-chakrabarti.jpg",
    title: "Dr. Siddharth Chakrabarti",
    subtitle:
      "Dean, School of Engineering and Technology at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/mangesh-bedekar.jpg",
    title: "Dr. Mangesh Bedekar",
    subtitle:
      "Dean, School of Computer Science and Engineering  at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/deependra-sharma.jpg",
    title: "Dr. Deependra Sharma",
    subtitle: "Dean, School of Business at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/easwar-krishna-iyer.jpg",
    title: "Dr. Easwar Krishna Iyer",
    subtitle:
      "Dean, Ramcharan School of Leadership at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/anup-kale.jpg",
    title: "Dr. Anup Kale",
    subtitle:
      "Associate Dean, School of Sciences and Environmental Studies at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/neeraj-mahindroo.jpg",
    title: "Dr. Neeraj Mahindroo",
    subtitle: "Dean, School of Pharmacy at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/saurabh-kumar.jpg",
    title: "Dr. Saurabh Kumar",
    subtitle: "Associate Dean, School of Design at MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/pournima-inamdar.jpg",
    title: "Dr. Pournima Inamdar",
    subtitle: "Associate Dean, School of Law at MIT World Peace University",
  },
];

const facultyData = [
  {
    imgUri: "/img/division-coordinators/deepali-javale.jpg",
    title: "Mrs. Deepali Javale",
    subtitle: "Assistant Professor, Computer Science, DIVISION I",
  },
  {
    imgUri: "/img/division-coordinators/vinita-kale.jpg",
    title: "Dr. Vinita Kale",
    subtitle: "Assistant Professor, Management, DIVISION II",
  },
  {
    imgUri: "/img/division-coordinators/satish-polshettiwar.jpg",
    title: "Dr. Satish Polshettiwar",
    subtitle: "Assistant Professor, Pharmaceutics, DIVISION III",
  },
  {
    imgUri: "/img/division-coordinators/vatsala-sutar.jpg",
    title: "Ms. Vatsala Sutar",
    subtitle: "Assistant Professor, Department of Design, DIVISION IV",
  },
];

const Page = () => {
  return (
    <VantaBackground
      color={0xbecbff}
      color2={0xbecbff}
      size={1.1}
      backgroundColor={0xffffff}
    >
      <section className="relative flex w-full justify-center rounded-lg bg-transparent md:shadow-xl mt-16">
        <div className="z-50 p-4 container mx-auto">
          {/* Conveners */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-4xl md:text-5xl font-semibold py-6 md:py-8"
          >
            Conveners
          </TextAnimate>
          <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
            {/* Milind Pande Card */}
            <div className="w-full flex justify-center mb-4">
              <div className="w-full max-w-[300px] sm:max-w-[360px]">
                <Card
                  imgUri="/img/conveners/milind-pande.jpg"
                  title="Dr. Milind Pande"
                  subtitle="Pro Vice Chancellor at MIT World Peace University"
                />
              </div>
            </div>

            {/* Other Conveners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {ConvenersData.filter(
                (person) => person.title !== "Dr. Milind Pande"
              ).map((person, i) => (
                <div key={i} className="flex justify-center">
                  <div className="w-full max-w-[300px] sm:max-w-[360px]">
                    <Card
                      imgUri={person.imgUri}
                      title={person.title}
                      subtitle={person.subtitle}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Co-Conveners */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-4xl md:text-5xl font-semibold py-6 md:py-8"
          >
            Co-Conveners
          </TextAnimate>
          <div className="flex justify-center gap-8 mb-12 md:mb-16">
            {coConvenersData.map((person, i) => (
              <div key={i} className="w-full max-w-[300px] sm:max-w-[360px]">
                <Card
                  imgUri={person.imgUri}
                  title={person.title}
                  subtitle={person.subtitle}
                />
              </div>
            ))}
          </div>

          {/* Dean */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-4xl md:text-5xl font-semibold py-6 md:py-8"
          >
            Dean
          </TextAnimate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12 md:mb-16 place-items-center">
            {DeanData.map((person, i) => (
              <div key={i} className="w-full max-w-[300px] sm:max-w-[360px]">
                <Card
                  imgUri={person.imgUri}
                  title={person.title}
                  subtitle={person.subtitle}
                />
              </div>
            ))}
          </div>

          {/* Division Co-Ordinators */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-4xl md:text-5xl font-semibold py-6 md:py-8"
          >
            Division Co-Ordinators
          </TextAnimate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 md:mb-16 place-items-center">
            {facultyData.map((person, i) => (
              <div key={i} className="w-full max-w-[300px] sm:max-w-[360px]">
                <Card
                  imgUri={person.imgUri}
                  title={person.title}
                  subtitle={person.subtitle}
                />
              </div>
            ))}
          </div>
        </div>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(950px_circle_at_center,white,transparent)]"
          )}
        />
      </section>
    </VantaBackground>
  );
};

export default Page;
