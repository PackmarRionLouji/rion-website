<script setup>
import { ref } from 'vue'
import IconEmail from '../components/icons/IconEmail.vue'
import IconGitHub from '../components/icons/IconGitHub.vue'
import IconLinkedIn from '../components/icons/IconLinkedIn.vue'
import IconMedium from '../components/icons/IconMedium.vue'
import IconCopy from '../components/icons/IconCopy.vue'

const contacts = [
  { name: 'Email', value: 'sjrion01@gmail.com', url: 'mailto:sjrion01@gmail.com', icon: IconEmail, canCopy: true },
  { name: 'LinkedIn', value: 'packmarrionlouji', url: 'https://www.linkedin.com/in/packmarrionlouji/', icon: IconLinkedIn },
  { name: 'GitHub', value: 'PackmarRionLouji', url: 'https://github.com/PackmarRionLouji', icon: IconGitHub },
  { name: 'Medium', value: 'Medium Profile', url: 'https://medium.com/', icon: IconMedium },
]

const copyFeedback = ref('')

const copyToClipboard = (text, e) => {
  e.preventDefault()
  e.stopPropagation()
  navigator.clipboard.writeText(text)
  copyFeedback.value = 'Email copied!'
  setTimeout(() => {
    copyFeedback.value = ''
  }, 2000)
}
</script>

<template>
  <div class="view-content animate-slide-up">
    <h2>Let's Talk Tech</h2>
    <p class="subtitle">Feel free to reach out for collaborations, opportunities, or just to say hello.</p>
    
    <div v-if="copyFeedback" class="copy-toast">{{ copyFeedback }}</div>

    <div class="contact-grid">
      <a 
        v-for="contact in contacts" 
        :key="contact.name"
        :href="contact.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="contact-card border-card"
      >
        <div class="icon-wrapper">
          <component :is="contact.icon" class="contact-icon" />
        </div>
        <div class="contact-details">
          <div class="title-row">
            <h3>{{ contact.name }}</h3>
          </div>
          <div class="value-row">
            <span>{{ contact.value }}</span>
            <button 
              v-if="contact.canCopy" 
              class="copy-btn-inline" 
              @click="copyToClipboard(contact.value, $event)"
              title="Copy to clipboard"
            >
              <IconCopy />
            </button>
          </div>
        </div>
      </a>
    </div>

    <button class="back-btn" @click="$router.push('/')">← Back Home</button>
  </div>
</template>

<style scoped>
.view-content {
  color: var(--color-text);
  width: 100%;
  max-width: 800px;
}

h2 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.contact-card:hover {
  background: var(--color-card-hover);
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--color-icon-bg);
  border-radius: 12px;
  color: var(--color-heading);
  transition: all 0.3s ease;
}

.contact-card:hover .icon-wrapper {
  transform: scale(1.1);
  color: var(--color-text); /* Uses theme text color logically */
}

.contact-icon {
  width: 24px;
  height: 24px;
}

.contact-details {
  display: flex;
  flex-direction: column;
}

.contact-details h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0;
  line-height: 1.2;
}

.value-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.2rem;
}

.copy-btn-inline {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-icon-bg);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-heading);
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 0;
  opacity: 0.6;
}

.copy-btn-inline:hover {
  background: var(--color-card-hover);
  border-color: var(--color-heading);
  transform: scale(1.1);
  opacity: 1;
}

.copy-btn-inline svg {
  width: 14px;
  height: 14px;
}

.contact-details span {
  font-size: 0.95rem;
  opacity: 0.7;
}

.back-btn {
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-heading);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: var(--color-card-bg);
  border-color: var(--color-heading);
  transform: translateX(-5px);
}
</style>
