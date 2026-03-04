<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Software Engineer | B.E
    </h3>
    <div class="social-links">
      <a href="mailto:sjrion01@gmail.com" target="_blank" rel="noopener noreferrer" class="social-icon" title="Email">
        <IconEmail />
      </a>
      <a href="https://www.linkedin.com/in/packmarrionlouji/" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
        <IconLinkedIn />
      </a>
      <a href="https://github.com/PackmarRionLouji" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">
        <IconGitHub />
      </a>
      <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" class="social-icon" title="Medium">
        <IconMedium />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconEmail from './icons/IconEmail.vue'
import IconGitHub from './icons/IconGitHub.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'
import IconMedium from './icons/IconMedium.vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.greetings {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-heading);
  background: linear-gradient(135deg, var(--color-heading) 0%, var(--color-text) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h3 {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-text);
  opacity: 0.8;
  letter-spacing: -0.01em;
}

.greetings h1,
.greetings h3,
.social-links {
  text-align: center;
}

.social-links {
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
  justify-content: center;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-icon-bg);
  color: var(--color-heading);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
}

.social-icon svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  background: var(--color-card-hover);
  border-color: var(--color-border);
  color: var(--color-text);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.social-icon:hover svg {
  transform: scale(1.15);
}

@media (min-width: 1024px) {
  h1 {
    font-size: 4.5rem;
  }
  
  h3 {
    font-size: 1.8rem;
  }

  .greetings h1,
  .greetings h3,
  .social-links {
    text-align: left;
    justify-content: flex-start;
  }
}
</style>