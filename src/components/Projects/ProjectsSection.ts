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
    description: string;
    objetives: string;
    resume: string;
    timeBuilding: string;
    technologies: string[];
    image: string;
    imageResults: string[];
}
export const projects = ref<Project[]>([
    {
        title: "Assistance-SOS",
        description: "Desarrollé la plataforma web AssistanceSOS.",
        objetives:
            "Monitoreo de ambulancias en tiempo real, y subasta de casos en tiempo real.",
        resume:
            "Assistance-SOS es una Plataforma web para la gestión de ambulancias y de subasta de casos en tiempo Real.",
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
        description: "Desarrollé la plataforma web MedicalFile.",
        objetives:
            "Plataforma para la gestión de medicamentos y monitoreo de unidades de transporte clínico en tiempo real.",
        resume:
            "MedicalFile es una Plataforma web para la gestión de ambulancias, medicamentos, y de historial médico en tiempo real.",
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
        description: "Desarrollé la plataforma web de la clínica Emerlife.",
        objetives:
            "Plataforma para la gestión de unidades de emergencia en tiempo real.",
        resume:
            "Emerlife es una Plataforma web para la gestión de medicamentos, creación de historial médico, seguimiento de pacientes, y monitoreo de unidades de transporte clínico en tiempo real.",
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