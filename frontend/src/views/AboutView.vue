<template>
  <div class="about-view">

    <div class="view-content">
      <div class="about-container">
        <!-- Section 1: The Hook -->
        <section class="story-section hero-section animate-fade-in">
          <div class="section-glass"></div>
          <div class="content-wrapper">
            <h2 class="hero-title spotlight-text">The <span class="highlight">Creative</span> Engineer</h2>
            <p class="hero-subtitle spotlight-text">
              Where the precision of <span class="text-logic">logic</span> meets the harmony of <span class="text-harmony">sound</span>.
            </p>
          </div>
        </section>

        <!-- Section 2: Professional Journey -->
        <section class="story-section journey-section" v-observe-visibility>
          <div class="story-grid">
            <div class="story-text">
              <span class="section-label">Technical Expertise</span>
              <h3>Engineering for Impact</h3>
              <p>
                Professional experience spans the full technical stack, with a focus on building resilient systems at **Pando**. This includes architecting autonomous **email agents**, developing responsive **frontend** interfaces, and engineering scalable **backend** services.
              </p>
              <p>
                Expertise extends to robust **database management** and implementing proactive **security architecture**, including SQL injection prevention and data sanitization for enterprise-grade reliability.
              </p>
            </div>
            <div class="story-visual">
              <div class="visual-box tech-box">
                <div class="code-snippet">
                  <code>const solution = architecture + security;</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 3: Creative Soul -->
        <section class="story-section creative-section" v-observe-visibility>
          <div class="story-grid reverse">
            <div class="story-text">
              <span class="section-label">Aesthetic Vision</span>
              <h3>The Audio Connection</h3>
              <p>
                I believe code is like music—it needs to be clear, in sync, and free of "noise." As a **Certified Sound Engineering** professional and keyboardist, I bring an auditory perspective to technical problem-solving. Whether I'm mixing a track or refactoring a module, the goal is the same: <em>perfect harmony</em>.
              </p>
              <div class="hobby-tags">
                <span class="hobby-tag">🔊 Sound Design</span>
                <span class="hobby-tag">🎹 Keyboard</span>
                <span class="hobby-tag">🎧 Mixing</span>
              </div>
            </div>
            <div class="story-visual">
              <div class="visual-box music-box">
                <div class="wave-lines">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 4: The Path Ahead -->
        <section class="story-section future-section" v-observe-visibility>
          <div class="section-glass"></div>
          <div class="content-wrapper center">
            <span class="section-label">Future Goals</span>
            <h3>Academic & Research Vision</h3>
            <p class="future-text-refined">
              Goal is to gain deep expertise in **Medical AI**, **Machine Learning**, and **Research Methodology**. With a strong foundation in Linear Algebra, PDEs, Signal Processing, and Robotics, my exploration of AI’s potential is rooted in both mathematics and real-world healthcare and financial domains.
            </p>
            <p class="future-text-refined goals-impact">
              The mission is to contribute to human-centric healthcare innovations, where intelligent systems support clinical expertise and transform patient experiences through data-driven precision.
            </p>
            <div class="action-footer">
              <button class="contact-trigger" @click="$router.push('/contact')">Let's Build Something Meaningful</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// Visibility observer directive logic for scroll animations
const vObserveVisibility = {
  mounted: (el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });
    observer.observe(el);
  }
}
</script>

<style scoped>
.view-content {
  display: contents;
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.story-section {
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.story-section.is-visible, .story-section.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}

.section-glass {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(15px);
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 0;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  padding: 5rem 4rem;
}

.content-wrapper.center {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 1rem;
  line-height: 1;
}

.hero-subtitle {
  font-size: 1.8rem;
  opacity: 0.8;
  font-weight: 400;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-logic { color: #3b82f6; font-weight: 600; }
.text-harmony { color: #fbbf24; font-weight: 600; }

.section-label {
  display: inline-block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-border);
  margin-bottom: 1.5rem;
  font-weight: 700;
}

h3 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--color-heading);
}

p {
  font-size: 1.25rem;
  line-height: 1.7;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-grid.reverse {
  direction: rtl;
}

.story-grid.reverse .story-text {
  direction: ltr;
}

.visual-box {
  width: 100%;
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.tech-box { border-color: rgba(59, 130, 246, 0.3); }
.music-box { border-color: rgba(251, 191, 36, 0.3); }

.code-snippet {
  background: #1e1e1e;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.wave-lines {
  display: flex;
  gap: 8px;
  align-items: center;
}

.wave-lines span {
  width: 6px;
  height: 40px;
  background: #fbbf24;
  border-radius: 10px;
  animation: wave 1.2s infinite ease-in-out;
}

.wave-lines span:nth-child(2) { height: 80px; animation-delay: 0.2s; }
.wave-lines span:nth-child(3) { height: 120px; animation-delay: 0.4s; }
.wave-lines span:nth-child(4) { height: 60px; animation-delay: 0.1s; }
.wave-lines span:nth-child(5) { height: 90px; animation-delay: 0.3s; }

@keyframes wave {
  0%, 100% { transform: scaleY(0.5); opacity: 0.5; }
  50% { transform: scaleY(1); opacity: 1; }
}

.stat-group {
  display: flex;
  gap: 3rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-val {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-heading);
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hobby-tags {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hobby-tag {
  padding: 0.6rem 1.2rem;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 100px;
  color: #fbbf24;
  font-weight: 600;
}

.future-text-refined {
  font-size: 1.4rem;
  font-weight: 300;
  max-width: 800px;
  margin: 0 auto 1.5rem;
  line-height: 1.6;
}

.goals-impact {
  font-size: 1.2rem;
  opacity: 0.7;
  font-style: italic;
  font-weight: 400;
}

.contact-trigger {
  margin-top: 1rem;
  padding: 1.2rem 3rem;
  background: white;
  color: black;
  border: none;
  border-radius: 100px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.contact-trigger:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
}


@media (max-width: 968px) {
  .hero-title { font-size: 3.5rem; }
  .story-grid { grid-template-columns: 1fr; gap: 3rem; }
  .story-grid.reverse { direction: ltr; }
  .content-wrapper { padding: 3rem 2rem; }
  h3 { font-size: 2.22rem; }
}
</style>
