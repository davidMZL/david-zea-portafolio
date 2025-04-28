<template>
  <v-container fluid>
    <v-row align="center" class="min-vh">
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center animate__animated animate__fadeInLeft text-blank"
      >
        <div class="position-relative">
          <h1 class="text-h2 font-weight-bold mb-2">David Zea</h1>
          <h2 class="text-h4 mb-6 text-grey300">Desarrollador Front-End</h2>
          <div class="mt-8 d-flex flex-wrap gap-4">
            <v-btn
              color="primary"
              size="large"
              elevation="2"
              class="text-none px-6 mr-4"
              @click="scrollToSection('projects')"
              rounded
            >
              <img :src="iconsSvg.briefcase" alt="Projects" class="icon-left" />
              Ver Proyectos
            </v-btn>
            <VSpacer></VSpacer>
            <v-btn
              color="primary"
              size="large"
              class="text-none px-6 ml-4"
              @click="scrollToSection('contact')"
              rounded
            >
              <img :src="iconsSvg.mail" alt="Contact" class="icon-left" />
              Contáctame
            </v-btn>
          </div>

          <div class="social-links mt-8 d-none d-md-flex">
            <a
              class="text-blank"
              href="https://github.com/davidMZL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn
                icon
                variant="text"
                class="mr-3 social-icon-btn"
                style="border-radius: 50%;"
              >
                <img :src="iconsSvg.github" alt="Github" width="34" height="34" />
              </v-btn>
            </a>

            <a
              class="text-blank"
              href="https://www.linkedin.com/in/david-michael-zea-leandres-461892211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn
                icon
                variant="text"
                class="mr-3 social-icon-btn"
                style="border-radius: 50%;"
              >
                <img :src="iconsSvg.linkedin" alt="LinkedIn" width="34" height="34" />
              </v-btn>
            </a>

          </div>
        </div>
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center animate__animated animate__fadeInRight"
      >
        <v-img
          :src="gifImages.mainGif"
          alt="David Zea"
          max-width="600"
          class="rounded-circle shadow-sm"
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="animate__animated animate__fadeInUp">
      <v-img
        :src="gifImages.mouseGif"
        alt="mouse"
        max-width="45"
        class="rounded-circle shadow-sm bg-transparent"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { gifImages, iconsSvg } from "@/common/resources.ts";

const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
</script>

<style scoped>
.min-vh {
  min-height: calc(75vh - 64px);
}

.icon-left {
  margin-right: 8px;
  width: 30px;
  height: 30px;
}

.social-links {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.social-links:hover {
  opacity: 1;
}

.v-btn {
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.2s ease-in-out;
}
.v-btn:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
.social-icon-btn {
  background-color: #f5f5f5; /* gris claro */
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
