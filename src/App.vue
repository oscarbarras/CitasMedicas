<template>
  <Fondo/>
  <main >
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Fondo from '@/components/Fondo.vue';
</script>

<style scoped>
@import url("assets/styles.scss");
</style>
