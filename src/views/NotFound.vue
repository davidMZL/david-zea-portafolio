<template>
  <VContainer class="error-container">
    <VRow>
      <VCol cols="12">
        <VCard class="error-card">
          <VCardTitle>
            <span class="headline">{{ t.notFound.title }}</span>
          </VCardTitle>
          <VCardText>
            <VContainer>
              <VRow>
                <VCol cols="12">
                  <p>{{ t.notFound.message }}</p>
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
                <span style="font-size: large">{{ t.notFound.back }}</span>
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
import error404 from '@/assets/page404.webp';
import { useI18n } from '@/i18n';

export default defineComponent({
  name: 'NotFound',
  setup() {
    const router = useRouter();
    const { t } = useI18n();
    const goBack = () => router.push({ path: '/' });

    return { goBack, error404, t };
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
