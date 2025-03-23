<template>
  <v-container class="py-12 skill-section">
    <v-row>
      <v-col cols="12" class="text-center mb-8 skill-card text-blank">
        <h2
          class="text-h3 font-weight-bold mb-2 animate__animated animate__fadeInDown"
        >
          Habilidades
        </h2>
        <div class="divider animate__animated animate__fadeIn"></div>
        <p
          class="mt-4 text-body-1 mx-auto animate__animated animate__fadeInUp"
          style="max-width: 700px"
        >
          Estas son las tecnologías y herramientas con las que trabajo
          regularmente.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="skill-card">
        <v-tabs
          v-model="activeTab"
          centered
          grow
          color="blank"
          class="animate__animated animate__fadeIn"
        >
          <v-tab v-for="tab in tabs" :key="tab.value" :value="tab.value">
            {{ tab.label }}
          </v-tab>
        </v-tabs>

        <v-window v-model="activeTab" class="mt-6">
          <v-window-item
            v-for="tab in tabs"
            :key="tab.value"
            :value="tab.value"
          >
            <v-row>
              <v-col
                v-for="(skill, index) in skillsMap[tab.value]"
                :key="index"
                cols="6"
                sm="4"
                md="3"
                class="text-center mb-6"
              >
                <v-card
                  class="mx-auto skill-card animate__animated animate__zoomIn"
                  height="100%"
                  max-width="200"
                  elevation="4"
                >
                  <v-card-text class="d-flex flex-column align-center">
                    <img
                      :src="skill.icon"
                      :alt="skill.name"
                      class="skill-icon mb-4"
                    />
                    <h3 class="text-h6 font-weight-bold mb-2">
                      {{ skill.name }}
                    </h3>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const logoModules = import.meta.glob("@/assets/logo/*.svg", { eager: true });

const logos = Object.fromEntries(
  Object.entries(logoModules).map(([path, module]) => {
    const name = path.split("/").pop()?.replace(".svg", "") ?? "";
    return [name, (module as { default: string }).default];
  }),
);

const activeTab = ref("frontend");

const tabs = [
  { value: "frontend", label: "FRONTEND" },
  { value: "tools", label: "HERRAMIENTAS" },
];

const frontendSkills = [
  { name: "HTML5", icon: logos.html5 },
  { name: "CSS3", icon: logos.css3 },
  { name: "JavaScript", icon: logos.javascript },
  { name: "TypeScript", icon: logos.typescript },
  { name: "Vue.js", icon: logos.vuejs },
  { name: "Tailwind CSS", icon: logos.tailwind },
  { name: "Google Maps API", icon: logos.googleMaps },
  { name: "Leaflet", icon: logos.leaflet },
  { name: "Pinia Store", icon: logos.piniaStore },
  { name: "Vuex", icon: logos.vuex },
];

const toolsSkills = [
  { name: "Git", icon: logos.git },
  { name: "GitHub", icon: logos.github },
  { name: "GitLab", icon: logos.gitlab },
  { name: "Terminal", icon: logos.terminal },
  { name: "NPM", icon: logos.npm },
  { name: "AWS Amplify", icon: logos.aws },
  { name: "Firebase", icon: logos.firebase },
  { name: "Vite", icon: logos.vite },
  { name: "Vuetify", icon: logos.vuetify },
];

const skillsMap: any = {
  frontend: frontendSkills,
  tools: toolsSkills,
};
</script>

<style scoped>
.divider {
  width: 100px;
  height: 4px;
  margin: 0 auto;
}

.skill-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.skill-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

.skill-icon {
  width: 50px;
}

.v-tab {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
}

.v-window-item {
  padding: 1rem 0;
}
</style>
