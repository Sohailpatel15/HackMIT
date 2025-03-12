"use client";
import Card from "../home1/_components/Card";
import { cn } from "@/lib/utils";
import { DotPattern } from "./_components/DotPattern";
import { TextAnimate } from "./_components/TextAnimate";
import { VantaBackground } from "../background/_components/VantaBackground";

const ChiefPatrons = [
  {
    imgUri: "/img/vishwanath-karad.jpg",
    title: "Rev. Prof. Dr. Vishwanath D. Karad",
    subtitle: "Founder & Chief Patron, MAEERS' MIT Pune",
  },
  {
    imgUri: "/img/rahul-karad.jpeg",
    title: "Dr. Rahul V. Karad",
    subtitle: "Managing Trustee and Executive President, MAEERS' MIT Pune",
  }
];

const Patrons = [
  {
    imgUri: "/img/conveners/ravi-kumar-chitnis.jpg",
    title: "Dr. RM Chitnis",
    subtitle: "Vice Chancellor, MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/milind-pande.jpg",
    title: "Dr. Milind Pande",
    subtitle: "Pro Vice Chancellor, MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/sanjay-kamtekar.webp",
    title: "Dr. Sanjay Kamtekar",
    subtitle: "Chief Academic Officer, MIT World Peace University",
  },
  {
    imgUri: "/img/conveners/ganesh-pokhale.jpg",
    title: "Mr. Ganesh Pokhale",
    subtitle: "Registrar, MIT World Peace University",
  }
];

const coConvenersData = [
  {
    imgUri: "/img/conveners/hitesh-joshi.jpeg",
    title: "Dr. Hitesh Joshi",
    subtitle: "Director, Student Affairs",
  },
  {
    imgUri: "/img/coordinators/krishna-warhade.jpg",
    title: "Dr. Krishna Warhade",
    subtitle: "Director, Doctoral Program",
  },
  {
    imgUri: "/img/coordinators/kishanprasad-gunale.jpg",
    title: "Dr. Kishanprasad Gunale",
    subtitle:
      "Director, CDC  ",
  },
  {
    imgUri: "/img/conveners/mangesh-bedekar.jpg",
    title: "Dr. Mangesh Bedekar",
    subtitle:
      "Dean, School of Computer Science and Engineering",
  },
];

const DeanData = [
  {
    imgUri: "/img/conveners/akshay-malhotra.png",
    title: "Dr. Akshay Malhotra ",
    subtitle: "Professor & Dean, Academics",
  },
  {
    imgUri: "/img/conveners/siddharth-chakrabarti.jpg",
    title: "Dr. Siddharth Chakrabarti",
    subtitle:
      "Dean, School of Engineering and Technology",
  },
  {
    imgUri: "/img/conveners/deependra-sharma.jpg",
    title: "Dr. Deependra Sharma",
    subtitle: "Dean, School of Business",
  },
  {
    imgUri: "/img/conveners/easwar-krishna-iyer.jpg",
    title: "Dr. Easwar Krishna Iyer",
    subtitle:
      "Dean, Ramcharan School of Leadership",
  },  
  {
    imgUri: "/img/conveners/neeraj-mahindroo.jpg",
    title: "Dr. Neeraj Mahindroo",
    subtitle: "Dean, School of Pharmacy",
  },
  {
    imgUri: "/img/conveners/vishal-ghule.png",
    title: "Dr. Vishal Ghule",
    subtitle: "Dean, School of Liberal Arts",
  },
  {
    imgUri: "/img/conveners/anjali-sane.png",
    title: "Dr. Anjali Sane",
    subtitle:
      "Dean, School of School of Economics and Science",
  },
  {
    imgUri: "/img/conveners/anup-kale.jpg",
    title: "Dr. Anup Kale",
    subtitle:
      "Associate Dean, School of Sciences and Environmental Studies",
  },
  {
    imgUri: "/img/conveners/pournima-inamdar.jpg",
    title: "Dr. Pournima Inamdar",
    subtitle: "Associate Dean, School of Law",
  },
  {
    imgUri: "/img/conveners/saurabh-kumar.jpg",
    title: "Dr. Saurabh Kumar",
    subtitle: "Associate Dean, School of Design",
  },
  {
    imgUri: "/img/nihit-jaiswal.jpeg",
    title: "Dr. Nihit Jaiswal",
    subtitle: "Director, CIAP",
  },
];


