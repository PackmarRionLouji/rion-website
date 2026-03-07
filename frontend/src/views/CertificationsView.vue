<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const expandedIndices = ref([0, 1, 2, 3, 4, 5]);
const selectedImages = ref([]);
const currentImageIndex = ref(0);

const toggleExpand = (index) => {
  if (expandedIndices.value.includes(index)) {
    expandedIndices.value = expandedIndices.value.filter(i => i !== index);
  } else {
    expandedIndices.value.push(index);
  }
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

const certs = [
  {
    title: 'Sound Engineering',
    provider: 'Professional Certification',
    date: 'Certified',
    points: [
      'Mastery of sound systems, mixing, and mastering techniques',
      'Studio recording, music dynamics, and frequency management (High/Low)',
      'Proficiency in keyboard performance and signal processing'
    ],
    color: 'rgba(255, 107, 107, 0.4)',
    icon: '🔊',
    images: [new URL('../assets/certifications/sound-engineering.jpg', import.meta.url).href]
  },
  {
    title: 'Cloud & DevOps Architecting',
    provider: 'ICT Academy / AWS Academy',
    date: '2021',
    points: [
      'AWS Academy Graduate: Cloud Foundations (20-hour intensive)',
      'AWS Academy Graduate: Cloud Architecting (40-hour deep dive)',
      'Hands-on experience in building scalable and secure cloud infrastructures'
    ],
    color: 'rgba(56, 189, 248, 0.4)',
    icon: '☁️',
    images: [
      new URL('../assets/certifications/ict-academy/AWS CERTIFIED.png', import.meta.url).href,
      new URL('../assets/certifications/ict-academy/Cloud Architecting.pdf', import.meta.url).href,
      new URL('../assets/certifications/ict-academy/Cloud Foundations.pdf', import.meta.url).href
    ]
  },
  {
    title: 'Python & AI Development',
    provider: 'Guvi (IIT-M Incubated)',
    date: '2023 - 2024',
    points: [
      'Game Development using Pygame and core engine logic',
      'Face Recognition Application development and implementation',
      'Advanced Python Multi-Paradigm Programming mastery'
    ],
    color: 'rgba(34, 197, 94, 0.4)',
    icon: '🐍',
    images: [
      new URL('../assets/certifications/guvi/Game Development using pygame.png', import.meta.url).href,
      new URL('../assets/certifications/guvi/Face Recognition App using Python.png', import.meta.url).href,
      new URL('../assets/certifications/guvi/Python MPC.png', import.meta.url).href
    ]
  },
  {
    title: 'Software Engineering Stack',
    provider: 'Perfect Plan B (Online)',
    date: '2023',
    points: [
      'Comprehensive online training in OOP, Data Structures, and ML',
      'Completed and successfully submitted end-to-end technical project',
      'Professional focus on machine learning foundations and automation'
    ],
    color: 'rgba(168, 85, 247, 0.4)',
    icon: '💻',
    images: [
      new URL('../assets/certifications/perfect-plan-b/Python.jpg', import.meta.url).href,
      new URL('../assets/certifications/perfect-plan-b/OOP.jpg', import.meta.url).href,
      new URL('../assets/certifications/perfect-plan-b/DS.jpg', import.meta.url).href,
      new URL('../assets/certifications/perfect-plan-b/Machine Learning.jpg', import.meta.url).href,
      new URL('../assets/certifications/perfect-plan-b/Resume Building.jpg', import.meta.url).href
    ]
  },
  {
    title: 'Data Science & Fundamentals',
    provider: 'Coursera / Misc.',
    date: '2021 - 2023',
    points: [
      'Programming for Everybody (Python) - University of Michigan',
      'Data Science Math Skills and Statistical Foundations',
      'AI for Everyone: Strategic technical literacy and AI concepts'
    ],
    color: 'rgba(251, 191, 36, 0.4)',
    icon: '📊',
    images: [
      new URL('../assets/certifications/coursera/Programming for Everybody.pdf', import.meta.url).href,
      new URL('../assets/certifications/coursera/Data Science Math Skills.pdf', import.meta.url).href,
      new URL('../assets/certifications/coursera/AI for everyone.pdf', import.meta.url).href
    ]
  },
  {
    title: 'Specialized Business Training',
    provider: 'Turnip / Pando',
    date: '2021 - 2025',
    points: [
      'SQL for Business Analytics: 15-day intensive (Turnip Innovations)',
      'The Enterprise Edge: Advanced sales training program (Pando.ai)',
      'Intersection of technical data analysis and business strategy'
    ],
    color: 'rgba(244, 63, 94, 0.4)',
    icon: '💡',
    images: [
      new URL('../assets/certifications/misc/turnip-innovations.pdf', import.meta.url).href,
      new URL('../assets/certifications/misc/pando-rion.pdf', import.meta.url).href
    ]
  }
];

const isPdf = (url) => url.toLowerCase().endsWith('.pdf');
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
      <h2>Certifications & Mastery</h2>
      <p class="subtitle">Continuously expanding technical and creative horizons</p>
    </div>

    <div class="certs-grid">
      <div v-for="(cert, index) in certs" :key="index" 
           class="cert-card" 
           :class="{ 'is-expanded': expandedIndices.includes(index) }"
           @click="toggleExpand(index)"
           :style="{ animationDelay: `${index * 0.1}s` }">
        <div class="card-glass"></div>
        
        <div class="card-header">
          <div class="icon-box" :style="{ background: cert.color }">{{ cert.icon }}</div>
          <div class="title-area">
            <h3>{{ cert.title }}</h3>
            <span class="provider">{{ cert.provider }}</span>
          </div>
          <span class="cert-date">{{ cert.date }}</span>
        </div>

        <div class="expand-pane">
          <ul class="cert-points">
            <li v-for="(point, pIdx) in cert.points" :key="pIdx">{{ point }}</li>
          </ul>
          
          <div class="view-action" @click.stop="openGallery(cert.images)">
            <span class="view-text">View Verify Documents</span>
            <span class="view-icon">👁️</span>
          </div>
        </div>

        <div class="expand-indicator">
          <span class="plus-minus">{{ expandedIndices.includes(index) ? '−' : '+' }}</span>
        </div>
        
        <div class="card-glow" :style="{ background: cert.color }"></div>
      </div>
    </div>

    <!-- Gallery Modal -->
    <Transition name="modal">
      <div v-if="selectedImages.length > 0" class="modal-overlay" @click="closeGallery">
        <div class="modal-content" @click.stop>
          <div v-if="isPdf(selectedImages[currentImageIndex])" class="pdf-container">
            <iframe :src="selectedImages[currentImageIndex]" class="pdf-viewport"></iframe>
          </div>
          <img v-else :src="selectedImages[currentImageIndex]" class="modal-image" />
          
          <div v-if="selectedImages.length > 1" class="modal-nav">
            <button @click="prevImage" class="nav-btn prev">‹</button>
            <button @click="nextImage" class="nav-btn next">›</button>
          </div>

          <div class="modal-controls">
            <div class="image-indicator">{{ currentImageIndex + 1 }} / {{ selectedImages.length }}</div>
            <button class="close-btn" @click="closeGallery">✕</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.view-content {
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
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

.certs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 850px;
  margin: 0 auto;
}

.cert-card {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  animation: fadeSlideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.card-glass {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
}

.card-header {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.icon-box {
  width: 60px;
  height: 60px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.title-area h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  color: var(--color-heading);
}

.provider {
  font-size: 0.95rem;
  opacity: 0.6;
  font-weight: 500;
}

.cert-date {
  margin-left: auto;
  font-size: 0.9rem;
  font-weight: 700;
  opacity: 0.5;
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 100px;
}

.expand-pane {
  position: relative;
  z-index: 2;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  margin-left: 5.2rem;
}

.is-expanded .expand-pane {
  max-height: 500px;
  opacity: 1;
  margin-top: 1.5rem;
}

.cert-points {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.cert-points li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
}

.cert-points li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-border);
  opacity: 0.6;
}

.view-action {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 1.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.view-action:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.expand-indicator {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 2;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.is-expanded .expand-indicator {
  transform: rotate(180deg);
  background: rgba(255, 255, 255, 0.1);
}

.card-glow {
  position: absolute;
  top: 50%; left: 50%;
  width: 200%; height: 200%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  filter: blur(60px);
  transition: all 0.8s ease;
  z-index: 0;
}

.cert-card:hover .card-glow {
  transform: translate(-50%, -50%) scale(1);
  opacity: 0.15;
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(15px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
}

.pdf-container {
  width: 80vw;
  height: 80vh;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
}

.pdf-viewport {
  width: 100%;
  height: 100%;
  border: none;
}

.nav-btn {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 4rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1010;
  backdrop-filter: blur(10px);
}

.prev { left: 4rem; }
.next { right: 4rem; }

.modal-controls {
  position: fixed;
  top: 2rem; right: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 1020;
}

.image-indicator {
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.9rem;
}

.close-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.8);
  border: none;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
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

.modal-enter-active, .modal-leave-active { transition: opacity 0.4s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 768px) {
  .cert-card { padding: 1.5rem; }
  .expand-pane { margin-left: 0; }
  .cert-date { position: relative; margin-top: 1rem; }
  .card-header { flex-direction: column; align-items: flex-start; }
  .nav-btn { display: none; }
}
</style>
