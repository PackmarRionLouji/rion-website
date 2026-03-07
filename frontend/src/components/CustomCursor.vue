<template>
  <div 
    ref="cursorMain" 
    class="custom-cursor"
  >
    <div class="cursor-dot"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const cursorMain = ref(null)
const mouse = { x: 0, y: 0 }
const pos = { x: 0, y: 0 }
const speed = 0.15

const updateMouse = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
  
  // Broadcast for Liquid Reveal
  document.documentElement.style.setProperty('--mouse-x', `${mouse.x}px`)
  document.documentElement.style.setProperty('--mouse-y', `${mouse.y}px`)
  
  // Magnetic check
  const target = e.target.closest('a, button, .interactive, .liquid-reveal')
  if (target) {
    const rect = target.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    gsap.to(cursorMain.value, {
      x: centerX,
      y: centerY,
      scale: 1.5,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto'
    })
  } else {
    gsap.to(cursorMain.value, {
      x: mouse.x,
      y: mouse.y,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto'
    })
  }
}

onMounted(() => {
  window.addEventListener('mousemove', updateMouse)
  
  // Smooth follow for the pulse effect
  gsap.set(cursorMain.value, { xPercent: -50, yPercent: -50 })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(243, 156, 18, 0.4) 0%, rgba(243, 156, 18, 0.1) 70%, transparent 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
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
  box-shadow: 0 0 10px #f39c12;
}
</style>