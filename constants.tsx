
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "React Weather Dashboard",
    description: "A sleek weather application built with React that consumes OpenWeather API to provide real-time forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1592210633468-202bd14e800c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "REST API", "Tailwind CSS", "Hooks"],
    githubUrl: "https://github.com/farhan-3qasim",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Movie Search Engine",
    description: "An interactive movie discovery platform using React and TMDB API with advanced filtering and dynamic routing.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644ef7467?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Axios", "Context API", "React Router"],
    githubUrl: "https://github.com/farhan-3qasim",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Modern React Portfolio",
    description: "This very portfolio! Showcasing clean UI/UX design, fully responsive layout and smooth scrolling experiences.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/farhan-3qasim",
    liveUrl: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", icon: "fa-brands fa-react", level: 90 },
  { name: "JavaScript (ES6+)", icon: "fa-brands fa-js", level: 85 },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind", level: 95 },
  { name: "HTML5", icon: "fa-brands fa-html5", level: 95 },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", level: 90 },
  { name: "Git", icon: "fa-brands fa-git-alt", level: 80 }
];

export const FUTURE_SKILLS: Skill[] = [
  { name: "TypeScript", icon: "fa-solid fa-code", level: 0 },
  { name: "Node.js", icon: "fa-brands fa-node-js", level: 0 },
  { name: "Express.js", icon: "fa-solid fa-server", level: 0 },
  { name: "MongoDB", icon: "fa-solid fa-database", level: 0 }
];

export const PORTFOLIO_INFO = {
  name: "Farhan Ullah",
  role: "React Frontend Developer",
  education: "BS Software Engineering (3rd Semester)",
  institution: "Islamia College Peshawar",
  // Note: To show your picture, ensure you have your file named 'profile.jpg' in your project root.
  profileImage: "./profile.jpg", 
  about: "I am a passionate React Developer currently pursuing my degree in Software Engineering at Islamia College Peshawar. I focus on building high-performance, visually stunning user interfaces. I am dedicated to mastering the React ecosystem and currently on a journey to becoming a Full Stack Developer.",
  socials: {
    github: "https://github.com/farhan-3qasim",
    linkedin: "https://www.linkedin.com/in/farhan-ullah-441a85335/",
    email: "farhanqasim0327@gmail.com"
  }
};
