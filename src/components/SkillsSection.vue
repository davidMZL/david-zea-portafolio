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

    <!-- FRONTEND SECTION -->
    <v-row class="mb-8">
      <v-col cols="12">
        <div class="category-header animate__animated animate__fadeIn">
          <h3 class="text-h5 font-weight-bold text-blank">FRONTEND</h3>
          <div class="category-divider"></div>
        </div>
      </v-col>
    </v-row>

    <v-row class="skills-row">
      <v-col
        v-for="(skill, index) in skillsMap.frontend"
        :key="index"
        cols="4"
        sm="3"
        md="2"
        lg="2"
        class="text-center mb-6"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="skill-card animate__animated animate__zoomIn"
            :class="{ 'on-hover': isHovering }"
            height="100%"
            max-width="160"
            elevation="2"
          >
            <v-card-text class="d-flex flex-column align-center py-4">
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="skill-icon mb-3"
              />
              <h3 class="text-subtitle-1 font-weight-medium text-blank">
                {{ skill.name }}
              </h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <!-- TOOLS SECTION -->
    <v-row class="mt-4 mb-4">
      <v-col cols="12">
        <div class="category-header animate__animated animate__fadeIn">
          <h3 class="text-h5 font-weight-bold text-blank">HERRAMIENTAS</h3>
          <div class="category-divider"></div>
        </div>
      </v-col>
    </v-row>

    <v-row class="skills-row">
      <v-col
        v-for="(skill, index) in skillsMap.tools"
        :key="index"
        cols="4"
        sm="3"
        md="2"
        lg="2"
        class="text-center mb-6"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="skill-card animate__animated animate__zoomIn"
            :class="{ 'on-hover': isHovering }"
            height="100%"
            max-width="160"
            elevation="2"
          >
            <v-card-text class="d-flex flex-column align-center py-4">
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="skill-icon mb-3"
              />
              <h3 class="text-subtitle-1 font-weight-medium text-blank">
                {{ skill.name }}
              </h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const logoModules = import.meta.glob("@/assets/logo/*.svg", { eager: true });

const logos = Object.fromEntries(
  Object.entries(logoModules).map(([path, module]) => {
    const name = path.split("/").pop()?.replace(".svg", "") ?? "";
    return [name, (module as { default: string }).default];
  }),
);

const frontendSkills = [
  { name: "HTML5", icon: logos.html5 },
  { name: "CSS3", icon: logos.css3 },
  { name: "JavaScript", icon: logos.javascript },
  { name: "TypeScript", icon: logos.typescript },
  { name: "Vue.js", icon: logos.vuejs },
  { name: "Google Maps API", icon: logos.googleMaps },
  { name: "Leaflet", icon: logos.leaflet },
  { name: "Pinia Store", icon: logos.piniaStore },
  { name: "Vuex", icon: logos.vuex },
  { name: "Vuetify", icon: logos.vuetify },
  { name: "Tailwind CSS", icon: logos.tailwind },
];

const toolsSkills = [
  { name: "AWS Amplify", icon: logos.aws },
  { name: "AWS Cognito", icon: logos.cognito},
  { name: "Git", icon: logos.git },
  { name: "GitHub", icon: logos.github },
  { name: "GitLab", icon: logos.gitlab },
  { name: "pnpm", icon: logos.pnpm},
  { name: "NPM", icon: logos.npm },
  { name: "NodeJs", icon: logos.nodejs },
  { name: "Terminal", icon: logos.terminal },
  { name: "Firebase", icon: logos.firebase },
  { name: "Vite", icon: logos.vite },
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
  background: linear-gradient(
    90deg,
    rgba(var(--v-theme-primary), 0.7),
    rgba(var(--v-theme-secondary), 0.7)
  );
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.category-divider {
  height: 3px;
  flex-grow: 1;
  margin-left: 16px;
  background: linear-gradient(
    90deg,
    rgba(var(--v-theme-primary), 0.7),
    transparent
  );
  border-radius: 2px;
}

.skills-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.skill-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.skill-card.on-hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(var(--v-theme-primary), 0.2) !important;
  border-color: rgba(var(--v-theme-primary), 0.3);
}

.skill-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.on-hover .skill-icon {
  transform: scale(1.15);
}

@media (max-width: 600px) {
  .skills-row {
    justify-content: center;
  }

  .category-header {
    flex-direction: column;
    text-align: center;
  }

  .category-divider {
    width: 60%;
    margin: 8px auto 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(var(--v-theme-primary), 0.7),
      transparent
    );
  }
}
</style>
