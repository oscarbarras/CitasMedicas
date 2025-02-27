<style scoped>
.button1 {
  outline: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 140px;
  height: 50px;
  border-radius: 0.5em;
  box-shadow: 0 0.625em 1em 0 rgba(30, 143, 255, 0.35);
  overflow: hidden;
  font-size: 14px;
  text-align: center;
  background-color: transparent;
}

.button1 div {
  transform: translateY(0px);
  width: 100%;
}

.button1,
.button1 div {
  transition: 0.6s cubic-bezier(.16,1,.3,1);
}

.button1 div span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0.75em 1.125em;
}

.button1 div:nth-child(1) {
  background-color: #1e90ff;
}

.button1 div:nth-child(2) {
  background-color: #21dc62;
}

.button1:hover {
  box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
}

.button1:hover div {
  transform: translateY(-50px);
}

.button1 p {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}

.button1:active {
  transform: scale(0.95);
}
</style>

<template>
  <button type="submit" class="button1">
    <div>
      <span>
        <p>Iniciar sesión</p> 
      </span>
    </div>
    <div>
      <span>
        <p>¡Gracias! :)</p>
      </span>
    </div>
  </button>
</template>
