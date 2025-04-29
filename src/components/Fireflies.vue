<template>
  <div class="fireflies-container">
    <img
      :src="firefliesBG"
      class="background-image"
      alt="Fireflies background"
      loading="eager"
    />
    <canvas
      ref="fireflyCanvas"
      class="fireflies-canvas"
      :width="canvasWidth"
      :height="canvasHeight"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Configuración
const MAX_FIREFLIES = 20; // Reducido a 20 para mantener el efecto sutil
const GLOW_RADIUS = 30; // Radio del resplandor

// Referencias y estado
const fireflyCanvas = ref<HTMLCanvasElement | null>(null);
const canvasWidth = ref(0);
const canvasHeight = ref(0);
const animationFrameId = ref<number | null>(null);
const isPageVisible = ref(true);

// Imagen de fondo mediante importación estática
const firefliesBG = new URL("@/assets/forest.webp", import.meta.url).href;

// Clase para representar una luciérnaga
class Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  brightness: number;
  blinkDuration: number;
  blinkElapsed: number;
  glowRadius: number;
  alpha: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;

    this.x = Math.random() * width;
    this.y = Math.random() * height;

    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 20 + 10; // px/second
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;

    this.size = Math.random() * 1.5 + 0.5;
    this.brightness = 0;
    this.blinkDuration = Math.random() * 2000 + 1000; // 1-3 segundos
    this.blinkElapsed = Math.random() * this.blinkDuration;
    this.glowRadius = (GLOW_RADIUS * 0.6) * (Math.random() * 0.5 + 0.5);
    this.alpha = 1;
  }

  update(deltaTime: number) {
    const deltaSeconds = deltaTime / 1000;

    // Actualizar posición
    this.x += this.vx * deltaSeconds;
    this.y += this.vy * deltaSeconds;

    // Ligero cambio de dirección cada frame
    const curveStrength = 0.1;
    const randomAngle = (Math.random() - 0.5) * curveStrength;
    const cosA = Math.cos(randomAngle);
    const sinA = Math.sin(randomAngle);

    const newVx = this.vx * cosA - this.vy * sinA;
    const newVy = this.vx * sinA + this.vy * cosA;
    this.vx = newVx;
    this.vy = newVy;

    // Control de bordes
    if (this.x < 0 || this.x > this.canvasWidth) {
      this.vx *= -1;
      this.x = Math.max(0, Math.min(this.canvasWidth, this.x));
    }
    if (this.y < 0 || this.y > this.canvasHeight) {
      this.vy *= -1;
      this.y = Math.max(0, Math.min(this.canvasHeight, this.y));
    }

    // Actualizar ciclo de parpadeo
    this.blinkElapsed += deltaTime;
    if (this.blinkElapsed > this.blinkDuration) {
      this.blinkElapsed -= this.blinkDuration;
      this.blinkDuration = Math.random() * 2000 + 1000; // nuevo ciclo aleatorio
    }

    const progress = this.blinkElapsed / this.blinkDuration;
    this.brightness = Math.sin(progress * Math.PI) ** 2; // parpadeo más natural

    return true;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.brightness < 0.02) return;

    const glow = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.glowRadius * this.brightness
    );

    glow.addColorStop(0, `rgba(255, 255, 150, ${this.brightness * 0.5})`);
    glow.addColorStop(0.3, `rgba(230, 255, 100, ${this.brightness * 0.2})`);
    glow.addColorStop(1, 'rgba(200, 255, 0, 0)');

    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.glowRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(255, 255, 200, ${this.brightness * 0.8})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Variables para la animación
let fireflies: Firefly[] = [];
let lastTimestamp = 0;

// Ajustar el tamaño del canvas
const updateCanvasSize = () => {
  if (!fireflyCanvas.value) return;

  const container = fireflyCanvas.value.parentElement;
  if (!container) return;

  const rect = container.getBoundingClientRect();
  canvasWidth.value = rect.width;
  canvasHeight.value = rect.height;

  // Actualiza el tamaño del canvas con la resolución correcta para pantallas de alta densidad
  fireflyCanvas.value.width = rect.width * window.devicePixelRatio;
  fireflyCanvas.value.height = rect.height * window.devicePixelRatio;

  const ctx = fireflyCanvas.value.getContext('2d');
  if (!ctx) return;

  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
};

// Inicializar las luciérnagas
const initializeFireflies = () => {
  if (!fireflyCanvas.value) return;

  // Determinar el número adecuado de luciérnagas según características del dispositivo
  const isLowPower = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fireflyCount = isLowPower ? 15 : MAX_FIREFLIES;

  // Crear luciérnagas
  fireflies = [];
  for (let i = 0; i < fireflyCount; i++) {
    fireflies.push(new Firefly(canvasWidth.value, canvasHeight.value));
  }
};

// Bucle de animación
const animate = (timestamp: number) => {
  if (!isPageVisible.value || !fireflyCanvas.value) {
    return;
  }

  const deltaTime = timestamp - lastTimestamp || 0;
  lastTimestamp = timestamp;

  const ctx = fireflyCanvas.value.getContext('2d');
  if (!ctx) return;

  // Limpiar canvas
  ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value);

  // Actualizar y dibujar luciérnagas
  for (let i = fireflies.length - 1; i >= 0; i--) {
    const isAlive = fireflies[i].update(deltaTime);

    if (!isAlive) {
      // Reemplazar con una nueva luciérnaga
      fireflies.splice(i, 1);
      fireflies.push(new Firefly(canvasWidth.value, canvasHeight.value));
    } else {
      // Dibujar la luciérnaga existente
      fireflies[i].draw(ctx);
    }
  }

  // Continuar la animación
  animationFrameId.value = requestAnimationFrame(animate);
};

// Manejo del ciclo de vida del componente
onMounted(() => {
  // Configuración inicial
  updateCanvasSize();
  initializeFireflies();

  // Comenzar la animación
  lastTimestamp = performance.now();
  animationFrameId.value = requestAnimationFrame(animate);

  // Eventos del navegador
  window.addEventListener('resize', handleResize);
  document.addEventListener('visibilitychange', handleVisibilityChange);
});

onBeforeUnmount(() => {
  // Detener la animación y limpiar eventos
  if (animationFrameId.value !== null) {
    cancelAnimationFrame(animationFrameId.value);
  }
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('visibilitychange', handleVisibilityChange);
});

// Manejadores de eventos
const handleResize = () => {
  updateCanvasSize();
  // Opcional: reinicializar luciérnagas después de un cambio significativo de tamaño
  if (Math.abs(window.innerWidth - canvasWidth.value) > 100) {
    initializeFireflies();
  }
};

const handleVisibilityChange = () => {
  isPageVisible.value = document.visibilityState === 'visible';

  if (isPageVisible.value && animationFrameId.value === null) {
    // Reanudar la animación
    lastTimestamp = performance.now();
    animationFrameId.value = requestAnimationFrame(animate);
  } else if (!isPageVisible.value && animationFrameId.value !== null) {
    // Pausar la animación
    cancelAnimationFrame(animationFrameId.value);
    animationFrameId.value = null;
  }
};
</script>

<style scoped>
.fireflies-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.fireflies-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
</style>