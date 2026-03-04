<template>
  <div class="color-picker">
    <button @click="togglePicker" class="color-btn">🎨</button>
    <div v-if="showPicker" class="color-options">
      <div 
        v-for="color in colors" 
        :key="color.name"
        @click="setColor(color)"
        class="color-option"
        :class="{ 'is-active': activeColor === color.name }"
        :style="{ backgroundColor: color.value }"
      ></div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const showPicker = ref(false)
  const activeColor = ref(localStorage.getItem('colorName') || 'dark')
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

  const setOrbColors = (colorName) => {
    let orb1, orb2, orb3;
    
    switch (colorName) {
      case 'dark':
      case 'light':
      case 'gray':
        // For neutral backgrounds, use a subtle elegant mix
        orb1 = '#4facfe'; // soft blue
        orb2 = '#00f2fe'; // cyan
        orb3 = '#a18cd1'; // soft purple
        break;
      case 'blue':
        orb1 = '#1565c0';
        orb2 = '#42a5f5';
        orb3 = '#00796b'; // teal accent
        break;
      case 'green':
        orb1 = '#2e7d32';
        orb2 = '#81c784';
        orb3 = '#0277bd'; // blue accent
        break;
      case 'purple':
        orb1 = '#7b1fa2';
        orb2 = '#ba68c8';
        orb3 = '#c2185b'; // pink accent
        break;
      case 'orange':
        orb1 = '#ef6c00';
        orb2 = '#ffb74d';
        orb3 = '#d32f2f'; // red accent
        break;
      case 'pink':
        orb1 = '#c2185b';
        orb2 = '#f06292';
        orb3 = '#7b1fa2'; // purple accent
        break;
      default:
        orb1 = 'var(--color-text)';
        orb2 = 'var(--color-text)';
        orb3 = 'var(--color-text)';
    }

    document.documentElement.style.setProperty('--orb-1-color', orb1);
    document.documentElement.style.setProperty('--orb-2-color', orb2);
    document.documentElement.style.setProperty('--orb-3-color', orb3);
  }

  const setColor = (color) => {
    activeColor.value = color.name
    
    document.documentElement.style.setProperty('--color-background', color.value || 'var(--vt-c-white)')
    if (color.text) {
      document.documentElement.style.setProperty('--color-text', color.text)
      document.documentElement.style.setProperty('--color-heading', color.text)
    }

    setContrastVariables(color.isDark, color.value)
    setOrbColors(color.name)
    
    const pickerBg = (color.value === '#181818' || color.name === 'dark') ? '#ffffff' : 'var(--color-background)'
    document.documentElement.style.setProperty('--picker-bg', pickerBg)
    
    localStorage.setItem('bgColor', color.value)
    localStorage.setItem('colorName', color.name)
    localStorage.setItem('textColor', color.text || '')
    localStorage.setItem('isDark', color.isDark)
    showPicker.value = false
  }

  onMounted(() => {
    const savedColor = localStorage.getItem('bgColor')
    const savedText = localStorage.getItem('textColor')
    const isDark = localStorage.getItem('isDark') === 'true'
    const colorName = localStorage.getItem('colorName') || 'dark'
    
    if (savedColor) {
      document.documentElement.style.setProperty('--color-background', savedColor)
      setContrastVariables(isDark, savedColor)
      setOrbColors(colorName)
    } else {
      setOrbColors('dark') // default
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
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .color-option:hover {
    transform: scale(1.1);
  }

  .color-option.is-active {
    border: 3px solid var(--color-text); /* Matches text theme (white on dark, black on light) */
    transform: scale(1.15);
  }
</style>