export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  date: string;
  links: {
    live?: string;
    github?: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  date: string;
  details: string;
}

export interface AchievementItem {
  text: string;
  link?: string;
  linkLabel?: string;
}

export const resumeData = {
  personal: {
    name: "Manik Sharma",
    title: "Full-Stack Developer & Game Creator",
    email: "maniksharma2607@gmail.com",
    phone: "+91-6006810778",
    location: "Jammu and Kashmir, India",
    links: {
      github: "https://github.com/Manik2607",
      linkedin: "https://www.linkedin.com/in/manik-sharma-60a1752a1/",
      portfolio: "https://manik-dev.vercel.app",
      resumePdf: "https://drive.google.com/file/d/14dgBawoPKzDP7u5aSUtgdk6iiiIyir4p/view?usp=sharing"
    }
  },
  summary: 
    "Full-Stack Developer with expertise in React, TypeScript, and FastAPI, plus game development experience leading Unity-based mobile projects. Proven ability to architect scalable systems, mentor development teams, and deliver user-focused applications. Strong foundation in frontend performance, backend APIs, clean architecture, and cross-platform development.",
  skills: [
    {
      name: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C#", "C++", "Java"]
    },
    {
      name: "Frontend Stack",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn/UI", "Vite", "HTML5/CSS3"]
    },
    {
      name: "Backend & APIs",
      skills: ["Node.js", "FastAPI", "Spring Boot", "RESTful APIs", "GraphQL"]
    },
    {
      name: "Databases & Storage",
      skills: ["MySQL", "MongoDB", "Firebase Firestore", "PostgreSQL"]
    },
    {
      name: "Game Development",
      skills: ["Unity Engine", "C# Scripting", "Unity Ads SDK", "VFX Graph", "Godot Engine"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "AWS", "Linux", "Vercel"]
    }
  ] as SkillCategory[],
  experience: [
    {
      role: "Game Developer Intern",
      company: "Bleeding Pixels Studio",
      location: "New Delhi, India",
      date: "April 2025 – January 2026",
      description: [
        "Led development team building mobile game using Unity Engine and C#, architecting 12+ interconnected manager systems with singleton patterns and event-driven communication for scalable game architecture.",
        "Coordinated cross-functional team implementing monetization strategy using Unity Ads SDK (rewarded, interstitial, banner) with dynamic progression tracking across iOS and Android platforms.",
        "Designed progression system featuring dynamic difficulty scaling algorithms, combo multipliers, achievement tracking, collectible systems, and 25-level checkpoint architecture with persistent state management."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "ADDA - Akhnoor District Demand Association",
      subtitle: "Civic Engagement Platform",
      date: "Dec 2024 – Present",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Firebase", "MongoDB"],
      links: {
        live: "https://adda-2026.vercel.app"
      },
      description: [
        "Built full-stack community platform for civic engagement featuring dynamic blog system, admin dashboard, and role-based content management with 100+ active users.",
        "Implemented dual database architecture (Firebase/MongoDB) with RESTful APIs and Firebase Authentication for secure data persistence and real-time updates."
      ]
    },
    {
      title: "SpellWave",
      subtitle: "Interactive Spelling Practice Web App",
      date: "Sep 2024",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Web Speech API"],
      links: {},
      description: [
        "Developed interactive web-based spelling practice platform with text-to-speech API integration, helping users improve vocabulary and listening comprehension.",
        "Implemented React Context API for global state management of configurable voice, pitch, and speed settings with real-time user preference persistence."
      ]
    },
    {
      title: "Musica",
      subtitle: "Full-Stack Music Downloader & API",
      date: "Mar 2023",
      tech: ["React.js", "Python", "FastAPI", "BeautifulSoup", "REST APIs"],
      links: {},
      description: [
        "Built full-stack music download application integrating React frontend with FastAPI backend for efficient web scraping and API communication.",
        "Developed RESTful API endpoints handling asynchronous requests, error handling, and rate limiting for reliable service delivery."
      ]
    }
  ] as Project[],
  education: [
    {
      degree: "B.E. in Computer Science and Engineering",
      school: "Sri Krishna College of Engineering and Technology",
      date: "2023 – 2027",
      details: "Expected Graduation: 2027"
    },
    {
      degree: "Class XII – CBSE",
      school: "Army Public School",
      date: "2022 – 2023",
      details: "Score: 83%"
    },
    {
      degree: "Class X – CBSE",
      school: "Army Public School",
      date: "2020 – 2021",
      details: "CGPA: 8.2 / 10"
    }
  ] as EducationItem[],
  achievements: [
    {
      text: "Successfully led game development project from concept to deployment with monetization integration."
    },
    {
      text: "Built and deployed 3+ production web applications serving 100+ users with 99% uptime."
    },
    {
      text: "Open Source Contributor to Godot Engine (C++), submitting pull requests, bug reports, and feature proposals to improve engine functionality.",
      link: "https://github.com/pulls?q=is:pr+is:merged+author:Manik2607",
      linkLabel: "Merged PRs"
    },
    {
      text: "Maintains active GitHub profile with 50+ repositories showcasing full-stack development, game development, and AI experimentation.",
      link: "https://github.com/Manik2607",
      linkLabel: "View GitHub"
    }
  ] as AchievementItem[]
};
