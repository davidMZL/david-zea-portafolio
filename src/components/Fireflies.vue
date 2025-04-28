<template>
  <div class="fireflies-container">
    <img
      :src="firefliesBG"
      class="background-image"
      alt="Fireflies background"
    />
    <div class="fireflies-overlay">
      <div
        v-for="i in quantity"
        :key="i"
        class="firefly"
        :class="`firefly-${i}`"
        :style="getAnimationStyle(i)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const quantity = 20;
const getAnimationStyle = (i: number) => {
  const rotationSpeed = Math.floor(Math.random() * 10) + 8 + "s";
  const flashDuration = Math.floor(Math.random() * 6000) + 5000 + "ms";
  const flashDelay = Math.floor(Math.random() * 8000) + 500 + "ms";

  return {
    "--rotation-speed": rotationSpeed,
    "--flash-duration": flashDuration,
    "--flash-delay": flashDelay,
  };
};
const firefliesBG = new URL("@/assets/forest.jpg", import.meta.url).href;
</script>

<style scoped lang="scss">
@use "sass:math";

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

.fireflies-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.firefly {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw;
  }

  &::before {
    background: black;
    opacity: 0.4;
    animation: drift ease alternate infinite;
    animation-duration: var(--rotation-speed);
  }

  &::after {
    background: white;
    opacity: 0;
    box-shadow: 0 0 0 0 yellow;
    animation:
      drift ease alternate infinite,
      flash ease infinite;
    animation-duration: var(--rotation-speed), var(--flash-duration);
    animation-delay: 0ms, var(--flash-delay);
  }
}

// Animaciones generales
@keyframes drift {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes flash {
  0%,
  30%,
  100% {
    opacity: 0;
    box-shadow: 0 0 0 0 yellow;
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow;
  }
}

// Genera animaciones individuales para cada luciérnaga

@for $i from 1 through 20 {
  $steps: math.random(12) +
    16; // Genera un número aleatorio de pasos en tiempo de compilación

  .firefly-#{$i} {
    animation: move#{$i} ease 200s alternate infinite;
  }

  @keyframes move#{$i} {
    @for $step from 0 through $steps {
      #{math.percentage(math.div($step, $steps))} {
        $random_x: math.random(100) - 50;
        $random_y: math.random(100) - 50;
        $random_scale: math.div(math.random(75), 100) + 0.25;

        transform: translateX(#{$random_x}vw)
          translateY(#{$random_y}vh)
          scale(#{$random_scale});
      }
    }
  }
}
</style>
