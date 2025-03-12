import { Skeleton } from "@/app/(layout)/ps-bento/_BentoGridDemo";
import { register } from "module";

export const cardData = [
  {
    id: 1,
    title: "Ideathon",
    src: "/img/tracks/ideathon.jpg",
    description: "A platform to present innovative ideas and propose solutions without a physical prototype.",
    header: <Skeleton />, 
    psUrl: "/tracks/ideathon ps.pdf",
    registerUrl: "https://unstop.com/o/25LZWmD?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl",
    className: "h-4 w-4",
  },
  {
    id: 2,
    title: "Workathon",
    description: "Challenges participants to propose solutions with software, hardware, experiments, or case studies.",
    header: <Skeleton />,
    className: "h-4 w-4",
    src: "/img/tracks/workathon.jpg",
    registerUrl: "https://unstop.com/o/siRfJA7?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl",
    psUrl: "/tracks/workathon ps.pdf",
  },
  {
    id: 4,
    title: "HackAIthon",
    src: "/img/tracks/hackaithon.jpg",
    description: "Focuses on building AI-driven solutions using large language models, external APIs, and custom models.",
    header: <Skeleton />,
    className: "h-4 w-4",
    psUrl: "/tracks/HackAIThon ps.pdf",
    registerUrl: "https://unstop.com/o/zOkoPA5?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl",
  },
  {
    id: 11,
    title: "Pharmathon",
    src: "/img/tracks/pharmathon.jpg",
    description: "Proposing innovative solutions in pharmaceutical sciences and bio-related fields.",
    header: <Skeleton />,
    className: "h-4 w-4",
    psUrl: "/tracks/pharmathon ps.pdf",
    registerUrl: "https://unstop.com/o/iRMj8HL?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl"
  },
  {
    id: 3,
    title: "DataQuest",
    src: "/img/tracks/data quest.jpg",
    description: "A two-day hackathon where participants tackle real-world problems using curated datasets.",
    header: <Skeleton />,
    // psUrl: "/tracks/data quest ps.pdf",
    header: <Skeleton />,
    className: "h-4 w-4",
    registerUrl: "https://unstop.com/o/9vqRJOr?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl"
  },
  // {
  //   id: 5,
  //   title: "Case-X",
  //   src: "/img/tracks/case x.jpg",
  //   description: "An interactive track where students apply analytical, business, and critical thinking skills to case studies.",
  //   header: <Skeleton />,
  //   className: "h-4 w-4",
  //   // psUrl: "/tracks/case x ps.pdf",
  // },
  
  {
    id: 6,
    title: "Designovation",
    src: "/img/tracks/visualathon.jpg",
    description: "Focused on data visualization and UI/UX design.",
    header: <Skeleton />,
    className: "h-4 w-4",
    registerUrl: "https://unstop.com/o/V6A0p3E?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl"
  },
  {
    id: 7,
    title: "Cosmotron",
    src: "/img/tracks/cosmothon.jpg",
    description: "Tackle challenges in space sciences, including astronomy, astrophysics, and satellite technology.",
    header: <Skeleton />,
    className: "h-4 w-4",
    psUrl: "/tracks/Cosmotron ps.pdf",
    registerUrl: "https://unstop.com/o/XaHRMTz?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl"
  },
  {
    id: 8,
    title: "AWS Reforge",
    src: "/img/tracks/aws.jpg",
    description: "Leverage AWS cloud computing to develop scalable and efficient industry solutions.",
    header: <Skeleton />,
    className: "h-4 w-4",
    registerUrl: "https://unstop.com/o/cjpbYq0?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl",
    psUrl: "/tracks/AWS ps.pdf",
  },
  {
    id: 12,
    title: "Co-Creation",
    src: "/img/tracks/CO CREATION.jpg",
    description: "Bringing diverse individuals together to collaborate and solve real-world challenges.",
    header: <Skeleton />,
    className: "h-4 w-4",
    registerUrl: "https://unstop.com/o/G2aqryO?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl"
  },
  {
    id: 9,
    title: "Biothon",
    src: "/img/tracks/bio thon.jpg",
    description: "Biothon unites medical and engineering talent to tackle challenges in affordable healthcare, medical equipment, and infrastructure.",
    header: <Skeleton />,
    className: "h-4 w-4",
    psUrl: "/tracks/Biothon ps.pdf",
    registerUrl: "https://unstop.com/o/a6Slr7T?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl"
  },
  {
    id: 10,
    title: "Capture The Flag",
    src: "/img/tracks/ctf.jpg",
    description: "A cybersecurity challenge testing skills in cryptography, reverse engineering, web exploitation, and more.",
    header: <Skeleton />,
    className: "h-4 w-4",
    registerUrl: "https://unstop.com/o/Wh2OmQN?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl"
  },
  {
    id: 22,
    title: "Women Entrepreneurs",
    src: "/img/tracks/ctf.jpg",
    description: "Women Entrepreneurship empowers female entrepreneurs, fostering innovation and mentorship for female-led startups.",
    header: <Skeleton />,
    className: "h-4 w-4",
    registerUrl: "https://unstop.com/o/7VGn3Kp?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl",
    psUrl: "/tracks/Women entrepreneurship ps.pdf"
  },
  {
    id: 23,
    title: "Think Biz",
    src: "/img/tracks/think biz.png",
    description: "Think-Biz at Hack MIT-WPU'25 challenges entrepreneurs to innovate within set themes, fostering creativity, strategy, and problem-solving.",
    header: <Skeleton />,
    className: "h-4 w-4",
    // psUrl: "/tracks/Biothon ps.pdf",
    registerUrl: "https://unstop.com/o/W6vNB4J?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl"
  },
  {
    id: 24,
    title: "Polytechnic Ideathon",
    src: "/img/tracks/POLYTECH.png",
    description: "A challenge where participants develop innovative solutions to real-world problems using tech and design thinking.",
    header: <Skeleton />,
    className: "h-4 w-4",
    registerUrl: "https://unstop.com/o/m573aCG?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl",
    psUrl: "/tracks/ideathon ps.pdf",
  },
  {
    id: 25,
    title: "Polytechnic Workathon",
    src: "/img/tracks/POLYTECH.png",
    description: "A hands-on event where participants team up to build tech projects and sharpen their skills.",
    header: <Skeleton />,
    className: "h-4 w-4",
    registerUrl: "https://unstop.com/o/zG5OlmZ?lb=x8QsB2V&utm_medium=Share&utm_source=shortUrl",
    psUrl: "/tracks/workathon ps.pdf",
  },
  
];
