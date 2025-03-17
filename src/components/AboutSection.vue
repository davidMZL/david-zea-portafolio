<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h2 class="text-h3 font-weight-bold mb-2">Sobre Mí</h2>
        <div class="mx-auto" style="width: 100px; height: 4px"></div>
      </v-col>
    </v-row>

    <v-row class="align-center">
      <v-col
        cols="12"
        md="4"
        class="d-flex justify-center mb-8 mb-md-0 animate__animated animate__fadeInLeft"
      >
        <v-img
          :src="getImageDeveloper"
          alt="David Zea Profile"
          max-width="600"
          class="rounded-circle shadow-sm profile-image bg-transparent"
        ></v-img>
      </v-col>

      <v-col cols="12" md="8" class="animate__animated animate__fadeInRight">
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

          <div class="d-flex flex-wrap gap-3">
            <v-btn
              color="primary"
              variant="outlined"
              class="mt-4"
              @click="downloadCV"
            >
              <Download class="icon-left" size="20"></Download>
              Descargar CV
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const getImageDeveloper = new URL("@/assets/developer.svg", import.meta.url)
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
  // Corrección en la ruta del archivo
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

.gap-3 {
  gap: 12px;
}
</style>
