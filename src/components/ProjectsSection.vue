<template>
  <v-container class="py-12">
    <v-row class="justify-center align-center text-center mb-4">
      <v-col
        cols="12"
        md="6"
        lg="4"
        class="d-flex justify-center"
        style="
          transition: all 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        "
      >
        <p class="text-h3 description-text text-blank">Proyectos</p>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center text-center">
      <v-col
        cols="12"
        md="12"
        class="d-flex justify-center"
        style="
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        "
      >
        <p class="text-h5 description-text text-blank">
          Estos son algunos de los proyectos en los que he trabajado.
        </p>
      </v-col>
    </v-row>

    <!-- Vista en modo Grid/Lista con toggle -->
    <v-row class="mb-6">
      <v-col cols="12" class="d-flex justify-end">
        <v-btn-toggle
          v-model="viewMode"
          color="primary"
          mandatory
          rounded="pill"
          density="comfortable"
        >
          <v-btn value="grid">
            <template v-slot:prepend>
              <Grid :size="18" />
            </template>
            Grid
          </v-btn>
          <v-btn value="list">
            <template v-slot:prepend>
              <ListOrdered :size="18" />
            </template>
            Lista
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <!-- Vista Grid con transición -->
    <v-fade-transition>
      <v-row v-if="viewMode === 'grid'">
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="mb-8"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="mx-auto project-card h-100"
              :elevation="isHovering ? 8 : 3"
              :class="[
                `animate__animated animate__fadeIn animate__delay-${index % 3}s`,
                { 'on-hover': isHovering },
              ]"
            >
              <v-img
                :src="project.image"
                height="220"
                cover
                gradient="to bottom, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.9)"
                class="project-image"
              >
                <div class="d-flex fill-height align-end">
                  <v-card-title class="text-white text-h5 font-weight-bold">{{
                    project.title
                  }}</v-card-title>
                </div>
              </v-img>

              <v-card-text class="pt-4">
                <p class="text-body-1 text-grey-darken-1 mb-3">
                  {{ project.description }}
                </p>
                <p class="text-subtitle-1 text-primary font-weight-bold mb-3">
                  {{ project.objetives }}
                </p>
                <div class="mt-4 tech-chips">
                  <v-chip
                    v-for="(tech, techIndex) in project.technologies"
                    :key="techIndex"
                    class="mr-2 mb-2"
                    size="small"
                    color="primary"
                    variant="outlined"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
              </v-card-text>

              <v-card-actions class="d-flex justify-center pb-4">
                <v-btn
                  rounded="pill"
                  color="primary"
                  variant="elevated"
                  @click="openProject(index)"
                  class="project-button"
                >
                  <v-icon class="mr-1">
                    <Search :size="18" />
                  </v-icon>
                  Ver detalles
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-fade-transition>

    <!-- Vista Lista con transición -->
    <v-fade-transition>
      <v-row v-if="viewMode === 'list'">
        <v-col cols="12">
          <v-timeline align="start" side="end" line-thickness="2">
            <v-timeline-item
              v-for="(project, index) in projects"
              :key="index"
              dot-color="primary"
              size="small"
              :class="[
                `animate__animated animate__fadeInLeft animate__delay-${index % 2}s`,
              ]"
            >
              <template v-slot:opposite>
                <div class="d-flex flex-column">
                  <h3 class="text-h6 font-weight-bold mb-1 timeline-title">
                    {{ project.title }}
                  </h3>
                  <div>
                    <v-chip
                      v-for="(tech, techIndex) in project.technologies.slice(
                        0,
                        2,
                      )"
                      :key="techIndex"
                      class="mr-1 mb-1"
                      size="x-small"
                      color="primary"
                      variant="outlined"
                    >
                      {{ tech }}
                    </v-chip>
                    <v-tooltip
                      location="bottom"
                      v-if="project.technologies.length > 2"
                    >
                      <template v-slot:activator="{ props }">
                        <v-chip
                          v-bind="props"
                          size="x-small"
                          color="grey"
                          variant="flat"
                        >
                          +{{ project.technologies.length - 2 }}
                        </v-chip>
                      </template>
                      <span>{{
                        project.technologies.slice(2).join(", ")
                      }}</span>
                    </v-tooltip>
                  </div>
                </div>
              </template>
              <v-card class="elevation-2 timeline-card">
                <div class="d-flex">
                  <v-img
                    :src="project.image"
                    height="120"
                    width="120"
                    cover
                    class="timeline-image"
                  ></v-img>
                  <div class="pa-3">
                    <p class="text-body-2 mb-3">{{ project.description }}</p>
                    <v-btn
                      color="primary"
                      variant="text"
                      density="compact"
                      @click="openProject(index)"
                      class="text-lowercase"
                    >
                      <v-icon size="small" class="mr-1">
                        <Play :size="18"></Play>
                      </v-icon>
                      Ver detalles
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-fade-transition>

    <!-- Diálogo de detalles del proyecto mejorado -->
    <v-dialog
      v-model="dialog"
      max-width="1300"
      transition="dialog-bottom-transition"
      overlay-opacity="0.8"
    >
      <v-card v-if="selectedProject" class="project-detail-card">
        <v-card-text>
          <v-img
            :src="selectedProject.image"
            height="100"
            cover
            gradient="to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%"
            class="detail-header-image"
          >
            <v-row>
              <v-col cols="10">
                <v-card-title class="text-white text-h3 font-weight-bold">
                  {{ selectedProject.title }}
                </v-card-title>
              </v-col>
              <v-col cols="2" class="d-flex justify-end">
                <v-btn
                  icon
                  variant="text"
                  @click="dialog = false"
                  class="close-button"
                  color="blank"
                >
                  <X :size="32" />
                </v-btn>
              </v-col>
            </v-row>
          </v-img>
        </v-card-text>

        <v-card-text class="pa-6">
          <v-row>
            <v-col cols="12">
              <div class="project-details">
                <v-row>
                  <v-col cols="12" md="6">
                    <div class="mb-4 detail-section">
                      <h3
                        class="text-h6 font-weight-bold mb-3 primary--text detail-heading"
                      >
                        <v-icon color="primary" class="mr-2">
                          <Info :size="22" />
                        </v-icon>
                        Resumen
                      </h3>
                      <p class="detail-text">{{ selectedProject.resume }}</p>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="mb-4 detail-section">
                      <h3
                        class="text-h6 font-weight-bold mb-3 primary--text detail-heading"
                      >
                        <v-icon color="primary" class="mr-2">
                          <CalendarClock :size="22" />
                        </v-icon>
                        Tiempo de Elaboración
                      </h3>
                      <p class="detail-text">
                        {{ selectedProject.timeBuilding }}
                      </p>
                    </div>
                  </v-col>
                </v-row>

                <div>
                  <h3
                    class="text-h6 font-weight-bold mb-3 primary--text mt-6 detail-heading"
                  >
                    <v-icon color="primary" class="mr-2"
                      ><Code :size="22"
                    /></v-icon>
                    Tecnologías Usadas:
                  </h3>
                  <div class="tech-chips-container">
                    <v-chip
                      v-for="(tech, techIndex) in selectedProject.technologies"
                      :key="techIndex"
                      class="mr-2 mb-2"
                      color="primary"
                      size="large"
                      pill
                    >
                      {{ tech }}
                    </v-chip>
                  </div>
                </div>
              </div>

              <!-- Sección de Imágenes en Grilla con Hover Effect -->
              <div v-if="selectedProject.imageResults.length" class="mt-8">
                <h3
                  class="text-h6 font-weight-bold mb-4 primary--text detail-heading"
                >
                  <v-icon color="primary" class="mr-2">
                    <Images :size="22" />
                  </v-icon>
                  Imágenes del Proyecto:
                </h3>
                <v-container fluid class="pa-0">
                  <v-row dense>
                    <v-col
                      v-for="(image, index) in selectedProject.imageResults"
                      :key="index"
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-hover v-slot="{ isHovering, props }">
                        <v-card
                          v-bind="props"
                          flat
                          class="ma-2 gallery-card"
                          :class="{ 'on-hover': isHovering }"
                        >
                          <v-img
                            :src="image"
                            height="200"
                            cover
                            class="rounded-lg gallery-image"
                            @click="openImage(image)"
                          >
                            <div
                              v-if="isHovering"
                              class="d-flex justify-center align-center fill-height view-overlay"
                            >
                              <v-btn
                                icon
                                variant="text"
                                color="white"
                                size="large"
                              >
                                <v-icon><ZoomIn :size="22" /></v-icon>
                              </v-btn>
                            </div>
                          </v-img>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Diálogo para mostrar imagen ampliada -->
    <v-dialog
      v-model="imageDialog"
      max-width="1200"
      overlay-opacity="0.9"
      transition="dialog-bottom-transition"
    >
      <v-card flat class="image-dialog-card">
        <v-card-actions class="pa-3 image-dialog-actions">
          <v-spacer></v-spacer>
          <v-btn
            icon
            variant="text"
            color="white"
            @click="imageDialog = false"
            class="close-image-button"
          >
            <X :size="24" />
          </v-btn>
        </v-card-actions>
        <v-img
          :src="selectedImage"
          contain
          max-height="90vh"
          class="full-image"
        ></v-img>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Grid,
  ListOrdered,
  X,
  Search,
  Play,
  Info,
  CalendarClock,
  Code,
  Images,
  ZoomIn,
} from "lucide-vue-next";

