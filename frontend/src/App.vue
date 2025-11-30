<template>
  <header>
    <img
      alt="Profile logo"
      class="profile-logo"
      src="./assets/rion-louji.svg"
      style="height: 200px; width: 165px;"
    />
    <nav>
      <Name msg="Packmar Rion Louji" />
      <!-- <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> -->
    </nav>
    <ColorPicker />
  </header>

  <main>
    <RouterView />
  </main>
  <CustomCursor />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Name from './components/Name.vue';
import ColorPicker from './components/ColorPicker.vue';
import CustomCursor from './components/CustomCursor.vue';
</script>

<style scoped>
  header {
    line-height: 1.5;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .logo {
    height: 80px;
  }

  nav {
    font-size: 1.2rem;
  }

  main {
    padding: 2rem;
  }

  .profile-logo {
    margin-left: -400px;
    outline: none;
    box-shadow: none;
    border: 0;
  }

  nav {
    margin-left: -400px;
  }
</style>
