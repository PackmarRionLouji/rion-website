<script setup>
import IconEmail from '../components/icons/IconEmail.vue'
import IconGitHub from '../components/icons/IconGitHub.vue'
import IconLinkedIn from '../components/icons/IconLinkedIn.vue'
import IconMedium from '../components/icons/IconMedium.vue'

const contacts = [
  { name: 'Email', value: 'sjrion01@gmail.com', url: 'mailto:sjrion01@gmail.com', icon: IconEmail, canCopy: true },
  { name: 'LinkedIn', value: 'packmarrionlouji', url: 'https://www.linkedin.com/in/packmarrionlouji/', icon: IconLinkedIn },
  { name: 'GitHub', value: 'PackmarRionLouji', url: 'https://github.com/PackmarRionLouji', icon: IconGitHub },
  { name: 'Medium', value: 'Medium Profile', url: 'https://medium.com/', icon: IconMedium },
]

const copyFeedback = ref('')

const handleContactClick = (contact, e) => {
  if (contact.canCopy && !e.metaKey && !e.ctrlKey) {
    e.preventDefault()
    navigator.clipboard.writeText(contact.value)
    copyFeedback.value = 'Email copied!'
    setTimeout(() => {
      copyFeedback.value = ''
    }, 2000)
  }
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
        @click="handleContactClick(contact, $event)"
      >
        <div class="icon-wrapper">
          <component :is="contact.icon" class="contact-icon" />
        </div>
        <div class="contact-details">
          <div class="title-row">
            <h3>{{ contact.name }}</h3>
            <span v-if="contact.canCopy" class="copy-hint">(Click to copy)</span>
          </div>
          <span>{{ contact.value }}</span>
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
  flex: 1;
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.contact-details h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0;
  line-height: 1.2;
}

.copy-hint {
  font-size: 0.75rem;
  opacity: 0.5;
  font-weight: 400;
  background: var(--color-card-bg);
  padding: 2px 6px;
  border-radius: 4px;
  transition: opacity 0.3s ease;
}

.contact-card:hover .copy-hint {
  opacity: 0.8;
}

.contact-details span {
  font-size: 0.95rem;
  opacity: 0.7;
  margin-top: 0.2rem;
}

.copy-toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-text);
  color: var(--color-background);
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  animation: toastIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}

@keyframes toastIn {
  from { opacity: 0; transform: translate(-50%, 1rem); }
  to { opacity: 1; transform: translate(-50%, 0); }
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
