<template>
    <div class="position-absolute top-0 end-0 m-3">
      <router-link to="/">
        <BotonLogOut />
      </router-link>
    </div>

    <Centro1/>
</template>

<script setup>
import BotonLogOut from '@/MisComponentes/BotonLogOut.vue';
import Centro1 from '@/MisComponentes/Centro1.vue';

</script>