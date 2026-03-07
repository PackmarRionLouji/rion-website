<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const expandedIndex = ref(null);
const selectedImages = ref([]);
const currentImageIndex = ref(0);

const toggleExpand = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};

const openGallery = (images) => {
  selectedImages.value = images;
  currentImageIndex.value = 0;
};

const closeGallery = () => {
  selectedImages.value = [];
};

const nextImage = () => {
  if (selectedImages.value.length === 0) return;
  currentImageIndex.value = (currentImageIndex.value + 1) % selectedImages.value.length;
};

const prevImage = () => {
  if (selectedImages.value.length === 0) return;
  currentImageIndex.value = (currentImageIndex.value - 1 + selectedImages.value.length) % selectedImages.value.length;
};

const handleKeyDown = (e) => {
  if (selectedImages.value.length === 0) return;
  
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') closeGallery();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

const awards = [
  {
    title: 'Trailblazer Award',
    date: 'March 2025',
    points: [
      { label: 'Recognition', content: 'Awarded for high-velocity full-stack development and proactive module ownership.' },
      { label: 'Technical Impact', content: 'Recognized for end-to-end Python implementation and technical initiative.' },
      { label: 'Excellence', content: 'Maintained high standards of code quality and rapid feature deployment.' }
    ],
    color: 'rgba(255, 215, 0, 0.4)',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    `,
    images: [
      new URL('../assets/awards/trailblazer.jpg', import.meta.url).href,
      new URL('../assets/awards/trailblazer-2.png', import.meta.url).href,
      new URL('../assets/awards/trailblazer-3.png', import.meta.url).href
    ]
  },
  {
    title: 'Trailblazer Award',
    date: 'November 2025',
    points: [
      { label: 'Recognition', content: 'Acknowledged for consistent excellence in project delivery and technical mastery.' },
      { label: 'Specialization', content: 'Demonstrated outstanding skill in backend architecture and system efficiency.' },
      { label: 'Quality', content: 'Contributed to robust infrastructure growth through scalable solutions.' }
    ],
    color: 'rgba(255, 107, 107, 0.4)',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    `,
    images: [
      new URL('../assets/awards/star-performer.png', import.meta.url).href,
      new URL('../assets/awards/star-performer-2.png', import.meta.url).href
    ]
  },
  {
    title: 'Professional Recognition',
    date: 'Nov 2025',
    points: [
      { label: 'Agility', content: 'Handled high-priority technical tasks and requirements gathering under tight deadlines.' },
      { label: 'Reliability', content: 'Successfully delivered critical components within 24 hours, ensuring project milestones.' },
      { label: 'Impact', content: 'Maintained consistent output for ad-hoc technical requests while managing primary project tasks.' }
    ],
    color: 'rgba(56, 189, 248, 0.4)',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    `,
    images: [
      new URL('../assets/awards/shoutout-1.png', import.meta.url).href
    ]
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
      <h2>Awards & Recognitions</h2>
      <p class="subtitle">Milestones and technical achievements.</p>
    </div>

    <div class="activities-grid">
      <div v-for="(award, index) in awards" :key="index" 
           class="activity-card" 
           :class="{ 'is-expanded': expandedIndex === index }"
           @click="toggleExpand(index)"
           :style="{ animationDelay: `${index * 0.15}s` }">
        <div class="card-glass"></div>
        <div class="icon-wrapper">
          <div v-html="award.icon" class="activity-icon-container"></div>
        </div>
        <h3>{{ award.title }}</h3>
        <p class="award-date">{{ award.date }}</p>
        
        <div class="expand-pane">
          <div class="award-content">
            <div class="award-points">
              <div v-for="(point, pIdx) in award.points" :key="pIdx" class="award-point">
                <span class="point-label">{{ point.label }}</span>
                <span class="point-content">{{ point.content }}</span>
              </div>
            </div>

            <div class="gallery-preview">
              <div v-for="(img, imgIdx) in award.images" :key="imgIdx" class="preview-dot" :class="{ active: imgIdx === 0 }"></div>
              <span class="gallery-count">{{ award.images.length }} Photos</span>
            </div>

            <button class="view-award-btn" @click.stop="openGallery(award.images)">
              View Full Gallery
              <span class="btn-arrow">→</span>
            </button>
          </div>
        </div>

        <div class="expand-indicator">
          <span class="plus-minus">{{ expandedIndex === index ? '−' : '+' }}</span>
        </div>
        
        <div class="card-glow" :style="{ background: award.color }"></div>
      </div>
    </div>

    <!-- Image Modal -->
    <Transition name="fade">
      <div v-if="selectedImages.length > 0" class="modal-overlay" @click="closeGallery">
        <div class="modal-content" @click.stop>
          <button v-if="selectedImages.length > 1" class="nav-btn prev" @click="prevImage">‹</button>
          <img :src="selectedImages[currentImageIndex]" alt="Award Detailed View" />
          <button v-if="selectedImages.length > 1" class="nav-btn next" @click="nextImage">›</button>
          
          <div class="modal-controls">
            <span class="image-indicator">{{ currentImageIndex + 1 }} / {{ selectedImages.length }}</span>
            <button class="close-btn" @click="closeGallery">×</button>
          </div>
        </div>
      </div>
    </Transition>

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
  grid-template-columns: 1fr;
  gap: 3.5rem;
  width: 100%;
  max-width: 750px; /* Strategic width for 1-column achievements */
  margin: 0 auto;
}

.activity-card {
  position: relative;
  padding: 4.5rem 4rem;
  border-radius: 36px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  animation: fadeSlideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);
}

.card-glass {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1;
}

.icon-wrapper {
  position: relative;
  z-index: 2;
  width: 80px;
  height: 80px;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-border);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.activity-icon-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  position: relative;
  z-index: 2;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
  letter-spacing: -0.02em;
  color: var(--color-heading);
}

.award-date {
  position: relative;
  z-index: 2;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.4;
  margin-bottom: 1rem;
}

.expand-pane {
  position: relative;
  z-index: 2;
  width: 100%;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}

.is-expanded .expand-pane {
  max-height: 1200px;
  opacity: 1;
  margin-top: 2rem;
}

.award-content {
  padding: 0 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.award-points {
  width: 100%;
  text-align: left;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.award-point {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-left: 1.2rem;
  border-left: 3px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.activity-card:hover .award-point {
  border-left-color: rgba(255, 255, 255, 0.2);
}

.point-label {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.3;
}

.point-content {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--color-heading);
  opacity: 0.85;
}

.gallery-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 2rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.preview-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
  opacity: 0.2;
}

.preview-dot.active {
  opacity: 0.8;
  width: 16px;
  border-radius: 10px;
  background: var(--color-heading);
}

.gallery-count {
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.5;
  margin-left: 0.4rem;
}

.view-award-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-weight: 700;
  width: 100%;
  overflow: hidden;
}

.view-award-btn .btn-arrow {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.view-award-btn:hover {
  background: white;
  color: black;
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.view-award-btn:hover .btn-arrow {
  transform: translateX(6px);
}

.expand-indicator {
  position: relative;
  z-index: 2;
  margin-top: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.plus-minus {
  font-size: 1.4rem;
  font-weight: 300;
  opacity: 0.4;
}

.activity-card:hover .expand-indicator {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.activity-card:hover .plus-minus {
  opacity: 1;
}

.card-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  filter: blur(80px);
  opacity: 0;
  transition: opacity 0.8s ease;
  z-index: 0;
  pointer-events: none;
}

.activity-card:hover .card-glow {
  opacity: 0.15;
}

.activity-card:hover {
  transform: translateY(-15px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.activity-card:hover .icon-wrapper {
  transform: translateY(-5px) rotate(5deg);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: var(--color-heading);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content img {
  max-width: 92vw;
  max-height: 88vh;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 50px 120px rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: scaleIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  font-size: 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 10;
}

.nav-btn:hover {
  background: white;
  color: black;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.nav-btn.prev { left: 3rem; }
.nav-btn.next { right: 3rem; }

.modal-controls {
  position: absolute;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.image-indicator {
  color: white;
  font-size: 1rem;
  font-weight: 700;
  opacity: 0.7;
  letter-spacing: 0.1em;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.7rem 1.4rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  font-weight: 200;
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  transform: rotate(90deg) scale(1.1);
  background: #ff4757;
  border-color: #ff4757;
  color: white;
  box-shadow: 0 0 30px rgba(255, 71, 87, 0.4);
}

@keyframes scaleIn {
  from { transform: scale(0.9) translateY(20px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1; transform: translateY(0); }
}

.activity-items { display: none; } /* Redundant but safe */

@media (max-width: 1024px) {
  .activities-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  h2 { font-size: 2.2rem; }
  .activity-card { padding: 3rem 2rem; }
  .nav-btn { width: 50px; height: 50px; font-size: 1.8rem; }
  .nav-btn.prev { left: 1rem; }
  .nav-btn.next { right: 1rem; }
}

.nav-header { margin-bottom: 2rem; }

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
</style>

<style>
/* Global override for Awards section only */
.awards-content-wrapper {
  /* This targets the parent right-panel when the current view is active */
}

/* Use a more direct approach if possible, but for now we'll adjust the internal container to feel wider */
.awards-grid-container {
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Alignment to the left as requested */
}
</style>
