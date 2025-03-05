<style scoped>
.centers-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-wrap: wrap; 
  gap: 200px; 
  padding: 20px; 
  box-sizing: border-box; 
  width: 750px;
  margin-left: 30.5%;
}
  
  .card {
    overflow: visible;
    width: 250px;
    height: 354px;
  }

  
  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #ececff94;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    /* background: linear-gradient(90deg, transparent, #2979bb, #ff9966, #ff9966, #1f64be, transparent); */
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #125cb1;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 21px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: white;
    margin-top: 5px;
    font-size:15px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #c98014;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #100e8f;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  h1{
    color: rgb(0, 0, 0);
    text-align: center;
    margin-top: 20px;
    background-color: rgb(255, 255, 255);
    width: 700px;
    margin-left: auto; 
    margin-right: auto;
    border-color: black;
  }

 

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  
</style>


<template>
    <div>
        <h1 class="text-center my-4">Centros</h1>
    </div>

    <div class="centers-container ">
      <div v-for="center in centers" :key="center.id" class="center-card">
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img src="../../public/centros.svg" alt="HospitalIcono" height="100px" width="100px" />
                <strong>{{ center.name }}</strong>
              </div>
            </div>
            <div class="front">
              <div class="img">
                <div class="circle"></div>
                <div class="circle" id="right"></div>
                <div class="circle" id="bottom"></div>
              </div>
              <div class="front-content">
                <small class="badge">Centro</small>
                <div class="description">
                  <div class="title">
                    {{center.name }}
                  </div>
                  <p class="card-footer">
                    {{ center.address }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script setup>
import { ref, onMounted } from 'vue';

const centers = ref([]);
const loading = ref(false);
const errorMessage = ref("");

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc0MTIwNjIwNywianRpIjoiOGJhZjc0NGEtNzUwYi00YzFjLWE1MTktZjdjNTYxY2IzZmVjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Im8iLCJuYmYiOjE3NDEyMDYyMDcsImNzcmYiOiJhMjI0OTQwZS0yZDBlLTRjZTctODQ1My1mNmMxMjVmNmI3YjAiLCJleHAiOjE3NDEyMDcxMDd9.zSSlT5ldeTY4kp0zlj8qQoTsFbaFtcceazKzwMFtIVY';

const fetchCenters = async () => {
  loading.value = true;
  errorMessage.value = "";
  try {
    const response = await fetch('http://127.0.0.1:5000/centers', {
      headers: {
        'Authorization': "Bearer " + token,
        "Content-Type": "application/json",
        }
    });
    if (!response.ok) throw new Error("Error al obtener centros");
    centers.value = await response.json();
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchCenters();
});
</script>
