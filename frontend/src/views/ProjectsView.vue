<script setup>
const projects = [
  {
    title: 'Pneumonia Detection using Image Processing',
    context: 'Healthcare Initiative [LICET]',
    period: 'Dec 2022 – May 2023',
    role: 'Developer – Model Development & Deployment',
    teamSize: 3,
    description: 'Developed and deployed a highly accurate (98.4%) deep learning model for detecting pneumonia from chest X-ray scans. Integrated the core diagnostic engine into a mobile application, facilitating real-time image evaluation and instant medical predictions. Engineered this end-to-end healthcare pipeline to democratize diagnostic tool access and empower rapid early detection protocols in resource-constrained environments.',
    tags: ['Deep Learning', 'Image Processing', 'Mobile App', 'Healthcare AI']
  },
  {
    title: 'AI-Based Stock Analysis and Trend Prediction Tool',
    context: 'Independent Project',
    period: 'Aug 2022',
    role: 'Developer – Design & Implementation',
    teamSize: 1,
    description: 'Architected an autonomous AI pipeline that ingests live, streaming stock market data to execute comprehensive financial analysis instantly. Designed predictive algorithms applying complex technical indicators and trend detection heuristics to forecast market shifts. Successfully eliminated manual stock evaluation overhead by delivering dynamic, data-driven investment signals in real-time.',
    tags: ['AI/ML', 'Financial Tech', 'Data Automation', 'Predictive Modeling']
  },
  {
    title: 'Home Automation System',
    context: 'Pals Nexgen 3D Hackathon (1st Prize Winner)',
    period: 'Oct 2022 – Nov 2022',
    role: 'Developer',
    teamSize: 4,
    description: 'Spearheaded the integration of a centralized home automation system utilizing Raspberry Pi microcontrollers and relay modules. Developed a responsive mobile application interface to enable secure, remote control of physical home appliances from anywhere. Demonstrated the robust prototype in a competitive environment, securing 1st Prize overall.',
    tags: ['IoT', 'Raspberry Pi', 'Home Automation', 'Mobile Interface']
  },
  {
    title: 'Autonomous Line Follower Robot',
    context: 'Competitive Hackathon (2nd Prize Winner)',
    period: 'Sep 2021',
    role: 'Developer',
    teamSize: 3,
    description: 'Designed and engineered an autonomous robotic vehicle capable of high-precision path tracking and navigation. Programmed the control logic to optimize sensor feedback loops for rapid navigational corrections. Built a foundation for extensible automated systems applicable to smart delivery fleets, warehouse transport, and industrial cleaning.',
    tags: ['Robotics', 'Automation', 'Sensors', 'Control Systems']
  },
  {
    title: 'Personal Developer Portfolio',
    context: 'Independent Project',
    period: 'Present',
    role: 'Full-Stack Developer',
    teamSize: 1,
    description: 'Designed and developed a premium, high-performance portfolio website utilizing Vue.js and modern CSS glassmorphism aesthetics. Implemented complex responsive layouts, customized retro aesthetic cursors, and modular Vue components to establish a dynamic digital footprint showcasing engineering capabilities and project history.',
    tags: ['Vue.js', 'Frontend Development', 'UI/UX', 'Glassmorphism']
  }
]
</script>

<template>
  <div class="view-content animate-slide-up">
    <!-- Background Decor -->
    <div class="aurora-glow glow-1"></div>
    <div class="aurora-glow glow-2"></div>

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
      <h2>Systems & Applications</h2>
      <p class="subtitle">A showcase of architectures built, models trained, and problems solved.</p>
    </div>

    <div class="projects-grid">
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="project-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="card-header">
          <div class="title-group">
            <h3>{{ project.title }}</h3>
            <span class="context-badge">{{ project.context }}</span>
          </div>
          <span class="period">{{ project.period }}</span>
        </div>
        
        <div class="meta-info">
          <span class="role"><strong>Role:</strong> {{ project.role }}</span>
          <span class="team-size" v-if="project.teamSize > 1"><strong>Team:</strong> {{ project.teamSize }} members</span>
          <span class="team-size" v-else><strong>Team:</strong> Independent</span>
        </div>

        <p class="description">{{ project.description }}</p>
        
        <div class="tags-container">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-content {
  color: var(--color-text);
  width: 100%;
  max-width: 900px;
  position: relative;
  margin: 0 auto;
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

.header-section {
  margin-bottom: 3rem;
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

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: slideUpFadeIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(var(--color-heading-rgb), 0.2);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.title-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.title-group h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1.3;
}

.context-badge {
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  background: rgba(243, 156, 18, 0.15);
  color: #f39c12;
  border-radius: 4px;
  font-weight: 600;
  width: fit-content;
}

.period {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  white-space: nowrap;
}

.meta-info {
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 1rem;
}

.meta-info strong {
  color: var(--color-heading);
  font-weight: 600;
}

.description {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.tag {
  padding: 0.3rem 0.8rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 6px;
  font-size: 0.8rem;
  color: #60a5fa;
  font-weight: 500;
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

.glow-1 { top: -100px; right: -100px; background: #f39c12; }
.glow-2 { bottom: -100px; left: -100px; background: #3b82f6; }

@keyframes slideUpFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .card-header {
    flex-direction: column;
  }
  .meta-info {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
