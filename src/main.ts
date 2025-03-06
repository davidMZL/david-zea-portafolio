import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Vuetify
import { vuetify } from "@/plugins/vuetify";

// Animate.css
import "animate.css";
import { iconsLucide } from "@/plugins/lucide-icons/icons.ts";

const app = createApp(App);

Object.entries(iconsLucide).forEach(([name, component]) => {
  app.component(name, component);
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
