<template>
  <header class="bg-primary text-white py-3">
    <div class="container text-center">
    <h1 class="m-0">MedCitas</h1>
  </div>
  </header>
  <Fondo/>
  <main >
    <RouterView />
  </main>
  <footer class="bg-white mt-auto py-1">
  <PiePag/>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Fondo from '@/components/Fondo.vue';
import PiePag from './components/PiePag.vue';
</script>

<style scoped>
@import url("assets/styles.scss");
</style>
