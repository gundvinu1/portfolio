// Central portfolio content used by the public site.
type ProjectCategory = "ai" | "backend" | "fullstack" | "data";

type Project = {
  id: number;
  title: string;
  category: ProjectCategory[];
  description: string;
  tech: string[];
  features: string[];
  github: string | null;
  live: string | null;
  gradient: string;
  icon: string;
};

export const personalInfo = {
  name: "Vinayak Rajendra Gund",
  firstName: "Vinayak",
  roles: [
    "AI / ML Engineer",
    "Software Developer",
    "Data Analyst",
    "Big Data Engineer",
    "Data Engineer",
  ],
  tagline:
    "Building AI-powered software, automation platforms, and data systems that solve practical business problems.",
  about:
    "I am an AI/ML engineer and software developer focused on production-ready systems. My work combines machine learning, backend engineering, data analytics, and automation to turn raw requirements and complex data into reliable products.",
  location: "Pune, Maharashtra, India",
  email: "gundvinayak1@gmail.com",
  phone: "+91 8767535697",
  linkedin: "https://www.linkedin.com/in/vinayak-gund-a26817284",
  github: "https://github.com/gundvinu1",
  githubUsername: "gundvinu1",
  resumeUrl: "/resume.pdf",
};

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    branch: "Artificial Intelligence and Machine Learning",
    institution: "Samarth College of Engineering and Management, Belhe",
    university: "Savitribai Phule Pune University (SPPU), Pune",
    duration: "2022 - 2026",
    status: "Graduated",
    cgpa: "8.10 / 10",
    classification: "First Class with Distinction",
    description:
      "Graduated with a strong foundation in machine learning, deep learning, data science, software engineering, cloud computing, and full-stack AI development.",
    icon: "BE",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    branch: "Science Stream",
    institution: "Samarth Junior College, Belhe",
    university: "Maharashtra State Board",
    duration: "2021 - 2022",
    status: "Completed",
    percentage: "82.33%",
    description:
      "Completed higher secondary education in the science stream with a foundation in mathematics, physics, chemistry, and computer science.",
    icon: "HSC",
    color: "from-cyan-500 to-blue-600",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Adarsh Vidyalaya, Palaspur",
    university: "Maharashtra State Board",
    duration: "2020",
    status: "Completed",
    percentage: "87.40%",
    description:
      "Completed secondary school education with strong academic performance and early interest in analytical problem solving.",
    icon: "SSC",
    color: "from-emerald-500 to-teal-600",
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Chordz Technologies Pvt Ltd",
    duration: "July 2025 - Present",
    type: "Internship",
    responsibilities: [
      "Develop AI-powered automation platforms for production workflows",
      "Build scalable backend services using Node.js and TypeScript",
      "Integrate machine learning capabilities into application systems",
      "Design and implement REST APIs",
      "Work with PostgreSQL, Redis, BullMQ, and Docker",
      "Participate in Agile planning, CI/CD workflows, and code reviews",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker", "AI/ML"],
    color: "from-indigo-500 to-cyan-500",
    icon: "DEV",
  },
  {
    role: "Data Science / Machine Learning Intern",
    company: "Wisdom Sprouts IT Training Hub",
    duration: "December 2024 - February 2025",
    type: "Internship",
    responsibilities: [
      "Built data cleaning and preprocessing workflows",
      "Performed exploratory data analysis",
      "Applied feature engineering and predictive modeling techniques",
      "Created machine learning pipelines in Python",
      "Developed Tableau dashboards and business analytics reports",
    ],
    tech: ["Python", "Pandas", "Scikit-Learn", "Tableau", "EDA", "ML"],
    color: "from-cyan-500 to-emerald-500",
    icon: "ML",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "AutoPrint",
    category: ["backend", "fullstack"],
    description:
      "WhatsApp-based self-service printing platform where customers upload files, pay online, and collect printed documents with minimal staff involvement.",
    tech: ["Node.js", "TypeScript", "React", "PostgreSQL", "Redis", "BullMQ", "Docker", "JWT"],
    features: [
      "Payment gateway",
      "Printer automation",
      "Conversation engine",
      "Background workers",
      "Authentication",
      "Admin dashboard",
    ],
    github: "https://github.com/gundvinu1/autoprint",
    live: null,
    gradient: "from-indigo-500 via-cyan-500 to-emerald-500",
    icon: "AP",
  },
  {
    id: 2,
    title: "AI Automation Agent",
    category: ["ai", "backend"],
    description:
      "Natural-language automation assistant for Gmail, Calendar, reporting, and productivity workflows using LLM-powered orchestration.",
    tech: ["Python", "FastAPI", "LangChain", "LLMs", "Google APIs", "PostgreSQL"],
    features: [
      "Natural language processing",
      "Gmail automation",
      "Calendar integration",
      "Workflow automation",
      "LLM integration",
    ],
    github: "https://github.com/gundvinu1/AI-Automation-Agent-",
    live: null,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "AI",
  },
  {
    id: 3,
    title: "Credit Card Fraud Detection",
    category: ["ai", "data"],
    description:
      "Machine learning system for detecting fraudulent transactions using classification models, feature engineering, and structured evaluation.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    features: [
      "Fraud detection",
      "Feature engineering",
      "Classification models",
      "Data visualization",
      "Model evaluation",
    ],
    github: "https://github.com/gundvinu1/Credit-Card-Fraud-Detection-",
    live: null,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "ML",
  },
  {
    id: 4,
    title: "Text to 3D Model Generation",
    category: ["ai"],
    description:
      "Deep learning pipeline concept that converts natural language descriptions into 3D model representations using NLP and TensorFlow.",
    tech: ["Python", "TensorFlow", "NLP", "Deep Learning", "NumPy"],
    features: ["Text-to-3D pipeline", "NLP processing", "Deep learning", "3D representation"],
    github: null,
    live: null,
    gradient: "from-slate-500 via-indigo-500 to-cyan-500",
    icon: "3D",
  },
];

