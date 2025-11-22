import zunim from "../images/zunim.png";
import sharpweb from "../images/sharp-web.png";
import mtc from "../images/mtc.png";
import early from "../images/early.png";
import sharpmobile from "../images/c-1.png";

const projects = [
  {
    id: 1,
    name: "Sharperly",
    description:
      "An end-to-end e-commerce solution for fashion retail, featuring advanced search, secure checkout, and responsive design.",
    category: "Web Development",
    client: "Zaza tech dev.",
    duration: "1 months",
    problem:
      "The client needed a simple website to serve as an information hub for the app product.",
    solution:
      "Developed a scalable and secure platform using react js and vite. Integrated advanced search functionality and optimized for SEO.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Node.js"],
    pictures: sharpweb,
    link: "https://zunim.vercel.app",
  },
  {
    id: 2,
    name: "Sharperly Mobile App",
    description:
      "An dispatch delivery mobile app where users can order a delivery agent and get their dispatch delivered without stress.",
    category: "App Development",
    client: "Zaza tech dev.",
    duration: "3 months",
    problem:
      "The client needed a mobile application to complement their web platform, allowing users to order dispatch services on the go.",
    solution:
      "Developed a scalable and secure mobile application using React Native, Node.js, and MongoDB. Integrated advanced search functionality and optimized for performance.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    pictures: sharpmobile,
    link: "https://play.google.com/store/apps/details?id=com.creatur.Sharperly&pcampaignid=web_share",
  },
  {
    id: 3,
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
    id: 3,
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
    id: 4,
    name: "School Management",
    description:
      "The school management website is a comprehensive platform designed to streamline and optimize school operations by providing tailored dashboards for different user roles. Whether you’re an administrator, teacher, student, or parent, each dashboard is customized to offer role-specific features and functionality.Administrators can manage staff, students, and schedules, track school performance, and oversee the entire school’s operations.Teachers have tools for managing classes, recording attendance, uploading grades, and communicating with students and parents.The platform enhances communication, improves efficiency, and ensures seamless collaboration among all stakeholders, making school management smarter and more effective. ",
    category: "Web Development",
    client: "Early Grip School",
    duration: "2 months",
    problem:
      "Managing school operations, including administrative tasks, student records, teacher activities, and parent communications, can be cumbersome and inefficient when handled manually or through disconnected systems.",
    solution:
      "The school management website centralizes all operations by providing role-specific dashboards for administrators, teachers, students, and parents. These dashboards streamline access to relevant information and tools, enabling efficient communication, better organization, and improved management of school resources.",
    technologies: ["Express", "React", "MongoDB", "Nodejs"],
    pictures: early,
    link: "https://earlygrip.vercel.app",
  },
];

export default projects;