const DivisonHackathonConvenors = [
  {
    imgUri: "/img/division-coordinators/I/deepali-javale.jpg",
    title: "Mrs. Deepali Javale",
    subtitle: "Assistant Professor, Department of Computer Engineering and Technology (DIVISON I)",
  },
  {
    imgUri: "/img/division-coordinators/II/vinita-kale.png",
    title: "Dr. Vinita Kale",
    subtitle: "Assistant Professor, Department of Business (DIVISON II)",
  },
  {
    imgUri: "/img/division-coordinators/III/satish.png",
    title: "Dr. Satish Polshettiwar",
    subtitle: "Assistant Professor & HOD, Pharmaceutics Department (DIVISON III)",
  },
  {
    imgUri: "/img/division-coordinators/III/deobrat-singh.jpeg",
    title: "Dr. Deobrat Singh",
    subtitle: "Assistant Professor, Physics Department (DIVISON III)",
  },
  {
    imgUri: "/img/division-coordinators/IV/vatsala-sutar.png",
    title: "Ms. Vatsala Sutar",
    subtitle: "Assistant Professor, Department of Design (DIVISON IV)",
  }
];

const MadeInMITWPU = [
  {
    imgUri: "/img/madeInMIT/shivprakash.jpeg",
    title: "Dr. Shivprakash Barve",
    subtitle: "Assistant Professor, Department of Mechanical Engineering (DIVISON I)",
  },
  {
    imgUri: "/img/madeInMIT/deepak-hujare.jpeg",
    title: "Dr. Deepak Hujare",
    subtitle: "Associate Professor & Associate Dean, External Relations (DIVISON I)",
  }
];

const TeamConvenors = [
  {
    imgUri: "/img/conveners/milind-pande.jpg",
    title: "Dr. Milind Pande",
    role: "Chief Convenor",
    subtitle: "Pro Vice Chancellor, MIT-WPU",
  },
  {
    imgUri: "/img/conveners/mangesh-bedekar.jpg",
    title: "Dr. Mangesh Bedekar",
    role: "Convenor",
    subtitle:
      "Dean, School of Computer Science and Engineering",
  },
  {
    imgUri: "/img/coordinators/krishna-warhade.jpg",
    title: "Dr. Krishna Warhade",
    role: "Convenor",
    subtitle: "Director, Doctoral Program",
  },
  {
    imgUri: "/img/coordinators/kishanprasad-gunale.jpg",
    title: "Dr. Kishanprasad Gunale",
    role: "Convenor",
    subtitle:
      "Director, CDC  ",
  },
  {
    imgUri: "/img/conveners/hitesh-joshi.jpeg",
    title: "Dr. Hitesh Joshi",
    role: "Convenor",
    subtitle: "Director, Student Affairs",
  },
];






const div1 = [
  {
    imgUri: "/img/division-coordinators/I/deepali-javale.jpg",
    title: "Mrs. Deepali Javale",
    subtitle: "Assistant Professor, Department of Computer Engineering and Technology",
  },
  {
    imgUri: "/img/division-coordinators/I/sharmishta-desai.png",
    title: "Dr. Sharmishta Desai",
    subtitle: "Associate Professor, Department of Computer Engineering and Technology",
  },
  {
    imgUri: "/img/division-coordinators/I/sumitra-motade.png",
    title: "Dr. Sumitra Motade",
    subtitle: "Assistant Professor,School of Electronics & Communication Engineering",
  },
  {
    imgUri: "/img/division-coordinators/I/parul-jadhav.png",
    title: "Dr. Parul Jadhav",
    subtitle: "Program Director, Department of Electricals and Electronics Engineering",
  },
];

const div2 = [
  {
    imgUri: "/img/division-coordinators/II/vinita-kale.png",
    title: "Dr. Vinita Kale",
    subtitle: "Assistant Professor, Department of Business",
  },
  {
    imgUri: "/img/division-coordinators/II/danashree-tharkude.png",
    title: "Dr. Danashree Tharkude",
    subtitle: "Associate Professor & Associate Dean, External Relations",
  }

];

const div3 = [
  {
    imgUri: "/img/division-coordinators/III/satish.png",
    title: "Dr. Satish Polshettiwar",
    subtitle: "Assistant Professor & HOD, Pharmaceutics Department",
  },
  {
    imgUri: "/img/division-coordinators/III/rohini-pujari.png",
    title: "Dr. Rohini Pujari",
    subtitle: "Assistant Professor, Department of Pharmaceutical Sciences",
  },
  {
    imgUri: "/img/division-coordinators/III/veena-sangvikar.png",
    title: "Dr. Veena Sangvikar",
    subtitle: "Assistant Professor, Department of Mathematics and Statistics",
  }
];

