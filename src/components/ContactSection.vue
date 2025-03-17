<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h2 class="text-h3 font-weight-bold mb-2">Contáctame</h2>
        <div class="mx-auto divider"></div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="5" class="mb-8 mb-md-0">
        <v-card class="pa-6 h-100 elevation-3 card-hover">
          <h3 class="text-h5 font-weight-bold mb-6 text-primary">
            Información de Contacto
          </h3>

          <div class="contact-item">
            <v-icon color="primary" class="mr-4"
              ><MailIcon :size="24"
            /></v-icon>
            <div>
              <div class="text-body-1 font-weight-medium">Email</div>
              <a
                href="mailto:david.zealeandres.dev@gmail.com"
                class="contact-link"
                >david.zealeandres.dev@gmail.com</a
              >
            </div>
          </div>

          <div class="contact-item">
            <v-icon color="primary" class="mr-4"
              ><PhoneCallIcon :size="24"
            /></v-icon>
            <div>
              <div class="text-body-1 font-weight-medium">Teléfono</div>
              <a href="tel:+51966638878" class="contact-link"
                >+51 966 638 878</a
              >
            </div>
          </div>

          <div class="contact-item">
            <v-icon color="primary" class="mr-4"><MapPin :size="24" /></v-icon>
            <div>
              <div class="text-body-1 font-weight-medium">Ubicación</div>
              <span>Ayacucho, Perú</span>
            </div>
          </div>

          <h3 class="text-h5 font-weight-bold mt-8 mb-4 text-primary">
            Redes Sociales
          </h3>

          <div class="social-links">
            <a
              href="https://github.com/davidMZL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn icon variant="text"><Github :size="24" /></v-btn>
            </a>
            <a
              href="https://www.linkedin.com/in/david-michael-zea-leandres-461892211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn icon variant="text"><Linkedin :size="24" /></v-btn>
            </a>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-card class="pa-6 elevation-3 card-hover">
          <h3 class="text-h5 font-weight-bold mb-6 text-primary">
            Envíame un Mensaje
          </h3>

          <v-form ref="form" v-model="isFormValid">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.name"
                  label="Nombre"
                  variant="outlined"
                  class="custom-input"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  variant="outlined"
                  class="custom-input"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="formData.subject"
                  label="Asunto"
                  variant="outlined"
                  class="custom-input"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="formData.message"
                  label="Mensaje"
                  variant="outlined"
                  rows="5"
                  class="custom-input"
                ></v-textarea>
              </v-col>

              <v-col cols="12">
                <v-btn
                  color="primary"
                  size="large"
                  block
                  :loading="isSubmitting"
                  :disabled="!isFormValid"
                  @click="submitForm"
                >
                  Enviar Mensaje
                </v-btn>
              </v-col>
            </v-row>
          </v-form>

          <v-snackbar
            v-model="snackbar.show"
            :color="snackbar.color"
            timeout="3000"
          >
            {{ snackbar.text }}
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  MailIcon,
  Github,
  Linkedin,
  MapPin,
  PhoneCallIcon,
} from "lucide-vue-next";

const form = ref(null);
const isFormValid = ref(false);
const isSubmitting = ref(false);

const formData = reactive({ name: "", email: "", subject: "", message: "" });
const snackbar = reactive({ show: false, text: "", color: "success" });

const submitForm = async () => {
  isSubmitting.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  snackbar.text = "¡Mensaje enviado con éxito!";
  snackbar.color = "success";
  snackbar.show = true;
  Object.keys(formData).forEach((key) => (formData[key] = ""));
  isSubmitting.value = false;
};
</script>

<style scoped>
.divider {
  width: 100px;
  height: 4px;
  margin-bottom: 10px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.contact-link {
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.card-hover {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.social-links {
  display: flex;
  gap: 10px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.social-links:hover {
  opacity: 1;
}
</style>
