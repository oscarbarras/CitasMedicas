<template>
        <div class="position-absolute top-0 end-0 m-3">
      <router-link to="/">
        <BotonLogOut />
      </router-link>
    </div>
    <Opciones />

</template>

<script setup>
import BotonLogOut from '@/components/BotonLogOut.vue';
import Opciones from '@/components/Opciones.vue';
</script>