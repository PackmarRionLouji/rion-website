import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../components/Portfolio.vue';

const routes = [
  { path: '/', name: 'Portfolio', component: Portfolio },
  { path: '/about', name: 'About', component: () => import('../views/AboutView.vue') },
  { path: '/education', name: 'Education', component: () => import('../views/EducationView.vue') },
  { path: '/experience', name: 'Experience', component: () => import('../views/ExperienceView.vue') },
  { path: '/skills', name: 'Skills', component: () => import('../views/SkillsView.vue') },
  { path: '/certifications', name: 'Certifications', component: () => import('../views/CertificationsView.vue') },
  { path: '/projects', name: 'Projects', component: () => import('../views/ProjectsView.vue') },
  { path: '/awards', name: 'Awards', component: () => import('../views/AwardsView.vue') },
  { path: '/extra-curricular', name: 'ExtraCurricular', component: () => import('../views/ExtraCurricularView.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router