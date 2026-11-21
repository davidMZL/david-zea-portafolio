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
    <v-row class="justify-center align-center text-center mb-8">
      <v-col
        cols="12"
        md="8"
        class="d-flex justify-center pa-4"
        style="
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          backdrop-filter: blur(5px);
        "
      >
        <p class="text-h6 description-text text-blank font-weight-regular">
          Soluciones frontend escalables, arquitecturas limpias y plataformas en
          tiempo real.
        </p>
      </v-col>
    </v-row>

    <v-fade-transition>
      <v-row justify="center">
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="mb-8"
        >
          <v-card
            class="mx-auto project-card h-100 transition-swing"
            :elevation="hoveredCardIndex === index ? 8 : 2"
            :class="{ 'on-hover-transform': hoveredCardIndex === index }"
            @mouseenter="hoveredCardIndex = index"
            @mouseleave="hoveredCardIndex = null"
          >
            <v-img
              :src="project.image"
              height="220"
              cover
              gradient="to bottom, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.9)"
              class="project-image"
            >
              <div class="d-flex fill-height align-end pa-4">
                <div>
                  <p
                    class="text-white text-caption font-weight-medium mb-1 text-uppercase"
                    style="opacity: 0.7; letter-spacing: 1px"
                  >
                    {{ project.role }}
                  </p>
                  <v-card-title
                    class="text-white text-h5 font-weight-bold pa-0"
                  >
                    {{ project.title }}
                  </v-card-title>
                </div>
              </div>
            </v-img>

            <v-card-text class="pt-4">
              <p class="text-body-2 text-grey-darken-1 mb-3">
                {{ project.shortDescription }}
              </p>
              <div class="mt-4 tech-chips">
                <v-chip
                  v-for="(tech, techIndex) in project.technologies"
                  :key="techIndex"
                  class="mr-2 mb-2 font-weight-medium"
                  size="small"
                  color="primary"
                  variant="tonal"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>

            <v-card-actions class="d-flex justify-center pb-6">
              <v-btn
                rounded="pill"
                color="primary"
                variant="elevated"
                @click="openProject(index)"
                class="project-button px-6"
              >
                <v-icon class="mr-2" size="small">
                  <img
                    :src="iconsSvg.search"
                    alt="Search"
                    width="20"
                    height="20"
                  />
                </v-icon>
                Análisis Técnico
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>

    <v-dialog
      v-model="dialog"
      max-width="1000"
      transition="dialog-bottom-transition"
      overlay-opacity="0.8"
    >
      <v-card
        v-if="selectedProject"
        class="project-detail-card rounded-xl"
      >
        <v-img
          :src="selectedProject.image"
          height="140"
          cover
          gradient="to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%"
        >
          <div
            class="d-flex justify-space-between align-start pa-4 fill-height"
          >
            <div
              class="d-flex flex-column align-start justify-end fill-height pb-2 ml-2"
            >
              <p
                class="text-white text-caption font-weight-medium text-uppercase mb-1"
                style="opacity: 0.7; letter-spacing: 1px"
              >
                {{ selectedProject.role }}
              </p>
              <h2 class="text-white text-h4 font-weight-bold">
                {{ selectedProject.title }}
              </h2>
            </div>
            <v-btn
              icon
              variant="tonal"
              color="white"
              @click="dialog = false"
              size="small"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-img>

        <v-card-text class="pa-8">
          <v-row>
            <v-col cols="12" md="7">
              <h3 class="text-h6 font-weight-bold mb-3 text-primary">
                <v-icon color="primary" class="mr-2" size="small"
                  >mdi-information</v-icon
                >
                Resumen del Proyecto
              </h3>
              <p class="text-body-1 mb-6 text-grey-darken-3">
                {{ selectedProject.shortDescription }}
              </p>

              <h3 class="text-h6 font-weight-bold mb-3 text-primary">
                <v-icon color="primary" class="mr-2" size="small"
                  >mdi-rocket-launch</v-icon
                >
                Reto Técnico e Impacto
              </h3>
              <p class="text-body-1 mb-6 text-grey-darken-3">
                {{ selectedProject.impact }}
              </p>
            </v-col>

            <v-col cols="12" md="5" class="bg-grey-lighten-4 rounded-lg pa-6">
              <h3 class="text-subtitle-1 font-weight-bold mb-3 text-primary">
                Stack Tecnológico
              </h3>
              <div class="d-flex flex-wrap mb-6">
                <v-chip
                  v-for="(tech, techIndex) in selectedProject.technologies"
                  :key="techIndex"
                  class="mr-2 mb-2"
                  color="primary"
                  variant="flat"
                  size="small"
                >
                  {{ tech }}
                </v-chip>
              </div>

              <h3 class="text-subtitle-1 font-weight-bold mb-2 text-primary">
                Tiempo de Elaboración
              </h3>
              <p class="text-body-2 font-weight-medium text-grey-darken-2">
                <v-icon size="small" class="mr-1 pb-1">mdi-calendar</v-icon>
                {{ selectedProject.timeBuilding }}
              </p>
            </v-col>
          </v-row>

          <div
            v-if="selectedProject.imageResults?.length"
            class="mt-8 pt-6 border-t"
          >
            <h3 class="text-h6 font-weight-bold mb-4 text-primary">
              Galería de la Interfaz
            </h3>
            <v-row>
              <v-col
                v-for="(image, imgIndex) in selectedProject.imageResults"
                :key="imgIndex"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card
                  flat
                  class="ma-1 gallery-card cursor-pointer"
                  :elevation="hoveredGalleryIndex === imgIndex ? 4 : 0"
                  @mouseenter="hoveredGalleryIndex = imgIndex"
                  @mouseleave="hoveredGalleryIndex = null"
                  @click="openImage(image)"
                >
                  <v-img :src="image" height="150" cover class="rounded-lg">
                    <v-overlay
                      :model-value="hoveredGalleryIndex === imgIndex"
                      contained
                      scrim="#036358"
                      class="align-center justify-center"
                    >
                      <v-icon color="white" size="x-large"
                        >mdi-magnify-plus</v-icon
                      >
                    </v-overlay>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="imageDialog" max-width="1200">
      <v-card flat class="image-dialog-card">
        <v-card-actions class="pa-3">
          <v-spacer />
          <v-btn icon variant="text" color="white" @click="imageDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-img
          :src="selectedImage"
          contain
          max-height="90vh"
          class="full-image"
        />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { projects } from "@/components/Projects/ProjectsSection.ts";
import { iconsSvg } from "@/common/resources.ts";

const dialog = ref(false);
const selectedProjectIndex = ref(0);
const imageDialog = ref(false);
const selectedImage = ref("");

const hoveredCardIndex = ref<number | null>(null);
const hoveredGalleryIndex = ref<number | null>(null);

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

<style src="@/assets/styles/projectsSection.css" />
