<template>
    <div class="card p-4 bg-light bg-opacity-50 text-black shadow">
      <form @submit.prevent="submitLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Nombre de Usuario</label>
          <input type="text" id="username" v-model="loginData.username" class="form-control" placeholder="Ingresa tu usuario" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" id="password" v-model="loginData.password" class="form-control" placeholder="Ingresa tu contraseña" required />
        </div>
        <div class="d-flex justify-content-center">
          <!-- <button type="submit" class="btn btn-primary w-50 bg-white text-black ">Iniciar Sesión</button> -->
           
            <Boton1 />

        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Boton1 from '../MisComponentes/Boton1.vue';
  
  const router = useRouter();

  const loginData = ref({
    username: '',
    password: ''
  });
  
  const submitLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData.value)
      });
      if (response.ok) {
        const data = await response.json();
        //console.log('Inicio de sesión exitoso:', data);
        //alert('Inicio de sesión exitoso');
        router.push('/inicio');
      } else {
        throw new Error('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Error en el inicio de sesión. Intenta de nuevo.');
    }
  };
  </script>
  