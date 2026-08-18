// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Sukhmani Chhabra",
  description:
    "Computer Science undergraduate specializing in backend development and full-stack engineering — building RESTful APIs, scalable databases, and cloud-native applications.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I build backend systems that scale",
  "I design RESTful APIs and databases",
  "I architect distributed cloud infrastructure",
  "I build full-stack products end to end",
];

export const EMAIL = "sukhmani.c23@iiits.in";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/sukhmani-chhabra",
  github: "https://github.com/sukhmanichhabra",
  leetcode: "https://leetcode.com/u/Sukhmani_13/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Nutrify — AI Nutrition Coach",
    image: "/projects/nutrify.jpg",
    blurImage: "/projects/blur/nutrify-blur.jpg",
    description:
      "An AI-native nutrition and fitness platform with an MCP-powered agent framework exposing 20+ tools for meal tracking, workout planning, and progress analytics.",
    gradient: ["#1C3D2E", "#2D6A4F"],
    url: "https://nutrify.codes/",
    tech: ["fastapi", "react", "mongodb", "docker"],
  },
  {
    name: "Queuegate — Virtual Queueing Platform",
    image: "/projects/queuegate.svg",
    blurImage: "/projects/blur/queuegate-blur.svg",
    description:
      "A real-time, race-free virtual queueing platform with Redis-backed FIFO admission, live ETA tracking, and merchant analytics — built to never oversell capacity.",
    gradient: ["#1B1035", "#3B1F73"],
    url: "https://github.com/sukhmanichhabra/queuegate",
    tech: ["next", "nestjs", "postgresql", "docker"],
  },
  {
    name: "Feasto — Food Delivery Marketplace",
    image: "/projects/feasto.svg",
    blurImage: "/projects/blur/feasto-blur.svg",
    description:
      "A hyper-local food delivery marketplace split into 11 independently deployable microservices, with Kafka event streaming and live Redis-synced GPS tracking.",
    gradient: ["#5E2408", "#8C3D14"],
    url: "https://feasto.me/",
    tech: ["nodejs", "kafka", "redis", "docker"],
  },
];

export const SKILLS = {
  languages: [
    "python",
    "cpp",
    "javascript",
    "typescript",
    "sql",
    "java",
    "html",
    "css",
  ],
  frameworks: [
    "fastapi",
    "flask",
    "nodejs",
    "expressjs",
    "react",
    "next",
    "apollo",
    "tailwind",
  ],
  databases: [
    "mongodb",
    "postgresql",
    "redis",
    "mysql",
    "prisma",
    "kafka",
    "docker",
  ],
  tools: ["aws", "git", "postman", "linux", "vercel", "socketio", "webrtc"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  // ─── 2026 ───────────────────────────────────────────────────────────────
  {
    type: NodeTypes.CHECKPOINT,
    title: "2026",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Knight — LeetCode ♞",
    size: ItemSize.SMALL,
    subtitle:
      "Reached Knight badge on LeetCode, reflecting consistent practice and strong proficiency in data structures and algorithms.",
    slideImage: "/timeline/leetcode-knight.svg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Shortlisted — Amazon ML Summer School 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Selected among top candidates across India for Amazon's prestigious Machine Learning Summer School program.",
    image: "/timeline/amazon-ml.svg",
    slideImage: "/timeline/amazon-ml-summer-school.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Research Paper — ICIIS 2026 📄",
    size: ItemSize.SMALL,
    subtitle:
      "\"Dual-Architecture Next-Generation Whale Optimization: TITAN and ATLAS Frameworks for Dynamic Multivehicle IoV Path Planning\"",
    image: "/timeline/iciis.svg",
    slideImage: "/timeline/iciis-2026-paper.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Research Paper — IEEE CONECCT 2026 📡",
    size: ItemSize.SMALL,
    subtitle:
      "\"A Potential-Field Guided Chaotic Opposition-Based Sparrow Search Algorithm for Global Optimization\"",
    image: "/timeline/ieee.svg",
    slideImage: "/timeline/ieee-conecct-2026-paper.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  // ─── 2025 ───────────────────────────────────────────────────────────────
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Engineer Intern — Zehntech Technologies 💼",
    size: ItemSize.SMALL,
    subtitle:
      "Internship at Zehntech Technologies Pvt. Ltd., Indore — worked on real-world software engineering projects.",
    image: "/timeline/zehntech.svg",
    slideImage: "/timeline/zehntech-slide.svg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Domain Lead — Deep Learning @ Epoch Club 🧠",
    size: ItemSize.SMALL,
    subtitle:
      "Led the Deep Learning vertical at Epoch Club, IIIT Sri City. Organised and took multiple hands-on sessions including Real-Time Model Building from Scratch (Aarambh '25).",
    image: "/timeline/epoch.svg",
    slideImage: "/timeline/epoch-deep-learning.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2nd Runner-Up — AgriAI Hackathon 🥉",
    size: ItemSize.SMALL,
    subtitle:
      "Won 2nd Runner-Up at AgriAI Hackathon, Abhisarga IIITS. Built an AI-powered agriculture intelligence system with crop disease detection and smart weather forecasting.",
    image: "/timeline/hackathon.svg",
    slideImage: "/timeline/agri-ai.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Hosted Women in Tech Event 👩‍💻",
    size: ItemSize.SMALL,
    subtitle:
      "Organised and hosted a Women in Technology event at IIIT Sri City, bringing together 30+ women students to celebrate and encourage diversity in tech.",
    slideImage: "/timeline/women-in-tech.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  // ─── 2024 ───────────────────────────────────────────────────────────────
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Core Member — Google Developers Club 🌐",
    size: ItemSize.SMALL,
    subtitle:
      "Core Member of Google Developers Club, IIIT Sri City. Contributed to sessions, workshops and community events. Took a session on Synchronization in Queues.",
    image: "/timeline/gdsc.svg",
    slideImage: "/timeline/women-in-tech.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Core Member — Deep Learning @ Epoch Club",
    size: ItemSize.SMALL,
    subtitle:
      "Joined Epoch Club as a Core Member focusing on Deep Learning. Helped build the club's learning initiatives and deep-learning community at IIIT Sri City.",
    image: "/timeline/epoch.svg",
    slideImage: "/timeline/epoch-deep-learning.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  // ─── 2023 ───────────────────────────────────────────────────────────────
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Core Member — Distributed Systems @ Enigma Club 🔐",
    size: ItemSize.SMALL,
    subtitle:
      "Core Member of the Distributed Systems track at Enigma Club, IIIT Sri City. Explored distributed architectures, consensus algorithms and systems design.",
    image: "/timeline/enigma.svg",
    slideImage: "/timeline/dl-teaching.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
