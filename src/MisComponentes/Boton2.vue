<style scoped>
.button2 {
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

.button2 div {
  transform: translateY(0px);
  width: 100%;
}

.button2,
.button2 div {
  transition: 0.6s cubic-bezier(.16,1,.3,1);
}

.button2 div span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0.75em 1.125em;
}

.button2 div:nth-child(1) {
  background-color: #1e90ff;
}

.button2 div:nth-child(2) {
  background-color: #21dc62;
}

.button2:hover {
  box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
}

.button2:hover div {
  transform: translateY(-50px);
}

.button2 p {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}

.button2:active {
  transform: scale(0.95);
}
</style>

<template>
  <button type="submit" class="button2">
    <div>
      <span>
        <p>Registrarse</p> 
      </span>
    </div>
    <div>
      <span>
        <p>Bienvenido!</p>
      </span>
    </div>
  </button>
</template>
