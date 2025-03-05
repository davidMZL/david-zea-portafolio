<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h2 class="text-h3 font-weight-bold mb-2">Sobre Mí</h2>
        <div class="mx-auto" style="width: 100px; height: 4px; background-color: rgb(var(--v-theme-primary))"></div>
      </v-col>
    </v-row>

    <v-row class="align-center">
      <v-col cols="12" md="5" class="d-flex justify-center mb-8 mb-md-0">
        <v-img
            src="/placeholder.svg?height=400&width=400"
            alt="David Zea Profile"
            max-width="400"
            class="rounded-lg animate__animated animate__fadeInLeft"
        ></v-img>
      </v-col>

      <v-col cols="12" md="7" class="animate__animated animate__fadeInRight">
        <h3 class="text-h5 font-weight-bold mb-4">¿Quién soy?</h3>
        <p class="text-body-1 mb-4">
          Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales.
          Con experiencia en el desarrollo frontend y backend, me especializo en construir aplicaciones
          web modernas utilizando las últimas tecnologías.
        </p>

        <h3 class="text-h5 font-weight-bold mb-4 mt-6">Experiencia</h3>
        <v-timeline density="compact" align="start">
          <v-timeline-item
              v-for="(experience, index) in experiences"
              :key="index"
              :dot-color="experience.color"
              size="small"
          >
            <div class="mb-4">
              <div class="text-h6 font-weight-bold">{{ experience.role }}</div>
              <div class="text-subtitle-1">{{ experience.company }}</div>
              <div class="text-caption text-medium-emphasis">{{ experience.period }}</div>
              <div class="mt-2">{{ experience.description }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>

        <v-btn
            color="primary"
            variant="outlined"
            class="mt-6"
            prepend-icon="mdi-download"
            href="#"
        >
          Descargar CV
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const experiences = ref([
  {
    role: 'Desarrollador Frontend Senior',
    company: 'Empresa Tecnológica',
    period: '2021 - Presente',
    description: 'Desarrollo de interfaces de usuario modernas con Vue.js y TypeScript.',
    color: 'primary'
  },
  {
    role: 'Desarrollador Web',
    company: 'Agencia Digital',
    period: '2018 - 2021',
    description: 'Creación de sitios web responsivos y aplicaciones web para diversos clientes.',
    color: 'secondary'
  },
  {
    role: 'Desarrollador Junior',
    company: 'Startup Tecnológica',
    period: '2016 - 2018',
    description: 'Colaboración en el desarrollo de aplicaciones web utilizando JavaScript y PHP.',
    color: 'info'
  }
]);
</script>