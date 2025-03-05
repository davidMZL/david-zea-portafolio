<template>
  <v-app>
    <NavBar :active-section="activeSection" />

    <v-main>
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

    <v-footer app class="d-flex justify-center">
      <div class="text-center">
        &copy; {{ new Date().getFullYear() }} - David Michael Zea Leandres
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import NavBar from './components/NavBar.vue';
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from './components/ContactSection.vue';

// References to each section
const homeSection = ref<HTMLElement | null>(null);
const aboutSection = ref<HTMLElement | null>(null);
const projectsSection = ref<HTMLElement | null>(null);
const skillsSection = ref<HTMLElement | null>(null);
const contactSection = ref<HTMLElement | null>(null);

// Active section for navigation highlighting
const activeSection = ref('home');

// Function to check which section is in view
const checkActiveSection = () => {
  const scrollPosition = window.scrollY + 100; // Adding offset for navbar height

  const sections = [
    { id: 'home', ref: homeSection },
    { id: 'about', ref: aboutSection },
    { id: 'projects', ref: projectsSection },
    { id: 'skills', ref: skillsSection },
    { id: 'contact', ref: contactSection }
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

// Scroll to section when clicking on nav links
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64, // Adjust for navbar height
      behavior: 'smooth'
    });
  }
};

// Set up scroll event listener
onMounted(() => {
  window.addEventListener('scroll', checkActiveSection);
  checkActiveSection();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkActiveSection);
});
</script>

<style>
.section {
  min-height: 100vh;
  padding: 80px 20px 20px;
  scroll-margin-top: 64px;
}
</style>