const div4 = [
  {
    imgUri: "/img/division-coordinators/IV/vatsala-sutar.png",
    title: "Ms. Vatsala Sutar",
    subtitle: "Assistant Professor, Department of Design",
  },
  {
    imgUri: "/img/division-coordinators/IV/ganesh-jadhav.png",
    title: "Dr. Ganesh Jadhav",
    subtitle: "Assistant Professor, Department of Design",
  },
  {
    imgUri: "/img/division-coordinators/IV/satyawan-gagare.png",
    title: "Dr. Satyawan Gagare",
    subtitle: "Senior Executive & Assistant Project Co-ordiantor",
  }
];


const core = [
  {
    imgUri: "/img/core-team/parag.jpeg",
    title: "Parag Khanvilkar",
    subtitle: "Senior Manager, Events",
  },
  {
    imgUri: "/img/core-team/aditya.jpeg",
    title: "Aditya Tandle",
    subtitle: "Assistant Director, Events",
  },
  {
    imgUri: "/img/core-team/kshitij.jpeg",
    title: "Kshitij Sangle",
    subtitle: "Senior Manager, Operations",
  },
  {
    imgUri: "/img/core-team/vishal.png",
    title: "Prof. Vishal Pawar",
    subtitle: "Assistant Professor",
  },
  {
    imgUri: "/img/core-team/avinash.png",
    title: "Mr. Avinash Patil",
    subtitle: "Research Associate",
  },
  {
    imgUri: "/img/core-team/avnish.png",
    title: "Mr. Avinish Kumar",
    subtitle: "Program Manager",
  }
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
          {/* Chief Patrons */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-4xl md:text-5xl font-semibold py-6 md:py-8"
          >
            Chief Patrons
          </TextAnimate>
          <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">

            {/* Other Conveners */}
            <div className="flex flex-col lg:flex-row justify-center gap-4 w-full">
              {ChiefPatrons.filter(
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

          {/* Conveners */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-4xl md:text-5xl font-semibold py-6 md:py-8"
          >
            Patrons
          </TextAnimate>
          <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">

            {/* Other Conveners */}
            <div className="flex flex-col lg:flex-row justify-center gap-4 w-full">
              {Patrons.filter(
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


          {/* Dean */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-4xl md:text-5xl font-semibold py-8 md:pt-16"
          >
            Deans
          </TextAnimate>
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap justify-center gap-4 w-full">
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


          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-2xl mt-16 md:text-5xl font-semibold py-8 md:pt-16 "
          >
            Divison Hackathon Convenors
          </TextAnimate>
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap justify-center gap-4 w-full">
            {DivisonHackathonConvenors.map((person, i) => (
              <div key={i} className="w-full max-w-[300px] sm:max-w-[360px]">
                <Card
                  imgUri={person.imgUri}
                  title={person.title}
                  subtitle={person.subtitle}
                />
              </div>
            ))}
          </div>

          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-2xl mt-16 md:text-5xl font-semibold py-8 md:pt-16"
          >
            Made in MIT-WPU Pavilion
          </TextAnimate>
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap justify-center gap-4 w-full">
            {MadeInMITWPU.map((person, i) => (
              <div key={i} className="w-full max-w-[300px] sm:max-w-[360px]">
                <Card
                  imgUri={person.imgUri}
                  title={person.title}
                  subtitle={person.subtitle}
                />
              </div>
            ))}
          </div>

          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-2xl mt-16 md:text-5xl font-semibold py-8 md:pt-16"
          >
            Team Convenors
          </TextAnimate>
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap justify-center gap-4 w-full">
            {TeamConvenors.map((person, i) => (
              <div key={i} className="w-full max-w-[300px] sm:max-w-[360px]">
                <Card
                  imgUri={person.imgUri}
                  title={person.title}
                  subtitle={person.subtitle}
                  role={person.role}
                />
              </div>
            ))}
          </div>

          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-center text-2xl mt-16 md:text-5xl font-semibold py-8 md:pt-16"
          >
            Core Team
          </TextAnimate>
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap justify-center gap-4 w-full">
            {core.map((person, i) => (
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
