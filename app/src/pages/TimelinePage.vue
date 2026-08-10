<template>
  <div class="timeline-page">
    <!-- Fixed scrapbook collage behind the page: all the general photos mounted
         as prints on the cream "paper", scattered at slight angles like the
         reference layout. position: fixed keeps it still while content scrolls.
         A cream veil (::after) keeps headings that sit directly on the page
         readable. Decorative, so aria-hidden. -->
    <div class="scrapbook-backdrop" aria-hidden="true">
      <div
        v-for="photo in backdropPhotos"
        :key="photo"
        class="backdrop-photo"
      >
        <img :src="photo" alt="" decoding="async" />
      </div>
    </div>

    <section class="map-section">
      <h2>Trip Map</h2>
      <NicaraguaMap />
    </section>

    <section class="flights-section">
      <h2>Find Flights</h2>
      <FlightSearch />
    </section>

    <section class="timeline">
      <h2>Itinerary</h2>
      <div class="timeline-container">
        <div
          v-for="group in groupedDays"
          :key="group.startDay"
          class="timeline-item"
        >
          <div class="timeline-marker">
            <span class="day-number" :class="{ 'day-range': group.days.length > 1 }">
              {{ group.days.length > 1 ? `${group.startDay}–${group.endDay}` : group.startDay }}
            </span>
          </div>
          <div class="timeline-content">
            <div class="day-header">
              <h3 class="date">
                {{ group.days.length > 1 ? `${group.startDate} – ${group.endDate}` : group.startDate }}
              </h3>
              <span class="location-badge">{{ group.location }}</span>
            </div>
            <img
              v-if="group.thumbnail"
              :src="group.thumbnail"
              :alt="group.location"
              class="group-thumbnail"
              loading="lazy"
            />
            <div class="day-list">
              <div
                v-for="day in group.days"
                :key="day.day"
                class="day-entry"
                :class="{ 'travel-day': isTravelDay(day) }"
              >
                <span v-if="group.days.length > 1" class="day-entry-label">
                  Day {{ day.day }} &middot; {{ day.date }}
                </span>
                <div v-if="day.activity" class="activity">
                  <strong>{{ day.activity }}</strong>
                </div>
                <div v-else class="notes empty-note">Free day &mdash; open to explore</div>
                <div v-if="day.notes" class="notes">
                  {{ day.notes }}
                </div>
                <a
                  v-if="day.link"
                  :href="day.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-btn"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { days, locations } from '../data/itinerary.js'
import NicaraguaMap from '../components/NicaraguaMap.vue'
import FlightSearch from '../components/FlightSearch.vue'
import bgChristStatue from '../images/general/adobestock-171100762.webp'
import bgKayak from '../images/general/kajaktour-granada-1024x1536-1.jpg'
import bgBay from '../images/general/San-Juan-del-sur-Nicaragua.jpg'
import bgIsletasWide from '../images/general/Isletas-de-granada-6.jpg'
import bgVolcanoCrater from '../images/general/volcano-main-ss-ps-200228_hpMain.jpg'
import bgSurf from '../images/general/DSC_0314.webp'
import bgCerroNegro from '../images/general/Tour-Cerro-Negro.jpg'
import bgIsletas from '../images/general/Isletas-de-Granada-.jpg'

// Order matters — each photo's position/angle is set by :nth-child in the CSS
// below (rather than inline styles, so the media queries can override them).
// Photos keep their natural aspect ratio, mixing landscape and portrait the way
// a real scrapbook page does.
const backdropPhotos = [
  bgChristStatue,
  bgKayak,
  bgBay,
  bgIsletasWide,
  bgVolcanoCrater,
  bgSurf,
  bgCerroNegro,
  bgIsletas,
]

const locationKeyForDay = (dayNumber) =>
  Object.keys(locations).find((key) => locations[key].days?.includes(dayNumber)) ?? null

const isTravelDay = (day) => day.activity?.toLowerCase().includes('fly') ?? false

const groupedDays = computed(() => {
  const groups = []
  for (const day of days) {
    const current = groups[groups.length - 1]
    if (current && current.location === day.location) {
      current.days.push(day)
    } else {
      groups.push({ location: day.location, days: [day] })
    }
  }

  return groups.map((group) => {
    const locationKey = locationKeyForDay(group.days[0].day)
    return {
      ...group,
      startDay: group.days[0].day,
      endDay: group.days[group.days.length - 1].day,
      startDate: group.days[0].date,
      endDate: group.days[group.days.length - 1].date,
      thumbnail: locationKey ? locations[locationKey].images?.[0] ?? null : null,
    }
  })
})
</script>

<style scoped>
.timeline-page {
  padding: 2rem 1rem;
  max-width: 900px;
  margin: 0 auto;
}

/* --- Fixed scrapbook backdrop ----------------------------------------------
   Pinned to the viewport and painted behind the in-flow content via a negative
   z-index, so the collage holds still while the itinerary scrolls over it. */
