import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiGit,
  SiGithub,
  SiWebpack,
  SiVite,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSocketdotio,
  SiLinkedin,
  SiSpring,
  SiHibernate,
} from "react-icons/si";
import { MdDesignServices, MdSearch } from "react-icons/md";
import { IconType } from "react-icons";

export const experience = [
  {
    company: "Ascent Business Solutions",
    title: "Solution Engineer",
    period: "Feb 2026 – Present",
    location: "Gurugram",
    bullets: [
      "Developed end-to-end features for a banking support application using Angular and Java Spring Boot, integrating RESTful and SOAP bank APIs to manage deposit and payment modules with secure, high-reliability transaction flows.",
      "Architected and optimized feature workflows and application performance in a financial-grade Angular SPA, reducing user flow friction and improving component rendering efficiency through lazy loading and modular architecture.",
      "Collaborated on full-cycle frontend development of a bank API-integrated support platform, delivering new customer-facing features while maintaining compliance with financial data handling standards and ensuring cross-browser compatibility.",
      "Drove UI performance optimization across critical payment and deposit journeys by refactoring Angular components, streamlining data-binding logic, and improving state management to enhance overall application responsiveness."
    ],
  },
  {
    company: "Vecomocon Technologies",
    title: "Full Stack Engineer",
    period: "June 2024 – Feb 2026",
    location: "Noida",
    bullets: [
      "Developed and maintained user management and authorization management modules.",
      "Added pagination and advanced filtering to the get all users API, improving performance and user experience for large datasets.",
      "Developed and maintained interactive dashboards for real-time data visualization using React.js, Redux, and ECharts.",
      "Integrated Socket.IO for live device telemetry updates and real-time notifications.",
      "Implemented user, organization, and role-based access control modules for secure multi-tenant management.",
      "Optimized React.js frontend for handling large datasets using virtualization and pagination to enhance performance and user experience.",
      "Enhanced frontend performance by optimizing state management and reducing API call latency."
    ],
  },
  {
    company: "Bluepi Consulting",
    title: "Software Engineer",
    period: "Oct 2023 – June 2024",
    location: "Gurugram",
    bullets: [
      "Developed and maintained modular React.js micro frontends for different financial modules to support independent deployments.",
      "Implemented Micro Frontend architecture using tools like Module Federation, ensuring seamless integration of independently developed frontend modules."
    ],
  },
  {
    company: "Oodles Technologies",
    title: "Full Stack Developer",
    period: "Sept 2021 – Sept 2023",
    location: "Gurugram",
    bullets: [
      "Developed and optimized a social media platform using React.js and Node.js, enabling real-time user engagement for a U.S.-based audience.",
      "Contributed to the design and development of the HP1T application using Angular for the frontend, Java for the backend, and NoSQL for database management, delivering scalable and maintainable features.",
      "Enhanced frontend performance with lazy loading, memoization, and Redux state optimization, improving page load speed.",
      "Awarded Star of the Quarter for exceptional project delivery, effective mentorship, and leadership in improving code quality through detailed reviews and issue resolution.",
    ],
  }
];

export const projects = [
  {
    name: "Vec-TR (Vehicle Tracking & Route Analytics Platform)",
    bullets: [
      "Developed a real-time vehicle tracking and telematics dashboard to monitor live and historical vehicle data",
      "Visualized live vehicle location, speed, and route history using latitude and longitude on Google Maps",
      "Built an interactive timeline with play/pause controls for historical route playback",
      "Implemented a comprehensive battery monitoring module displaying cell-level voltage, battery strength/health, and charging–discharging status in real time.",
      "Integrated real-time data updates using WebSockets for seamless dashboard refresh",
      "Optimized performance for handling large volumes of telemetry and route data"
    ],
    stack: ["React", "Redux", "Node.js", "WebSocket", "ECharts", "REST APIs", "Google Maps API", "JavaScript"],
    link: "#",
  },
  {
    name: "Jabburr App",
    bullets: [
      "Built a React Native social media application with feeds, interest-based content, blogs, events, and a marketplace.",
      "Implemented user engagement features for content sharing, creator discovery, and community interaction.",
      "Worked on marketplace and event flows supporting product sales, ticketing, and creator monetization.",
      "Focused on performance, scalability, and smooth cross-platform user experience."
    ],
    stack: ["React Native", "JavaScript", "REST APIs"],
    link: "#",
  },
  {
    name: "KRB Heartbeat",
    bullets: [
      "Developed a service monitoring tool to track application and service health.",
      "Built frontend views to display uptime, heartbeat status, and alerts",
      "Implemented real-time updates using WebSockets",
      "Assisted in designing APIs for reliable heartbeat signal processing"
    ],
    stack: ["React.js", "REST APIs", "JavaScript"],
    link: "#",
  },
  {
    name: "Bedtime Story AI",
    bullets: [
      "Built an AI-driven application for generating personalized bedtime stories based on user inputs.",
      "Developed interactive and responsive UI components for story generation and reading flow.",
      "Integrated backend APIs to fetch AI-generated content.",
      "Focused on UI/UX optimization for smooth and engaging user experience."
    ],
    stack: ["React Native", "TypeScipt", "REST APIs"],
    link: "#",
  },
  {
    name: "HP1T IOT",
    bullets: [
      "Contributed to an IoT monitoring platform for device data visualization.",
      "Built dashboards to display metrics and device status.",
      "Integrated APIs to ensure seamless communication between IoT devices and frontend.",
    ],
    stack: ["Angular", "TypeScipt", "REST APIs"],
    link: "#",
  },
  {
    name: "Shoorah",
    bullets: [
      "Worked on a wellness and mental-health platform featuring mood tracking and guided content.",
      "Developed responsive and reusable UI components using React.",
      "Integrated backend APIs and managed application state efficiently.",
      "Improved performance and usability through component-level optimizations",
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "Redux"],
    link: "#",
  }
];

export const skills: Record<string, Array<{ name: string; icon: IconType }>> = {
  core: [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript (ES6+)", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Responsive Design", icon: MdDesignServices },
    { name: "SEO Optimization", icon: MdSearch },
  ],
  "Frontend/Libraries": [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Angular", icon: SiAngular },
    { name: "Redux/Redux Toolkit", icon: SiRedux },
    { name: "React Query", icon: SiReactquery },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Material UI", icon: SiMui },
    { name: "Socket.IO", icon: SiSocketdotio },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Spring Boot", icon: SiSpring },
    { name: "Hibernate", icon: SiHibernate },
  ],
  "Build/DevOps": [
    { name: "Webpack", icon: SiWebpack },
    { name: "Vite", icon: SiVite },
    { name: "Docker", icon: SiDocker },
    { name: "Git/GitHub/GitLab", icon: SiGit },
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
  ],
};

export const timeline = [
  { year: "2021", label: "Full Stack Dev – Oodles Technologies" },
  { year: "2023", label: "Software Engineer – Bluepi Consulting" },
  { year: "2024", label: "Full Stack Engineer – Vecomocon Technologies" },
  { year: "2026", label: "Solution Engineer – Ascent Business Solutions" },
];

export const contactInfo = {
  email: "ankushnegi.dev@gmail.com",
  phone: "+91-7048966014",
  location: "Delhi/NCR, India",
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ankushnegi014",
      icon: SiLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/ankushnegi014",
      icon: SiGithub,
    },
  ],
};