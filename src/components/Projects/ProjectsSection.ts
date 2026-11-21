import { ref } from "vue";

// Imágenes para Assistance-SOS
const imagenMainAssistance = new URL(
  "@/assets/images/assistance/assistanceMain.webp",
  import.meta.url,
).href;
const imageAssistanceProject = [
  new URL("@/assets/images/assistance/assistance1.webp", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance2.webp", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance3.webp", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance4.webp", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance5.webp", import.meta.url).href,
];

// Imágenes para SOS (asistencia médica)
const imagenMainSos = new URL(
  "@/assets/images/rimacSos/rimacSosMain.webp",
  import.meta.url,
).href;
const imageSosProject = [1, 2, 3, 4, 5, 6, 7].map(
  (n) =>
    new URL(`../../assets/images/rimacSos/rimacSos${n}.webp`, import.meta.url)
      .href,
);

// Imágenes para SEV (asistencia vehicular)
const imagenMainSev = new URL(
  "@/assets/images/rimacSev/rimacSevMain.webp",
  import.meta.url,
).href;
const imageSevProject = [1, 2, 3, 4, 5].map(
  (n) =>
    new URL(`../../assets/images/rimacSev/rimacSev${n}.webp`, import.meta.url)
      .href,
);

// Imágenes para MedicalFile
const imagenMainMedical = new URL(
  "@/assets/images/medicalFile/medicalMain.webp",
  import.meta.url,
).href;
const imageMedicalProject = [
  new URL("@/assets/images/medicalFile/medicalFile1.webp", import.meta.url).href,
  new URL("@/assets/images/medicalFile/medicalFile2.webp", import.meta.url).href,
  new URL("@/assets/images/medicalFile/medicalFile3.webp", import.meta.url).href,
  new URL("@/assets/images/medicalFile/medicalFile4.webp", import.meta.url).href,
];

