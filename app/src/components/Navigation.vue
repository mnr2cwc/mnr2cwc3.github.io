<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">
        🌴 Nicaragua Trip 2026
      </router-link>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            Timeline
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/san-juan-del-sur" class="nav-link" active-class="active">
            San Juan del Sur
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/lake-nicaragua" class="nav-link" active-class="active">
            Lake Nicaragua
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/leon" class="nav-link" active-class="active">
            Leon
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, var(--color-primary) 0%, #1a4d3e 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-logo {
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s ease;
}

.nav-logo:hover {
  opacity: 0.8;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0;
  flex-wrap: wrap;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: block;
  padding: 0.8rem 1.2rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease;
  border-bottom: 3px solid transparent;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  border-bottom-color: var(--color-secondary);
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 640px) {
  .nav-container {
    flex-direction: column;
    gap: 0;
  }

  .nav-logo {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .nav-menu {
    width: 100%;
    flex-direction: column;
    gap: 0;
  }

  .nav-link {
    width: 100%;
  }
}
</style>
