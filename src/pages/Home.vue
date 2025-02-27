<template>
 
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <!-- Card azul con fondo y texto blanco -->
      <div class="card bg-primary text-white p-5 w-50 w-md-50">
        <div class="card-body text-center">
          <h1 class="display-4 ">Bienvenido a</h1>
          <h1 class="display-4  fa-stethoscope">MedCitas</h1>
          <p class="lead">Gestiona tus citas médicas de forma rápida y sencilla.</p>
          <div class="mt-4">
            <img src="../../public/logo-removebg-preview.png" alt="Ícono Médico" class="img-fluid" width="350" height="150">
          </div>
          <div class="mt-4">
            <RouterLink to="/registro" class="btn btn-light btn-lg m-2">Registrarse</RouterLink>

            <RouterLink to="/login" class="btn btn-light btn-lg m-2">Iniciar Sesión</RouterLink>
          </div>

        </div>
      </div>
    </div>
 
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
