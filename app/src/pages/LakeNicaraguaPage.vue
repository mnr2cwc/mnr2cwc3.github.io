<template>
  <div class="location-page">
    <div class="location-hero">
      <img :src="location.images[0]" :alt="location.name" class="hero-image" />
      <div class="hero-overlay">
        <h1>{{ location.name }}</h1>
        <p class="days-info">Days 5–7 of your trip</p>
      </div>
    </div>

    <div class="location-content">
      <section class="description-section">
        <h2>About Lake Nicaragua</h2>
        <p class="short-desc">{{ location.description }}</p>
        <p class="long-desc">{{ location.longDescription }}</p>
      </section>

      <!-- <section v-if="location.images.length > 1" class="gallery-section">
        <h2>Experience</h2>
        <div class="gallery">
          <img
            v-for="(image, idx) in location.images.slice(1)"
            :key="idx"
            :src="image"
            :alt="`${location.name} - Photo ${idx + 2}`"
            class="gallery-image"
          />
        </div>
      </section> -->

      <section class="activities-section">
        <h2>Things to Do</h2>
        <div class="activities-grid">
          <div
            v-for="activity in location.activities"
            :key="activity.name"
            class="activity-card"
          >
            <h3>{{ activity.name }}</h3>
            <p>{{ activity.description }}</p>
            <img
              v-if="activity.image"
              :src="activity.image"
              :alt="`${activity.name} image`"
              class="activity-image"
            />
            <a
              v-if="activity.link"
              :href="activity.link"
              target="_blank"
              rel="noopener noreferrer"
              class="activity-link"
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  import { locations } from "../data/itinerary.js";

  const location = locations["lake-nicaragua"];
</script>

<style scoped>
  .location-page {
    max-width: 1000px;
    margin: 0 auto;
  }

  .location-hero {
    position: relative;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    margin: 2rem 1rem;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(45, 95, 79, 0.7) 0%,
      rgba(26, 77, 62, 0.7) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    color: white;
  }

  .hero-overlay h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .days-info {
    margin: 0;
    font-size: 1.1rem;
    opacity: 0.95;
  }

  .location-content {
    padding: 2rem 1rem;
  }

  .description-section {
    margin-bottom: 3rem;
  }

  .description-section h2 {
    font-size: 1.8rem;
    color: var(--color-primary);
    margin: 0 0 1rem 0;
  }

  .short-desc {
    font-size: 1.1rem;
    color: var(--color-accent);
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .long-desc {
    font-size: 1rem;
    line-height: 1.8;
    color: #555;
  }

  .gallery-section {
    margin-bottom: 3rem;
  }

  .gallery-section h2 {
    font-size: 1.8rem;
    color: var(--color-primary);
    margin: 0 0 1.5rem 0;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .gallery-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  .gallery-image:hover {
    transform: translateY(-4px);
  }

  .activities-section {
    margin-bottom: 3rem;
  }

  .activities-section h2 {
    font-size: 1.8rem;
    color: var(--color-primary);
    margin: 0 0 1.5rem 0;
  }

  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .activity-card {
    background: white;
    border: 2px solid var(--color-secondary);
    border-radius: 8px;
    padding: 1.5rem;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .activity-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .activity-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    color: var(--color-primary);
  }

  .activity-card p {
    margin: 0 0 1rem 0;
    color: #555;
    font-size: 0.95rem;
  }

  .activity-link {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background: var(--color-accent);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: background 0.2s ease;
  }

  .activity-link:hover {
    background: #d63d55;
  }

  .activity-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
    margin: 0.75rem 0;
  }

  @media (max-width: 768px) {
    .location-hero {
      height: 300px;
      margin: 1rem;
    }

    .hero-overlay h1 {
      font-size: 1.8rem;
    }

    .description-section h2,
    .gallery-section h2,
    .activities-section h2 {
      font-size: 1.4rem;
    }

    .gallery {
      grid-template-columns: 1fr;
    }

    .activities-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
