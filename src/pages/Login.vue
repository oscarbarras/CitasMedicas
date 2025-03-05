<template>
    <div class="position-absolute top-0 end-0 m-3">
      <router-link to="/">
        <BotonLogOut />
      </router-link>
    </div>
  <div class="login-container d-flex justify-content-center align-items-center mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="bg-primary card p-4 shadow-lg">
            <h2 class="text-center mb-4 text-white">Iniciar Sesión</h2>
            
            <LoginComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginComponent from '@/components/LoginComponent.vue';
import BotonLogOut from '@/MisComponentes/BotonLogOut.vue';
</script>