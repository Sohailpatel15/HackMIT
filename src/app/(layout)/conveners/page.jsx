"use client"
import Card from "../home1/_components/Card"
import { cn } from "@/lib/utils"
import { DotPattern } from "./_components/DotPattern"
import { TextAnimate } from "./_components/TextAnimate"

const coConvenersData = [
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Dr. Sarah Johnson",
    subtitle: "Department of Computer Science"
  },
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Prof. Michael Chen",
    subtitle: "Department of Engineering"
  },
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Dr. Emily Martinez",
    subtitle: "Department of Research"
  },
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Prof. David Wilson",
    subtitle: "Department of Innovation"
  },
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Dr. Lisa Thompson",
    subtitle: "Department of Technology"
  }
];

const facultyData = [
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Prof. Robert Brown",
    subtitle: "AI & Machine Learning"
  },
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Dr. Amanda Lee",
    subtitle: "Data Science"
  },
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Prof. James Wright",
    subtitle: "Robotics"
  },
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Dr. Maria Garcia",
    subtitle: "Software Engineering"
  },
  {
    imgUri: "/img/image.png?height=150&width=150",
    title: "Prof. John Davis",
    subtitle: "Cybersecurity"
  }
];

const Page = () => {
  return (
    <section className="relative flex w-full justify-center rounded-lg bg-background md:shadow-xl">
      <div className="z-50 p-4 container mx-auto">
        {/* Top Leader */}
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-center text-5xl font-semibold py-8"
          duration={5}
        >
          Founder & President
        </TextAnimate>
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-md">
            <Card
              imgUri="/img/image.png?height=300&width=300"
              title="Dr Vishwanath karad"
              subtitle="Founder & President"
            />
          </div>
        </div>

        {/* Conveners */}
        <TextAnimate animation="blurInUp" by="character" className="text-center text-5xl font-semibold py-8">
          Conveners
        </TextAnimate>
        <div className="flex justify-center w-full mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
            <Card
              imgUri={"/img/ravi-kumar.jpeg"}
              title="Prof. Dr. Ravi Kumar Chitnis"
              subtitle="Vice Chancellor at MIT World Peace University"
            />
            <Card
              imgUri={"/img/sanjay-kamtekar.webp"}
              title="Dr. Sanjay Kamtekar"
              subtitle="Chief Academic Officer at MIT World Peace University"
            />
          </div>
        </div>

        {/* Co-Conveners */}
        <TextAnimate animation="blurInUp" by="character" className="text-center text-5xl font-semibold py-8">
          Co-Conveners
        </TextAnimate>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
          {coConvenersData.map((person, i) => (
            <Card
              key={i}
              imgUri={person.imgUri}
              title={person.title}
              subtitle={person.subtitle}
            />
          ))}
        </div>

        {/* Faculty */}
        <TextAnimate animation="blurInUp" by="character" className="text-center text-5xl font-semibold py-8">
          Faculty
        </TextAnimate>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {facultyData.map((person, i) => (
            <Card
              key={i}
              imgUri={person.imgUri}
              title={person.title}
              subtitle={person.subtitle}
            />
          ))}
        </div>
      </div>

      <DotPattern className={cn("[mask-image:radial-gradient(950px_circle_at_center,white,transparent)]")} />
    </section>
  )
}

export default Page