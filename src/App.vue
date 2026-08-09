<template>
  <div class="app">
    <header class="header">
      <h1>Nicaragua Trip 2026</h1>
      <p class="date-range">November 7–15, 2026</p>
    </header>

    <main class="main">
      <TripTimeline />
      <LocationOptions />
    </main>

    <footer class="footer">
      <p>Plan created with care • November 2026</p>
    </footer>
  </div>
</template>

<script setup>
import TripTimeline from './components/TripTimeline.vue'
import LocationOptions from './components/LocationOptions.vue'
</script>

<style scoped>
:root {
  --color-primary: #2d5f4f;
  --color-secondary: #d4a574;
  --color-accent: #e8536a;
  --color-light: #f5f5f0;
  --color-text: #2c2c2c;
  --color-border: #e0e0d9;
}

* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: var(--color-light);
  color: var(--color-text);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(135deg, var(--color-primary) 0%, #1a4d3e 100%);
  color: white;
  padding: 3rem 1rem;
  text-align: center;
}

.header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.header .date-range {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.95;
}

.main {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
}

.footer {
  background: #fafaf7;
  border-top: 1px solid var(--color-border);
  padding: 2rem 1rem;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

.footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }

  .header {
    padding: 2rem 1rem;
  }

  .main {
    padding: 1.5rem 1rem;
  }
}
</style>
