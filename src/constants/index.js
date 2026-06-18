export const myProjects = [
  {
    id: 1,
    title: "Rag Pdf Chatbot",
    subDescription: [
      "Developed an AI-powered RAG PDF chatbot for real-time contextual question answering from uploaded documents.",
      "Integrated Qdrant for semantic search and embedding-based document retrieval..",
      "Implemented document chunking and retrieval pipelines using LangChain to improve response accuracy.",
      "Deployed the application on cloud platforms with secure API management and scalable AI integration.",
    ],
    href: "https://github.com/varunkm11/RAG-PDF-CHATBOT", // Replace with your actual GitHub repo URL
    logo: "",
    image: "/assets/projects/Rag_bot.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "LangChain",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 3,
        name: "Qdrant",
        path: "/assets/logos/Qdrant.svg",
      },
      {
        id: 4,
        name: "Google Gemini API",
        path: "/assets/logos/Gemini_API.png",
      },
    ],
  },
  {
    id: 2,
    title: "AI-Resume Analyzer",
    subDescription: [
      "Secure Auth0-based authentication and authorization to protect user access and resume data in the AI Resume Analyzer.",
      "Role-based access control (RBAC) provides granular user permissions.",
      "Modern React frontend styled with Tailwind CSS for an intuitive interface.",
      "Django backend manages core logic and API endpoints.",
      "User data securely stored using a protected SQLite database.",
    ],
    href: "https://github.com/varunkm11/AI-Resume-Analyzer", // Replace with your actual GitHub repo URL
    logo: "",
    image: "/assets/projects/resume_ai.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "/assets/logos/Flask.svg",
      },
      {
        id: 3,
        name: "HTML5",
        path: "/assets/logos/HTML5.svg",
      },
      {
        id: 4,
        name: "CSS3",
        path: "/assets/logos/CSS3.svg",
      },
      {
        id: 6,
        name: "JavaScript",
        path: "/assets/logos/JavaScript.svg",
      },
      {
        id: 5,
        name: "Vercel",
        path: "/assets/logos/Vercel.svg",
      },
    ],
  },
  {
    id: 3,
    title: "PredictIQ",
    subDescription: [
      "Built PredictIQ, an AutoML inference platform that trains and deploys binary classification models on any uploaded dataset.",
      "Engineered an automated preprocessing pipeline handling missing values, categorical encoding, and feature scaling using Scikit-learn.",
      "Implemented XGBoost-based model training with dynamic column detection, eliminating manual feature engineering.",
      "Developed a REST API with FastAPI to serve real-time and batch predictions with confidence scores.",
    ],
    href: "https://github.com/varunkm11/PredictIQ", // Replace with your actual GitHub repo URL
    logo: "",
    image: "/assets/projects/Predictiq.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/FastAPI.svg",
      },
      {
        id: 3,
        name: "XGBoost",
        path: "/assets/logos/xgboost.svg",
      },
      {
        id: 4,
        name: "Streamlit",
        path: "/assets/logos/Streamlit.svg",
      },
      {
        id: 5,
        name: "Docker",
        path: "/assets/logos/Docker.svg",
      },
      
    ],
  },
  {
    id: 4,
    title: "ChurnGaurd-AI",
    subDescription: [
      "Developed an AI-powered customer churn prediction system capable of identifying high-risk customers using Machine Learning models.",
      "Performed end-to-end data analysis and feature engineering on real-world telecom customer data to improve prediction accuracy and business insights.",
      "Built a modern interactive dashboard using Streamlit and Plotly with responsive visualizations, real-time predictions, and customer analytics.",
      "Deployed the complete application on Render with scalable cloud-based access and production-ready project architecture.",
    ],
    href: "https://github.com/varunkm11/ChurnGaurd-AI", // Replace with your actual GitHub repo URL
    logo: "",
    image: "/assets/projects/ChurnGuard_AI.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "XGBoost",
        path: "/assets/logos/xgboost.svg",
      },
      {
        id: 3,
        name: "Scikit-learn",
        path: "/assets/logos/scikit-learn.svg",
      },
      {
        id: 4,
        name: "Plotly",
        path: "/assets/logos/Plotly.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Sales Performance Dashboard",
    subDescription: [
      "Built a Sales Performance Analytics Dashboard using Python, Pandas, and Power BI.",
      "Performed data cleaning, transformation, and exploratory data analysis on retail sales data.",
      "Developed interactive dashboards to visualize revenue, profit, profit margin, customer performance, and regional trends.",
      "Automated data processing workflows and integrated analytical outputs into Power BI visualizations.",
    ],
    href: "https://github.com/varunkm11/Sales-Performance-Dashboard", // Replace with your actual GitHub repo URL
    logo: "",
    image: "/assets/projects/Sales_project.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/Pandas.svg",
      },
      {
        id: 3,
        name: "Matplotlib",
        path: "/assets/logos/Matplotlib.svg",
      },
      {
        id: 4,
        name: "Power BI",
        path: "/assets/logos/Powerbi.svg",
      },
    ],
  },
  /*{
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },*/
];

export const mySocials = [
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/varunkm11/",
    icon: "/assets/socials/Leetcode.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/varunkm11/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/varun_ro55/?hl=en",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Business Web Solutions",
    job: "Web Developer Intern",
    date: " May 2025 - July 2025",
    contents: [
      "• Web Application Development: Built interactive web apps using HTML, CSS, JavaScript, Node.js, and MongoDB.",
      "• Team Collaboration: Assisted in developing backend logic and integrating databases alongside senior developers.",
      "• Debugging and Optimization: Identified and resolved performance issues to improve functionality and user experience.",
      "• Cross-Platform Support: Ensured scalability and compatibility across devices and browsers.",
      "• Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js), Next.js, Tailwind CSS",
    ],
  },
  {
    job: "Data Science & Data Analystics Intern",
    title: "Future Interns",
    date: "July 2025-August 2025",
    contents: [
      "• Utilized Python, Pandas, and NumPy for data cleaning, transformation, and analysis.",
      "• Created a public GitHub repository to document project work and assignments.",
      "• Delivered data-driven insights by applying statistical methods and visualization tools.",
      "• Documented project milestones and data workflows through version control and professional networking platforms.",
      "• Collaborated in a professional internship setup, meeting deadlines and adhering to structured project goals.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
