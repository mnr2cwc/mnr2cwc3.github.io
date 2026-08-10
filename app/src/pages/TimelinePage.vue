<template>
  <div class="timeline-page">
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
  background: white;
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
}
</style>