export const skills = {
  Programming: {
    icon: "CODE",
    color: "from-indigo-500 to-cyan-500",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  "Artificial Intelligence": {
    icon: "AI",
    color: "from-indigo-500 to-violet-500",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "Computer Vision",
      "NLP",
      "Prompt Engineering",
    ],
  },
  "Data Analytics": {
    icon: "DATA",
    color: "from-cyan-500 to-blue-600",
    items: [
      "Data Cleaning",
      "EDA",
      "Data Visualization",
      "Business Intelligence",
      "Statistical Analysis",
      "Predictive Analytics",
      "Power BI",
      "Tableau",
      "Excel",
    ],
  },
  "Big Data": {
    icon: "BIG",
    color: "from-amber-500 to-orange-600",
    items: [
      "Apache Hadoop",
      "Apache Spark",
      "PySpark",
      "Hive",
      "Kafka",
      "MapReduce",
      "HDFS",
      "YARN",
      "Data Warehousing",
      "ETL Pipelines",
      "Distributed Computing",
    ],
  },
  Databases: {
    icon: "DB",
    color: "from-green-500 to-emerald-600",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  },
  "Backend Development": {
    icon: "API",
    color: "from-slate-500 to-gray-600",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "BullMQ", "Prisma"],
  },
  DevOps: {
    icon: "OPS",
    color: "from-blue-500 to-cyan-600",
    items: ["Docker", "Docker Compose", "Git", "GitHub", "CI/CD", "Linux"],
  },
  "AI Development Tools": {
    icon: "TOOLS",
    color: "from-yellow-500 to-orange-600",
    items: ["Cursor", "GitHub Copilot", "ChatGPT", "Claude", "Gemini", "VS Code", "Jupyter Notebook", "Google Colab"],
  },
  "Soft Skills": {
    icon: "SOFT",
    color: "from-rose-500 to-pink-600",
    items: ["Leadership", "Communication", "Problem Solving", "Critical Thinking", "Team Collaboration", "Project Management"],
  },
};

export const certifications = [
  { title: "ISRO Certified Program", icon: "ISRO", color: "from-blue-500 to-indigo-600" },
  { title: "SRUJAN 2025 - 3rd Prize", icon: "WIN", color: "from-yellow-500 to-orange-600" },
  { title: "AVISHKAR Research Competition", icon: "R&D", color: "from-green-500 to-emerald-600" },
  { title: "Data Science ML/AI Crash Course", icon: "DS", color: "from-purple-500 to-pink-600" },
  { title: "Robotics and AI Industrial Training", icon: "AI", color: "from-cyan-500 to-blue-600" },
  { title: "Spectrum State Level Competition", icon: "SL", color: "from-red-500 to-rose-600" },
];

export const achievements = [
  {
    title: "3rd Place - SRUJAN 2025",
    icon: "WIN",
    desc: "National level technical competition",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "ISRO Certified",
    icon: "ISRO",
    desc: "Space technology program certification",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "AI/ML Graduate",
    icon: "BE",
    desc: "First Class with Distinction - CGPA 8.10",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Project Portfolio",
    icon: "AI",
    desc: "Production-focused AI and automation projects",
    color: "from-green-500 to-emerald-500",
  },
];

export const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Large Language Models",
  "Automation",
  "Backend Development",
  "Cloud Deployment",
  "Data Science",
  "Generative AI",
  "Problem Solving",
  "Data Analytics",
  "Big Data",
  "Business Intelligence",
  "Data Engineering",
];

