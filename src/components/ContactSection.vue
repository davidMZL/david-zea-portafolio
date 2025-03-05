<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h2 class="text-h3 font-weight-bold mb-2">Contáctame</h2>
        <div class="mx-auto" style="width: 100px; height: 4px; background-color: rgb(var(--v-theme-primary))"></div>
        <p class="mt-4 text-body-1 mx-auto" style="max-width: 700px">
          ¿Tienes un proyecto en mente? ¡Hablemos! Completa el formulario a continuación o contáctame directamente.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="5" class="mb-8 mb-md-0">
        <v-card class="pa-6 h-100">
          <h3 class="text-h5 font-weight-bold mb-6">Información de Contacto</h3>

          <div class="d-flex align-center mb-4">
            <v-icon color="primary" class="mr-4">mdi-email</v-icon>
            <div>
              <div class="text-body-1 font-weight-medium">Email</div>
              <a href="mailto:david.zea@example.com" class="text-decoration-none">david.zea@example.com</a>
            </div>
          </div>

          <div class="d-flex align-center mb-4">
            <v-icon color="primary" class="mr-4">mdi-phone</v-icon>
            <div>
              <div class="text-body-1 font-weight-medium">Teléfono</div>
              <a href="tel:+123456789" class="text-decoration-none">+1 (234) 567-890</a>
            </div>
          </div>

          <div class="d-flex align-center mb-4">
            <v-icon color="primary" class="mr-4">mdi-map-marker</v-icon>
            <div>
              <div class="text-body-1 font-weight-medium">Ubicación</div>
              <span>Ciudad, País</span>
            </div>
          </div>

          <h3 class="text-h5 font-weight-bold mt-8 mb-4">Redes Sociales</h3>

          <div class="d-flex gap-4">
            <v-btn icon color="primary" variant="text" href="https://github.com/" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn icon color="primary" variant="text" href="https://linkedin.com/" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon color="primary" variant="text" href="https://twitter.com/" target="_blank">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon color="primary" variant="text" href="https://instagram.com/" target="_blank">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-card class="pa-6">
          <h3 class="text-h5 font-weight-bold mb-6">Envíame un Mensaje</h3>

          <v-form ref="form" v-model="isFormValid">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                    v-model="formData.name"
                    label="Nombre"
                    variant="outlined"
                    :rules="[v => !!v || 'El nombre es requerido']"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                    v-model="formData.email"
                    label="Email"
                    variant="outlined"
                    :rules="[
                    v => !!v || 'El email es requerido',
                    v => /.+@.+\..+/.test(v) || 'El email debe ser válido'
                  ]"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    v-model="formData.subject"
                    label="Asunto"
                    variant="outlined"
                    :rules="[v => !!v || 'El asunto es requerido']"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                    v-model="formData.message"
                    label="Mensaje"
                    variant="outlined"
                    rows="5"
                    :rules="[v => !!v || 'El mensaje es requerido']"
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
import { ref, reactive } from 'vue';

const form = ref(null);
const isFormValid = ref(false);
const isSubmitting = ref(false);

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const snackbar = reactive({
  show: false,
  text: '',
  color: 'success'
});

const submitForm = async () => {
  isSubmitting.value = true;

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Show success message
  snackbar.text = '¡Mensaje enviado con éxito! Te responderé pronto.';
  snackbar.color = 'success';
  snackbar.show = true;

  // Reset form
  formData.name = '';
  formData.email = '';
  formData.subject = '';
  formData.message = '';

  if (form.value) {
    form.value.reset();
  }

  isSubmitting.value = false;
};
</script>