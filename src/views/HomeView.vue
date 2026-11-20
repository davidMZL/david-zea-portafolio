<template>
  <NavBar :active-section="activeSection" />

  <v-main max-width="1300px" class="mx-auto">
    <section id="home" ref="homeSection" class="section">
      <HomeSection />
    </section>

    <section id="about" ref="aboutSection" class="section">
      <AboutSection />
    </section>

    <section id="projects" ref="projectsSection" class="section">
      <ProjectsSection />
    </section>

    <section id="skills" ref="skillsSection" class="section">
      <SkillsSection />
    </section>

    <section id="contact" ref="contactSection" class="section">
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
const homeSection = ref<HTMLElement | null>(null);
const aboutSection = ref<HTMLElement | null>(null);
const projectsSection = ref<HTMLElement | null>(null);
const skillsSection = ref<HTMLElement | null>(null);
const contactSection = ref<HTMLElement | null>(null);

const activeSection = ref("home");

const checkActiveSection = () => {
  const scrollPosition = window.scrollY + 100;

  const sections = [
    { id: "home", ref: homeSection },
    { id: "about", ref: aboutSection },
    { id: "projects", ref: projectsSection },
    { id: "skills", ref: skillsSection },
    { id: "contact", ref: contactSection },
  ];

  for (const section of sections) {
    if (!section.ref.value) continue;

    const element = section.ref.value;
    const offsetTop = element.offsetTop;
    const height = element.offsetHeight;

    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
      activeSection.value = section.id;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkActiveSection);
  checkActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkActiveSection);
});
</script>
