<template>
  <VContainer class="error-container">
    <VRow>
      <VCol cols="12">
        <VCard class="error-card">
          <VCardTitle>
            <span class="headline">Pagina no encontrada ⚠️</span>
          </VCardTitle>
          <VCardText>
            <VContainer>
              <VRow>
                <VCol cols="12">
                  <p>No pudimos encontrar la página que estás buscando...</p>
                </VCol>
              </VRow>
              <VRow>
                <VCol cols="12">
                  <img :src="error404" alt="Error 404" class="error-image" />
                </VCol>
              </VRow>
            </VContainer>
          </VCardText>
          <VCardActions class="text-center">
            <VCol cols="12">
              <VBtn
                  style="background: red"
                  color="white"
                  outlined
                  @click="goBack"
              >
                <span style="font-size: large">Regresar</span>
              </VBtn>
            </VCol>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import error404 from '@/assets/page404.png';

export default defineComponent({
  name: 'NotFound',
  setup() {
    const router = useRouter();
    const goBack = () => router.push({ path: '/' });

    return { goBack, error404 };
  },
});
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.error-card {
  text-align: center;
}

.error-image {
  max-width: 100%;
  height: auto;
}
</style>
