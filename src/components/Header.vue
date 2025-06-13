<script setup lang="ts">
import { scrollToSection } from '../utils/navigation';
</script>

<template>
  <nav class="header">
    <div class="header-group left">
      <a @click="scrollToSection('home')">Home</a>
      <a @click="scrollToSection('about')">About</a>
      <a @click="scrollToSection('services')">Services</a>
    </div>
    <div class="header-group right">
      <a @click="scrollToSection('contact')">Contact Us</a>
    </div>
  </nav>
</template>

<style scoped>
.header {
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 0 150px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header-group {
  display: flex;
  gap: 32px;
}

.header-group.right {
  gap: 0;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-family: sans-serif;
  transition: opacity 0.2s;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid transparent;
  transition: border-color, background-color, 0.2s ease;
  cursor: pointer;
}

a:hover {
  border-color: #fff;
}

@media (max-width: 768px) {
  .header {
    padding: 0;
    justify-content: center;
  }

  .header-group {
    gap: 5px;
  }

  .header-group a {
    padding: 5px 10px;
  }
}
</style>