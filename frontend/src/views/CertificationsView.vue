<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const expandedIndex = ref(null);
const magnifiedItem = ref(null);
const magnifiedGallery = ref([]);
const magnifiedIndex = ref(0);

const toggleExpand = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};

const magnify = (item, gallery) => {
  magnifiedGallery.value = gallery;
  magnifiedIndex.value = gallery.indexOf(item);
  magnifiedItem.value = item;
};

const closeMagnify = () => {
  magnifiedItem.value = null;
  magnifiedGallery.value = [];
};

const nextMagnified = () => {
  if (magnifiedGallery.value.length <= 1) return;
  if (magnifiedIndex.value < magnifiedGallery.value.length - 1) {
    magnifiedIndex.value++;
    magnifiedItem.value = magnifiedGallery.value[magnifiedIndex.value];
  }
};

const prevMagnified = () => {
  if (magnifiedGallery.value.length <= 1) return;
  if (magnifiedIndex.value > 0) {
    magnifiedIndex.value--;
    magnifiedItem.value = magnifiedGallery.value[magnifiedIndex.value];
  }
};

const handleKeyDown = (e) => {
  if (!magnifiedItem.value) return;
  
  if (e.key === 'Escape') closeMagnify();
  if (e.key === 'ArrowRight') nextMagnified();
  if (e.key === 'ArrowLeft') prevMagnified();
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

    <div class="certs-container">
      <div class="header-section">
        <h2>Certifications & Mastery</h2>
        <p class="subtitle">Continuously expanding technical and creative horizons</p>
      </div>

      <div class="certs-grid">
        <div v-for="(cert, index) in certs" :key="index" 
             class="cert-card" 
             :class="{ 'is-expanded': expandedIndex === index }"
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
            
             <div class="inline-cert-viewer">
                <div class="cert-scroll-container">
                  <div v-for="(img, imgIdx) in cert.images" :key="imgIdx" 
                       class="cert-item-box"
                       @click.stop="magnify(img, cert.images)">
                    <div v-if="isPdf(img)" class="pdf-wrapper">
                      <iframe :src="img" class="inline-pdf"></iframe>
                      <div class="pdf-overlay-glass"></div>
                    </div>
                    <img v-else :src="img" class="inline-img" />
                    <div class="item-glass-overlay"></div>
                  </div>
                </div>
                <div v-if="cert.images.length > 1" class="gallery-hint">
                  <span class="scroll-arrow">⟷</span>
                  <span>Swipe to view more</span>
                </div>
              </div>
            </div>

            <div class="expand-indicator">
              <span class="plus-minus">{{ expandedIndex === index ? '−' : '+' }}</span>
            </div>
            
            <div class="card-glow" :style="{ background: cert.color }"></div>
          </div>
        </div>
      </div>
    <!-- Glass Magnify Overlay -->
    <Transition name="magnify">
      <div v-if="magnifiedItem" class="magnify-overlay" @click="closeMagnify">
        <div class="magnify-content" @click.stop>
          <div v-if="isPdf(magnifiedItem)" class="pdf-magnify-box">
            <iframe :src="magnifiedItem" class="magnified-pdf"></iframe>
          </div>
          <img v-else :src="magnifiedItem" alt="Magnified View" class="magnified-img" />
          
          <div v-if="magnifiedGallery.length > 1" class="magnify-counter">
            {{ magnifiedIndex + 1 }} / {{ magnifiedGallery.length }}
          </div>

          <button class="magnify-close" @click="closeMagnify">×</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.view-content {
  display: contents;
}

.certs-container {
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.header-section {
  margin-bottom: 3.5rem;
  animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  scroll-snap-align: start;
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
  scroll-snap-align: start;
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
  max-height: 2000px; /* Increased for docs */
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

/* Inline Viewer Styles */
.inline-cert-viewer {
  margin-top: 1.5rem;
}

.cert-scroll-container {
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  padding: 0.5rem 0 1.5rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.cert-scroll-container::-webkit-scrollbar {
  display: none;
}

.cert-item-box {
  flex: 0 0 320px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.4s ease;
  scroll-snap-align: start;
}

.cert-item-box:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

.item-glass-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
  pointer-events: none;
}

.inline-img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.pdf-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
}

.inline-pdf {
  width: 100%;
  height: 100%;
  border: none;
}

.pdf-overlay-glass {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: transparent;
  z-index: 10;
}

.gallery-hint {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.85rem;
  opacity: 0.5;
  margin-top: -0.5rem;
  padding-bottom: 1rem;
}

.cert-item-box:hover {
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.expand-indicator {
  position: absolute;
  bottom: 2rem;
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

/* Glass Magnify Styles */
.magnify-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(30px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  cursor: zoom-out;
}

.magnify-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.magnified-img {
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.3);
  animation: magnifyIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;
}

.pdf-magnify-box {
  width: 90vw;
  height: 90vh;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
  animation: magnifyIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.magnified-pdf {
  width: 100%;
  height: 100%;
  border: none;
}

.magnify-close {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  color: var(--color-heading);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.magnify-close:hover {
  background: var(--color-heading);
  color: var(--color-background);
  transform: rotate(90deg);
}

.magnify-counter {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.6rem 1.4rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  z-index: 10001;
}

@keyframes magnifyIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.magnify-enter-active, .magnify-leave-active {
  transition: opacity 0.5s ease;
}

.magnify-enter-from, .magnify-leave-to {
  opacity: 0;
}
</style>
