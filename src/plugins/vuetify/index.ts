import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#1E88E5",
          secondary: "#FFC107",
          accent: "#FF4081",
          error: "#D32F2F",
          warning: "#FFA000",
          info: "#1976D2",
          success: "#388E3C",
          purple: "#7E57C2",
          blank: "#FFFFFF",
          grey300: "#E0E0E0",
          auxiliary: "#0A001B"
        },
      },
      dark: {
        colors: {
          primary: "#90CAF9",
          secondary: "#FFD54F",
          accent: "#F06292",
          error: "#E57373",
          warning: "#FFB74D",
          info: "#64B5F6",
          success: "#81C784",
          purple: "#7E57C2",
          blank: "#000000",
          grey300: "#5E6692",
        },
      },
    },
  },
  defaults: {
    global: {
      font: {
        family: 'Montserrat, sans-serif', // Fuente personalizada
      },
    },
  },
});
