<template>
  <section class="location-options">
    <h2>Activity Ideas by Location</h2>
    <div class="options-grid">
      <div
        v-for="location in locationOptions"
        :key="location.location"
        class="location-card"
      >
        <h3 class="location-title">{{ location.location }}</h3>
        <p class="location-blurb">{{ location.blurb }}</p>
        <div class="activities">
          <a
            v-for="activity in location.activities"
            :key="activity.name"
            :href="activity.link || '#'"
            :target="activity.link ? '_blank' : null"
            :rel="activity.link ? 'noopener noreferrer' : null"
            class="activity-chip"
            :class="{ 'no-link': !activity.link }"
          >
            {{ activity.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { locationOptions } from '../data/itinerary.js'
</script>

<style scoped>
.location-options {
  margin-top: 4rem;
}

.location-options h2 {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin: 0 0 2rem 0;
  font-weight: 700;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.location-card {
  background: white;
  border: 2px solid var(--color-secondary);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.location-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.location-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  color: var(--color-primary);
  font-weight: 700;
}

.location-blurb {
  margin: 0 0 1.5rem 0;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}

.activities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.activity-chip {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.2s ease;
}

.activity-chip:hover {
  background: #1a4d3e;
}

.activity-chip.no-link {
  background: #ccc;
  cursor: default;
}

.activity-chip.no-link:hover {
  background: #ccc;
}

@media (max-width: 768px) {
  .options-grid {
    grid-template-columns: 1fr;
  }

  .location-title {
    font-size: 1.1rem;
  }
}
</style>
