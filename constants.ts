import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "SAI RAHUL ADEPU",
  title: "SOFTWARE & AUTOMATION ENGINEER",
  location: "BANGALORE, INDIA // 560103",
  about: "Software & Automation Engineer with 2.5+ years of experience specializing in Python, Selenium, CI/CD, Jenkins, Docker, Linux, and DevOps. Expertise in Test Automation Frameworks (TAF/TAS) and Clean Engineering Build Automation, achieving 60% reduction in DevOps manual effort. Skilled in full-stack MERN development and embedded protocol automation (Bluetooth, Wi-Fi).",
  experiences: [
    {
      id: "exp_1",
      role: "Automation Engineer (Clean Engineering)",
      company: "LG SOFT INDIA (LG Electronics)",
      period: "FEB 2025 - PRESENT",
      description: [
        "Built Clean Engineering Build Automation system improving consistency and reducing DevOps work by 60%.",
        "Automated SoCs, manifests, Jira tickets (TVRP/CCC), repo cloning, patches, and build triggering.",
        "Reduced build handling time from 2 hours to near-zero manual intervention.",
        "Improved reliability across multiple SoCs and devices.",
        "Built dashboards for pipeline health & automation insights."
      ]
    },
    {
      id: "exp_2",
      role: "Python Automation Developer (webOS)",
      company: "LG SOFT INDIA (LG Electronics)",
      period: "FEB 2024 - JAN 2025",
      description: [
        "Developed Python-based webOS automation for connectivity, media, and UI testing across multiple platforms.",
        "Automated Bluetooth, Wi-Fi, Hotspot, Screen Share, HLS, and SCAP features.",
        "Created QML UI validation tools and automated HTNG & Cisco protocol tests.",
        "Improved TAS/TAF frameworks for new devices and strengthened regression coverage.",
        "Debugged issues with QA teams and improved CI/CD automation flows."
      ]
    },
    {
      id: "exp_3",
      role: "Software Engineer (webOS SDK)",
      company: "LG SOFT INDIA (LG Electronics)",
      period: "JUL 2023 - FEB 2024",
      description: [
        "Built VS Code extensions and webOS Studio tools to improve developer workflows.",
        "Implemented 'Smart Import' for seamless app migration and reduced onboarding time by 40%.",
        "Built utilities using JavaScript, Node.js, and Raspberry Pi.",
        "Supported debugging, testing, SDK validation, and managed Git/Gerrit documentation."
      ]
    },
    {
      id: "exp_4",
      role: "Full-Stack Web Development Trainee",
      company: "VECTOR INDIA INSTITUTE",
      period: "JUL 2022 - JUN 2023",
      description: [
        "Built responsive MERN applications (Amazon Clone) and REST APIs.",
        "Improved UI/UX using React Hooks and reusable components (Radisson Hotels UI).",
        "Managed MongoDB/MySQL and performed app testing.",
        "Strengthened backend and automation using Python."
      ]
    }
  ],
  education: [
    {
      id: "edu_1",
      degree: "B.E – Electrical & Electronics",
      school: "GANAPATHY ENGINEERING COLLEGE",
      year: "2019 - 2022 | GPA: 8.0"
    },
    {
      id: "edu_2",
      degree: "MERN Stack Developer",
      school: "VECTOR INDIA INSTITUTE",
      year: "2022 - 2023"
    }
  ],
  skills: [
    {
      category: "PROGRAMMING",
      items: ["Python", "JavaScript", "TypeScript", "Node.js", "React.js", "Express.js", "MERN Stack", "Selenium", "QML"]
    },
    {
      category: "AUTOMATION & DEVOPS",
      items: ["TAS/TAF", "Jenkins", "Docker", "CI/CD", "Cucumber BDD", "Build Automation", "Linux"]
    },
    {
      category: "TOOLS & PLATFORMS",
      items: ["VS Code Extensions", "webOS SDK", "Raspberry Pi", "Git", "Gerrit", "Jira", "MongoDB", "MySQL"]
    },
     {
      category: "DOMAIN EXPERTISE",
      items: ["Connectivity (BT/Wi-Fi)", "Protocol Automation", "Agile/Scrum", "Generative AI Basics"]
    }
  ]
};