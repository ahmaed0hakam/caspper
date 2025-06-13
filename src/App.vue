<script setup lang="ts">
import Header from './components/Header.vue';
import HomeSection from './components/sections/HomeSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import ServicesSection from './components/sections/ServicesSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import { onMounted, nextTick } from 'vue';
import { initAnimations } from './utils/animations';

onMounted(async () => {
  await nextTick();
  initAnimations();

});
</script>

<template>
  <div class="app-container">
    <Header />
    <HomeSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </div>
</template>