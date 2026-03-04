<template>
  <div class="color-picker">
    <button @click="togglePicker" class="color-btn">🎨</button>
    <div v-if="showPicker" class="color-options">
      <div 
        v-for="color in colors" 
        :key="color.name"
        @click="setColor(color)"
        class="color-option"
        :style="{ backgroundColor: color.value }"
      ></div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const showPicker = ref(false)
  const colors = [
    { name: 'light', value: '#ffffff', text: '#2c3e50', isDark: false },
    { name: 'dark', value: '#181818', text: '#ffffff', isDark: true },
    { name: 'blue', value: '#e3f2fd', text: '#1565c0', isDark: false },
    { name: 'green', value: '#e8f5e8', text: '#2e7d32', isDark: false },
    { name: 'purple', value: '#f3e5f5', text: '#7b1fa2', isDark: false },
    { name: 'orange', value: '#fff3e0', text: '#ef6c00', isDark: false },
    { name: 'pink', value: '#fce4ec', text: '#c2185b', isDark: false },
    { name: 'gray', value: '#f5f5f5', text: '#2c3e50', isDark: false }
  ]

  const togglePicker = () => {
    showPicker.value = !showPicker.value
  }

  const setContrastVariables = (isDark, colorValue) => {
    // Determine the base RGB for the overlay (white for dark themes, black for light themes)
    const rgbStr = isDark ? '255, 255, 255' : '0, 0, 0'
    
    // For off-white/gray themes, we need slightly stronger contrast
    const isVeryLight = !isDark && colorValue !== '#ffffff'
    const opacityBase = isVeryLight ? 0.06 : 0.03
    
    document.documentElement.style.setProperty('--color-card-bg', `rgba(${rgbStr}, ${opacityBase})`)
    document.documentElement.style.setProperty('--color-card-hover', `rgba(${rgbStr}, ${opacityBase + 0.04})`)
    document.documentElement.style.setProperty('--color-icon-bg', `rgba(${rgbStr}, ${opacityBase + 0.02})`)
    document.documentElement.style.setProperty('--color-border', `rgba(${rgbStr}, 0.1)`)
    document.documentElement.style.setProperty('--color-border-hover', `rgba(${rgbStr}, 0.2)`)
  }

  const setColor = (color) => {
    document.documentElement.style.setProperty('--color-background', color.value || 'var(--vt-c-white)')
    if (color.text) {
      document.documentElement.style.setProperty('--color-text', color.text)
      document.documentElement.style.setProperty('--color-heading', color.text)
    }

    setContrastVariables(color.isDark, color.value)
    
    const pickerBg = (color.value === '#181818' || color.name === 'dark') ? '#ffffff' : 'var(--color-background)'
    document.documentElement.style.setProperty('--picker-bg', pickerBg)
    
    localStorage.setItem('bgColor', color.value)
    localStorage.setItem('textColor', color.text || '')
    localStorage.setItem('isDark', color.isDark)
    showPicker.value = false
  }

  onMounted(() => {
    const savedColor = localStorage.getItem('bgColor')
    const savedText = localStorage.getItem('textColor')
    const isDark = localStorage.getItem('isDark') === 'true'
    if (savedColor) {
      document.documentElement.style.setProperty('--color-background', savedColor)
      setContrastVariables(isDark, savedColor)
    }
    if (savedText) {
      document.documentElement.style.setProperty('--color-text', savedText)
      document.documentElement.style.setProperty('--color-heading', savedText)
    }
  })
</script>

<style scoped>
  .color-picker {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
  }

  .color-btn {
    background: none;
    border: 2px solid var(--color-border);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 18px;
  }

  .color-options {
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: var(--picker-bg, var(--color-background));
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 8px;
  }

  .color-option {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid var(--color-border);
  }
</style>