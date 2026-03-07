<script setup>
import { ref } from 'vue';

const expandedIndex = ref(null);

const toggleExpand = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};

const activities = [
  {
    title: 'Athletics & Sports',
    items: ['Football', 'Tennis', 'Cricket', 'Badminton', 'Fitness'],
    color: 'rgba(78, 205, 196, 0.4)',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17M14 14.66V17M9 2h6v7a3 3 0 0 1-6 0V2Z"/>
      </svg>
    `
  },
  {
    title: 'Musical Arts',
    items: ['Keyboardist', 'Composition', 'Musical Appreciation'],
    color: 'rgba(168, 230, 207, 0.4)',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
      </svg>
    `
  },
  {
    title: 'Tech & Community',
    items: ['Hackathons', 'LeetCode', 'Technical Blogging'],
    color: 'rgba(74, 158, 255, 0.4)',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    `
  },
  {
    title: 'Professional Growth',
    items: ['Certifications', 'Workshops'],
    color: 'rgba(155, 89, 182, 0.4)',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    `
  }
];
</script>

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

    <div class="header-section">
      <h2>Beyond the Server</h2>
      <p class="subtitle">Exploring passions and finding balance outside of code.</p>
    </div>

    <div class="activities-grid">
      <div v-for="(activity, index) in activities" :key="index" 
           class="activity-card" 
           :class="{ 'is-expanded': expandedIndex === index }"
           @click="toggleExpand(index)"
           :style="{ animationDelay: `${index * 0.15}s` }">
        <div class="card-glass"></div>
        <div class="icon-wrapper">
          <div v-html="activity.icon" class="activity-icon-container"></div>
        </div>
        <h3>{{ activity.title }}</h3>
        
        <div class="expand-pane">
          <ul class="activity-items">
            <li v-for="item in activity.items" :key="item" class="activity-item">
              <span class="item-icon">▹</span>
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="expand-indicator">
          <span class="plus-minus">{{ expandedIndex === index ? '−' : '+' }}</span>
        </div>
        
        <div class="card-glow" :style="{ background: activity.color }"></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.view-content {
  color: var(--color-text);
}

.header-section {
  margin-bottom: 3.5rem;
  animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

h2 {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-heading) 0%, var(--color-border) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
}

.activity-card {
  position: relative;
  padding: 3rem 2rem;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  cursor: pointer;
}

.is-expanded.activity-card {
  transform: scale(1.02);
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}

.card-glass {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  z-index: 1;
}

.icon-wrapper {
  position: relative;
  z-index: 2;
  width: 70px;
  height: 70px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-border);
  transition: all 0.4s ease;
}

.activity-icon-container {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.activity-icon-container :deep(svg),
.activity-icon-container svg {
  width: 100%;
  height: 100%;
}

h3 {
  position: relative;
  z-index: 2;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.expand-pane {
  position: relative;
  z-index: 2;
  width: 100%;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.is-expanded .expand-pane {
  max-height: 300px;
  opacity: 1;
  margin-top: 1.5rem;
}

.activity-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  max-width: fit-content;
  margin: 0 auto;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.05rem;
  color: var(--color-text);
  font-weight: 500;
  opacity: 0.9;
  white-space: nowrap;
}

.item-icon {
  color: var(--color-border);
  font-size: 0.9rem;
  opacity: 0.7;
}

.expand-indicator {
  position: relative;
  z-index: 2;
  margin-top: 1.5rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.plus-minus {
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.6;
}

.activity-card:hover .expand-indicator {
  border-color: var(--color-border);
  background: rgba(255, 255, 255, 0.1);
}

.activity-card:hover .plus-minus {
  opacity: 1;
}

.card-glow {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 60px;
  filter: blur(40px);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.activity-card:hover {
  transform: translateY(-12px) scale(1.03);
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.activity-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(8deg);
  border-color: var(--color-border);
  color: var(--color-heading);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
}

.activity-card:hover .card-glow {
  opacity: 0.4;
}

.nav-header {
  position: fixed;
  top: 1.5rem;
  left: 2rem;
  z-index: 1000;
  pointer-events: none;
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
  pointer-events: auto;
}

@media (hover: hover) and (pointer: fine) {
  .back-btn-premium {
    cursor: none;
  }
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
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.back-btn-premium:hover .arrow {
  transform: translateX(-4px);
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  h2 { font-size: 2.22rem; }
  .activities-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
}
</style>
