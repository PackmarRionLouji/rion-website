<script setup>
import { ref } from 'vue'
import IconEmail from '../components/icons/IconEmail.vue'
import IconGitHub from '../components/icons/IconGitHub.vue'
import IconLinkedIn from '../components/icons/IconLinkedIn.vue'
import IconMedium from '../components/icons/IconMedium.vue'
import IconCopy from '../components/icons/IconCopy.vue'
import IconDownload from '../components/icons/IconDownload.vue'
import IconInstagram from '../components/icons/IconInstagram.vue'

const contacts = [
  { name: 'Email', value: 'sjrion01@gmail.com', url: 'mailto:sjrion01@gmail.com', icon: IconEmail, canCopy: true },
  { name: 'LinkedIn', value: 'packmarrionlouji', url: 'https://www.linkedin.com/in/packmarrionlouji/', icon: IconLinkedIn },
]

const otherPlaces = [
  { name: 'GitHub', url: 'https://github.com/PackmarRionLouji', icon: IconGitHub },
  { name: 'Medium', url: 'https://medium.com/@sjrion01', icon: IconMedium },
  { name: 'Instagram', url: 'https://www.instagram.com/rion_louji?igsh=OWJvbGR4Z2FmdGZw', icon: IconInstagram },
]

const currentView = ref('info') // 'info' or 'form'
const copyFeedback = ref('')
const form = ref({
  name: '',
  email: '',
  message: ''
})

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

    <Transition name="fade-slide" mode="out-in">
      <div v-if="currentView === 'info'" key="info" class="view-pane">
        <div class="header-section">
          <h2>Let's Talk Tech</h2>
          <p class="subtitle">
            Feel free to reach out for collaborations or just to say hello. <br/>
            <span class="location-text">📍 Chennai, India • GMT+5:30</span>
          </p>
        </div>
        
        <Transition name="toast">
          <div v-if="copyFeedback" class="copy-toast">
            <div class="toast-content">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ copyFeedback }}</span>
            </div>
          </div>
        </Transition>

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

        <div class="resume-section">
          <a href="/Resume_PackmarRionLouji.pdf" download class="resume-btn">
            <IconDownload />
            Download My Resume (PDF)
          </a>
        </div>

        <div class="other-places">
          <h4>Other Places</h4>
          <div class="other-links">
            <a v-for="place in otherPlaces" :key="place.name" :href="place.url" target="_blank" class="other-link">
              <component :is="place.icon" class="other-icon" />
              {{ place.name }}
            </a>
          </div>
        </div>

        <button class="go-to-form-btn" @click="currentView = 'form'">
          <span>Send a Message</span>
          <span class="arrow">→</span>
        </button>
      </div>

      <div v-else key="form" class="view-pane">
        <button class="back-to-info" @click="currentView = 'info'">
          <span class="arrow">←</span>
          <span>Back to Info</span>
        </button>

        <div class="header-section mini">
          <h2>Get in Touch</h2>
          <p class="subtitle">I'll get back to you as soon as possible.</p>
        </div>

        <div class="form-section-standalone">
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="John Doe" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required placeholder="john@example.com" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <div class="textarea-wrapper">
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  placeholder="What's on your mind?..." 
                  rows="6"
                  maxlength="1000"
                ></textarea>
                <div class="char-count">
                  {{ form.message.length }}/1000
                </div>
              </div>
            </div>
            <button type="submit" class="submit-btn" disabled title="Coming soon">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.view-content {
  color: var(--color-text);
  width: 100%;
  max-width: 800px;
}

.nav-header {
  margin-bottom: 2rem;
}

.back-btn-premium {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.4rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: var(--color-heading);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  letter-spacing: 0.02em;
}

.back-btn-premium .btn-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  z-index: 2;
}

.back-btn-premium .arrow {
  font-size: 1.2rem;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.back-btn-premium:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(var(--color-heading-rgb), 0.5);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 15px 30px -10px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(var(--color-heading-rgb), 0.1);
}

.back-btn-premium:hover .arrow {
  transform: translateX(-6px);
}

