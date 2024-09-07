/* eslint-disable no-unused-vars */
import {
  bootstrap,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  freshcart,
  yummy,
  gameover,
  threejs,
  weatherapp,
  daniels,
  devfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: reactjs,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
  {
    title: "Freelancing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Programming Challenges",
    company_name: "CodeForces",
    icon: javascript,
    iconBg: "#F9F9F9",
    date: "Jan 2023 - June 2024",
    points: [
      "Solving a variety of algorithmic and data structure problems to improve problem-solving skills.",
      "Participating in regular coding contests and hackathons to stay sharp and competitive.",
      "Collaborating with peers to review and discuss solutions and approaches.",
      "Achieving top rankings and certifications for problem-solving performance.",
    ],
  },
  {
    title: "Front-End React.js Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Building and optimizing user interfaces using React.js and modern front-end technologies.",
      "Collaborating with clients and designers to create responsive, user-friendly web applications.",
      "Ensuring cross-browser compatibility and performance optimization for seamless user experiences.",
      "Participating in code reviews, and applying best practices to maintain high code quality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Your work is always outstanding, and I’m continually impressed by your exceptional excellence and dedication.",
    name: "Yousef",
    designation: "Mentor",
    company: "of Route Academy",
    image:
      "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
  },
  {
    testimonial:
      "Your work and knowledge are exceptional, and I’m always impressed by your dedication and high level of excellence.",
    name: "Ali Hamada",
    designation: "Team Lead",
    company: "of AZRAK",
    image:
      "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
  },
  {
    testimonial:
      "You are the best ever. Your outstanding contributions inspire me to excel and be my best. Remember, you are the best.",
    name: "Yousef Bosha",
    designation: "Friend",
    company: "",
    image:
      "https://pbs.twimg.com/profile_images/1830454239925043200/yYygd9-x_400x400.jpg",
  },
];

const projects = [
  {
    name: "E-commerce Freshcart",
    description:
      "E-commerce Freshcart is a dynamic web-based platform designed to simplify car rentals. It allows users to effortlessly search, book, and manage car rentals from a variety of providers, offering a streamlined and efficient solution for all transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: freshcart,
    source_code_link: "https://github.com/harraz63/Freshcart",
  },
  {
    name: "Yummy",
    description:
      "A web application that offers a vast repository of recipes, including healthy, quick, and easy options for breakfast, lunch, dinner, and desserts. It features vegetarian, vegan, and gluten-free recipes, along with cooking tips and ingredient insights for food enthusiasts and home cooks.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: yummy,
    source_code_link: "https://github.com/harraz63/Yummy",
  },
  {
    name: "Game Over",
    description:
      "Game Over is a dynamic web platform that features a diverse selection of games across multiple genres. It offers users comprehensive reviews, detailed descriptions, and engaging visual content for each game, making it easy for gamers to explore and discover new titles that match their interests.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: gameover,
    source_code_link: "https://github.com/harraz63/game-over",
  },
  {
    name: "Weather App",
    description:
      "Weather App is a responsive web application providing accurate, up-to-date weather forecasts. Using WeatherAPI, users can search weather by city name or get real-time data based on their location. Ideal for planning trips or daily activities, it delivers detailed information including temperature, humidity, and forecasts in a user-friendly interface.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/harraz63/game-over",
  },
  {
    name: "Daniels Portfolio",
    description:
      "Daniels Portfolio showcases a range of web development projects, including a responsive Weather App that provides accurate, up-to-date weather forecasts. Using WeatherAPI, the app allows users to search weather by city name or get real-time data based on their location. It's designed for ease of use, delivering detailed information like temperature, humidity, and forecasts in a clean, user-friendly interface.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: daniels,
    source_code_link: "https://github.com/harraz63/daniels",
  },
  {
    name: "DevFolio Portfolio",
    description:
      "DevFolio Portfolio showcases a range of web development projects, including a responsive Weather App that provides accurate, up-to-date weather forecasts. Using WeatherAPI, the app allows users to search weather by city name or get real-time data based on their location. It's designed for ease of use, delivering detailed information like temperature, humidity, and forecasts in a clean, user-friendly interface.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: devfolio,
    source_code_link: "https://github.com/harraz63/DevFolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
