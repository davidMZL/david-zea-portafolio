<template>
  <v-app-bar app elevation="1" class="px-4">
    <v-app-bar-title class="font-weight-bold">David Zea</v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <div class="hidden-sm-and-down">
      <v-btn
        v-for="item in navItems"
        :key="item.id"
        :variant="activeSection === item.id ? 'tonal' : 'text'"
        :color="activeSection === item.id ? 'primary' : 'default'"
        class="mx-1"
        rounded
        @click="scrollToSection(item.id)"
      >
        {{ item.title }}
      </v-btn>
    </div>

    <!-- Mobile Navigation -->
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.id"
          :class="{ 'active-nav-item': activeSection === item.id }"
          @click="scrollToSection(item.id)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const drawer = ref(false);
const activeSection = ref("");

const navItems = [
  { id: "home", title: "Inicio" },
  { id: "about", title: "Sobre Mí" },
  { id: "projects", title: "Proyectos" },
  { id: "skills", title: "Habilidades" },
  { id: "contact", title: "Contáctame" },
];

// 📌 Función para hacer scroll de forma fluida
const scrollToSection = (sectionId: string) => {
  drawer.value = false;
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

// 📌 Función para actualizar la sección activa en base al scroll
const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 100; // Margen de detección

  for (const item of navItems) {
    const section = document.getElementById(item.id);
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = item.id;
    }
  }
};

// 📌 Agregar y quitar el listener de scroll
onMounted(() => window.addEventListener("scroll", updateActiveSection));
onUnmounted(() => window.removeEventListener("scroll", updateActiveSection));
</script>

<style scoped>
.active-nav-item {
  font-weight: bold;
}

.v-btn {
  text-transform: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.v-btn:hover {
  transform: translateY(-2px);
}
</style>
