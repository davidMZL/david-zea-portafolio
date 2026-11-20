<template>
  <v-container class="py-12 skill-section">
    <v-row>
      <v-col cols="12" class="text-center mb-8 skill-card text-blank">
        <h2
          class="text-h3 font-weight-bold mb-2"
        >
          Habilidades
        </h2>
        <div class="divider"></div>
        <p
          class="mt-4 text-body-1 mx-auto"
          style="max-width: 700px"
        >
          Estas son las tecnologías y herramientas con las que trabajo
          regularmente.
        </p>
      </v-col>
    </v-row>

    <template v-for="category in skillCategories" :key="category.title">
      <v-row class="mt-4 mb-4">
        <v-col cols="12">
          <div class="category-header">
            <h3 class="text-h5 font-weight-bold text-blank">
              {{ category.title }}
            </h3>
            <div class="category-divider"></div>
          </div>
        </v-col>
      </v-row>

      <v-row class="skills-row">
        <v-col
          v-for="skill in category.skills"
          :key="skill.name"
          cols="4"
          sm="3"
          md="2"
          lg="2"
          class="text-center mb-6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="skill-card"
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
    </template>
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

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    skills: [
      { name: "Vue.js", icon: logos.vuejs },
      { name: "Nuxt", icon: logos.nuxt },
      { name: "React", icon: logos.react },
      { name: "Next.js", icon: logos.nextjs },
      { name: "TypeScript", icon: logos.typescript },
      { name: "JavaScript", icon: logos.javascript },
      { name: "Pinia", icon: logos.piniaStore },
      { name: "Redux", icon: logos.redux },
      { name: "Vuetify", icon: logos.vuetify },
      { name: "Tailwind CSS", icon: logos.tailwind },
      { name: "Leaflet", icon: logos.leaflet },
    ],
  },
  {
    title: "TESTING",
    skills: [
      { name: "Vitest", icon: logos.vitest },
      { name: "Jest", icon: logos.jest },
    ],
  },
  {
    title: "CLOUD Y DESPLIEGUE",
    skills: [
      { name: "AWS", icon: logos.aws },
      { name: "AWS Cognito", icon: logos.cognito },
      { name: "Cloudflare", icon: logos.cloudflare },
      { name: "Firebase", icon: logos.firebase },
    ],
  },
  {
    title: "HERRAMIENTAS",
    skills: [
      { name: "Git", icon: logos.git },
      { name: "GitHub", icon: logos.github },
      { name: "GitLab", icon: logos.gitlab },
      { name: "Vite", icon: logos.vite },
      { name: "pnpm", icon: logos.pnpm },
      { name: "Linux", icon: logos.linux },
    ],
  },
];
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