.back-btn-premium .btn-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 400%;
  background: radial-gradient(circle, rgba(var(--color-heading-rgb), 0.2) 0%, transparent 60%);
  transform: translate(-50%, -50%) rotate(45deg) translateY(100%);
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  pointer-events: none;
  z-index: 1;
}

.back-btn-premium:hover .btn-glow {
  transform: translate(-50%, -50%) rotate(45deg) translateY(0);
}

/* Background Aurora Effects */
.view-content {
  position: relative;
}

.aurora-glow {
  position: fixed;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
  pointer-events: none;
  z-index: -1;
  animation: float 20s infinite alternate ease-in-out;
}

.glow-1 {
  top: -100px;
  right: -100px;
  background: var(--color-heading);
}

.glow-2 {
  bottom: 100px;
  left: -200px;
  background: #3b82f6;
  opacity: 0.1;
  animation-delay: -5s;
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, 60px) scale(1.1); }
  100% { transform: translate(-20px, -30px) scale(1.2); }
}

.header-section {
  margin-bottom: 3.5rem;
}

.back-link {
  display: none;
}

.availability-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.8rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 100px;
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.availability-tag.academic {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  position: relative;
}

.pulse-dot.academic {
  background-color: #3b82f6;
}

.pulse-dot::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.pulse-dot.academic::after {
  background-color: #3b82f6;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  70% { transform: scale(3); opacity: 0; }
  100% { transform: scale(1); opacity: 0; }
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

.location-text {
  font-size: 0.9rem;
  opacity: 0.6;
  margin-top: 0.5rem;
  display: inline-block;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
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

.resume-section {
  margin-bottom: 4rem;
}

.resume-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1.2rem;
  background: var(--color-heading);
  color: var(--color-background);
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.resume-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  filter: brightness(1.1);
}

.go-to-form-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;
  padding: 2rem;
  background: rgba(var(--color-heading-rgb), 0.03);
  border: 1px dashed rgba(var(--color-heading-rgb), 0.2);
  border-radius: 24px;
  color: var(--color-heading);
  font-size: 1.4rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 3rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  letter-spacing: -0.01em;
}

.go-to-form-btn:hover {
  background: rgba(var(--color-heading-rgb), 0.08);
  border-color: var(--color-heading);
  border-style: solid;
  transform: translateY(-6px) scale(1.01);
  box-shadow: 
    0 20px 40px -10px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(var(--color-heading-rgb), 0.15);
}

.go-to-form-btn .arrow {
  font-size: 1.6rem;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.go-to-form-btn:hover .arrow {
  transform: translateX(8px);
}

.back-to-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  color: var(--color-heading);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2.5rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.back-to-info:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(var(--color-heading-rgb), 0.4);
  transform: translateX(-4px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.back-to-info .arrow {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.back-to-info:hover .arrow {
  transform: translateX(-3px);
}

.other-places {
  margin-bottom: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.other-places h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.5;
  margin-bottom: 1.5rem;
}

.other-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.other-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  text-decoration: none;
  color: var(--color-text);
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.other-link:hover {
  background: var(--color-card-hover);
  border-color: var(--color-heading);
  transform: translateY(-2px);
}

.other-icon {
  width: 18px;
  height: 18px;
  opacity: 0.8;
}

.form-section {
  margin-bottom: 3rem;
  padding: 2.5rem;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  opacity: 0.8;
}

.section-title {
  margin-bottom: 2rem;
}

.section-title h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.5;
  margin-bottom: 0.5rem;
}

.section-title .divider {
  width: 40px;
  height: 3px;
  background: var(--color-heading);
  border-radius: 10px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-heading);
  opacity: 0.8;
}

.form-group input,
.form-group textarea {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1rem;
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group textarea {
  width: 100%;
}

.textarea-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

.char-count {
  position: absolute;
  bottom: 0.8rem;
  right: 1rem;
  font-size: 0.75rem;
  opacity: 0.5;
  pointer-events: none;
}

.submit-btn {
  background: var(--color-heading);
  color: var(--color-background);
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: not-allowed;
  opacity: 0.5;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-btn {
  display: none;
}
</style>
