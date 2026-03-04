<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: var(--color-card-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--color-border);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
}

.item:hover {
  transform: translateY(-2px) scale(1.005);
  box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -5px rgba(0, 0, 0, 0.02);
  background: var(--color-card-hover);
  border-color: var(--color-border-hover);
}

.details {
  flex: 1;
  margin-left: 1.5rem;
}

i {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: var(--color-text);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  border-radius: 12px;
  background: var(--color-icon-bg);
}

.item:hover i {
  background: var(--color-text);
  color: var(--color-background);
  transform: scale(1.05) rotate(-3deg);
}

h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: var(--color-heading);
  letter-spacing: -0.01em;
}

@media (min-width: 1024px) {
  .item {
    align-items: center;
  }
}
</style>

