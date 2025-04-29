<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface Star {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  opacity: number;
  tailLength: number;
}

const canvasRef = ref<HTMLCanvasElement | null>(null);
const stars: Star[] = [];
const starCount = 20; // Más estrellas para notar la profundidad
const animationFrameId = ref<number | null>(null);

const createStar = (canvasWidth: number, canvasHeight: number): Star => {
  const depthFactor = Math.random(); // 0 (lejos) a 1 (cerca)

  const startX = Math.random() * canvasWidth;
  const startY = Math.random() * -canvasHeight * 0.2;

  return {
    x: startX,
    y: startY,
    speedX: -(depthFactor * 0.5 + 0.2), // Cercanas se mueven más rápido
    speedY: depthFactor * 0.8 + 0.4,
    size: depthFactor * 1.5 + 0.5,
    opacity: depthFactor * 0.5 + 0.3, // Más cerca, más opacas
    tailLength: depthFactor * 30 + 20,
  };
};

const updateStars = (canvasWidth: number, canvasHeight: number) => {
  for (const star of stars) {
    star.x += star.speedX;
    star.y += star.speedY;

    if (star.y > canvasHeight || star.x < 0) {
      Object.assign(star, createStar(canvasWidth, canvasHeight));
    }
  }
};

const drawStars = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (const star of stars) {
    ctx.save();

    const tailGradient = ctx.createLinearGradient(
        star.x, star.y,
        star.x - star.speedX * star.tailLength,
        star.y - star.speedY * star.tailLength
    );
    tailGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
    tailGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.beginPath();
    ctx.strokeStyle = tailGradient;
    ctx.lineWidth = star.size;
    ctx.moveTo(star.x, star.y);
    ctx.lineTo(
        star.x - star.speedX * star.tailLength,
        star.y - star.speedY * star.tailLength
    );
    ctx.stroke();

    ctx.translate(star.x, star.y);
    const angle = Math.atan2(star.speedY, star.speedX);
    ctx.rotate(angle);

    ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.lineWidth = star.size;

    const armLength = star.size * 3;

    for (const [dx, dy] of [
      [1, 0],
      [0, 1],
      [0.7, 0.7],
      [0.7, -0.7],
    ]) {
      ctx.beginPath();
      ctx.moveTo(-armLength * dx, -armLength * dy);
      ctx.lineTo(armLength * dx, armLength * dy);
      ctx.stroke();
    }

    ctx.restore();
  }
};

const animate = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  updateStars(canvas.width, canvas.height);
  drawStars(ctx);

  animationFrameId.value = requestAnimationFrame(animate);
};

const resizeCanvas = () => {
  const canvas = canvasRef.value;
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars.length = 0;
    for (let i = 0; i < starCount; i++) {
      stars.push(createStar(canvas.width, canvas.height));
    }
  }
};

onMounted(() => {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  animate();
});

onBeforeUnmount(() => {
  if (animationFrameId.value !== null) {
    cancelAnimationFrame(animationFrameId.value);
  }
  window.removeEventListener('resize', resizeCanvas);
});
</script>

<template>
  <canvas ref="canvasRef" class="fixed top-0 left-0 w-full h-full pointer-events-none z-0"></canvas>
</template>

<style scoped>
canvas {
  background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
}
</style>
