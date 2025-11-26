// --- Placeholder Imports for New Cases ---
// import uarraImage from "../images/uarra-web.png";
import punterhubImage from "../images/punterhub.png";
import trashitImage from "../images/trashit.png";
import jobbinexImage from "../images/jobbinex.png";
// ------------------------------------------

const caseStudies = [
  // {
  //   id: 1,
  //   name: "Uarra Logistics Ecosystem",
  //   client: "Uarra (Logistics Company)",
  //   category: "Full Contract Solution: Logistics & Multi-App Ecosystem",
  //   projectScope:
  //     "Four Dedicated Products: **ALT** (Web Admin), **HERO** (Driver App), **MERCHANT** (User/Order App), and **TRACK** (Tracking Portal)",
  //   duration: "X months contract",
  //   status: "Delivered & Live (Placeholder Status)",

  //   // --- Business Context ---
  //   challenge:
  //     "Small-scale logistics companies lacked a unified, affordable platform to manage their business, dispatch drivers, and provide real-time tracking, resulting in fragmented operations and poor customer service.",
  //   description:
  //     "A complete logistics ecosystem involving four interconnected applications and one central API: A web platform (**ALT**) for company management, two dedicated mobile apps (**HERO** for drivers, **MERCHANT** for customers), and a public tracking portal (**TRACK**).",
  //   solution:
  //     "Designed and delivered a centralized **Node.js/Express.js** API to handle real-time geo-location, order processing, and user authentication across all four platforms. Used **React** for web platforms and **React Native/Flutter** for the mobile applications to ensure consistency and speed.",

  //   // --- Technical Details ---
  //   stackDetails: {
  //     webFrontend: "ALT (Admin/Web Management), TRACK (Public Tracking Portal)",
  //     mobileApp:
  //       "HERO (Driver App with GPS integration), MERCHANT (Customer Ordering App)",
  //     backend:
  //       "Node.js, Dedicated Microservices for Geo-location and Real-Time Data",
  //     database: "PostgreSQL/MongoDB (Order Data, User Profiles)",
  //     other:
  //       "Real-Time Tracking (WebSockets), Payment Integration, Geocoding Services",
  //   },

  //   // --- Impact ---
  //   keyMetrics: [
  //     "Enabled real-time driver tracking with sub-3 second latency.",
  //     "Reduced order fulfillment time by an estimated 20%.",
  //     "Successfully supported X logistics companies at launch.",
  //   ],
  //   process:
  //     "Used a **Hybrid (Agile/Scrum)** approach, focusing on independent development streams for the four products tied to common API sprints.",

  //   // pictures: uarraImage,
  //   link: "https://uarra-link.com",
  // },

  {
    id: 2,
    name: "Jobbinex Professional Outsourcing Platform",
    client: "Wincider Tech",
    category:
      "Full Contract Solution: Job Application Outsourcing & Scheduling",
    projectScope:
      "Busy Professional Web/Mobile Portal, Assistant Management Admin Portal, and Scheduling Backend",
    duration: "2 months contract",
    status: "Delivered & Live",

    // --- Business Context ---
    challenge:
      "Busy professionals lacked a trusted, efficient way to outsource the time-consuming process of job applications, requiring a secure platform for task assignment, communication, and scheduling.",
    description:
      "A full-stack platform connecting busy professionals with trained assistants to manage their job applications. Includes secure user and assistant portals for task delegation, profile management, and payment.",
    solution:
      "Built a secure, multi-role platform using React for both the Professional and Assistant web portals. Implemented a reliable Node.js backend with complex scheduling and task management logic to handle service delivery.",

    // --- Technical Details ---
    stackDetails: {
      webFrontend:
        "Professional Portal (Outsourcing, Tracking), Assistant Portal (Task Management)",
      mobileApp: "Mobile-responsive web design for on-the-go access",
      backend:
        "Node.js/Express.js (Task Management Engine, User Authentication)",
      database: "Mongodb",
      other:
        "Secure Document Handling (Encrypted Storage), Integrated Chat/Messaging Service",
    },

    // --- Impact ---
    keyMetrics: [
      "Supported an average of 50 job applications processed per professional per month.",
      "Maintained 99.9% platform uptime during peak usage.",
    ],
    process:
      "Used Scrum with a strong focus on Security-by-Design principles due to the sensitive nature of user data (resumes, application details).",

    pictures: jobbinexImage,
    link: "https://jobbinex.com",
  },

  {
    id: 3,
    name: "Punterhub Subscription & Strategy Platform",
    client: "Wincider Tech",
    category: "Full Contract Solution: Subscription Service & Content Delivery",
    projectScope:
      "Expert Web Posting Portal, User Subscription Mobile App, and Revenue Sharing Backend",
    duration: "2 months contract",
    status: "Delivered & Live",

    // --- Business Context ---
    challenge:
      "Expert strategists lacked a dedicated, secure platform to monetize their tips across sports booking, forex, and crypto, requiring a robust subscription and revenue-sharing model within an intuitive mobile app.",
    description:
      "A subscription-based mobile and web ecosystem where experts post premium tips/analysis via a dedicated web portal, and users subscribe to access content via a cross-platform mobile application.",
    solution:
      "The core product is the User Mobile App built with React Native for fast, cross-platform access. The Expert Posting Portal was a simple React web app. All commerce and subscription logic runs on a secure Node.js backend with integrated payment and payout systems.",

    // --- Technical Details ---
    stackDetails: {
      webFrontend: "Expert Posting Portal (CMS for tip management)",
      mobileApp:
        "User Subscription App (Content Feed, Payment/Subscription flow)",
      backend:
        "Node.js (Subscription Management, Payment Gateway Integration, Revenue Sharing Logic)",
      database:
        "MongoDB/Redis (Real-time content delivery, user subscriptions)",
      other:
        "Recurring Billing/Subscription API, Content Delivery Network (CDN)",
    },

    // --- Impact ---
    // keyMetrics: [
    //   "Processed over X subscription payments in the first quarter.",
    //   "Supported Y simultaneous content pushes from expert strategists.",
    //   "Achieved Z% month-over-month user growth.",
    // ],
    process:
      "Adopted a Minimum Viable Product (MVP) approach to rapidly launch the core subscription functionality, followed by iterative Agile development.",

    pictures: punterhubImage,
    link: "https://thepunterhub.com",
  },
  {
    id: 4,
    name: "Trashit Environmental Services Platform",
    client: "Trashit Integrated",
    category: "Full Contract Solution: Service Booking & Logistics",
    projectScope:
      "Customer Mobile Booking App, Web Admin Portal, and Centralized Service Dispatch API",
    duration: "3 months contract",
    status: "Delivered & Live",

    // --- Business Context ---
    challenge:
      "The client needed a digital platform to replace manual booking and scheduling, allowing users to easily book various environmental services and providing the company with an efficient dispatch and tracking system.",
    description:
      "A full solution including a user-friendly mobile application for service booking and payment, a web-based admin portal for scheduling and service management, and a centralized logistics API.",
    solution:
      "Delivered the mobile app using React Native for easy user access. The Web Admin Portal was built with React to manage bookings and dispatch services efficiently, all powered by a robust Node.js backend.",

    // --- Technical Details ---
    stackDetails: {
      webFrontend: "Admin Portal (Service Management, Scheduling)",
      mobileApp: "Customer Booking App (Service selection, Payment, Tracking)",
      backend: "Node.js (Booking engine, Scheduling, Payment processing hooks)",
      database: "MongoDB (Service Catalog, User Accounts, Appointments)",
      other: "Payment Gateway Integration (Paystack)",
    },

    // --- Impact ---
    keyMetrics: [
      "Automated 70% of the service scheduling process.",
      "Increased successful booking rate by 50% post-launch.",
      // "Achieved Z star rating on app store for user experience.",
    ],
    process:
      "Emphasized a User-Centric Design (UCD) approach in the early stages, followed by Scrum for development.",

    pictures: trashitImage,
    link: "https://www.trashitintegrated.com/",
  },
];

export default caseStudies;
