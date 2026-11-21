import type { Messages } from "./es";

// Tipado con `Messages`: si falta una clave respecto a es.ts, falla type-check.
export const en: Messages = {
  cv: {
    file: "docs/cv_eng.pdf",
    downloadName: "David_Zea_Resume.pdf",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    openMenu: "Open menu",
    switchLanguage: "Cambiar a español",
  },
  home: {
    role: "Frontend Developer",
    tagline:
      "Vue.js · React · TypeScript — 4 years building real-time web platforms for healthcare, insurance and e-commerce.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    contact: "Contact me",
  },
  about: {
    title: "About Me",
    profileAlt: "Illustration of a developer",
    intro: [
      "Hi! I'm ",
      ", a ",
      " with 4 years of experience, specialized in ",
      " and ",
      " with TypeScript.",
    ],
    paragraphs: [
      "I build real-time web platforms for healthcare, insurance and e-commerce: ambulance monitoring, medical case management and systems connected to IoT sensors.",
      "I led the migration of an insurance company's platforms from Vue.js 2 to Vue.js 3 with TypeScript, AWS Cognito authentication and real-time messaging over WebSockets.",
      "I care about quality and delivery: testing with Vitest and Jest, Pull Request reviews and secure deployments with Cloudflare and AWS CloudFront.",
    ],
    seeWork: {
      before: "🚀 Take a look at some of my work in the ",
      link: "PROJECTS",
      after: " section.",
    },
    downloadCv: "Download CV",
  },
  projects: {
    title: "Projects",
    subtitle:
      "Scalable frontend solutions, clean architectures and real-time platforms.",
    technicalAnalysis: "Technical Analysis",
    summary: "Project Summary",
    challenge: "Technical Challenge & Impact",
    stack: "Tech Stack",
    duration: "Duration",
    gallery: "Interface Gallery",
    closeDetail: "Close project details",
    closeImage: "Close image",
    enlargeCapture: (n: number, title: string) =>
      `Enlarge screenshot ${n} of ${title}`,
    captureAlt: (n: number, title: string) => `Screenshot ${n} of ${title}`,
    enlargedAlt: (title: string) => `Enlarged screenshot of ${title}`,
  },
  skills: {
    title: "Skills",
    subtitle: "These are the technologies and tools I work with regularly.",
    categories: {
      frontend: "FRONTEND",
      testing: "TESTING",
      cloud: "CLOUD & DEPLOYMENT",
      tools: "TOOLS",
    },
  },
  contact: {
    title: "Contact Me",
    subtitle: "Send me a Message",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    required: "This field is required",
    invalidEmail: "Enter a valid email, e.g. name@email.com",
    success: "Message sent successfully!",
    error: "Error sending the message",
  },
  notFound: {
    title: "Page not found ⚠️",
    message: "We couldn't find the page you're looking for...",
    back: "Go back",
  },
};