// Imágenes para Emerlife
const imagenMainScarlet = new URL(
  "@/assets/images/scarlet/emerlifeMain.webp",
  import.meta.url,
).href;
const imagenScarletProject = [
  new URL("@/assets/images/scarlet/emerlife1.webp", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife2.webp", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife3.webp", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife4.webp", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife5.webp", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife6.webp", import.meta.url).href,
];

export interface Project {
  title: string;
  role: string;
  shortDescription: string;
  impact: string;
  timeBuilding: string;
  technologies: string[];
  image: string;
  imageResults: string[];
}

export const projects = ref<Project[]>([
  {
    title: "SOS · Asistencia médica",
    role: "Frontend Developer",
    shortDescription:
      "Sistema integrado al CRM de una aseguradora (EPS) que asigna proveedores de ambulancias y médicos a domicilio a los casos del call center, con geolocalización de unidades en tiempo real.",
    impact:
      "El call center asignaba las ambulancias a mano siguiendo reglas por tipo de caso, tiempo de respuesta y zona distrital, y coordinaba con los proveedores por WhatsApp y Hangouts. Los errores de selección retrasaban las atenciones y generaban costos a la EPS. Desarrollé el frontend de un sistema integrado al CRM (Salesforce) que muestra en el mapa las unidades más cercanas, subasta cada caso entre proveedores según las reglas de la EPS y permite que el proveedor registre el cierre del caso. Después lideré su migración de Vue.js 2 a Vue.js 3 con TypeScript, autenticación con AWS Cognito y mensajería en tiempo real con WebSockets, en paralelo con el cierre de la migración de SEV. También reemplacé Leaflet por MapLibre GL (renderizado con WebGL) para que el mapa siga fluido con muchas unidades moviéndose en tiempo real. Resultado: menos errores de asignación, menos retrasos en las atenciones y el registro de cierre pasó del call center a los proveedores. Proyecto privado: solo capturas.",
    timeBuilding: "8 meses · migración Vue 2 → 3 (2025–2026)",
    technologies: [
      "Vue.js 3",
      "TypeScript",
      "MapLibre GL",
      "WebSockets",
      "AWS Cognito",
      "AWS CloudFront",
    ],
    image: imagenMainSos,
    imageResults: imageSosProject,
  },
  {
    title: "SEV · Asistencia vehicular",
    role: "Frontend Developer",
    shortDescription:
      "Versión vehicular del mismo sistema: asigna grúas, choferes de reemplazo, procuradores y mecánicos a los siniestros y casos SOAT de los asegurados.",
    impact:
      "Mismo problema que en salud, aplicado a siniestros vehiculares: la asignación manual de proveedores provocaba errores y demoras. El sistema propone la unidad más cercana en el mapa según tipo de servicio (grúa, chofer, procurador, mecánico), subasta el caso entre proveedores y centraliza los datos del asegurado, el vehículo y el siniestro. Cuando Vue.js 2 llegó a su fin de soporte (EOL), gestioné y justifiqué ante el cliente la migración a Vue.js 3 y la lideré: refactorización completa a TypeScript, autenticación con AWS Cognito, mensajería en tiempo real con WebSockets, políticas de seguridad de contenido (CSP) y el cambio de Leaflet a MapLibre GL para mejorar el rendimiento del mapa. Proyecto privado: solo capturas.",
    timeBuilding: "8 meses · migración Vue 2 → 3 (desde mayo 2025)",
    technologies: [
      "Vue.js 3",
      "TypeScript",
      "MapLibre GL",
      "WebSockets",
      "AWS Cognito",
      "AWS CloudFront",
    ],
    image: imagenMainSev,
    imageResults: imageSevProject,
  },
  {
    title: "Assistance-SOS",
    role: "Frontend Developer",
    shortDescription:
      "Plataforma web para la gestión de ambulancias y subasta de casos en tiempo real.",
    impact:
      "El mayor reto fue sincronizar el estado de múltiples ambulancias en tiempo real entre conductores y operadores sin colisiones de datos. Implementé Firebase Realtime Database con listeners optimizados y un sistema de subasta con bloqueo por transacción, reduciendo conflictos de asignación a cero. La integración con Leaflet para el tracking en vivo requirió optimizar la frecuencia de actualización de marcadores para mantener fluidez sin saturar la conexión.",
    timeBuilding: "7 meses",
    technologies: [
      "Vue.js 3",
      "Typescript",
      "Leaflet",
      "Firebase",
      "AWS Amplify",
      "Node.js",
    ],
    image: imagenMainAssistance,
    imageResults: imageAssistanceProject,
  },
  {
    title: "MedicalFile",
    role: "Frontend Developer",
    shortDescription:
      "Plataforma web para controlar los medicamentos de las unidades clínicas: inventario, entregas y recepción por proveedor, con seguimiento de las unidades en tiempo real.",
    impact:
      "El inventario de medicamentos no estaba conectado con el estado de cada unidad en ruta, así que no había una vista confiable de qué insumos llevaba cada vehículo ni de qué entregaba cada proveedor. Desarrollé el frontend: diseñé un modelo de datos en Firebase que relaciona el inventario con los vehículos activos y se actualiza a medida que se consumen insumos, y lo vinculé con la geolocalización de cada unidad en Google Maps. Resultado: una sola vista con el stock y la ubicación de cada unidad, sin recargas manuales. Proyecto privado: solo capturas.",
    timeBuilding: "6 meses",
    technologies: [
      "Vue.js 3",
      "Typescript",
      "Google Maps",
      "Firebase",
      "AWS Amplify",
      "Node.js",
    ],
    image: imagenMainMedical,
    imageResults: imageMedicalProject,
  },
  {
    title: "Emerlife",
    role: "Frontend Developer",
    shortDescription:
      "Plataforma de historias clínicas y monitoreo de unidades clínicas en tiempo real.",
    impact:
      "La plataforma, construida en Vue.js 2, tenía problemas críticos de rendimiento y consumo de memoria en el navegador, y perdía el seguimiento de los pacientes cuando la señal era inestable. Me encargué de optimizarla: corregí la reactividad en los casos en que la Options API no detectaba cambios en objetos anidados e implementé una caché local que conserva la última posición conocida cuando se pierde la conexión. Resultado: mejor rendimiento, menor consumo de memoria y continuidad operativa con señal inestable. Proyecto privado: solo capturas.",
    timeBuilding: "6 meses",
    technologies: [
      "Vue.js 2",
      "Javascript",
      "Leaflet",
      "Firebase",
      "AWS Amplify",
      "Node.js",
      "Bootstrap",
    ],
    image: imagenMainScarlet,
    imageResults: imagenScarletProject,
  },
]);
