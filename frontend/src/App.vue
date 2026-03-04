<template>
  <div class="background-effects">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>
  
  <div class="layout-wrapper">
    <header class="left-panel">
      <div class="profile-container">
        <nav class="navigation-content">
          <Name msg="Packmar Rion Louji" />
        </nav>
      </div>
      <div class="theme-controls">
        <ColorPicker />
      </div>
    </header>

    <main class="right-panel">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <CustomCursor />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Name from './components/Name.vue';
import ColorPicker from './components/ColorPicker.vue';
import CustomCursor from './components/CustomCursor.vue';
</script>

<style scoped>
.layout-wrapper {
  display: contents;
}

.left-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  min-height: 50vh;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
}

.navigation-content {
  width: 100%;
}

.theme-controls {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.right-panel {
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

@media (min-width: 1024px) {
  .left-panel {
    min-height: 100vh;
    height: 100vh;
    position: sticky;
    top: 0;
    padding: 6rem;
    align-items: flex-start;
  }
  
  .profile-container {
    justify-content: center;
  }

  .theme-controls {
    margin-top: auto;
    justify-content: flex-start;
  }

  .right-panel {
    padding: 6rem;
    height: 100vh;
    scroll-behavior: smooth;
  }
}

/* Animated Aurora Background Effect */
.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px); /* Slightly less blur for stronger color presence */
  opacity: 0.15; /* Increased opacity to look good on light/colored themes */
  animation: floatOrb 20s infinite ease-in-out alternate;
  mix-blend-mode: normal; /* Better color mixing */
}

.orb-1 {
  background: var(--orb-1-color, var(--color-text));
  width: 50vw;
  height: 50vw;
  top: -15%;
  left: -15%;
  animation-delay: 0s;
}

.orb-2 {
  background: var(--orb-2-color, var(--color-text));
  width: 45vw;
  height: 45vw;
  bottom: -20%;
  right: -10%;
  animation-duration: 25s;
  animation-delay: -5s;
}

.orb-3 {
  background: var(--orb-3-color, var(--color-text));
  width: 60vw;
  height: 60vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 30s;
  animation-delay: -10s;
}

@keyframes floatOrb {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(5vw, -5vh) scale(1.05); }
  66% { transform: translate(-3vw, 4vh) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
}

/* Dark mode specific adjustments for opacities so they don't overpower the black bg */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) .orb {
    opacity: 0.08;
    mix-blend-mode: screen;
  }
}
[data-theme="dark"] .orb {
  opacity: 0.08;
  mix-blend-mode: screen;
}

@media (max-width: 768px) {
  .orb { filter: blur(60px); }
  .orb-1 { width: 80vw; height: 80vw; top: -10%; }
  .orb-2 { width: 70vw; height: 70vw; bottom: -10%; }
  .orb-3 { width: 100vw; height: 100vw; }
}
</style>

