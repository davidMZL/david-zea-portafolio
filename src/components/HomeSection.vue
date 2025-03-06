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
          <h3 class="text-subtitle-1 mb-6">
            Creando experiencias digitales
            <span class="font-weight-bold">memorables</span> y
            <span class="font-weight-bold">funcionales</span>
          </h3>
          <div class="mt-8 d-flex flex-wrap gap-4">
            <v-btn
              color="primary"
              size="large"
              elevation="2"
              class="text-none px-6"
              @click="scrollToSection('projects')"
              rounded
            >
              <BriefcaseIcon class="icon-left" size="20" />
              Ver Proyectos
            </v-btn>
            <VSpacer></VSpacer>
            <v-btn
              variant="outlined"
              size="large"
              class="text-none px-6"
              @click="scrollToSection('contact')"
              rounded
            >
              <MailIcon class="icon-left" size="20" />
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
              <v-btn icon variant="text" class="mr-2">
                <Github size="24" />
              </v-btn>
            </a>
            <a
              class="text-blank"
              href="https://www.linkedin.com/in/david-michael-zea-leandres-461892211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn icon variant="text" class="mr-2">
                <Linkedin size="24" />
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
          :src="getImageSrc"
          alt="David Zea"
          max-width="600"
          class="rounded-circle shadow-sm"
        />
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="animate__animated animate__fadeInUp"
    >
      <v-img
        :src="getImageMouse"
        alt="mouse"
        max-width="45"
        class="rounded-circle shadow-sm bg-transparent"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64,
      behavior: "smooth",
    });
  }
};

const getImageSrc = new URL(
  "@/assets/coding-work-from-home.gif",
  import.meta.url,
).href;

const getImageMouse = new URL("@/assets/mouse-animation.gif", import.meta.url)
  .href;

onMounted(() => {
  // Opcional: agregar algún efecto de observación o animación
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".tech-bubble").forEach((element) => {
    observer.observe(element);
  });
});
</script>

<style scoped>
.min-vh {
  min-height: calc(75vh - 64px);
}

.icon-left {
  margin-right: 8px;
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
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Efecto de elevación */
  transform: translateY(-3px); /* Pequeño efecto de levantamiento */
}
</style>
