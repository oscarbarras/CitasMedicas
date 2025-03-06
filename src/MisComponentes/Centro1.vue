<style scoped>

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
    background-color: #ffffff;
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
  <div class="container mt-4">
    <h1 class="text-center my-4 w-50 rounded-pill">Centros</h1>

    <div class="container-md">
      <div class="row justify-content-center ">
        <div v-if="centers.length > 0" class="col-12 col-md-6 col-lg-3 mb-4 ">
          <div class="card">
            <div class="content">
              <div class="back">
                <div class="back-content ">
                  <img src="../../public/hospital.png" alt="HospitalIcono" height="100px" width="100px" />
                  <strong>{{ centers[0].name }}</strong>
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
                      {{ centers[0].name }}
                    </div>
                    <p class="card-footer">
                      {{ centers[0].address }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="centers.length > 1" class="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-end">
          <div class="card ">
            <div class="content ">
              <div class="back ">
                <div class="back-content ">
                  <img src="../../public/hospital.png" alt="HospitalIcono" height="100px" width="100px" />
                  <strong>{{ centers[1].name }}</strong>
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
                      {{ centers[1].name }}
                    </div>
                    <p class="card-footer">
                      {{ centers[1].address }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-4">
      <div class="col-12 col-md-6 mb-4">
        <div class="bg-primary  card text-white w-100" style="background-color: rgba(0, 123, 255, 0.7);" >
          <div class="card-header text-white text-center fs-4">
            <i class="bi bi-map"></i> Madrid Norte
          </div>
          <div class="card-body p-0">
            <iframe
              class="w-100 rounded-bottom h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2206.972195125787!2d-3.638523456917089!3d40.53545753334029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cf62cd81851%3A0xc0bd7cafb9f4677c!2sCentro%20M%C3%A9dico%20Sanitas%20Alcobendas!5e0!3m2!1ses!2ses!4v1741278168193!5m2!1ses!2ses"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 mb-4 ">
        <div class="card text-white bg-primary w-100" style="background-color: rgba(0, 0, 0, 0.6);">
          <div class="card-header text-white text-center fs-4">
            <i class="bi bi-map"></i> Madrid Sur
          </div>
          <div class="card-body p-0">
            <iframe
              class="w-100 rounded-bottom h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24325.009931203298!2d-3.862150274281664!3d40.350636537297135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418ff5851d2655%3A0x19f36494d075ba45!2sCentro%20Sanitario%20Sandoval%20Sur!5e0!3m2!1ses!2ses!4v1741278536494!5m2!1ses!2ses"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
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

onMounted(() => {
  fetchCenters();
});
</script>

