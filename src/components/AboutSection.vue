<template>
  <v-container class="py-12 text-blank">
    <v-row class="justify-center align-center text-center mb-4">
      <v-col
        cols="12"
        md="3"
        class="d-flex justify-center"
        style="
          transition: all 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        "
      >
        <h2 class="text-h3 text-blank">{{ t.about.title }}</h2>
      </v-col>
    </v-row>

    <v-row class="align-center">
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center mb-8 mb-md-0"
      >
        <v-img
          :src="getImageDeveloper"
          :alt="t.about.profileAlt"
          max-width="800"
          class="rounded-circle shadow-sm profile-image bg-transparent"
        ></v-img>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <div class="about-content">
          <!-- prettier-ignore -->
          <p class="text-h6 mb-6 font-weight-medium">{{ t.about.intro[0] }}<strong class="highlight">David Zea</strong>{{ t.about.intro[1] }}<span class="highlight">{{ t.home.role }}</span>{{ t.about.intro[2] }}<span class="highlight">Vue.js</span>{{ t.about.intro[3] }}<span class="highlight">React</span>{{ t.about.intro[4] }}</p>

          <p
            v-for="(paragraph, i) in t.about.paragraphs"
            :key="i"
            class="text-h6"
            :class="i === t.about.paragraphs.length - 1 ? 'mb-6' : 'mb-4'"
          >
            {{ paragraph }}
          </p>

          <!-- prettier-ignore -->
          <p class="text-h6 mb-4 font-weight-medium">{{ t.about.seeWork.before }}<a
              href="#projects"
              class="font-weight-bold cursor-pointer highlight"
              @click.prevent="scrollToSection('projects')"
            >{{ t.about.seeWork.link }}</a>{{ t.about.seeWork.after }}</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center text-center mb-4">
      <v-btn
        color="secondary"
        class="mt-4 text-none"
        :href="cvUrl"
        :download="t.cv.downloadName"
        rounded
      >
        <img :src="iconsSvg.downloadCloud" alt="" width="24" height="24" />
        {{ t.about.downloadCv }}
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {iconsSvg} from "@/common/resources.ts";
import { useI18n } from "@/i18n";

const { t } = useI18n();

const getImageDeveloper = new URL("@/assets/programmer.svg", import.meta.url)
  .href;

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64,
      behavior: "smooth",
    });
  }
};

const cvUrl = computed(() => `${import.meta.env.BASE_URL}${t.value.cv.file}`);
</script>

<style scoped>
.v-btn {
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.2s ease-in-out;
}
.v-btn:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
.about-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(var(--v-theme-primary), 0.2) !important;
  border-color: rgba(var(--v-theme-primary), 0.3);
}

p {
  line-height: 1.8;
  letter-spacing: 0.3px;
}

.profile-image {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
}

.highlight {
  color: rgb(var(--v-theme-secondary));
}

.about-content {
  max-width: 700px;
}

.cursor-pointer {
  cursor: pointer;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}
</style>
