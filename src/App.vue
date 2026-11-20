<template>
  <v-app>
    <ShootingStars class="bg-wrapper"></ShootingStars>
    <router-view />
    <Toaster rich-colors position="top-right" />
  </v-app>
</template>

<script setup lang="ts">
import ShootingStars from "@/components/ShootingStars.vue";
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
</script>

<style>
/* Estilos para las secciones */
.section {
  min-height: 100vh;
  padding: 10px 10px;
  scroll-margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* Para que se posicione correctamente sobre el fondo */
}

.bg-wrapper {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
.v-main {
  position: relative;
  z-index: 1;
}

.v-app-bar {
  z-index: 2;
}
</style>
