<script setup>
import { ref } from 'vue'

const education = [
  {
    degree: 'Bachelor of Engineering in Electronics and Communication',
    institution: 'Loyola-ICAM College of Engineering and Technology',
    period: 'Aug 2019 — Apr 2023',
    location: 'Nungambakkam, Chennai',
    score: '8.66 CGPA',
    link: 'https://licet.ac.in/',
    mapLink: 'https://maps.app.goo.gl/YvQF6wtMf4aPsiVT9',
    type: 'university'
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'Hilton Matric Higher Secondary School',
    group: 'Maths / Biology',
    period: 'Jun 2018 — Apr 2019',
    location: 'Old Courtallam, India',
    score: '81%',
    link: 'https://www.hiltonmhss.com/',
    mapLink: 'https://maps.app.goo.gl/s6KoPB5M369tY2Eu7',
    type: 'school'
  },
  {
    degree: 'Secondary School Education (Class X)',
    institution: 'Annai Velankanni Matriculation Higher Secondary School',
    period: 'Jun 2016 — Apr 2017',
    location: 'Pavoorchatram, India',
    score: '95.6%',
    mapLink: 'https://maps.app.goo.gl/Jas5fjjHAKUPrrDv7',
    type: 'school'
  }
]

const expandedIndex = ref(null)

const toggleExpand = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}
</script>

<template>
  <div class="education-view">

    <div class="view-content animate-slide-up">
      <!-- Background Decor -->
      <div class="aurora-glow glow-1"></div>
      <div class="aurora-glow glow-2"></div>

    <div class="education-container">
      <div class="header-section">
        <h2>Academic Roadmap</h2>
        <p class="subtitle">A timeline of my academic journey and technical foundations.</p>
      </div>

      <div class="education-compact">
        <div 
          v-for="(edu, index) in education" 
          :key="index" 
          class="edu-item"
          :class="{ 'is-expanded': expandedIndex === index }"
          @click="toggleExpand(index)"
        >
          <div class="edu-summary">
            <div class="main-info">
              <span class="type-dot" :class="edu.type"></span>
              <div class="text-group">
                <h3>{{ edu.institution }}</h3>
                <p>{{ edu.degree }}</p>
              </div>
            </div>
            <div class="side-info">
              <span class="score-pill">{{ edu.score }}</span>
              <span class="expand-icon">{{ expandedIndex === index ? '−' : '+' }}</span>
            </div>
          </div>

          <div class="edu-details-pane">
            <div class="details-content">
              <div class="detail-row">
                <span class="label">Tenure</span>
                <span class="value">{{ edu.period }}</span>
              </div>
              <div class="detail-row">
                <span class="label">Campus</span>
                <a :href="edu.mapLink" target="_blank" @click.stop class="value-link">📍 {{ edu.location }}</a>
              </div>
              <div v-if="edu.group" class="detail-row">
                <span class="label">Specialization</span>
                <span class="value">{{ edu.group }}</span>
              </div>
              <div v-if="edu.link" class="detail-row">
                <span class="label">Institution Portal</span>
                <a :href="edu.link" target="_blank" @click.stop class="value-link">{{ edu.link.replace('https://', '').replace(/\/$/, '') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.view-content {
  color: var(--color-text);
  width: 100%;
  max-width: 800px;
  position: relative;
  margin: 0 auto;
}



.header-section {
  margin-bottom: 3rem;
  padding-top: 8rem;
  scroll-snap-align: start;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.subtitle {
  opacity: 0.6;
  font-size: 1.1rem;
}

.education-compact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.edu-item {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.edu-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(var(--color-heading-rgb), 0.2);
  transform: scale(1.005);
}

.edu-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-info {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.type-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.type-dot.university { background: #3b82f6; box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
.type-dot.school { background: #10b981; box-shadow: 0 0 10px rgba(16, 185, 129, 0.5); }

.text-group h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 0.1rem;
}

.text-group p {
  font-size: 0.9rem;
  opacity: 0.6;
}

.side-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.score-pill {
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-heading);
}

.expand-icon {
  font-size: 1.2rem;
  opacity: 0.4;
  width: 20px;
  text-align: center;
}

.edu-details-pane {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.is-expanded .edu-details-pane {
  max-height: 200px;
  opacity: 1;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.details-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.detail-row {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.detail-row .label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.4;
  letter-spacing: 0.05em;
}

.detail-row .value, .detail-row .value-link {
  font-size: 0.95rem;
  font-weight: 500;
}

.value-link {
  color: var(--color-heading);
  text-decoration: none;
  opacity: 0.8;
}

.value-link:hover {
  opacity: 1;
  text-decoration: underline;
}

/* Background Aurora Effects */
.aurora-glow {
  position: fixed;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.08;
  pointer-events: none;
  z-index: -1;
}

.glow-1 { top: -100px; right: -100px; background: var(--color-heading); }
.glow-2 { bottom: -100px; left: -100px; background: #3b82f6; }

@media (max-width: 600px) {
  .details-content {
    grid-template-columns: 1fr;
  }
  .side-info {
    gap: 0.8rem;
  }
  .score-pill {
    display: none;
  }
}
</style>
