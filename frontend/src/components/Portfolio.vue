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
import IconCertifications from './icons/IconCertifications.vue'
import IconAwards from './icons/IconAwards.vue'

const items = [
  { id: 1, component: IconAbout, heading: 'My Story & Passions', route: '/about' },
  { id: 2, component: IconEducation, heading: 'Academic Background', route: '/education' },
  { id: 3, component: IconExperience, heading: 'Professional Journey', route: '/experience' },
  { id: 4, component: IconSkills, heading: 'Technical Expertise', route: '/skills' },
  { id: 5, component: IconCertifications, heading: 'Certifications', route: '/certifications' },
  { id: 6, component: IconProjects, heading: 'Featured Work', route: '/projects' },
  { id: 7, component: IconAwards, heading: 'Awards & Recognitions', route: '/awards' },
  { id: 8, component: IconExtraCurricular, heading: 'Beyond the Code', route: '/extra-curricular' },
  { id: 9, component: IconContact, heading: "Let's Connect", route: '/contact' },
]

</script>

<template>
  <div class="portfolio">
    <div class="portfolio-list">
      <PortfolioSection 
        v-for="(item, index) in items" 
        :key="item.id"
        @click="$router.push(item.route)"
        class="clickable-section animate-slide-up"
        :style="{ animationDelay: `${index * 0.15}s` }"
      >
        <template #icon>
          <component :is="item.component" />
        </template>
        <template #heading>{{ item.heading }}</template>
      </PortfolioSection>
    </div>
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

.clickable-section {
  cursor: pointer;
}
</style>

