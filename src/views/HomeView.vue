<template>
  <NavBar :active-section="activeSection" />

  <v-main max-width="1300px" class="mx-auto">
    <section id="home" class="section">
      <HomeSection />
    </section>

    <section id="about" class="section">
      <AboutSection />
    </section>

    <section id="projects" class="section">
      <ProjectsSection />
    </section>

    <section id="skills" class="section">
      <SkillsSection />
    </section>

    <section id="contact" class="section">
      <ContactSection />
    </section>
  </v-main>

  <v-card width="100%" flat color="transparent" class="text-center">
    <v-card-text>
      <v-chip color="secondary" class="text-center font-weight-bold">
        &copy; {{ new Date().getFullYear() }} - David Michael Zea Leandres
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import NavBar from "@/components/NavBar.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectsSection from "@/components/Projects/ProjectsSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
const activeSection = ref("home");
let observer: IntersectionObserver | null = null;

// La sección que cruza la línea media del viewport es la activa.
onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) activeSection.value = visible.target.id;
    },
    { rootMargin: "-50% 0px -50% 0px" },
  );
  document.querySelectorAll("section.section").forEach((el) => io.observe(el));
  observer = io;
});

onUnmounted(() => observer?.disconnect());
</script>
