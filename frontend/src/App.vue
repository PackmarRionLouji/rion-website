<template>
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
</style>

