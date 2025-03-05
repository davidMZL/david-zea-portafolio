import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Animate.css
import "animate.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#5E35B1",
          secondary: "#00BCD4",
          accent: "#FF4081",
          error: "#F44336",
          warning: "#FFC107",
          info: "#2196F3",
          success: "#4CAF50",
        },
      },
      dark: {
        colors: {
          primary: "#7E57C2",
          secondary: "#26C6DA",
          accent: "#FF4081",
          error: "#F44336",
          warning: "#FFC107",
          info: "#2196F3",
          success: "#4CAF50",
        },
      },
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
