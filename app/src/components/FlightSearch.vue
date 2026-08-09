<template>
  <div class="flight-search">
    <p class="trip-summary">Round trip to Managua (MGA) · Nov 7 → Nov 15, 2026</p>
    <div class="search-form">
      <div class="input-group">
        <input
          v-model="origin"
          type="text"
          placeholder="e.g. DEN, JFK, LAX"
          maxlength="3"
          class="origin-input"
          :class="{ invalid: showError }"
          @keyup.enter="search"
        />
        <button class="search-btn" @click="search">Search Flights</button>
      </div>
      <p v-if="showError" class="error-message">
        Enter a 3-letter airport code for your departure city.
      </p>
      <p class="helper-text">
        Opens Skyscanner in a small popup window. Need your airport code? For
        example, Denver = DEN, New York (JFK) = JFK, Los Angeles = LAX.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const DESTINATION = 'mga'
const OUTBOUND_DATE = '261107' // Nov 7, 2026
const RETURN_DATE = '261115' // Nov 15, 2026
const CODE_PATTERN = /^[a-z]{3}$/i

const origin = ref('')
const showError = ref(false)

const search = () => {
  const trimmed = origin.value.trim()
  if (!CODE_PATTERN.test(trimmed)) {
    showError.value = true
    return
  }
  showError.value = false
  const url = `https://www.skyscanner.com/transport/flights/${trimmed.toLowerCase()}/${DESTINATION}/${OUTBOUND_DATE}/${RETURN_DATE}/`
  const popupFeatures = 'noopener,noreferrer,width=480,height=720,left=120,top=80,resizable=yes,scrollbars=yes'
  window.open(url, 'skyscannerSearch', popupFeatures)
}
</script>

<style scoped>
.flight-search {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
}

.trip-summary {
  margin: 0 0 1.25rem 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-primary);
}

.input-group {
  display: flex;
  gap: 0.75rem;
}

.origin-input {
  flex: 1;
  padding: 0.7rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  text-transform: uppercase;
}

.origin-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.origin-input.invalid {
  border-color: var(--color-accent);
}

.search-btn {
  padding: 0.7rem 1.5rem;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease;
}

.search-btn:hover {
  background: #d63d55;
}

.error-message {
  margin: 0.5rem 0 0 0;
  color: var(--color-accent);
  font-size: 0.85rem;
}

.helper-text {
  margin: 0.75rem 0 0 0;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .input-group {
    flex-direction: column;
  }

  .search-btn {
    width: 100%;
  }
}
</style>
