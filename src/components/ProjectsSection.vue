<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h2 class="text-h3 font-weight-bold mb-2">Proyectos</h2>
        <div class="mx-auto" style="width: 100px; height: 4px; background-color: rgb(var(--v-theme-primary))"></div>
        <p class="mt-4 text-body-1 mx-auto" style="max-width: 700px">
          Estos son algunos de los proyectos en los que he trabajado. Cada uno representa diferentes habilidades y tecnologías.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="mb-6"
      >
        <v-card
            class="mx-auto project-card h-100"
            max-width="400"
            :class="[`animate__animated animate__fadeIn animate__delay-${index % 3}s`]"
        >
          <v-img
              :src="project.image"
              height="200"
              cover
          ></v-img>

          <v-card-title class="text-h5 font-weight-bold">{{ project.title }}</v-card-title>

          <v-card-text>
            <p>{{ project.description }}</p>

            <div class="mt-4">
              <v-chip
                  v-for="(tech, techIndex) in project.technologies"
                  :key="techIndex"
                  class="mr-2 mb-2"
                  size="small"
              >
                {{ tech }}
              </v-chip>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="primary"
                variant="text"
                :href="project.demoLink"
                target="_blank"
            >
              Demo
            </v-btn>
            <v-btn
                variant="text"
                :href="project.codeLink"
                target="_blank"
            >
              Código
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                icon
                variant="text"
                @click="project.showDetails = !project.showDetails"
            >
              <v-icon>{{ project.showDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-if="project.showDetails">
              <v-divider></v-divider>
              <v-card-text>
                <p class="text-body-2">{{ project.detailedDescription }}</p>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12" class="text-center">
        <v-btn
            color="primary"
            variant="outlined"
            size="large"
            href="https://github.com/yourusername"
            target="_blank"
            prepend-icon="mdi-github"
        >
          Ver más en GitHub
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const projects = ref([
  {
    title: 'E-commerce Platform',
    description: 'Una plataforma de comercio electrónico completa con carrito de compras y pasarela de pago.',
    detailedDescription: 'Este proyecto incluye autenticación de usuarios, gestión de productos, carrito de compras, y procesamiento de pagos con Stripe. Desarrollado con Vue.js y Node.js.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    demoLink: '#',
    codeLink: '#',
    showDetails: false
  },
  {
    title: 'Dashboard Analytics',
    description: 'Panel de control para visualización de datos con gráficos interactivos y reportes.',
    detailedDescription: 'Dashboard interactivo que muestra métricas clave de negocio con gráficos personalizables. Incluye exportación de datos y reportes automáticos.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Vue.js', 'Vuetify', 'Chart.js', 'Firebase'],
    demoLink: '#',
    codeLink: '#',
    showDetails: false
  },
  {
    title: 'Task Management App',
    description: 'Aplicación para gestión de tareas con funcionalidades de arrastrar y soltar.',
    detailedDescription: 'Sistema de gestión de tareas tipo Kanban con funcionalidades de arrastrar y soltar, notificaciones, y colaboración en tiempo real.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Vue.js', 'Vuex', 'Tailwind CSS', 'Supabase'],
    demoLink: '#',
    codeLink: '#',
    showDetails: false
  },
  {
    title: 'Portfolio Website',
    description: 'Sitio web de portafolio personal con animaciones y diseño responsivo.',
    detailedDescription: 'Portafolio personal desarrollado con Vue.js y Vuetify, con animaciones fluidas y diseño completamente responsivo.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Vue.js', 'Vuetify', 'GSAP', 'Vite'],
    demoLink: '#',
    codeLink: '#',
    showDetails: false
  },
  {
    title: 'Weather App',
    description: 'Aplicación del clima que muestra pronósticos actuales y futuros.',
    detailedDescription: 'Aplicación que muestra información meteorológica en tiempo real utilizando la API de OpenWeatherMap, con soporte para múltiples ubicaciones.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Vue.js', 'Axios', 'OpenWeatherMap API'],
    demoLink: '#',
    codeLink: '#',
    showDetails: false
  },
  {
    title: 'Blog Platform',
    description: 'Plataforma de blog con sistema de gestión de contenidos.',
    detailedDescription: 'Sistema completo de blog con editor WYSIWYG, categorías, etiquetas, comentarios y panel de administración.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Vue.js', 'Node.js', 'MySQL', 'Express'],
    demoLink: '#',
    codeLink: '#',
    showDetails: false
  }
]);
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}
</style>