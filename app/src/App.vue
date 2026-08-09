<template>
  <div class="app">
    <Navigation />

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>Plan created with care • November 2026</p>
    </footer>
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
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
</style>
