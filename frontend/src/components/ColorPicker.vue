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
    { name: 'light', value: '#ffffff', text: '#2c3e50' },
    { name: 'dark', value: '#181818', text: '#ffffff' },
    { name: 'blue', value: '#e3f2fd', text: '#1565c0' },
    { name: 'green', value: '#e8f5e8', text: '#2e7d32' },
    { name: 'purple', value: '#f3e5f5', text: '#7b1fa2' },
    { name: 'orange', value: '#fff3e0', text: '#ef6c00' },
    { name: 'pink', value: '#fce4ec', text: '#c2185b' },
    { name: 'gray', value: '#f5f5f5', text: '#424242' }
  ]

  const togglePicker = () => {
    showPicker.value = !showPicker.value
  }

  const setColor = (color) => {
    document.documentElement.style.setProperty('--color-background', color.value || 'var(--vt-c-white)')
    if (color.text) {
      document.documentElement.style.setProperty('--color-text', color.text)
    }
    
    const pickerBg = (color.value === '#181818' || color.name === 'dark') ? '#ffffff' : 'var(--color-background)'
    document.documentElement.style.setProperty('--picker-bg', pickerBg)
    
    localStorage.setItem('bgColor', color.value)
    localStorage.setItem('textColor', color.text || '')
    showPicker.value = false
  }

  onMounted(() => {
    const savedColor = localStorage.getItem('bgColor')
    const savedText = localStorage.getItem('textColor')
    if (savedColor) {
      document.documentElement.style.setProperty('--color-background', savedColor)
    }
    if (savedText) {
      document.documentElement.style.setProperty('--color-text', savedText)
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