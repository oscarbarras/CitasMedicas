<template>
    <div class="container mt-4">
      <div class="position-absolute top-0 end-0 m-3 d-flex justify-content-end">
        <router-link to="/inicio" class="me-2">
          <BtnHome />
        </router-link>
        <router-link to="/">
          <BotonLogOut />
        </router-link>
      </div>
      <h1 class="mb-4" style="color: white;">Gestión de Citas Médicas</h1>
  
      <FullCalendar ref="calendar" :options="calendarOptions" />
  
      <form @submit.prevent="createAppointment" class="mb-4">
        <div class="mb-3">
          <label for="center" class="form-label">Centro Médico:</label>
          <select id="center" v-model="newAppointment.center" class="form-select">
            <option v-for="center in centers" :key="center.name" :value="center.name">{{ center.name }}</option>
          </select>
        </div>
  
        <div class="mb-3">
          <label for="date" class="form-label">Fecha:</label>
          <input type="date" id="date" v-model="newAppointment.date" class="form-control">
        </div>
  
        <div class="mb-3">
          <label for="hora" class="form-label">Hora:</label>
          <input type="time" id="hora" v-model="newAppointment.hora" class="form-control">
        </div>
  
        <div class="mb-3">
          <label for="doctor" class="form-label">Doctor:</label>
          <input type="text" id="doctor" v-model="newAppointment.doctor" class="form-control">
        </div>
  
        <button type="submit" class="btn btn-primary">Crear Cita</button>
      </form>
  
      <h2>Mis Citas</h2>
      <ul class="list-group">
        <li v-for="appointment in userAppointments" :key="appointment.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ appointment.fecha }} - {{ appointment.hora }} - {{ appointment.doctor }} - {{ appointment.paciente }}</span>
          <button @click="deleteAppointment(appointment.id)" class="btn btn-danger btn-sm">Cancelar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import BtnHome from '@/MisComponentes/BtnHome.vue';
  import BotonLogOut from '@/MisComponentes/BotonLogOut.vue';
  import { ref, onMounted, reactive } from 'vue';
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  
  const calendar = ref(null);
  const userAppointments = ref([]);
  const newAppointment = ref({
    center: '',
    date: '',
    hora: '',
    doctor: '',
  });
  const centers = ref([]);
  const loading = ref(false);
  const errorMessage = ref("");
  const calendarOptions = reactive({
    plugins: [dayGridPlugin, timeGridPlugin],
    initialView: 'dayGridMonth',
    events: [],
  });
  
  // Obtener centros médicos al montar el componente
  onMounted(() => {
    fetchUserAppointments();
    fetchCenters();
  });
  
  // Función para obtener los centros médicos
  const fetchCenters = async () => {
    loading.value = true;
    errorMessage.value = "";
    try {
      const storedToken = localStorage.getItem('authToken');
      if (!storedToken) {
        throw new Error("Token no encontrado");
      }
  
      const response = await fetch('http://127.0.0.1:5000/centers', {
        headers: {
          'Authorization': "Bearer " + storedToken,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Error al obtener centros");
      centers.value = await response.json();
    } catch (error) {
      errorMessage.value = error.message;
    } finally {
      loading.value = false;
    }
  };
  
  // Función para obtener las citas del usuario
  const fetchUserAppointments = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');
      if (!storedToken) {
        throw new Error("Token no encontrado");
      }
  
      const response = await fetch('http://127.0.0.1:5000/dates', { // Usamos /dates
        headers: {
          'Authorization': "Bearer " + storedToken,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        userAppointments.value = await response.json();
        updateCalendarEvents();
      } else {
        console.error('Error al obtener citas del usuario:', response.status);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
  
  // Función para crear una nueva cita
  const createAppointment = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');
      if (!storedToken) {
        throw new Error("Token no encontrado");
      }
  
      // Formatear la fecha al formato esperado por la API
      const formattedDate = newAppointment.value.date.split("-").reverse().join("/");
  
      const requestBody = {
        center: newAppointment.value.center,
        date: formattedDate, // Envía la fecha formateada
        hora: newAppointment.value.hora, // Envía la hora por separado
        doctor: newAppointment.value.doctor,
      };
  
      console.log('Datos enviados para crear cita:', requestBody); // Agrega esta línea
  
      const response = await fetch('http://127.0.0.1:5000/date/create', {
        method: 'POST',
        headers: {
          'Authorization': "Bearer " + storedToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        fetchUserAppointments();
        newAppointment.value = { center: '', date: '', hora: '', doctor: '' }; // Limpiar formulario
      } else {
        const errorData = await response.json();
        console.error('Error al crear cita:', response.status, errorData);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
  
  // Función para eliminar una cita
  const deleteAppointment = async (id) => {
    try {
      const storedToken = localStorage.getItem('authToken');
      if (!storedToken) {
        throw new Error("Token no encontrado");
      }
  
      const response = await fetch(`http://127.0.0.1:5000/date/delete?id=${id}`, {
        method: 'POST',
        headers: {
          'Authorization': "Bearer " + storedToken,
        },
      });
      if (response.ok) {
        fetchUserAppointments();
      } else {
        console.error('Error al eliminar cita:', response.status);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
  
  // Función para actualizar los eventos del calendario con las citas del usuario
  const updateCalendarEvents = () => {
    calendarOptions.events = userAppointments.value.map((appointment) => ({
      title: appointment.doctor,
      start: `<span class="math-inline">\{appointment\.fecha\.split\("\-"\)\.reverse\(\)\.join\("/"\)\}T</span>{appointment.hora}`,
    }));
  };
  </script>
  
  <style scoped>
  /* Estilos para el calendario */
  .fc {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
  }
  </style>