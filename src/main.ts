import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Vuetify
import { vuetify } from "@/plugins/vuetify";

// Animate.css
import "animate.css";

//toasts
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const options: ToastContainerOptions = {
  autoClose: 3000,
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(Vue3Toastify, options);

app.mount("#app");
