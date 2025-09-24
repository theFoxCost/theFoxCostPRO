import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "DIAFOX",
    companyName: "DIAFOX, Ltd.",
    companyLogo: "/dd.png",
    positions: [
      {
        id: "diafox-founder",
        title: "Founder",
        employmentPeriod: { start: "2025" },
        employmentType: "Part-time",
        icon: "code",
        description: "- Uploading books from multiple branches.",
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension Development",
          "UI/UX Design",
          "UX Writing",
          "Design System",
          "Brand Design",
          "Figma",
          "Research",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },

  {
    id: "freelance",
    companyName: "Hobbyist",
    positions: [
      {
        id: "freelance-3d-design",
        title: "3D Mechanical Designer",
        employmentPeriod: { start: "2021" },
        employmentType: "Self-taught",
        icon: "code",
        description: `
- Designed 3D models including HP Portable Station.
- Created a 3D printed shelf.
- Other projects in progress.`,
        skills: ["OnShape", "Fusion360", "Solidworks"],
      },
      {
        id: "freelance-frontend",
        title: "Frontend Developer",
        employmentPeriod: { start: "2023" },
        employmentType: "Self-taught",
        icon: "code",
        description: `
- Built a desktop app using Electron.js.
- Developed a public book library for learners.
- Created a personal books library.
- Made a real-time Svelte component using moment.js.`,
        skills: [
          "SvelteKit",
          "Lucide",
          "HTML",
          "CSS",
          "Vue.js",
          "Nuxt.js",
          "JavaScript",
          "TypeScript",
          "TailwindCSS",
          "Sass",
          "Others I may have forgotten",
        ],
      },
      {
        id: "freelance-backend",
        title: "Backend Developer",
        employmentPeriod: { start: "2025" },
        employmentType: "Self-taught",
        icon: "code",
        description: `
- Built Python scripts.
- Created APIs for electronic projects.`,
        skills: [
          "Python",
          "FastAPI",
          "Flask",
          "MongoDB",
          "Podman",
          "Vercel",
          "Docker",
          "Debian",
          "Bash",
          "Git",
          "Others I may have forgotten",
        ],
      },
      {
        id: "freelance-ee",
        title: "Electrical Engineer",
        employmentPeriod: { start: "2020" },
        employmentType: "Self-taught + Formal Education",
        icon: "code",
        description: `
- Awarded Best EE Student in high school.
- Built linear and switched-mode power supplies (SMPS).
- Created a smart clapping and auto-sensing lamp with phone app.
- Built a smart water detector.
- Completed many other electrical and electronic projects.`,
        skills: [
          "SMPS",
          "FastAPI",
          "Flask",
          "MongoDB",
          "Podman",
          "Vercel",
          "Docker",
          "Debian",
          "Bash",
          "Git",
          "Circuit Design",
        ],
      },
      {
        id: "freelance-it",
        title: "IT (Networking & e-Hacking) Hobbyist",
        employmentPeriod: { start: "2023" },
        employmentType: "Self-taught",
        icon: "code",
        description: `
- Built a ransomware virus.
- Created an Obsidian Vault sync program (API).
- Learned Linux operating systems.
- Customized Linux environment ("Riced my Linux").
- Built my own server and homelab.
- Learned Kerberos and containerization.
- Set up a virtual learning machine.
- Other projects in progress.`,
        skills: [
          "Networking",
          "Linux",
          "Python",
          "Docker",
          "Security",
          "Bash",
          "Git",
          "Others I may have forgotten",
        ],
      },
      {
        id: "freelance-design",
        title: "Graphic & UI/UX Designer",
        employmentPeriod: { start: "2024" },
        employmentType: "Self-taught",
        icon: "design",
        description: "Designed book covers, posters, and UI concepts.",
        skills: [
          "Creativity",
          "UI/UX Design",
          "Graphic Design",
          "Sketch",
          "GIMP",
          "Figma",
          "Canva",
        ],
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "wizra",
        title: "University of Science and Technology — WIZRA",
        employmentPeriod: { start: "2025.09", end: "2026" },
        employmentType: "Formal Education",
        icon: "education",
        description: `
- Currently studying for a Bachelor's degree in Electrical Engineering.
- Language proficiency: English (B1), German (A2), French (B1), Arabic (Native).`,
        skills: [
          "Python",
          "Embedded C",
          "TypeScript",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "PCB Design",
          "Machining Design",
          "3D Mechanical Design",
          "Presentation",
        ],
      },
      {
        id: "mustafa",
        title: "Mustafa Nabi High School",
        employmentPeriod: { start: "2022.08", end: "2025.05" },
        employmentType: "Formal Education + Self-taught",
        icon: "education",
        description: `
- Recognized as Best Chess Player of the city.
- Achieved numerous awards.
- Talented Student award (Grade 51%).
- Developed websites and electrical systems.`,
        skills: [
          "HTML",
          "Python",
          "CSS",
          "KiCad",
          "JavaScript",
          "OnShape",
          "Svelte",
          "Git",
          "Self-learning (YouTube)",
        ],
      },
      {
        id: "quran-school",
        title: "Quran School and Middle School — Berrouaghia",
        employmentPeriod: { start: "08.2015", end: "06.2022" },
        employmentType: "Formal Education + Self-taught",
        icon: "education",
        description: `
- Student of the Fath Mosque Quranic School.
- Achieved title of Best Skilled Student (Grade 75–85%).
- Talented goalkeeper.
- Built a truck following raw material principles.
- Built virus and antivirus for educational purposes.`,
        skills: [
          "20% Verse",
          "Mechanical Drawing",
          "Electrical Knowledge",
          "Physics",
          "Mathematics",
          "Python",
          "Self-learning",
        ],
      },
    ],
  },
];
