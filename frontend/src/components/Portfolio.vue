<script setup>
import { ref, onMounted } from 'vue'
import PortfolioSection from './PortfolioSection.vue'
import IconAbout from './icons/IconAbout.vue'
import IconEducation from './icons/IconEducation.vue'
import IconExperience from './icons/IconExperience.vue'
import IconSkills from './icons/IconSkills.vue'
import IconProjects from './icons/IconProjects.vue'
import IconContact from './icons/IconContact.vue'
import IconExtraCurricular from './icons/IconExtraCurricular.vue'

const showList = ref(false)

const items = [
  { id: 1, component: IconAbout, heading: 'My Story & Passions' },
  { id: 2, component: IconEducation, heading: 'Academic Background' },
  { id: 3, component: IconExperience, heading: 'Professional Journey' },
  { id: 4, component: IconSkills, heading: 'Technical Expertise' },
  { id: 5, component: IconProjects, heading: 'Featured Work' },
  { id: 6, component: IconExtraCurricular, heading: 'Beyond the Code' },
  { id: 7, component: IconContact, heading: "Let's Connect" },
]

onMounted(() => {
  setTimeout(() => {
    showList.value = true
  }, 100)
})
</script>

<template>
  <div class="portfolio">
    <TransitionGroup 
      name="stagger" 
      tag="div" 
      class="portfolio-list"
    >
      <PortfolioSection 
        v-for="(item, index) in items" 
        :key="item.id"
        v-show="showList"
        :style="{ transitionDelay: `${index * 150}ms` }"
      >
        <template #icon>
          <component :is="item.component" />
        </template>
        <template #heading>{{ item.heading }}</template>
      </PortfolioSection>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.portfolio {
  color: var(--color-text);
  width: 100%;
}

.portfolio-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
}
</style>

