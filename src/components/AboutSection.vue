<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h2 class="text-h3 font-weight-bold mb-2">Sobre Mí</h2>
        <div
          class="mx-auto"
          style="
            width: 100px;
            height: 4px;
            background-color: rgb(var(--v-theme-primary));
          "
        ></div>
      </v-col>
    </v-row>

    <v-row class="align-center">
      <v-col cols="12" md="5" class="d-flex justify-center mb-8 mb-md-0">
        <v-img
          :src="getImageDeveloper"
          alt="David Zea Profile"
          max-width="600"
          class="rounded-lg animate__animated animate__fadeInLeft"
        ></v-img>
      </v-col>

      <v-col cols="12" md="7" class="animate__animated animate__fadeInRight">
        <p class="text-h6 mb-4 font-weight-medium">
          👋 ¡Hola! Soy <strong>David Zea</strong>, desarrollador
          <strong>Frontend</strong> con experiencia en <strong>Vue.js</strong> y
          <strong>Angular</strong>, apasionado por crear interfaces atractivas,
          funcionales y optimizadas para la mejor experiencia de usuario.
        </p>

        <p class="text-h6 mb-4 font-weight-medium">
          💻 Con más de <strong>2 años de experiencia</strong> en el sector
          privado, me especializo en crear aplicaciones web modernas, aplicando
          <strong>buenas prácticas</strong> y asegurando un
          <strong>código de calidad</strong>.
        </p>

        <p class="text-h6 mb-4 font-weight-medium">
          🚀 Puedes explorar algunos de mis trabajos en la sección
          <span
            class="font-weight-bold cursor-pointer"
            @click="scrollToSection('projects')"
          >
            Proyectos </span
          >.
        </p>

        <p class="text-h6 mb-4 font-weight-medium">
          📩 Actualmente, estoy abierto a nuevas oportunidades donde pueda
          aportar mis conocimientos y seguir evolucionando. ¡Hablemos y creemos
          algo increíble juntos!
        </p>

        <v-btn color="primary" variant="outlined" class="mt-4">
          <Download class="icon-left" size="20"></Download>
          Descargar CV
        </v-btn>
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
</script>

<style scoped>
p {
  line-height: 1.6;
  letter-spacing: 0.3px;
}
</style>
