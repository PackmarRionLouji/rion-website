<template>
  <div class="view-content">
    <div class="nav-header">
      <button class="back-btn-premium" @click="$router.push('/')">
        <span class="btn-content">
          <span class="arrow">←</span>
          <span>Back to Portfolio</span>
        </span>
        <div class="btn-glow"></div>
      </button>
    </div>

    <h2>My Story & Passions</h2>
    <p>Content for about me goes here.</p>
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
.nav-header {
  margin-bottom: 2rem;
}

.back-btn-premium {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: var(--color-heading);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.back-btn-premium .btn-content {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  z-index: 2;
}

.back-btn-premium .arrow {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.back-btn-premium:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(var(--color-heading-rgb), 0.5);
  transform: translateY(-2px);
}

.back-btn-premium:hover .arrow {
  transform: translateX(-4px);
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
