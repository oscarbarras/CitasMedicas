<template>
  <div class="position-absolute top-0 end-0 m-3 d-flex justify-content-end">
    <router-link to="/inicio" class="me-2">
      <BtnHome />
    </router-link>
    <router-link to="/">
      <BotonLogOut />
    </router-link>
  </div>

  <Centro1 />
</template>

<script setup>
import BotonLogOut from '@/MisComponentes/BotonLogOut.vue';
import Centro1 from '@/MisComponentes/Centro1.vue';
import BtnHome from '@/MisComponentes/BtnHome.vue';
</script>