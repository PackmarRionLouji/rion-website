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
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Name from './components/Name.vue';
</script>

<style scoped>
header {
  line-height: 1.5;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
</style>

<style scoped>
.profile-logo {
  margin-left: -100px;
}
</style>
