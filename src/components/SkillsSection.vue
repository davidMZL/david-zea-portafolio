<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h2 class="text-h3 font-weight-bold mb-2">Habilidades</h2>
        <div class="mx-auto" style="width: 100px; height: 4px; background-color: rgb(var(--v-theme-primary))"></div>
        <p class="mt-4 text-body-1 mx-auto" style="max-width: 700px">
          Estas son las tecnologías y herramientas con las que trabajo regularmente.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-tabs
            v-model="activeTab"
            centered
            grow
            color="primary"
        >
          <v-tab value="frontend">Frontend</v-tab>
          <v-tab value="backend">Backend</v-tab>
          <v-tab value="tools">Herramientas</v-tab>
          <v-tab value="soft">Soft Skills</v-tab>
        </v-tabs>

        <v-window v-model="activeTab" class="mt-6">
          <v-window-item value="frontend">
            <v-row>
              <v-col
                  v-for="(skill, index) in frontendSkills"
                  :key="index"
                  cols="6"
                  sm="4"
                  md="3"
                  class="text-center mb-6"
              >
                <v-card class="mx-auto skill-card" height="100%" max-width="200">
                  <v-card-text class="d-flex flex-column align-center">
                    <v-icon size="x-large" color="primary" class="mb-4">{{ skill.icon }}</v-icon>
                    <h3 class="text-h6 font-weight-bold mb-2">{{ skill.name }}</h3>
                    <v-rating
                        v-model="skill.level"
                        color="amber"
                        density="compact"
                        half-increments
                        readonly
                    ></v-rating>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item value="backend">
            <v-row>
              <v-col
                  v-for="(skill, index) in backendSkills"
                  :key="index"
                  cols="6"
                  sm="4"
                  md="3"
                  class="text-center mb-6"
              >
                <v-card class="mx-auto skill-card" height="100%" max-width="200">
                  <v-card-text class="d-flex flex-column align-center">
                    <v-icon size="x-large" color="primary" class="mb-4">{{ skill.icon }}</v-icon>
                    <h3 class="text-h6 font-weight-bold mb-2">{{ skill.name }}</h3>
                    <v-rating
                        v-model="skill.level"
                        color="amber"
                        density="compact"
                        half-increments
                        readonly
                    ></v-rating>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item value="tools">
            <v-row>
              <v-col
                  v-for="(skill, index) in toolsSkills"
                  :key="index"
                  cols="6"
                  sm="4"
                  md="3"
                  class="text-center mb-6"
              >
                <v-card class="mx-auto skill-card" height="100%" max-width="200">
                  <v-card-text class="d-flex flex-column align-center">
                    <v-icon size="x-large" color="primary" class="mb-4">{{ skill.icon }}</v-icon>
                    <h3 class="text-h6 font-weight-bold mb-2">{{ skill.name }}</h3>
                    <v-rating
                        v-model="skill.level"
                        color="amber"
                        density="compact"
                        half-increments
                        readonly
                    ></v-rating>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item value="soft">
            <v-row>
              <v-col
                  v-for="(skill, index) in softSkills"
                  :key="index"
                  cols="6"
                  sm="4"
                  md="3"
                  class="text-center mb-6"
              >
                <v-card class="mx-auto skill-card" height="100%" max-width="200">
                  <v-card-text class="d-flex flex-column align-center">
                    <v-icon size="x-large" color="primary" class="mb-4">{{ skill.icon }}</v-icon>
                    <h3 class="text-h6 font-weight-bold mb-2">{{ skill.name }}</h3>
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
import { ref } from 'vue';

const activeTab = ref('frontend');

const frontendSkills = ref([
  { name: 'HTML5', level: 4.5, icon: 'mdi-language-html5' },
  { name: 'CSS3', level: 4, icon: 'mdi-language-css3' },
  { name: 'JavaScript', level: 4.5, icon: 'mdi-language-javascript' },
  { name: 'TypeScript', level: 4, icon: 'mdi-language-typescript' },
  { name: 'Vue.js', level: 4.5, icon: 'mdi-vuejs' },
  { name: 'Vuetify', level: 4, icon: 'mdi-vuetify' },
  { name: 'Tailwind CSS', level: 3.5, icon: 'mdi-tailwind' },
  { name: 'Responsive Design', level: 4, icon: 'mdi-responsive' }
]);

const backendSkills = ref([
  { name: 'Node.js', level: 4, icon: 'mdi-nodejs' },
  { name: 'Express', level: 3.5, icon: 'mdi-server' },
  { name: 'MongoDB', level: 3.5, icon: 'mdi-database' },
  { name: 'MySQL', level: 3, icon: 'mdi-database-outline' },
  { name: 'Firebase', level: 3.5, icon: 'mdi-firebase' },
  { name: 'RESTful APIs', level: 4, icon: 'mdi-api' },
  { name: 'GraphQL', level: 3, icon: 'mdi-graphql' },
  { name: 'PHP', level: 3, icon: 'mdi-language-php' }
]);

const toolsSkills = ref([
  { name: 'Git', level: 4, icon: 'mdi-git' },
  { name: 'GitHub', level: 4, icon: 'mdi-github' },
  { name: 'VS Code', level: 4.5, icon: 'mdi-microsoft-visual-studio-code' },
  { name: 'Webpack', level: 3.5, icon: 'mdi-webpack' },
  { name: 'Docker', level: 3, icon: 'mdi-docker' },
  { name: 'Figma', level: 3.5, icon: 'mdi-figma' },
  { name: 'Jest', level: 3, icon: 'mdi-test-tube' },
  { name: 'NPM', level: 4, icon: 'mdi-npm' }
]);

const softSkills = ref([
  { name: 'Comunicación', icon: 'mdi-account-voice' },
  { name: 'Trabajo en Equipo', icon: 'mdi-account-group' },
  { name: 'Resolución de Problemas', icon: 'mdi-lightbulb-on' },
  { name: 'Gestión del Tiempo', icon: 'mdi-clock-time-four' },
  { name: 'Adaptabilidad', icon: 'mdi-refresh' },
  { name: 'Creatividad', icon: 'mdi-palette' },
  { name: 'Atención al Detalle', icon: 'mdi-magnify-plus' },
  { name: 'Aprendizaje Continuo', icon: 'mdi-school' }
]);
</script>

<style scoped>
.skill-card {
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>