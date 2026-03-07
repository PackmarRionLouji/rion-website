<template>
  <CinematicIntro @complete="handleIntroComplete" />
  
  <div v-if="isIntroComplete" class="app-root">
    <div class="background-effects">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <ThreeBackground />
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

      <main class="right-panel snap-container">
        <RouterView v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
      <CustomCursor />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import Name from './components/Name.vue';
import ColorPicker from './components/ColorPicker.vue';
import CustomCursor from './components/CustomCursor.vue';
import ThreeBackground from './components/ThreeBackground.vue';
import CinematicIntro from './components/CinematicIntro.vue';

const isIntroComplete = ref(false);

const handleIntroComplete = () => {
  isIntroComplete.value = true;
};

onMounted(() => {
  // Liquid drift for background orbs
  const orbs = document.querySelectorAll('.orb');
  orbs.forEach((orb, i) => {
    animateOrb(orb, i);
  });
});

const animateOrb = (el, i) => {
  gsap.to(el, {
    x: `random(-10, 10)vw`,
    y: `random(-10, 10)vh`,
    scale: `random(0.9, 1.1)`,
    duration: 15 + i * 5,
    ease: 'sine.inOut',
    onComplete: () => animateOrb(el, i)
  });
};
</script>

<style scoped>
.app-root {
  display: contents;
}

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
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 2rem;
}

.profile-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  animation: cardBreathe 8s ease-in-out infinite;
}

.profile-elegant-card {
  position: relative;
  width: 160px; /* Reduced from 200px */
  height: 208px; /* Maintained 1:1.3 ratio */
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.1),
    0 16px 32px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image-refined {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(1.02) contrast(1.02);
  transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-glass-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  pointer-events: none;
  z-index: 2;
}

.profile-elegant-card:hover {
  transform: translateY(-8px) rotateX(5deg);
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.15),
    0 24px 48px rgba(0, 0, 0, 0.2);
}

.profile-elegant-card:hover .profile-image-refined {
  transform: scale(1.05);
}

@keyframes cardBreathe {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-8px) scale(1.01); }
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
  scroll-behavior: smooth;
  
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
    align-items: flex-start;
  }
  
  .profile-card-wrapper {
    width: 200px; /* Reduced from 240px */
    height: 260px; /* Reduced from 300px */
    margin-bottom: 2rem;
  }
  
  .profile-elegant-card {
    width: 100%;
    height: 100%;
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

