<script setup>
import { ref } from 'vue'

const experiences = [
  {
    title: 'Software Developer 1',
    company: 'Pando (Quaking Aspen Technologies)',
    period: 'Feb 2025 — Present',
    location: 'Chennai, India',
    skills: ['Node.js', 'Vue.js', 'PostgreSQL', 'Redis', 'AWS', 'MongoDB', 'FastifyJS', 'Express.js', 'Jenkins', 'Sequelize'],
    achievements: [
      'Spearheading the end-to-end development and maintenance of a dedicated core module, ensuring high availability and seamless deployment pipelines.',
      'Driving rapid resolution of critical production issues and implementing robust bug fixes to optimize system reliability.',
      'Collaborating closely with cross-functional teams to architect and deliver scalable features in a fast-paced agile environment.'
    ],
    type: 'work'
  },
  {
    title: 'Associate Software Developer',
    company: 'Pando (Quaking Aspen Technologies)',
    period: 'Feb 2024 — Jan 2025',
    location: 'Chennai, India',
    skills: ['Node.js', 'Vue.js', 'PostgreSQL', 'Redis', 'AWS', 'MongoDB', 'FastifyJS', 'Express.js', 'Jenkins', 'Sequelize'],
    achievements: [
      'Architected and deployed a real-time logistics ranking engine capable of evaluating 1,000+ transporter quotes across 2,000+ lanes during high-stakes competitive auctions.',
      'Engineered a resilient multi-step architecture integrating Redis locks and Bull Job Queues, eliminating transaction deadlocks and successfully reducing database load by 25%.',
      'Orchestrated strategic code revamps, executed complex project migrations, and proactively mitigated critical security vulnerabilities, including sophisticated SQL injection vectors.',
      'Honored with a team-level performance award for unwavering dedication to clean, maintainable, and highly efficient coding standards.'
    ],
    type: 'work'
  },
  {
    title: 'Software Development Intern',
    company: 'Pando (Quaking Aspen Technologies)',
    period: 'Oct 2023 — Feb 2024',
    location: 'Chennai, India',
    skills: ['Node.js', 'Vue.js', 'PostgreSQL', 'Express.js', 'Sequelize', 'Redis'],
    achievements: [
      'Conceptualized and developed "Wallet", a robust personal finance application leveraging PostgreSQL, Node.js, and Vue.js for seamless money transfers, balance tracking, and bulk data uploads.',
      'Accelerated team velocity by delivering impactful contributions to modular Node.js tasks, rapidly transitioning from foundational learning to production-level responsibilities.'
    ],
    type: 'internship'
  },
  {
    title: 'Trainee Auxiliary',
    company: 'BNP Paribas India Solutions',
    period: 'Jan 2023 — Jun 2023',
    location: 'Chennai, India',
    skills: ['Java', 'Vermilion Reporting Suite', 'Apache Drill', 'MapR-DB', 'SonarQube'],
    achievements: [
      'Engineered comprehensive investment reports using the Vermilion Reporting Suite, dynamically sourcing and processing big data via Apache Drill and MapR-DB.',
      'Enforced stringent code quality guidelines by executing systematic static code analysis on enterprise Java projects using SonarQube.',
      'Cultivated deep domain expertise in financial engineering, mutual funds, and complex stock market instruments.'
    ],
    type: 'internship'
  },
  {
    title: 'Trainee Auxiliary',
    company: 'Defence Research and Development Organisation (DRDO), LRDE',
    period: 'Jul 2022 — Sep 2022',
    location: 'Bangalore, India',
    skills: ['MATLAB', 'Bistatic Radar Systems'],
    achievements: [
      'Conducted advanced analytical research on Bistatic RADAR systems, optimizing the strategic positioning of transmitting and receiving antenna arrays.',
      'Executed complex mathematical modeling for precise beamforming, sophisticated multibeam selection, and beam efficiency utilizing 3 dB and 6 dB drops.',
      'Simulated signal optimization algorithms in MATLAB to accurately compute critical coverage areas and distinct range cell values for real-world defense applications.'
    ],
    type: 'internship'
  }
]

const expandedIndex = ref(null)

const toggleExpand = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}
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
      <h2>Professional Experience</h2>
      <p class="subtitle">A timeline of my roles, responsibilities, and technical contributions.</p>
    </div>

    <div class="experience-compact">
      <div 
        v-for="(exp, index) in experiences" 
        :key="index" 
        class="exp-item"
        :class="{ 'is-expanded': expandedIndex === index }"
        @click="toggleExpand(index)"
      >
        <div class="exp-summary">
          <div class="main-info">
            <span class="type-dot" :class="exp.type"></span>
            <div class="text-group">
              <h3>{{ exp.title }}</h3>
              <p>{{ exp.company }}</p>
            </div>
          </div>
          <div class="side-info">
            <span class="period-pill">{{ exp.period }}</span>
            <span class="expand-icon">{{ expandedIndex === index ? '−' : '+' }}</span>
          </div>
        </div>

        <div class="exp-details-pane">
          <div class="details-content">
            <div class="achievements-section">
              <ul class="achievements-list">
                <li v-for="(achievement, aIdx) in exp.achievements" :key="aIdx">
                  {{ achievement }}
                </li>
              </ul>
            </div>
            
            <div class="skills-section" v-if="exp.skills && exp.skills.length">
              <div class="skills-container">
                <span v-for="skill in exp.skills" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>
            </div>
            
            <div class="detail-row location-row">
              <span class="label">Location</span>
              <span class="value">📍 {{ exp.location }}</span>
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
  max-width: 850px;
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

.experience-compact {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.exp-item {
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

.exp-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(var(--color-heading-rgb), 0.2);
  transform: scale(1.005);
}

.exp-summary {
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

.type-dot.work { background: #3b82f6; box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
.type-dot.internship { background: #10b981; box-shadow: 0 0 10px rgba(16, 185, 129, 0.5); }

.text-group h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 0.2rem;
}

.text-group p {
  font-size: 0.95rem;
  opacity: 0.7;
  font-weight: 500;
}

.side-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.period-pill {
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-heading);
  white-space: nowrap;
}

.expand-icon {
  font-size: 1.4rem;
  opacity: 0.4;
  width: 20px;
  text-align: center;
  font-weight: 300;
}

.exp-details-pane {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.is-expanded .exp-details-pane {
  max-height: 1000px;
  opacity: 1;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.details-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Achievements */
.achievements-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.achievements-list li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
}

.achievements-list li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-weight: bold;
}

/* Skills */
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-tag {
  padding: 0.3rem 0.8rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 6px;
  font-size: 0.8rem;
  color: #60a5fa;
  font-weight: 500;
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

.detail-row .value {
  font-size: 0.95rem;
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

.glow-1 { top: -100px; right: -100px; background: var(--color-heading); }
.glow-2 { bottom: -100px; left: -100px; background: #3b82f6; }

@media (max-width: 600px) {
  .details-content {
    gap: 1rem;
  }
  .side-info {
    gap: 0.8rem;
  }
  .period-pill {
    display: none;
  }
}
</style>
