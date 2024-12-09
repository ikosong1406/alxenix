import zunim from "../images/zunim.png";
import flowzone from "../images/flowzone.png";
import trustleger from "../images/trustleger.png";
import mtc from "../images/mtc.png";
import early from "../images/early.png";

const projects = [
  {
    id: 1,
    name: "Zunim",
    description:
      "An end-to-end e-commerce solution for fashion retail, featuring advanced search, secure checkout, and responsive design.",
    category: "Web Development",
    client: "FashionHub Inc.",
    duration: "4 months",
    problem:
      "The client needed a scalable platform to handle growing online sales while ensuring a seamless user experience.",
    solution:
      "Developed a scalable and secure platform using Next.js, Node.js, and MongoDB. Integrated advanced search functionality and optimized for SEO.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe API",
    ],
    pictures: zunim,
    link: "https://zunim.vercel.app",
  },
  {
    id: 2,
    name: "Mighty Teens Church",
    description:
      "This is the website for the renowned teens church in port harcourt ",
    category: "Web Development",
    client: "Mighty Teens Church",
    duration: "3 months",
    problem:
      "Users needed an intuitive app to log workouts and connect with professional trainers.",
    solution:
      "Built a cross-platform app using React Native with features like progress tracking, video tutorials, and chat functionality.",
    technologies: ["React", "Firebase", "Figma"],
    pictures: mtc,
    link: "https://mightyteenschurch.vercel.app",
  },
  {
    id: 3,
    name: "Flowzone",
    description:
      "This is a networling platform where beginners in developmemt roles connect and collaborate on projects to build for their portfolio ",
    category: "Web Development",
    client: "Mighty Teens Church",
    duration: "3 months",
    problem:
      "Users needed an intuitive app to log workouts and connect with professional trainers.",
    solution:
      "Built a cross-platform app using React Native with features like progress tracking, video tutorials, and chat functionality.",
    technologies: ["Express", "React", "MongoDB", "Nodejs"],
    pictures: flowzone,
    link: "https://flowzonefrontend.vercel.app",
  },
  {
    id: 4,
    name: "School Management",
    description:
      "This is a school management website build to adequate manage the transactions going on in the school system ",
    category: "Web Development",
    client: "Early Grip School",
    duration: "3 months",
    problem:
      "Users needed an intuitive app to log workouts and connect with professional trainers.",
    solution:
      "Built a cross-platform app using React Native with features like progress tracking, video tutorials, and chat functionality.",
    technologies: ["Express", "React", "MongoDB", "Nodejs"],
    pictures: early,
    link: "https://flowzonefrontend.vercel.app",
  },
];

export default projects;
