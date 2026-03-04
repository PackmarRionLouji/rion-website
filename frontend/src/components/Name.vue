<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Software Engineer | B.E
    </h3>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Name',
  props: {
    msg: {
      type: String,
      required: true
    }
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
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 4.5rem;
  }
  
  h3 {
    font-size: 1.8rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>