import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  django,
  numpy,
  mysql,
  python,
  tenserflow,
  postman,
  expense,
  object,
  fastapi,
  walmart,
  bws,
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
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "numpy",
    icon: numpy,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "tailwindcss",
    icon: tailwind,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "tensorflow",
    icon: tenserflow,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "fastapi",
    icon: fastapi,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Advanced Software Engineering Simulation",
    company_name: " Walmart Global Tech",
    icon: walmart,
    iconBg: "#E6DEDD",
    date: "June 2024 ",
    points: [
      " Applied complex data structures to optimize performance and scalability.",
      "Designed modular and maintainable software systems with layered architecture principles.",
      "Created normalized schemas and optimized SQL queries for scalable relational databases..",
      "Cleaned, transformed, and validated messy datasets using Python-based tools for analysis-readiness.",
    ],
  },
   {
    title: "Web Developer Intern",
    company_name: "Business Web Solutions",
    icon: bws,
    iconBg: "#383E56",
    date: "May 2025 - June 2025",
    points: [
      "Built and maintained web apps using React.js, HTML, CSS, and JS.",
      "Worked with designers and backend teams on product features.",
      "Implemented responsive designs and ensured browser compatibility.",
      "Participated in code reviews and provided constructive feedback.",
      "Fixed bugs and optimized app performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Varun was a fantastic experience. He delivered a high-quality, scalable web application ahead of schedule, and communicated clearly throughout the project. His expertise in Python and web development truly made a difference.",
    name: "Aarav Mehta",
    designation: "Project Manager",
    company: "NextGen Tech Solutions Co",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const projects = [
  {
    name: "Object Detection System",
    description:
      "Developed a real-time object detection system using YOLOv8, OpenCV, and Python to detect and label objects from webcam input with bounding boxes,with confidence scores, and labels each object.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: object,
    source_code_link: "https://github.com/varunkm11/Object-Detection-System",
  },
  {
    name: "Expense Tracker",
    description:
      "The Expense Tracker is a Flask-based web application that helps users manage their income and expenses, visualize spending with charts, and generate monthly summaries for better financial planning.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/varunkm11/Expense-Tracker",
  },
  {
    name: "Email Spam Detection",
    description:
      "Developed a Streamlit web app using Naive Bayes to classify spam messages. Used CountVectorizer for preprocessing and achieved accurate, real-time predictions via simple UI.",
    tags: [
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/varunkm11/Email-Spam-Detection",
  },
];

export { services, technologies, experiences, testimonials, projects };
