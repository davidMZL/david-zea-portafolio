<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" class="text-center mb-5">
        <v-card-title class="text-center align-center card-hover">
          <span class="text-center font-weight-bold text-h3 text-grey300">
            Contáctame
          </span>
          <div class="mx-auto divider"></div>
        </v-card-title>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <v-card class="pa-8 elevation-3 card-hover">
          <h3 class="text-h5 font-weight-bold mb-6 text-secondary">
            Envíame un Mensaje
          </h3>

          <v-form ref="form">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.name"
                  label="Nombre"
                  variant="outlined"
                  class="text-blank"
                  :rules="[rules.required]"
                  rounded
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  variant="outlined"
                  class="text-blank"
                  :rules="[rules.required, rules.email]"
                  rounded
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="formData.message"
                  label="Mensaje"
                  variant="outlined"
                  rows="5"
                  class="text-blank"
                  :rules="[rules.required]"
                  rounded
                />
              </v-col>
            </v-row>

            <v-row class="justify-center align-center text-center">
              <v-col cols="4">
                <v-btn
                  color="primary"
                  :loading="isSubmitting"
                  :disabled="!isFormValid || isSubmitting"
                  @click="submitForm"
                  rounded
                >
                  Enviar
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/common/env-variables.ts";
import { toast } from "vue3-toastify";

const form = ref();
const isFormValid = ref(false);
const isSubmitting = ref(false);

const formData = ref({ name: "", email: "", message: "" });

const rules = {
  required: (value: string) => !!value || "Este campo es requerido",
  email: (value: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || "example-email@your-email.com";
  },
};

const submitForm = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message)
    return;

  isSubmitting.value = true;

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        message: formData.value.message,
      },
      EMAILJS_PUBLIC_KEY,
    );
    toast.success("¡Mensaje enviado con éxito!");
    form.value.reset();
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    toast.error("Error al enviar el mensaje");
  }

  isSubmitting.value = false;
};

watch(
  () => formData.value,
  (newData) => {
    isFormValid.value =
      !!(newData.name?.trim() || "") &&
      !!(newData.email?.trim() || "") &&
      !!(newData.message?.trim() || "");
  },
  { deep: true },
);
</script>

<style scoped>
.divider {
  width: 100px;
  height: 4px;
  margin-bottom: 10px;
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
  transform: translateY(-1px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>
