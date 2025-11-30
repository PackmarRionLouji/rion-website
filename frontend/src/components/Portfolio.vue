<script setup>
import PortfolioSection from './PortfolioSection.vue'
import IconAbout from './icons/IconAbout.vue'
import IconEducation from './icons/IconEducation.vue'
import IconExperience from './icons/IconExperience.vue'
import IconSkills from './icons/IconSkills.vue'
import IconProjects from './icons/IconProjects.vue'
import IconContact from './icons/IconContact.vue'
</script>

<template>
  <div class="portfolio">
  <PortfolioSection>
    <template #icon>
      <IconAbout />
    </template>
    <template #heading>About me</template>
  </PortfolioSection>

  <PortfolioSection>
    <template #icon>
      <IconEducation />
    </template>
    <template #heading>Education</template>
  </PortfolioSection>

  <PortfolioSection>
    <template #icon>
      <IconExperience />
    </template>
    <template #heading>Experience</template>
  </PortfolioSection>

  <PortfolioSection>
    <template #icon>
      <IconSkills />
    </template>
    <template #heading>Skills</template>
  </PortfolioSection>

  <PortfolioSection>
    <template #icon>
      <IconProjects />
    </template>
    <template #heading>Projects</template>
  </PortfolioSection>

  <PortfolioSection>
    <template #icon>
      <IconContact />
    </template>
    <template #heading>Contact me</template>
  </PortfolioSection>
  </div>
</template>

<style scoped>
.portfolio {
  color: var(--color-text);
}
</style>
