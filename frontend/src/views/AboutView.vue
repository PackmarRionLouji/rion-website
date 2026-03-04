<template>
  <div class="view-content">
    <h2>My Story & Passions</h2>
    <p>Content for about me goes here.</p>
    <button class="back-btn" @click="$router.push('/')">← Back Home</button>
  </div>
</template>

<style scoped>
.view-content {
  color: var(--color-text);
  animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}
.back-btn {
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
}
.back-btn:hover {
  background: var(--color-card-hover);
  border-color: var(--color-border-hover);
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
