
export const profile = {
  name: "Arpandeep Singh",
  title: "AI Engineer · Full-Stack Developer",
  blurb:
    "I build intelligent products that merge clean engineering, machine learning, and thoughtful design.",
  location: "Tempe, AZ",
  email: "arpandeep.singh.work@gmail.com",
  phone: "602-880-3175",
  linkedin: "https://www.linkedin.com/in/arpandeep-singh-0549b526b",
  resumeUrl: "/resume.pdf"
};

export const links = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Leadership", to: "leadership" },
  { label: "Contact", to: "contact" },
];

export const education = [
  {
    school: "Arizona State University",
    location: "Tempe, AZ",
    degree: "B.S. in Computer Science",
    gpa: "4.0",
    date: "Expected May 2026"
  }
];

export const experience = [
  {
    role: "AI Software Developer Intern",
    company: "Atya Labs",
    location: "Tempe, AZ",
    date: "May 2024 – Present",
    summary:
      "Building AI-driven systems that automate analytics and enhance real-world decision making. Focused on retrieval augmented generation, data pipelines, and interactive visualization tools.",
    highlights: [
      "Developed a custom RAG agent with OpenAI and Pinecone to make enterprise knowledge instantly searchable.",
      "Created automation pipelines transforming raw SEO data into dynamic AI reports and visual dashboards.",
      "Prototyped an AR product visualization app connecting computer vision with smooth 3D UI flows."
    ]
  },
 
  {
    role: "Software Developer Intern",
    company: "VB Cosmetics Inc.",
    location: "Chandler, AZ",
    date: "May 2025 – Aug 2025",
    summary:
      "Worked on software automation and enterprise systems, streamlining QA, data, and ERP workflows.",
    highlights: [
      "Built internal automation tools that replaced manual QA with AI assisted testing flows.",
      "Connected Amazon SP API with SYSPRO ERP using a Python middleware to sync live inventory data.",
      "Led data migration and analytics improvements across Salesforce and Power BI ecosystems."
    ]
  },
   {
    role: "Frontend Developer Intern",
    company: "SeeMe",
    location: "Tempe, AZ",
    date: "May 2024 – July 2024",
    summary:
      "Designed and developed a modern responsive web interface that elevated the company presence.",
    highlights: [
      "Built a React based frontend with component driven architecture and fluid responsive layouts.",
      "Integrated a notification flow to alert internal teams on new signups.",
      "Implemented smooth UI transitions and micro interactions to improve navigation and visual engagement."
    ]
  }
];

export const projects = [
  {
    name: "SmartHabit",
    url: "https://github.com/iArpan123/SmartHabit",
    stack: ["Spring Boot", "RESTful API", "React", "Supabase", "OpenAI", "MySQL", "VAPID"],
    description:
      "AI wellness app that learns user behavior to build adaptive routines and personalized habit feedback.",
    highlights: [
      "JWT secured REST APIs powering 10K+ sessions",
      "Real time analytics dashboard tracking progress and consistency"
    ]
  },
  {
    name: "ClassGPT",
    url: "https://github.com/iArpan123/ClassGPT",
    stack: ["FastAPI", "React", "OpenAI", "Pinecone", "Redis", "Canvas API"],
    description:
      "AI course companion that understands Canvas content and answers student queries in real time.",
    highlights: [
      "Pinecone retrieval delivering 95% accurate academic answers",
      "Redis session memory supports 1000+ multi turn chat interactions"
    ]
  },
  {
  name: "EncrypTeach",
  url: "https://github.com/iArpan123/EncrypTeach",
  stack: ["Java", "JavaFX", "H2 Database", "BouncyCastle", "JUnit", "MVC Architecture"],
  description:
    "Secure, multi-role classroom management system with encrypted credentials, OTP-based authentication, and centralized admin control.",
  highlights: [
    "Implemented BouncyCastle AES/RSA encryption ensuring complete password security",
    "Role-based dashboards for Super Admin, Professors, and Students with access validation",
    "Comprehensive JUnit test coverage for encryption, authentication, and database integrity"
  ]
},

];

export const skills = {
  languages: ["Python", "Java", "JavaScript", "C/C++", "SQL (PostgreSQL, MySQL)", "HTML/CSS"],
  frameworks: ["React", "Spring Boot", "FastAPI", "Node.js", "LangChain", "PyTorch", "TensorFlow", "Streamlit", "Flask"],
  cloud: ["Firebase", "Supabase", "PostgreSQL", "MongoDB", "Pinecone", "Redis", "GCP", "AWS"],
  tools: ["Git", "Postman", "VS Code", "Cursor", "IntelliJ", "PyCharm", "Power BI", "Jupyter"],
  ai: ["OpenAI API", "GSC API", "Gmail API", "OAuth 2.0", "RESTful APIs", "Pinecone Vector DB", "LangChain RAG"]
};

export const leadership = [
  {
    role: "Vice President",
    org: "ACEL–ASU",
    impact:
      "Directed 20+ high impact professional and cultural events with 500+ attendees, advancing AAPI leadership and mentorship."
  },
  {
    role: "Treasurer",
    org: "Startup Village",
    impact:
      "Secured funding to run large scale entrepreneurial events, strengthening campus innovation."
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "ASU",
    impact:
      "Mentored 1000+ computer science students through instruction and assessments."
  }
];
