<template>
  <div 
    ref="cursor" 
    class="custom-cursor"
    :style="{ left: x + 'px', top: y + 'px' }"
  >
    <div class="cursor-dot"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)
const x = ref(0)
const y = ref(0)

const updateCursor = (e) => {
  x.value = e.clientX
  y.value = e.clientY
}

onMounted(() => {
  document.addEventListener('mousemove', updateCursor)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', updateCursor)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(243, 156, 18, 0.4) 0%, rgba(243, 156, 18, 0.1) 70%, transparent 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (pointer: coarse) {
  .custom-cursor {
    display: none !important;
  }
}

.cursor-dot {
  width: 8px;
  height: 8px;
  background: #f39c12;
  border-radius: 50%;
}
</style>