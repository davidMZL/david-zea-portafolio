import { ref } from "vue";
import type { Localized } from "@/i18n";

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
  title: Localized;
  role: string;
  shortDescription: Localized;
  impact: Localized;
  timeBuilding: Localized;
  technologies: string[];
  image: string;
  imageResults: string[];
}

export const projects = ref<Project[]>([
  {
    title: {
      es: "SOS · Asistencia médica",
      en: "SOS · Medical assistance",
    },
    role: "Frontend Developer",
    shortDescription: {
      es: "Sistema integrado al CRM de una aseguradora (EPS) que asigna proveedores de ambulancias y médicos a domicilio a los casos del call center, con geolocalización de unidades en tiempo real.",
      en: "System integrated with a health insurer's CRM that assigns ambulance and home-visit doctor providers to call center cases, with real-time unit geolocation.",
    },
    impact: {
      es: "El call center asignaba las ambulancias a mano siguiendo reglas por tipo de caso, tiempo de respuesta y zona distrital, y coordinaba con los proveedores por WhatsApp y Hangouts. Los errores de selección retrasaban las atenciones y generaban costos a la EPS. Desarrollé el frontend de un sistema integrado al CRM (Salesforce) que muestra en el mapa las unidades más cercanas, subasta cada caso entre proveedores según las reglas de la EPS y permite que el proveedor registre el cierre del caso. Después lideré su migración de Vue.js 2 a Vue.js 3 con TypeScript, autenticación con AWS Cognito y mensajería en tiempo real con WebSockets, en paralelo con el cierre de la migración de SEV. También reemplacé Leaflet por MapLibre GL (renderizado con WebGL) para que el mapa siga fluido con muchas unidades moviéndose en tiempo real. Resultado: menos errores de asignación, menos retrasos en las atenciones y el registro de cierre pasó del call center a los proveedores. Proyecto privado: solo capturas.",
      en: "The call center assigned ambulances by hand, following rules based on case type, response time and district, and coordinated with providers over WhatsApp and Hangouts. Selection errors delayed patient care and generated extra costs for the insurer. I built the frontend of a system integrated with the CRM (Salesforce) that shows the nearest units on a map, auctions each case among providers according to the insurer's rules and lets the provider register the case closure. I then led its migration from Vue.js 2 to Vue.js 3 with TypeScript, AWS Cognito authentication and real-time messaging over WebSockets, in parallel with the final stage of the SEV migration. I also replaced Leaflet with MapLibre GL (WebGL rendering) to keep the map smooth with many units moving in real time. Result: fewer assignment errors, fewer delays in care, and case closure moved from the call center to the providers. Private project: screenshots only.",
    },
    timeBuilding: {
      es: "8 meses · migración Vue 2 → 3 (2025–2026)",
      en: "8 months · Vue 2 → 3 migration (2025–2026)",
    },
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
    title: {
      es: "SEV · Asistencia vehicular",
      en: "SEV · Roadside assistance",
    },
    role: "Frontend Developer",
    shortDescription: {
      es: "Versión vehicular del mismo sistema: asigna grúas, choferes de reemplazo, procuradores y mecánicos a los siniestros y casos SOAT de los asegurados.",
      en: "Vehicle version of the same system: assigns tow trucks, replacement drivers, claims adjusters and mechanics to policyholders' vehicle claims and mandatory-insurance (SOAT) cases.",
    },
    impact: {
      es: "Mismo problema que en salud, aplicado a siniestros vehiculares: la asignación manual de proveedores provocaba errores y demoras. El sistema propone la unidad más cercana en el mapa según tipo de servicio (grúa, chofer, procurador, mecánico), subasta el caso entre proveedores y centraliza los datos del asegurado, el vehículo y el siniestro. Cuando Vue.js 2 llegó a su fin de soporte (EOL), gestioné y justifiqué ante el cliente la migración a Vue.js 3 y la lideré: refactorización completa a TypeScript, autenticación con AWS Cognito, mensajería en tiempo real con WebSockets, políticas de seguridad de contenido (CSP) y el cambio de Leaflet a MapLibre GL para mejorar el rendimiento del mapa. Proyecto privado: solo capturas.",
      en: "Same problem as in healthcare, applied to vehicle claims: manual provider assignment caused errors and delays. The system suggests the nearest unit on the map by service type (tow truck, driver, claims adjuster, mechanic), auctions the case among providers and centralizes policyholder, vehicle and claim data. When Vue.js 2 reached end of life (EOL), I made the case to the client for migrating to Vue.js 3 and led it: a full TypeScript refactor, AWS Cognito authentication, real-time messaging over WebSockets, Content Security Policy (CSP) and the switch from Leaflet to MapLibre GL to improve map performance. Private project: screenshots only.",
    },
    timeBuilding: {
      es: "8 meses · migración Vue 2 → 3 (desde mayo 2025)",
      en: "8 months · Vue 2 → 3 migration (from May 2025)",
    },
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
    title: { es: "Assistance-SOS", en: "Assistance-SOS" },
    role: "Frontend Developer",
    shortDescription: {
      es: "Plataforma web para la gestión de ambulancias y subasta de casos en tiempo real.",
      en: "Web platform for ambulance management and real-time case auctions.",
    },
    impact: {
      es: "El mayor reto fue sincronizar el estado de múltiples ambulancias en tiempo real entre conductores y operadores sin colisiones de datos. Implementé Firebase Realtime Database con listeners optimizados y un sistema de subasta con bloqueo por transacción, reduciendo conflictos de asignación a cero. La integración con Leaflet para el tracking en vivo requirió optimizar la frecuencia de actualización de marcadores para mantener fluidez sin saturar la conexión.",
      en: "The main challenge was keeping the state of many ambulances in sync in real time between drivers and operators without data collisions. I used Firebase Realtime Database with optimized listeners and an auction system with transactional locking, bringing assignment conflicts down to zero. Live tracking with Leaflet required tuning the marker update rate to stay smooth without saturating the connection.",
    },
    timeBuilding: { es: "7 meses", en: "7 months" },
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
    title: { es: "MedicalFile", en: "MedicalFile" },
    role: "Frontend Developer",
    shortDescription: {
      es: "Plataforma web para controlar los medicamentos de las unidades clínicas: inventario, entregas y recepción por proveedor, con seguimiento de las unidades en tiempo real.",
      en: "Web platform to manage medication across clinical units: inventory, deliveries and receipts per provider, with real-time unit tracking.",
    },
    impact: {
      es: "El inventario de medicamentos no estaba conectado con el estado de cada unidad en ruta, así que no había una vista confiable de qué insumos llevaba cada vehículo ni de qué entregaba cada proveedor. Desarrollé el frontend: diseñé un modelo de datos en Firebase que relaciona el inventario con los vehículos activos y se actualiza a medida que se consumen insumos, y lo vinculé con la geolocalización de cada unidad en Google Maps. Resultado: una sola vista con el stock y la ubicación de cada unidad, sin recargas manuales. Proyecto privado: solo capturas.",
      en: "Medication inventory wasn't linked to the status of each unit on the road, so there was no reliable view of what supplies each vehicle carried or what each provider delivered. I built the frontend: I designed a Firebase data model that ties inventory to active vehicles and updates as supplies are used, and connected it to each unit's location on Google Maps. Result: a single view of each unit's stock and location, with no manual refreshes. Private project: screenshots only.",
    },
    timeBuilding: { es: "6 meses", en: "6 months" },
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
    title: { es: "Emerlife", en: "Emerlife" },
    role: "Frontend Developer",
    shortDescription: {
      es: "Plataforma de historias clínicas y monitoreo de unidades clínicas en tiempo real.",
      en: "Medical records platform with real-time monitoring of clinical units.",
    },
    impact: {
      es: "La plataforma, construida en Vue.js 2, tenía problemas críticos de rendimiento y consumo de memoria en el navegador, y perdía el seguimiento de los pacientes cuando la señal era inestable. Me encargué de optimizarla: corregí la reactividad en los casos en que la Options API no detectaba cambios en objetos anidados e implementé una caché local que conserva la última posición conocida cuando se pierde la conexión. Resultado: mejor rendimiento, menor consumo de memoria y continuidad operativa con señal inestable. Proyecto privado: solo capturas.",
      en: "The platform, built on Vue.js 2, had critical performance and browser memory issues, and lost track of patients when the signal was unstable. I was in charge of optimizing it: I fixed reactivity where the Options API didn't detect changes in nested objects and added a local cache that keeps the last known position when the connection drops. Result: better performance, lower memory usage and continuous operation on unstable connections. Private project: screenshots only.",
    },
    timeBuilding: { es: "6 meses", en: "6 months" },
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
