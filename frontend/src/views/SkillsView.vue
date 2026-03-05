<script setup>
const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'MATLAB', 'SQL', 'HTML/CSS']
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    skills: ['Node.js', 'Express.js', 'Fastify.js', 'Vue.js', 'Pinia', 'Sequelize', 'Mocha', 'Chai', 'React']
  },
  {
    title: 'Machine Learning & AI',
    icon: '🧠',
    skills: ['AWS Bedrock', 'Claude 3', 'Entity Recognition', 'Predictive Modeling', 'Data Automation', 'Image Processing']
  },
  {
    title: 'IoT & Hardware',
    icon: '🔌',
    skills: ['Raspberry Pi', 'Relay Modules', 'Sensors', 'Robotics', 'Control Systems']
  },
  {
    title: 'Databases & Search',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MapR-DB', 'MySQL', 'Elasticsearch']
  },
  {
    title: 'DevOps & Architecture',
    icon: '🚀',
    skills: ['AWS', 'Lambda', 'Serverless Architecture', 'AWS SES', 'AWS S3', 'Kubernetes', 'Autoscaling', 'Jenkins CI/CD Pipelines', 'Distributed Locking', 'Microservices', 'REST APIs', 'Unit Testing (Mocha/Chai)']
  },
  {
    title: 'Security & Messaging',
    icon: '🛡️',
    skills: ['RabbitMQ', 'SQS', 'Bull', 'MIME Parsing', 'SQL Injection Prevention', 'Data Sanitization']
  },
  {
    title: 'Tools & IDEs',
    icon: '⌨️',
    skills: ['ChatGPT', 'GitHub Copilot', 'Amazon Q', 'VS Code', 'WebStorm', 'Cursor', 'Jupyter', 'Eclipse']
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
      <h2>Technical Arsenal</h2>
      <p class="subtitle">A categorized overview of my languages, tools, and platforms.</p>
    </div>

    <div class="skills-grid">
      <div 
        v-for="(category, index) in skillCategories" 
        :key="index" 
        class="skill-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="card-header">
          <span class="category-icon">{{ category.icon }}</span>
          <h3>{{ category.title }}</h3>
        </div>
        <div class="skills-list">
          <span 
            v-for="skill in category.skills" 
            :key="skill" 
            class="skill-tag"
          >
            {{ skill }}
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
  cursor: none;
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

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: slideUpFadeIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.skill-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(var(--color-heading-rgb), 0.2);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.category-icon {
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.card-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-heading);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-tag {
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  transform: translateY(-2px);
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

.glow-1 { top: -100px; right: -100px; background: #3b82f6; }
.glow-2 { bottom: -100px; left: -100px; background: 20px; }

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

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
