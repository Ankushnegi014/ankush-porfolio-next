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
  SiGitlab,
  SiWebpack,
  SiVite,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSocketdotio,
  SiLinkedin,
} from "react-icons/si";
import { MdDesignServices, MdSearch } from "react-icons/md";
import { IconType } from "react-icons";

export const experience = [
  {
    company: "Vecomocon Technologies",
    title: "Frontend Lead",
    period: "Jun 2024 – Present",
    location: "Noida",
    bullets: [
      "Developed and maintained interactive dashboards for real-time data visualization using React.js, Redux, and ECharts",
      "Integrated Socket.IO for live device telemetry updates and real-time notifications",
      "Implemented user, organization, and role-based access control modules for secure multi-tenant management",
      "Optimized React.js frontend for handling large datasets using virtualization and pagination to enhance performance and user experience.",
      "Enhanced frontend performance by optimizing state management and reducing API call latency."
    ],
  },
  {
    company: "Bluepi Consulting",
    title: "Engineer",
    period: "Oct 2023 – Jun 2024",
    location: "Gurugram",
    bullets: [
      "Developed and maintained modular React.js micro frontends for different financial modules (e.g. Payments, transactions, customer onboarding, documents) to support independent deployments.",
      "Implemented Micro Frontend architecture using tools like Module Federation, ensuring seamless integration of independently developed frontend modules."
    ],
  },
  {
    company: "Oodles Technologies",
    title: "Full Stack Developer",
    period: "Mar 2022 – Sept 2023",
    location: "Gurugram",
    bullets: [
      "Developed and optimized a social media platform using React.js and Node.js, enabling real-time user engagement for a U.S.-based audience.",
      "Enhanced frontend performance with lazy loading, memoization, and Redux state optimization, improving page load speed.",
      "Awarded Star of the Quarter for exceptional project delivery, effective mentorship, and leadership in improving code quality through detailed reviews and issue resolution.",
    ],
  },
  {
    company: "Meander Software",
    title: "Frontend Developer (Intern)",
    period: "Sept 2021 – Mar 2022",
    location: "Mohali",
    bullets: [
      "Maintained Angular and React-based web applications.",
    ],
  },
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
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Responsive Design", icon: MdDesignServices },
    { name: "SEO", icon: MdSearch },
  ],
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Angular", icon: SiAngular },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "React Query", icon: SiReactquery },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Material UI", icon: SiMui },
    { name: "Socket.IO", icon: SiSocketdotio },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
  ],
  devops: [
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "GitLab", icon: SiGitlab },
    { name: "Webpack", icon: SiWebpack },
    { name: "Vite", icon: SiVite },
  ],
  db: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
  ],
};

export const timeline = [
  { year: "2021", label: "Frontend Intern – Meander Software" },
  { year: "2022", label: "Full Stack Dev – Oodles Technologies" },
  { year: "2023", label: "Engineer – Bluepi Consulting" },
  { year: "2024", label: "Frontend Lead – Vecomocon Technologies" },
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