const viewMode = ref("grid");
const dialog = ref(false);
const selectedProjectIndex = ref(0);
const imageDialog = ref(false);
const selectedImage = ref("");

const imagenMainAssistance = new URL(
  "@/assets/images/assistance/assistanceMain.png",
  import.meta.url,
).href;
const imageAssistanceProject = ref([
  new URL("@/assets/images/assistance/assistance1.png", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance2.png", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance3.png", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance4.png", import.meta.url).href,
  new URL("@/assets/images/assistance/assistance5.png", import.meta.url).href,
]);

const imagenMainMedical = new URL(
  "@/assets/images/medicalFile/medicalMain.png",
  import.meta.url,
).href;
const imageMedicalProject = ref([
  new URL("@/assets/images/medicalFile/medicalFile1.png", import.meta.url).href,
  new URL("@/assets/images/medicalFile/medicalFile2.png", import.meta.url).href,
  new URL("@/assets/images/medicalFile/medicalFile3.png", import.meta.url).href,
  new URL("@/assets/images/medicalFile/medicalFile4.png", import.meta.url).href,
]);

const projects = ref([
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
]);

const selectedProject = computed(() => {
  return projects.value[selectedProjectIndex.value];
});

function openProject(index: number) {
  selectedProjectIndex.value = index;
  dialog.value = true;
}

function openImage(image: string) {
  selectedImage.value = image;
  imageDialog.value = true;
}
</script>

<style scoped src="src/assets/styles/projectsSection.css" />
