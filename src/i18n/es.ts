export const es = {
  cv: {
    file: "docs/cv.pdf",
    downloadName: "David_Zea_CV.pdf",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contáctame",
    openMenu: "Abrir menú",
    switchLanguage: "Switch to English",
  },
  home: {
    role: "Desarrollador Frontend",
    tagline:
      "Vue.js · React · TypeScript — 4 años construyendo plataformas web en tiempo real para salud, seguros y e-commerce.",
    viewProjects: "Ver Proyectos",
    downloadCv: "Descargar CV",
    contact: "Contáctame",
  },
  about: {
    title: "Sobre Mí",
    profileAlt: "Ilustración de un desarrollador",
    // Frase con resaltados: [antes del nombre, antes del rol, antes de Vue, antes de React, final]
    intro: [
      "¡Hola! Soy ",
      ", ",
      " con 4 años de experiencia, especializado en ",
      " y ",
      " con TypeScript.",
    ],
    paragraphs: [
      "Construyo plataformas web en tiempo real para los sectores de salud, seguros y e-commerce: monitoreo de ambulancias, gestión de casos médicos y sistemas conectados a sensores IoT.",
      "Lideré la migración de las plataformas de una aseguradora de Vue.js 2 a Vue.js 3 con TypeScript, autenticación con AWS Cognito y mensajería en tiempo real con WebSockets.",
      "Cuido la calidad y la entrega: pruebas con Vitest y Jest, revisión de Pull Requests y despliegue seguro con Cloudflare y AWS CloudFront.",
    ],
    seeWork: {
      before: "🚀 Puedes darle un vistazo a algunos de mis trabajos en la sección ",
      link: "PROYECTOS",
      after: ".",
    },
    downloadCv: "Descargar CV",
  },
  projects: {
    title: "Proyectos",
    subtitle:
      "Soluciones frontend escalables, arquitecturas limpias y plataformas en tiempo real.",
    technicalAnalysis: "Análisis Técnico",
    summary: "Resumen del Proyecto",
    challenge: "Reto Técnico e Impacto",
    stack: "Stack Tecnológico",
    duration: "Tiempo de Elaboración",
    gallery: "Galería de la Interfaz",
    closeDetail: "Cerrar detalle del proyecto",
    closeImage: "Cerrar imagen",
    enlargeCapture: (n: number, title: string) =>
      `Ampliar captura ${n} de ${title}`,
    captureAlt: (n: number, title: string) => `Captura ${n} de ${title}`,
    enlargedAlt: (title: string) => `Captura ampliada de ${title}`,
  },
  skills: {
    title: "Habilidades",
    subtitle:
      "Estas son las tecnologías y herramientas con las que trabajo regularmente.",
    categories: {
      frontend: "FRONTEND",
      testing: "TESTING",
      cloud: "CLOUD Y DESPLIEGUE",
      tools: "HERRAMIENTAS",
    },
  },
  contact: {
    title: "Contáctame",
    subtitle: "Envíame un Mensaje",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar",
    required: "Este campo es requerido",
    invalidEmail: "Ingresa un email válido, p. ej. nombre@correo.com",
    success: "¡Mensaje enviado con éxito!",
    error: "Error al enviar el mensaje",
  },
  notFound: {
    title: "Página no encontrada ⚠️",
    message: "No pudimos encontrar la página que estás buscando...",
    back: "Regresar",
  },
};

export type Messages = typeof es;
