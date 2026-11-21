<template>
  <v-app-bar
    app
    elevation="1"
    class="px-4 bg-transparent"
    style="
      transition: all 0.3s ease;
      border-radius: 12px;
      overflow: hidden;
      /* Vidrio oscuro: el texto blanco se lee también sobre las tarjetas blancas.
         !important porque la clase bg-transparent de Vuetify lo anula. */
      background: rgba(12, 13, 19, 0.6) !important;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    "
    rounded="xs"
  >
    <v-app-bar-title class="font-weight-bold text-blank"
      >David Zea</v-app-bar-title
    >

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <div class="hidden-sm-and-down">
      <v-btn
        v-for="item in navItems"
        :key="item.id"
        :variant="activeSection === item.id ? 'tonal' : 'text'"
        :color="activeSection === item.id ? 'secondary' : 'blank'"
        class="mx-1"
        rounded
        @click="scrollToSection(item.id)"
      >
        {{ t.nav[item.id] }}
      </v-btn>
    </div>

    <v-btn
      variant="outlined"
      color="blank"
      class="mx-1"
      rounded
      :aria-label="t.nav.switchLanguage"
      @click="toggleLocale"
    >
      {{ locale === "es" ? "EN" : "ES" }}
    </v-btn>

    <!-- Mobile Navigation -->
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      :aria-label="t.nav.openMenu"
      @click="drawer = !drawer"
    />

    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.id"
          :class="{ 'active-nav-item': activeSection === item.id }"
          @click="scrollToSection(item.id)"
        >
          <v-list-item-title>{{ t.nav[item.id] }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "@/i18n";

const drawer = ref(false);
const activeSection = ref("home");

const { t, locale, toggleLocale } = useI18n();

const navItems = [
  { id: "home" },
  { id: "about" },
  { id: "projects" },
  { id: "skills" },
  { id: "contact" },
] as const;

const scrollToSection = (sectionId: string) => {
  drawer.value = false;
  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
        break;
      }
    }
  },
  { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
);

onMounted(() => {
  navItems.forEach((item) => {
    const section = document.getElementById(item.id);
    if (section) observer.observe(section);
  });
});

onUnmounted(() => {
  observer.disconnect();
});
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
