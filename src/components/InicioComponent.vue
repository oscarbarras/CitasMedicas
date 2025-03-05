<template>
    <div class="position-absolute top-0 end-0 m-3">
      <router-link to="/">
        <BotonLogOut />
      </router-link>
    </div>
    <div class="d-flex justify-content-center align-items-start ">
    <Opciones />
  </div>
</template>

<script setup>
    import BotonLogOut from '@/MisComponentes/BotonLogOut.vue';
    import Opciones from '@/MisComponentes/Opciones.vue';
</script>