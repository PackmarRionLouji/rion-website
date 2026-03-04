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
  { name: 'Medium', url: 'https://medium.com/', icon: IconMedium },
  { name: 'Instagram', url: 'https://www.instagram.com/rion_louji?igsh=OWJvbGR4Z2FmdGZw', icon: IconInstagram },
]

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const handleFormSubmit = async () => {
  isSubmitting.value = true
  submitError.value = false
  
  try {
    const response = await fetch('https://formspree.io/f/sjrion01@gmail.com', { // Formspree will handle forwarding to this email
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      })
    })

    if (response.ok) {
      submitSuccess.value = true
      form.value = { name: '', email: '', message: '' }
      setTimeout(() => {
        submitSuccess.value = false
      }, 5000)
    } else {
      submitError.value = true
    }
  } catch (error) {
    submitError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="view-content animate-slide-up">
    <div class="header-section">
      <div class="availability-tag academic">
        <span class="pulse-dot academic"></span>
        MS Admitted • Preparing for Visa
      </div>
      <h2>Let's Talk Tech</h2>
      <p class="subtitle">
        Feel free to reach out for collaborations or just to say hello. <br/>
        <span class="location-text">📍 Chennai, India • GMT+5:30</span>
      </p>
    </div>
    
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

    <!-- Contact Form Section -->
    <div class="form-section">
      <div class="section-title">
        <h4>Send a Message</h4>
        <div class="divider"></div>
      </div>
      
      <form v-if="!submitSuccess" @submit.prevent="handleFormSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" v-model="form.name" required placeholder="John Doe" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" v-model="form.email" required placeholder="john@example.com" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <div class="textarea-wrapper">
            <textarea 
              id="message" 
              name="message"
              v-model="form.message" 
              required 
              placeholder="Your message here..." 
              rows="5"
              maxlength="1000"
            ></textarea>
            <div class="char-count" :class="{ 'near-limit': form.message.length > 900 }">
              {{ form.message.length }}/1000
            </div>
          </div>
        </div>
        <div v-if="submitError" class="error-notification">
          Something went wrong. Please try again or use direct email.
        </div>
        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Send Message 🚀</span>
          <span v-else class="loader"></span>
        </button>
      </form>

      <div v-else class="success-message">
        <div class="check-icon">✓</div>
        <h3>Message Sent!</h3>
        <p>Thanks for reaching out. I'll get back to you soon.</p>
        <button @click="submitSuccess = false" class="reset-btn">Send another message</button>
      </div>
    </div>

    <!-- Resume Section -->
    <div class="resume-section">
      <a href="/Resume_PackmarRionLouji.pdf" download class="resume-btn">
        <IconDownload />
        Download My Resume (PDF)
      </a>
    </div>

    <!-- Other Places Section -->
    <div class="other-places">
      <h4>Other Places</h4>
      <div class="other-links">
        <a v-for="place in otherPlaces" :key="place.name" :href="place.url" target="_blank" class="other-link">
          <component :is="place.icon" class="other-icon" />
          {{ place.name }}
        </a>
      </div>
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

.header-section {
  margin-bottom: 3rem;
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

.form-section {
  margin-bottom: 4rem;
  padding: 2.5rem;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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
  transition: all 0.3s ease;
}

.error-notification {
  color: #ef4444;
  font-size: 0.9rem;
  padding: 0.8rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 8px;
  text-align: center;
}

.submit-btn {
  background: var(--color-heading);
  color: var(--color-background);
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  filter: brightness(1.1);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loader {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--color-background);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.success-message {
  text-align: center;
  padding: 1rem 0;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.check-icon {
  width: 60px;
  height: 60px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
}

.success-message h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

.success-message p {
  opacity: 0.7;
  margin-bottom: 2rem;
}

.reset-btn {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background: var(--color-card-hover);
  border-color: var(--color-heading);
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
