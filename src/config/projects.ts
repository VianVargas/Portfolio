import type { ProjectItem } from "@/types";

export const PROJECTS: ProjectItem[] = [
  {
    id: "ecograde",
    title: "EcoGrade",
    shortDesc:
      "AI-powered waste analysis and segregation system that uses YOLOv11, HSV-based contamination detection, and MCDA to determine whether non-biodegradable materials are suitable for upcycling or downcycling.",
    fullDesc:
      "EcoGrade is an AI-powered waste analysis and segregation system that uses YOLOv11, HSV-based contamination detection, and MCDA to determine whether non-biodegradable materials are suitable for upcycling or downcycling. Running on a Raspberry Pi 5 with a servo-based mechanism, it analyzes one item at a time and automatically sorts it based on quality. EcoGrade aims to improve recycling accuracy, reduce manual sorting, and support more sustainable waste management.",
    type: "AI / IoT",
    image: "/assets/projects/ecograde.webp",
    tags: ["YOLOv11", "Python", "Raspberry Pi", "OpenCV", "MCDA"],
    features: [
      "AI-powered waste classification using YOLOv11",
      "HSV-based contamination detection for material analysis",
      "MCDA for upcycling vs. downcycling decisions",
      "Raspberry Pi 5 with servo-based automatic sorting",
    ],
  },
  {
    id: "splittr",
    title: "Splittr",
    shortDesc:
      "Web3 bill-splitting application built on the Stellar Testnet. Upload a receipt or enter items manually, split costs among participants, and settle payments instantly in XLM.",
    fullDesc:
      "Splittr is a Web3 bill-splitting application built on the Stellar Testnet. Upload a receipt or enter items manually, split costs among participants, and settle payments instantly in XLM — all on-chain with a Soroban smart contract.",
    type: "Web3",
    image: "/assets/projects/splittr.webp",
    tags: ["Stellar", "Soroban", "XLM", "Blockchain"],
    features: [
      "Upload receipt or enter items manually for splitting",
      "Split costs among multiple participants seamlessly",
      "Instant settlement in XLM on the Stellar Testnet",
      "On-chain execution via Soroban smart contracts",
    ],
  },
  {
    id: "underwater-xplorers",
    title: "UnderwaterXplorers",
    shortDesc:
      "Interactive OpenGL project set in a dynamic underwater environment. Control a submarine through a 2D ocean filled with animated fish, bubbles, and colorful corals.",
    fullDesc:
      "UnderwaterXplorers is an interactive OpenGL project set in a dynamic underwater environment. The user controls a submarine that moves freely in a 2D ocean scene filled with animated fish, floating bubbles, and colorful corals. The environment responds to user input — corals can change size, the scene can switch between day and night, and various elements move and animate using transformations such as glTranslate, glScale, and glRotate. The project showcases an engaging aquatic ecosystem brought to life through real-time animations and user interaction.",
    type: "OpenGL",
    image: "/assets/projects/xplorers.webp",
    tags: ["OpenGL", "C++", "Graphics", "Animation"],
    features: [
      "2D submarine movement in an animated ocean scene",
      "Day/night cycle switching via user input",
      "Coral size manipulation using glScale transformations",
      "Animated fish, bubbles, and corals with glTranslate/glRotate",
    ],
  },
  {
    id: "lifestream",
    title: "Lifestream",
    shortDesc:
      "PHP-based web Blood Donation and Donor Finder System connecting donors and recipients through a web application with registration, profile management, and donor matching.",
    fullDesc:
      "LifeStream is a PHP-based web Blood Donation and Donor Finder System developed by Vargas, Javier, and Turingan. The platform connects blood donors and recipients through a web application where users can register, manage profiles, donate blood, and search for compatible donors stored in the system's database. It streamlines the donation process with features such as donor management, recipient search, donation history tracking, and announcement viewing. The admin dashboard, also built in PHP, enables administrators to manage users, coordinate donor–recipient matching based on priority, oversee blood collections, and publish announcements. LifeStream modernizes and simplifies the process of finding and donating blood, making it more efficient and accessible for both users and admins.",
    type: "Web App",
    image: "/assets/projects/lifestream.webp",
    tags: ["PHP", "MySQL", "Blood Donation", "Full-Stack"],
    features: [
      "Donor and recipient registration with profile management",
      "Priority-based donor–recipient matching system",
      "Donation history tracking and announcement viewing",
      "Admin dashboard for user and collection management",
    ],
  },
];
