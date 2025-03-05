<template>
  <div class="card p-4 mb-3 bg-light bg-opacity-50 text-black shadow">
    <div class="detalles">
      <form @submit.prevent="submitForm">
        <div class="mb-3 row">
          <label for="name" class="col-sm-3 col-form-label text-end">Nombre</label>
          <div class="col-sm-9">
            <input
              type="text"
              id="name"
              v-model="userData.name"
              class="form-control"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="lastname" class="col-sm-3 col-form-label text-end">Apellido</label>
          <div class="col-sm-9">
            <input
              type="text"
              id="lastname"
              v-model="userData.lastname"
              class="form-control"
              placeholder="Ingresa tu apellido"
              required
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="email" class="col-sm-3 col-form-label text-end">Email</label>
          <div class="col-sm-9">
            <input
              type="email"
              id="email"
              v-model="userData.email"
              class="form-control"
              placeholder="Ingresa tu email"
              required
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="phone" class="col-sm-3 col-form-label text-end">Teléfono</label>
          <div class="col-sm-9">
            <input
              type="tel"
              id="phone"
              v-model="userData.phone"
              class="form-control"
              placeholder="Ingresa tu teléfono"
              required
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="username" class="col-sm-3 col-form-label text-end">Usuario</label>
          <div class="col-sm-9">
            <input
              type="text"
              id="username"
              v-model="userData.username"
              class="form-control"
              placeholder="Ingresa tu nombre de usuario"
              required
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="date" class="col-sm-3 col-form-label text-end">Fecha</label>
          <div class="col-sm-9">
            <input
              type="date"
              id="date"
              v-model="userData.date"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="password" class="col-sm-3 col-form-label text-end">Contraseña</label>
          <div class="col-sm-9">
            <input
              type="password"
              id="password"
              v-model="userData.password"
              class="form-control"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <Boton2 />
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import Boton2 from './Boton2.vue';

const userData = ref({
  name: '',
  lastname: '',
  email: '',
  phone: '',
  username: '',
  date: '',  // La fecha se mantiene en formato yyyy-mm-dd por defecto
  password: ''  // Contraseña
});

const submitForm = async () => {
  try {
    // Convertir la fecha en formato dd/mm/yyyy
    const formattedDate = userData.value.date.split("-").reverse().join("/");

    // Actualizar el valor de la fecha formateada en userData
    userData.value.date = formattedDate;

    // Hacer el POST request utilizando fetch
    const response = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Aseguramos que el cuerpo se envíe como JSON
      },
      body: JSON.stringify(userData.value), // Convertimos los datos a JSON
    });

    // Verificar si la respuesta fue exitosa
    if (response.ok) {
      const data = await response.json();
      console.log('Datos del usuario guardados:', data);
      alert('Registro exitoso');
    } else {
      throw new Error('Error en la respuesta del servidor');
    }
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    alert('Hubo un problema al guardar los datos. Intenta de nuevo.');
  }
};
</script>

<style scoped>
/* Añade tus estilos si es necesario */
</style>
