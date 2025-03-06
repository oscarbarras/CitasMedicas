<template>
      <div class="position-absolute top-0 end-0 m-3">
      <router-link to="/">
        <BotonLogOut />
      </router-link>
    </div>
  <div class="registro-container d-flex justify-content-center align-items-center mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-5">
          <div class="bg-primary card p-4 shadow-lg">
            <h2 class="text-center mb-4 text-white">Registro de Usuario</h2>
  
            <RegistroComponent />
  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import RegistroComponent from '@/components/RegistroComponent.vue'; 
  import BotonLogOut from '@/MisComponentes/BotonLogOut.vue';
  </script>
  
