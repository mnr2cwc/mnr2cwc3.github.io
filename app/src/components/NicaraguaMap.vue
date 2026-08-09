<template>
  <div class="map-wrapper">
    <div class="day-pills">
      <button
        v-for="day in 9"
        :key="day"
        class="day-pill"
        :class="{ active: activeDay === day }"
        @click="activeDay = day"
      >
        {{ day }}
      </button>
    </div>
    <div ref="mapEl" class="map-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { baseLocations, pointsOfInterest } from '../data/mapData.js'

const mapEl = ref(null)
const activeDay = ref(1)
let map = null
const markers = {}

const activeLocation = computed(() => {
  return baseLocations.find(loc => loc.days.includes(activeDay.value))
})

const createDivIcon = (color, size = 'base') => {
  const sizeClass = size === 'active' ? 'pin-active' : 'pin-base'
  return L.divIcon({
    html: `<div class="map-pin ${sizeClass}" style="background-color: ${color};"></div>`,
    className: 'div-icon',
    iconSize: [size === 'active' ? 40 : 28, size === 'active' ? 40 : 28],
    iconAnchor: [size === 'active' ? 20 : 14, size === 'active' ? 40 : 28],
  })
}

onMounted(() => {
  if (!mapEl.value) return

  map = L.map(mapEl.value).setView([11.9, -85.9], 8)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 16,
  }).addTo(map)

  // Add base location markers
  baseLocations.forEach(loc => {
    const marker = L.marker(loc.coords, {
      icon: createDivIcon('var(--color-primary)'),
    }).addTo(map)
    marker.bindPopup(`<strong>${loc.name}</strong><br>Days ${loc.days.join(', ')}`)
    markers[loc.slug] = marker
  })

  // Add points of interest markers
  pointsOfInterest.forEach(poi => {
    const marker = L.marker(poi.coords, {
      icon: createDivIcon('var(--color-secondary)'),
    }).addTo(map)
    marker.bindPopup(`<strong>${poi.name}</strong><br>${poi.description}`)
  })

  // Add polyline connecting base locations in order
  const routeCoords = baseLocations.map(loc => loc.coords)
  L.polyline(routeCoords, {
    color: 'var(--color-primary)',
    weight: 3,
    opacity: 0.6,
    dashArray: '5, 5',
  }).addTo(map)

  // Fit all markers in view
  const allCoords = [
    ...baseLocations.map(l => l.coords),
    ...pointsOfInterest.map(p => p.coords),
  ]
  const bounds = L.latLngBounds(allCoords)
  map.fitBounds(bounds, { padding: [50, 50] })
})

watch(activeDay, () => {
  if (!map || !activeLocation.value) return

  // Update marker styles
  baseLocations.forEach(loc => {
    const marker = markers[loc.slug]
    if (marker) {
      const isActive = loc.slug === activeLocation.value.slug
      marker.setIcon(
        createDivIcon(
          isActive ? 'var(--color-accent)' : 'var(--color-primary)',
          isActive ? 'active' : 'base'
        )
      )
    }
  })

  // Fly to active location
  map.flyTo(activeLocation.value.coords, 9, { duration: 0.75 })
})

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped>
.map-wrapper {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
}

.day-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
  background: #fafaf7;
  border-bottom: 1px solid var(--color-border);
  justify-content: center;
}

.day-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--color-border);
  background: white;
  color: var(--color-text);
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.day-pill:hover {
  border-color: var(--color-primary);
  background: #f0f0f0;
}

.day-pill.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.map-container {
  height: 420px;
  width: 100%;
}

:deep(.map-pin) {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.7rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.2s ease;
}

:deep(.pin-active) {
  box-shadow: 0 0 0 4px rgba(232, 83, 106, 0.3), 0 2px 8px rgba(0, 0, 0, 0.25);
}

:deep(.leaflet-popup-content) {
  font-size: 0.9rem;
  color: var(--color-text);
}

:deep(.leaflet-popup-content strong) {
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .map-container {
    height: 300px;
  }

  .day-pills {
    gap: 0.25rem;
    padding: 0.75rem;
  }

  .day-pill {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
}
</style>
