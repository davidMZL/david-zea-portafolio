import { ref } from "vue";

// Imágenes para Assistance-SOS
const imagenMainAssistance = new URL(
  "@/assets/images/assistance/assistanceMain.png",
  import.meta.url,
).href;
const imageAssistanceProject = [
  new URL("@/assets/images/assistance/assistance1.png", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance2.png", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance3.png", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance4.png", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance5.png", import.meta.url).href,
];

// Imágenes para MedicalFile
const imagenMainMedical = new URL(
  "@/assets/images/medicalFile/medicalMain.png",
  import.meta.url,
).href;
const imageMedicalProject = [
  new URL("@/assets/images/medicalFile/medicalFile1.png", import.meta.url).href,
  new URL("@/assets/images/medicalFile/medicalFile2.png", import.meta.url).href,
  new URL("@/assets/images/medicalFile/medicalFile3.png", import.meta.url).href,
  new URL("@/assets/images/medicalFile/medicalFile4.png", import.meta.url).href,
];

// Imágenes para Emerlife
const imagenMainScarlet = new URL(
  "@/assets/images/scarlet/emerlifeMain.png",
  import.meta.url,
).href;
const imagenScarletProject = [
  new URL("@/assets/images/scarlet/emerlife1.png", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife2.png", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife3.png", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife4.png", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife5.png", import.meta.url).href,
  new URL("@/assets/images/scarlet/emerlife6.png", import.meta.url).href,
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
      "Plataforma web para la gestión de ambulancias, medicamentos e historial médico en tiempo real.",
    impact:
      "El reto principal fue diseñar una arquitectura de datos que relacionara el inventario de medicamentos con los vehículos activos en ruta, actualizándose en tiempo real conforme se consumían insumos. Usé Firebase con estructura de colecciones anidadas y Google Maps Platform para vincular geolocalización con el estado de cada unidad clínica, logrando una vista unificada sin recargas manuales.",
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
      "Plataforma web para la gestión de medicamentos, historial médico y monitoreo de unidades clínicas en tiempo real.",
    impact:
      "Trabajé sobre Vue.js 2 con restricciones de compatibilidad del cliente, lo que exigió implementar reactividad manual en casos donde la Options API no detectaba cambios en objetos anidados. El seguimiento de pacientes en tiempo real con Leaflet y Firebase requirió un sistema de caché local para mantener la última posición conocida ante pérdidas de conexión, garantizando continuidad operativa en entornos con señal inestable.",
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