export const dataAnalyticsSkills = [
  "Data Cleaning",
  "Data Wrangling",
  "Exploratory Data Analysis",
  "Data Visualization",
  "Statistical Analysis",
  "Business Intelligence",
  "Dashboard Development",
  "Data Reporting",
  "Predictive Analytics",
  "Feature Engineering",
  "Hypothesis Testing",
  "Trend Analysis",
  "Data Storytelling",
];

export const dataAnalyticsTools = [
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Power BI",
  "Tableau",
  "Excel",
  "SQL",
  "Jupyter Notebook",
  "Google Colab",
];

export const bigDataTech = [
  { name: "Apache Hadoop", icon: "HD", desc: "Distributed storage and processing framework" },
  { name: "HDFS", icon: "FS", desc: "Hadoop Distributed File System" },
  { name: "MapReduce", icon: "MR", desc: "Parallel data processing model" },
  { name: "Apache Spark", icon: "SP", desc: "Unified analytics engine" },
  { name: "Spark SQL", icon: "SQL", desc: "Structured data processing with SQL" },
  { name: "PySpark", icon: "PY", desc: "Python API for Apache Spark" },
  { name: "Apache Hive", icon: "HV", desc: "Data warehouse software on Hadoop" },
  { name: "Apache Kafka", icon: "KF", desc: "Distributed event streaming platform" },
  { name: "YARN", icon: "YR", desc: "Resource management in Hadoop clusters" },
  { name: "Data Lakes", icon: "DL", desc: "Centralized repository for big data" },
  { name: "ETL Pipelines", icon: "ETL", desc: "Extract, transform, load workflows" },
  { name: "Data Warehousing", icon: "DWH", desc: "Enterprise data storage and analytics" },
];

export const dataEngineeringTopics = [
  { title: "ETL Pipelines", icon: "ETL", desc: "Design and build extract-transform-load workflows" },
  { title: "Data Modeling", icon: "DM", desc: "Schema design for analytics and reporting" },
  { title: "SQL Optimization", icon: "SQL", desc: "Query tuning and performance optimization" },
  { title: "Data Warehousing", icon: "DWH", desc: "Enterprise-scale data storage solutions" },
  { title: "Data Transformation", icon: "DT", desc: "Cleaning and restructuring raw datasets" },
  { title: "Batch Processing", icon: "BP", desc: "High-volume offline data processing" },
  { title: "Data Validation", icon: "QA", desc: "Ensuring data quality and consistency" },
  { title: "Workflow Automation", icon: "AUTO", desc: "Automated pipeline orchestration" },
  { title: "Data Quality", icon: "DQ", desc: "Monitoring and maintaining data integrity" },
  { title: "Pipeline Monitoring", icon: "MON", desc: "Observability for data workflows" },
  { title: "Data Integration", icon: "INT", desc: "Connecting disparate data sources" },
  { title: "Stream Processing", icon: "RT", desc: "Real-time data processing pipelines" },
];

export const techStackCloud = [
  { name: "Python", category: "Programming", color: "#3B82F6" },
  { name: "TypeScript", category: "Programming", color: "#60A5FA" },
  { name: "JavaScript", category: "Programming", color: "#FBBF24" },
  { name: "SQL", category: "Programming", color: "#34D399" },
  { name: "Node.js", category: "Backend", color: "#22C55E" },
  { name: "FastAPI", category: "Backend", color: "#06B6D4" },
  { name: "Express.js", category: "Backend", color: "#64748B" },
  { name: "React", category: "Frontend", color: "#38BDF8" },
  { name: "Next.js", category: "Frontend", color: "#F8FAFC" },
  { name: "Scikit-Learn", category: "Machine Learning", color: "#F97316" },
  { name: "TensorFlow", category: "Deep Learning", color: "#EF4444" },
  { name: "LangChain", category: "AI", color: "#8B5CF6" },
  { name: "Pandas", category: "Data Analytics", color: "#6366F1" },
  { name: "NumPy", category: "Data Analytics", color: "#0EA5E9" },
  { name: "Power BI", category: "Visualization", color: "#F59E0B" },
  { name: "Tableau", category: "Visualization", color: "#1D4ED8" },
  { name: "Apache Spark", category: "Big Data", color: "#FB923C" },
  { name: "Hadoop", category: "Big Data", color: "#FACC15" },
  { name: "Kafka", category: "Big Data", color: "#EC4899" },
  { name: "PostgreSQL", category: "Database", color: "#4F46E5" },
  { name: "Redis", category: "Database", color: "#EF4444" },
  { name: "MongoDB", category: "Database", color: "#22C55E" },
  { name: "Docker", category: "DevOps", color: "#2563EB" },
  { name: "Git", category: "DevOps", color: "#F97316" },
  { name: "GitHub Copilot", category: "AI Tools", color: "#A78BFA" },
  { name: "ChatGPT", category: "AI Tools", color: "#34D399" },
];
