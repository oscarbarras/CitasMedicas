  <style scoped>
  .Opciones {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  padding: 20px;
  font-size: 2rem;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  }

  .up {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .down {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    margin-top: 5%;
  }

  .card1 {
    width: 190px;
    height: 190px;
    outline: none;
    border: none;
    background: white;
    border-radius: 90px 5px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.1s ease-in-out;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .card2 {
    width: 190px;
    height: 190px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 90px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .card3 {
    width: 190px;
    height: 190px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 5px 90px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .card4 {
    width: 190px;
    height: 190px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 90px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .card1:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #5adbff;
    box-shadow: #000000;
  }



  .card2:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03a9f4;
    
  }



  .card3:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: rgb(33, 47, 255);
    box-shadow: #000000;
  }

  .card4:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #4a8cff;
    box-shadow: #000000;
  }



  .card1,
  .card2,
  .card3,
  .card4 {
    box-shadow: 1px 1px 0px rgb(179, 175, 175), 2px 2px 0px rgb(179, 175, 175),
      3px 3px 0px rgb(179, 175, 175), 4px 4px 0px rgb(179, 175, 175),
      5px 5px 0px rgb(179, 175, 175);
  }


  
</style>

<template>
  <div class="Opciones">
    <div class="up">
    <RouterLink to="/centros" class="card1">
      <img src="../../public/centros.svg" alt="HospitalIcono" height="100px" width="100px" />
      <h2>Centros</h2>
    </RouterLink>

    <RouterLink to="/citas" class="card2">
      <img src="../../public/citas.svg" alt="CitaslIcono" height="100px" width="100px" />
      <h2>Citas</h2>
    </RouterLink>
    </div>
    <div class="down">
      <RouterLink to="/perfil" class="card3">
        <img src="../../public/perfil.svg" alt="PerfilIcono" height="100px" width="100px" />
        <h2>Perfil</h2>
      </RouterLink>
      <RouterLink to="/sintomas" class="card4">
      <img src="../../public/sintomas.svg" alt="SintomasIcono" height="100px" width="100px" />
      <h2>Sintomas</h2>
    </RouterLink>
    </div>
  </div>
</template>
