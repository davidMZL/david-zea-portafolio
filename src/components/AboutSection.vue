<template>
  <v-container class="py-12 text-blank">
    <v-row class="justify-center align-center text-center mb-4">
      <v-col
        cols="12"
        md="3"
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
        <p class="text-h3 text-blank">Sobre Mí</p>
      </v-col>
    </v-row>

    <v-row class="align-center">
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center mb-8 mb-md-0"
      >
        <v-img
          :src="getImageDeveloper"
          alt="David Zea Profile"
          max-width="800"
          class="rounded-circle shadow-sm profile-image bg-transparent"
        ></v-img>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <div class="about-content">
          <p class="text-h6 mb-6 font-weight-medium">
            ¡Hola! Soy <strong class="highlight">David Zea</strong>,
            <span class="highlight">Desarrollador Frontend</span> especializado
            en <span class="highlight">Vue.js</span> con más de 2 años de
            experiencia.
          </p>

          <p class="text-h6 mb-4">
            Me apasiona crear interfaces atractivas y funcionales, enfocándome
            en la experiencia del usuario. Aplico buenas prácticas de
            programación y me comprometo con la calidad del código en cada
            proyecto y oportunidad.
          </p>

          <p class="text-h6 mb-4">He desarrollado plataformas web como:</p>

          <ul class="text-h6 mb-6 experience-list">
            <li>
              <strong>Assistance-SOS:</strong> Sistema de monitoreo de
              ambulancias en tiempo real con subasta de casos.
            </li>
            <li>
              <strong>Medical-File:</strong> Plataforma para la gestión de
              medicamentos y monitoreo de unidades de transporte clínico en
              tiempo real.
            </li>
            <li>Migración exitosa de proyectos de Vue.js 2 a Vue.js 3.</li>
          </ul>

          <p class="text-h6 mb-4 font-weight-medium">
            🚀 Puedes darle un vistazo a algunos de mis trabajos en la sección
            <span
              class="font-weight-bold cursor-pointer highlight"
              @click="scrollToSection('projects')"
            >
              PROYECTOS </span
            >.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center text-center mb-4">
      <v-btn
        color="secondary"
        class="mt-4 text-none"
        @click="downloadCV"
        rounded
      >
        <img :src="iconsSvg.download" alt="LinkedIn" width="24" height="24" />
        Descargar CV
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {iconsSvg} from "@/common/resources.ts";

const getImageDeveloper = new URL("@/assets/programmer.svg", import.meta.url)
  .href;

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64,
      behavior: "smooth",
    });
  }
};

const downloadCV = () => {
  const cvUrl = "/docs/cv.pdf";
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "David_Zea_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
.v-btn {
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.2s ease-in-out;
}
.v-btn:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
.about-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(var(--v-theme-primary), 0.2) !important;
  border-color: rgba(var(--v-theme-primary), 0.3);
}

p {
  line-height: 1.8;
  letter-spacing: 0.3px;
}

.profile-image {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
}

.highlight {
  color: rgb(var(--v-theme-secondary));
}

.about-content {
  max-width: 700px;
}

.experience-list {
  padding-left: 1.5rem;
}

.experience-list li {
  margin-bottom: 0.75rem;
  position: relative;
}

.experience-list li::before {
  content: "▹";
  position: absolute;
  left: -1.5rem;
  color: rgb(var(--v-theme-primary));
}

.cursor-pointer {
  cursor: pointer;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}
</style>
