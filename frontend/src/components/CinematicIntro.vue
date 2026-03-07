<template>
  <Transition name="fade-out">
    <div v-if="isVisible" class="intro-overlay">
      <div class="terminal-content">
        <div class="line" v-for="(line, index) in displayedLines" :key="index">
          <span class="prompt">></span> {{ line }}
        </div>
        <div v-if="isBooting" class="boot-status">
          <span class="loading-bar"></span>
          <span class="percentage">{{ bootProgress }}%</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['complete']);
const isVisible = ref(true);
const displayedLines = ref([]);
const bootProgress = ref(0);
const isBooting = ref(false);

const lines = [
  "INITIALIZING RION_CORE...",
  "ESTABLISHING CONNECTION...",
  "LOADING ASSETS...",
  "READY."
];

onMounted(async () => {
  for (const line of lines) {
    await sleep(200);
    displayedLines.value.push(line);
  }
  
  isBooting.value = true;
  await animateProgress();
  
  await sleep(400);
  isVisible.value = false;
  emit('complete');
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const animateProgress = () => {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      bootProgress.value += Math.floor(Math.random() * 15) + 5;
      if (bootProgress.value >= 100) {
        bootProgress.value = 100;
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
};
</script>

<style scoped>
.intro-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #050505;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-family: 'Fira Code', monospace;
  padding: 2rem;
}

.terminal-content {
  width: 100%;
  max-width: 500px;
}

.line {
  margin-bottom: 0.8rem;
  font-size: 1rem;
  letter-spacing: 0.05em;
  opacity: 0;
  animation: fadeInLine 0.1s forwards;
}

.prompt {
  color: #10b981;
  font-weight: 800;
}

.boot-status {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.loading-bar {
  flex: 1;
  height: 4px;
  background: rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
  border-radius: 100px;
}

.loading-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: v-bind(bootProgress + '%');
  background: #3b82f6;
  transition: width 0.1s ease;
}

.percentage {
  font-size: 0.9rem;
  font-weight: 800;
  width: 50px;
}

@keyframes fadeInLine {
  to { opacity: 1; }
}

.fade-out-leave-active {
  transition: all 1.2s cubic-bezier(0.7, 0, 0.3, 1);
}

.fade-out-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
