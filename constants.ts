
import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "SAI RAHUL ADEPU",
  title: "SENIOR SOFTWARE ENGINEER",
  location: "Bangalore, India – 560103",
  phone: "+91 8867789278",
  email: "adepusairahul260920@gmail.com",
  linkedin: "linkedin.com/in/sai-rahul123",
  about: "Senior Software Engineer – Python Automation, CI/CD & Embedded Systems",
  summaryPoints: [
    "Senior Software Engineer with 3+ years of experience in Python-based automation, test framework development, and CI/CD pipeline optimization for embedded and webOS platforms.",
    "Proven track record of reducing DevOps manual effort by 60% through build and workflow automation.",
    "Strong expertise in TAF/TAS frameworks, Selenium, Jenkins, Linux, and multi-SoC device automation.",
    "Hands-on experience in connectivity, media, and protocol-level testing.",
    "Working knowledge of full-stack MERN development (MongoDB, Express, React, Node.js).",
    "Effective collaborator in Agile/Scrum environments.",
    "Analytical problem solving and end-to-end project ownership.",
    "Clear technical communication and process optimization expert.",
    "Experienced in documentation and knowledge sharing with cross-functional teams.",
    "Adaptability and continuous learning in high-speed engineering environments."
  ],
  experiences: [
    {
      id: "lg_project_1",
      role: "Software Engineer – Clean Engineering Build Automation",
      company: "Chhapolika & Company (Client: LG Soft India)",
      period: "April 2025 – Dec 2025",
      effortReduction: "60% Effort Reduction",
      description: [
        "Summary: Spearheaded development of a Clean Engineering Build Automation system that automated SoC handling, manifest selection, repository cloning, Jira ticket updates, patch management, layer pipeline creation, and build triggering.",
        "Designed / Implemented a Clean Engineering Build Automation system automating SoC handling, manifest selection, repository cloning, patch management, and build triggering.",
        "Optimized DevOps workflows by 60% and eliminated build handling time from 2 hours to near-zero manual intervention.",
        "Automated Jira (TVRP/CCC) updates and CI pipeline status reporting for release tracking.",
        "Built and maintained scalable Jenkins CI/CD pipelines supporting multiple SoCs, devices, and release branches.",
        "Enabled automation usage for 20+ engineers, triggering and monitoring 30+ builds per week.",
        "Developed dashboards for pipeline health, automation insights, and failure analysis.",
        "Documented automation frameworks and trained team members for long-term project sustainability."
      ],
      link: "Skills: Python, Selenium, Jenkins, Jira, Gerrit, Git, CI/CD, Collaboration"
    },
    {
      id: "lg_project_2",
      role: "Software Engineer – webOS Test Automation Framework (TAF)",
      company: "Chhapolika & Company (Client: LG Soft India)",
      period: "Feb 2025 – April 2025",
      effortReduction: "85% Manual Reduction",
      description: [
        "Summary: The Test Automation Framework (TAF) project focused on enhancing and maintaining a scalable automation framework for testing webOS applications across multiple TV devices and SoC platforms.",
        "Designed, enhanced, and maintained a scalable Test Automation Framework (TAF) for webOS TV devices.",
        "Extended framework support for multiple SoC architectures and device variants.",
        "Implemented automated build flashing using device IP, device type, SoC configuration, and release version.",
        "Enabled dynamic device configuration handling, eliminating manual setup during test execution.",
        "Supported onboarding of new devices into the automation ecosystem with minimal effort.",
        "Stabilized framework through refactoring, testing, and detailed documentation.",
        "Collaborated with QA, platform, and development teams to align automation with release requirements."
      ],
      link: "Skills: Python, webOS TAF"
    },
    {
      id: "lg_project_3",
      role: "Software Engineer – Python Automation (webOS)",
      company: "LG Soft India (Client: Chhapolika & Company)",
      period: "Feb 2024 – Jan 2025",
      effortReduction: "45% Efficiency Gain",
      description: [
        "Designed and maintained Python-based automation frameworks for functional, performance, and connectivity testing of webOS applications.",
        "Increased test coverage by automating critical user flows and system-level scenarios.",
        "Automated connectivity features including Bluetooth, Wi-Fi, hotspot, screen sharing, and SCAP application testing.",
        "Implemented media automation covering HLS streaming, resolution handling, video transitions, and audio playback.",
        "Built automation utilities for QML-based UI validation, including user interaction and on-screen verification.",
        "Integrated HTNG and Cisco protocols for remote device control and automated hardware testing.",
        "Optimized test execution workflows to improve stability and reduce execution time."
      ]
    },
    {
      id: "lg_project_4",
      role: "Software Engineer – webOS SDK Development",
      company: "LG Soft India (Client: Chhapolika & Company)",
      period: "July 2023 – Feb 2024",
      effortReduction: "70% Developer Onboarding",
      description: [
        "Developed and enhanced webOS developer productivity tools using VS Code Extension and webOS Studio.",
        "Implemented a smart application import feature to detect, filter, and integrate existing webOS apps into active workspaces.",
        "Built a single-click application setup tool to automate installation of required CLIs and dependencies.",
        "Worked with JavaScript, Node.js, TypeScript, VS Code APIs, and Raspberry Pi.",
        "Ensured high code quality through testing, debugging, and active participation in code reviews."
      ]
    },
    {
      id: "amazon_clone_mern",
      role: "Amazon Clone – Full-Stack MERN Application",
      company: "Vector India Institute",
      period: "Jan 2023 – Aug 2023",
      effortReduction: "Full Stack Deployment",
      description: [
        "Developed a full-stack e-commerce application inspired by Amazon using the MERN stack.",
        "Built RESTful APIs with Node.js and Express.js to manage users, products, cart, and orders.",
        "Implemented authentication and authorization using JWT tokens, enabling secure login and role-based access control.",
        "Designed a responsive React.js frontend for product listing, product details, and cart workflows.",
        "Integrated MongoDB for application data and MySQL for structured relational data.",
        "Implemented complete cart management and order processing workflows with validation and error handling."
      ],
      link: "Technologies: JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, JWT, REST APIs"
    },
    {
      id: "radisson_hotels_frontend",
      role: "Radisson Hotels Web Application – Frontend Development",
      company: "Vector India Institute",
      period: "Oct 2022 – Jan 2023",
      effortReduction: "Modern UI/UX",
      description: [
        "Developed a responsive hotel website UI with reusable components.",
        "Improved user experience using modern frontend design practices."
      ],
      link: "Technologies: HTML, CSS, JavaScript"
    }
  ],
  education: [
    {
      id: "edu_1",
      degree: "B.E – Electrical and Electronics Engineering",
      school: "Ganapathy Engineering College",
      year: "2019 – 2022 | GPA: 8.0"
    },
    {
      id: "edu_2",
      degree: "MERN Stack Developer Certification",
      school: "Vector India Institute",
      year: "2022 – 2023"
    }
  ],
  skills: [
    {
      category: "PROGRAMMING & AUTOMATION",
      items: ["Python", "Selenium WebDriver", "JavaScript", "TypeScript", "Node.js", "Express.js", "QML Automation"]
    },
    {
      category: "TOOLS & FRAMEWORKS",
      items: ["TAF / TAS", "webOS Automation Framework", "Cucumber BDD", "Functional Testing", "Integration & System Testing", "Multi-SoC Automation"]
    },
    {
      category: "DEVOPS & CI/CD",
      items: ["Jenkins (Optimization)", "CI/CD Automation", "Build Automation", "Docker", "Linux (Shell Scripting)", "Git / Gerrit"]
    },
    {
      category: "EMBEDDED & PROTOCOLS",
      items: ["webOS SDK", "Bluetooth & Wi-Fi Automation", "HLS Media Streaming", "HTNG Protocol", "Cisco Control Protocol", "Raspberry Pi Integration"]
    }
  ],
  articles: [
    {
      id: "art_1",
      title: "The Next 10 Years of Future Technology: A Visionary Outlook",
      category: "Future Tech",
      summary: "Exploring the convergence of Quantum Computing, sustainable energy architectures, and the evolution of AI-human synergy in the next decade.",
      date: "Dec 15, 2025",
      readTime: "8 min read",
      content: "",
      externalUrl: "https://next10yearsoffutchertechnology.blogspot.com/2025/12/the-next-10-years-of-technology_15.html"
    },
    {
      id: "art_2",
      title: "The Agentic AI Revolution in Industry 5.0",
      category: "Agentic AI",
      summary: "Why autonomous agentic workflows are replacing static automation in high-speed manufacturing and complex software deployment pipelines.",
      date: "Oct 10, 2025",
      readTime: "12 min read",
      content: "",
      externalUrl: "https://next10yearsoffutchertechnology.blogspot.com/2025/12/the-next-10-years-of-technology_15.html"
    },
    {
      id: "art_3",
      title: "Python for Hardware: Orchestrating Multi-SoC Environments",
      category: "Python",
      summary: "Deep dive into using Python to automate complex hardware-software interactions across heterogeneous SoC architectures.",
      date: "Aug 05, 2025",
      readTime: "6 min read",
      content: "",
      externalUrl: "https://next10yearsoffutchertechnology.blogspot.com/2025/12/the-next-10-years-of-technology_15.html"
    }
  ]
};
