<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Header -->
    <header class="bg-primary text-white py-3">
      <div class="container text-center">
        <h1 class="m-0">MedCitas</h1>
      </div>
    </header>

  
    <Fondo/>

    
    <main class="flex-grow-1 d-flex flex-column">
      <RouterView />
    </main>

    
    <footer class="bg-white py-1">
      <PiePag />
    </footer>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Fondo from '@/MisComponentes/Fondo.vue';
import PiePag from './MisComponentes/PiePag.vue';
</script>

<style scoped>
@import url("assets/styles.scss");

</style>