.scrapbook-backdrop {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

/* Cream veil over the collage. The section headings ("Trip Map", "Itinerary")
   sit directly on the page with no card behind them, so the photos have to be
   knocked back far enough for that green to stay legible. */
.scrapbook-backdrop::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(245, 245, 240, 0.76);
}

.backdrop-photo {
  position: absolute;
  background: #fff;
  padding: 8px 8px 20px;
  border-radius: 2px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.14),
    0 12px 26px rgba(0, 0, 0, 0.1);
}

.backdrop-photo img {
  display: block;
  width: 100%;
  height: auto;
}

/* Scattered placement — angles stay under ~3deg so it reads as arranged rather
   than tossed. Widths are in vw so the collage scales with the viewport. */
.backdrop-photo:nth-child(1) {
  top: -3%;
  left: -4%;
  width: 33vw;
  transform: rotate(-3deg);
}

.backdrop-photo:nth-child(2) {
  top: 2%;
  left: 29%;
  width: 16vw;
  transform: rotate(2.5deg);
}

.backdrop-photo:nth-child(3) {
  top: -5%;
  left: 48%;
  width: 31vw;
  transform: rotate(2deg);
}

.backdrop-photo:nth-child(4) {
  top: 8%;
  left: 77%;
  width: 27vw;
  transform: rotate(-2.5deg);
}

.backdrop-photo:nth-child(5) {
  top: 38%;
  left: -5%;
  width: 29vw;
  transform: rotate(2.5deg);
}

.backdrop-photo:nth-child(6) {
  top: 55%;
  left: 21%;
  width: 26vw;
  transform: rotate(-2deg);
}

.backdrop-photo:nth-child(7) {
  top: 40%;
  left: 47%;
  width: 24vw;
  transform: rotate(-3deg);
}

.backdrop-photo:nth-child(8) {
  top: 58%;
  left: 70%;
  width: 30vw;
  transform: rotate(2deg);
}

.map-section {
  margin-bottom: 4rem;
}

.map-section h2 {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin: 0 0 1.5rem 0;
  font-weight: 700;
}

.flights-section {
  margin-bottom: 4rem;
}

.flights-section h2 {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin: 0 0 1.5rem 0;
  font-weight: 700;
}

.timeline {
  margin-bottom: 4rem;
}

.timeline h2 {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin: 0 0 2rem 0;
  font-weight: 700;
}

.timeline-container {
  position: relative;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.timeline-item {
  display: flex;
  margin-bottom: 2.5rem;
  position: relative;
}

.timeline-marker {
  position: relative;
  z-index: 1;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.day-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.day-number.day-range {
  width: auto;
  min-width: 40px;
  padding: 0 0.6rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.group-thumbnail {
  display: block;
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.day-list {
  display: flex;
  flex-direction: column;
}

.day-entry + .day-entry {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--color-border);
}

.day-entry-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-secondary);
  margin-bottom: 0.35rem;
}

.empty-note {
  color: #888;
}

.day-entry.travel-day {
  padding-left: 0.8rem;
  border-left: 3px solid var(--color-accent);
}

.timeline-content {
  /* Warm paper rather than pure white, and fully opaque so the collage behind
     it never interferes with the itinerary text. */
  background: #faf8f2;
  padding: 1.5rem;
  border-radius: 8px;
  flex: 1;
  border: 1px solid var(--color-border);
}

.day-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.date {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
}

.location-badge {
  display: inline-block;
  background: var(--color-secondary);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
}

.activity {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.notes {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #555;
  font-style: italic;
}

.link-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: var(--color-accent);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s ease;
}

.link-btn:hover {
  background: #d63d55;
}

@media (max-width: 640px) {
  .timeline-container::before {
    left: 12px;
  }

  .timeline-marker {
    margin-right: 1rem;
  }

  .day-number {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  .timeline-content {
    padding: 1rem;
  }

  .day-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .location-badge {
    align-self: flex-start;
  }

  .date {
    font-size: 1rem;
  }

  /* At phone width the vw-based prints get too small to read as photos, so the
     collage becomes a taller stack of larger ones and drops the two that would
     otherwise sit behind content anyway. */
  .backdrop-photo {
    padding: 6px 6px 16px;
  }

  .backdrop-photo:nth-child(1) {
    top: -2%;
    left: -8%;
    width: 64vw;
  }

  .backdrop-photo:nth-child(2) {
    top: 10%;
    left: 56%;
    width: 38vw;
  }

  .backdrop-photo:nth-child(3) {
    top: 34%;
    left: -10%;
    width: 60vw;
  }

  .backdrop-photo:nth-child(4) {
    top: 44%;
    left: 52%;
    width: 52vw;
  }

  .backdrop-photo:nth-child(5) {
    top: 68%;
    left: -6%;
    width: 58vw;
  }

  .backdrop-photo:nth-child(6) {
    top: 80%;
    left: 50%;
    width: 54vw;
  }

  .backdrop-photo:nth-child(7),
  .backdrop-photo:nth-child(8) {
    display: none;
  }
}
</style>
