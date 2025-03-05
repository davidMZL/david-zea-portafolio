<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height align-center">
      <v-col
        cols="12"
        md="6"
        class="text-center text-md-left animate__animated animate__fadeInLeft"
      >
        <h1 class="text-h2 font-weight-bold mb-4">David Zea</h1>
        <h2 class="text-h4 text-medium-emphasis mb-6">Desarrollador Web</h2>
        <p class="text-body-1 mb-8">
          Bienvenido a mi portafolio profesional. Aquí encontrarás mis
          proyectos, habilidades y experiencia.
        </p>
        <v-btn
          color="primary"
          size="large"
          class="mr-4"
          @click="scrollToSection('projects')"
        >
          Ver Proyectos
        </v-btn>
        <v-btn
          variant="outlined"
          size="large"
          @click="scrollToSection('contact')"
        >
          Contáctame
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center animate__animated animate__fadeInRight"
      >
        <v-img
          :src="getImageSrc"
          alt="David Zea"
          max-width="400"
          class="rounded-circle"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64,
      behavior: "smooth",
    });
  }
};

const getImageSrc = new URL("@/assets/CodingWorkFromHome.gif", import.meta.url)
  .href;
</script>

<style scoped>
.fill-height {
  min-height: calc(100vh - 64px);
}
</style>
